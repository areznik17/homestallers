import {env,sendEmail,wrap,rows,esc} from "../lib/catalog.mjs";
function calLink(m,forOwner){
  if(!m.iso||!m.time)return "";
  const mt=/(\d+):(\d+)\s*(AM|PM)/i.exec(m.time);if(!mt)return "";
  let h=+mt[1]%12+(mt[3].toUpperCase()==="PM"?12:0);const min=+mt[2];const dur=Math.round(parseFloat(m.hours||1)*60);
  const d=m.iso.replace(/-/g,"");const pad=n=>String(n).padStart(2,"0");
  const endMin=h*60+min+dur;const start=`${d}T${pad(h)}${pad(min)}00`,end=`${d}T${pad(Math.floor(endMin/60)%24)}${pad(endMin%60)}00`;
  const p=new URLSearchParams({action:"TEMPLATE",text:forOwner?`${m.service} for ${m.name}`:`Homestallers: ${m.service}`,dates:`${start}/${end}`,ctz:"America/New_York",location:m.address||"",
    details:forOwner?`Phone: ${m.phone}\nEmail: ${m.email}\nGate code: ${m.gate_code||"none"}\nDetails: ${m.answers||""}\nNote: ${m.note||""}`:`Questions? Call or text (631) 304-4809.`});
  return `<p style="margin-top:16px"><a href="https://calendar.google.com/calendar/render?${p.toString()}" style="display:inline-block;background:#d9661a;color:#fff;padding:12px 18px;border-radius:10px;text-decoration:none;font-weight:bold">Add to Google Calendar</a></p>`;
}
async function verify(raw,header,secret){
  const parts=Object.fromEntries(String(header||"").split(",").map(x=>x.split("=")));
  if(!parts.t||!parts.v1)return false;
  if(Math.abs(Date.now()/1000-Number(parts.t))>600)return false;
  const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  const sig=await crypto.subtle.sign("HMAC",key,new TextEncoder().encode(parts.t+"."+raw));
  const hex=[...new Uint8Array(sig)].map(b=>b.toString(16).padStart(2,"0")).join("");
  const sigs=String(header).split(",").filter(x=>x.startsWith("v1=")).map(x=>x.slice(3));
  return sigs.includes(hex);
}
export default async (req)=>{
  const raw=await req.text();
  if(!await verify(raw,req.headers.get("stripe-signature"),env("STRIPE_WEBHOOK_SECRET")))return new Response("bad signature",{status:400});
  const ev=JSON.parse(raw);
  if(ev.type!=="checkout.session.completed")return new Response("ok");
  const s=ev.data.object,m=s.metadata||{},total="$"+(s.amount_total/100).toFixed(2),email=s.customer_details?.email||m.email,owner=env("OWNER_EMAIL");
  if(m.kind==="booking"){
    const list=[["Service",m.service],["Date",m.date],["Time",m.time],["Address",m.address],["Paid",total],["Name",m.name],["Phone",m.phone],["Email",email],["Own or rent",m.own_rent],["Gate code",m.gate_code],["Job details",m.answers],["Note",m.note],["Also wants (coming soon)",m.also_want],["Travel fee","$"+(m.travel_fee||0)],["Service fee (3%)",m.service_fee?"$"+m.service_fee:""],["Agreement",m.agreed]];
    await sendEmail({to:owner,subject:`New booking: ${m.service}, ${m.date} ${m.time}`,replyTo:email,html:wrap("New paid booking",rows(list)+`<p style="margin-top:14px">Text ${esc(m.name)} at <b>${esc(m.phone)}</b> to confirm.</p>`+calLink(m,true))});
    await sendEmail({to:email,subject:`You're booked with Homestallers: ${m.date} at ${m.time}`,html:wrap(`Thanks, ${esc((m.name||"").split(" ")[0])}! You're booked.`,
      `<p>Here are your details:</p>`+rows([["Service",m.service],["Date",m.date],["Time",m.time],["Address",m.address],["Paid",total]])+
      `<p style="margin-top:14px">We'll text you the day before to confirm. If the job needs more time than what's included, we'll ask first. Extra time is $80 an hour.</p><p>Need to change something? Reply to this email or call or text (631) 304-4809. Free cancellation up to 24 hours before your visit.</p><p>Homestallers</p>`+calLink(m,false))});
  }else{
    await sendEmail({to:owner,subject:`Payment received: ${m.service} ${total} from ${m.name}`,replyTo:email,html:wrap("Payment received",rows([["Type",m.service],["Amount",total],["From",m.name],["Email",email],["Note",m.note]]))});
    await sendEmail({to:email,subject:`Thanks! ${total} received by Homestallers`,html:wrap("Payment received",`<p>Thanks, ${esc((m.name||"").split(" ")[0])}. We received ${total} for ${esc(m.service)}.</p><p>Homestallers</p>`+calLink(m,false))});
  }
  return new Response("ok");
};
export const config={path:"/api/stripe-webhook"};
