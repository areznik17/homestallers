// Prices live on the server so nobody can change them in the browser.
export const PRICES={
  tv:{name:"TV mount & setup",price:100,qty:true},
  tvclean:{name:"TV mount + clean wires",price:150,qty:true},
  tech:{name:"Tech help (per hour)",price:80,qty:true},
  smart:{name:"Smart home setup",price:100},
  assembly:{name:"Furniture assembly (per item)",price:80,qty:true},
  hang:{name:"Shelves, mirrors & art (per item)",price:90,qty:true},
  blinds:{name:"Blinds & curtain rods (per window)",price:90,qty:true},
  lights:{name:"Holiday light hanging",price:150},
  moving:{name:"Moving help (2 hrs)",price:160},
  handyman:{name:"Handyman (per hour)",price:80,qty:true},
  pressure:{name:"Pressure washing (2 hrs)",price:160},
  homesetup:{name:"Home setup bundle (1 TV with hidden wires, 2 furniture items, 1 handyman hour)",price:299},
  movein:{name:"Move-in bundle (2 TVs, 3 furniture items, 2 handyman hours)",price:499}
};
const NEAR="32099 32202 32203 32204 32205 32206 32207 32208 32209 32210 32211 32212 32216 32217 32244 32246 32254 32256 32257 32277 32223".split(" ");
const FAR="32218 32219 32220 32221 32222 32224 32225 32226 32233 32250 32266 32258 32073 32065 32259 32081 32234 32082 32092 32003 32043 32068 32097 32011 32095 32084 32080 32086 32033 32046".split(" ");
export function travelFee(zip){return NEAR.includes(zip)?0:FAR.includes(zip)?35:null}
export const env=k=>Netlify.env.get(k);
// 3% service fee on every online booking and payment (not on tips)
export const FEE_RATE=0.03;
export const serviceFee=cents=>Math.round(cents*FEE_RATE);
export async function stripe(path,params,method="POST"){
  const r=await fetch("https://api.stripe.com/v1/"+path,{method,headers:{Authorization:"Bearer "+env("STRIPE_SECRET_KEY"),"Content-Type":"application/x-www-form-urlencoded"},body:method==="GET"?undefined:new URLSearchParams(params).toString()});
  const j=await r.json();if(!r.ok)throw new Error(j.error?.message||"Stripe error");return j;
}
export async function sendEmail({to,subject,html,replyTo}){
  if(!env("RESEND_API_KEY")){console.log("RESEND_API_KEY not set, skipping email:",subject);return}
  const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+env("RESEND_API_KEY"),"Content-Type":"application/json"},
    body:JSON.stringify({from:env("EMAIL_FROM")||"Homestallers <bookings@homestallers.com>",to:[to],subject,html,reply_to:replyTo||env("OWNER_EMAIL")})});
  if(!r.ok)console.error("email failed",r.status,await r.text());
}
export const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
export const clip=(s,n=480)=>String(s??"").slice(0,n);
export function wrap(title,inner){return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#12263a"><div style="background:#0f2235;color:#fff;padding:18px 22px;border-radius:12px 12px 0 0;font-size:20px;font-weight:bold">Homestallers</div><div style="border:1px solid #e2e8ef;border-top:0;padding:22px;border-radius:0 0 12px 12px"><h2 style="margin:0 0 12px;font-size:20px">${title}</h2>${inner}<p style="color:#566476;font-size:13px;margin-top:22px">Homestallers · Jacksonville, FL · (631) 304-4809 · homestallers@gmail.com</p></div></div>`}
export const rows=list=>`<table style="width:100%;border-collapse:collapse;font-size:15px">${list.filter(r=>r[1]).map(r=>`<tr><td style="padding:7px 0;color:#566476;border-bottom:1px solid #e2e8ef;vertical-align:top">${esc(r[0])}</td><td style="padding:7px 0;text-align:right;border-bottom:1px solid #e2e8ef">${esc(r[1])}</td></tr>`).join("")}</table>`;
