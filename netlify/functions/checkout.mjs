import {PRICES,travelFee,stripe,env,clip,serviceFee} from "../lib/catalog.mjs";
export default async (req)=>{
  if(req.method!=="POST")return new Response("Method not allowed",{status:405});
  let b;try{b=await req.json()}catch{return Response.json({error:"Bad request"},{status:400})}
  const pk=PRICES[b.pkg];if(!pk)return Response.json({error:"Unknown service"},{status:400});
  const qty=pk.qty?Math.min(10,Math.max(1,parseInt(b.qty)||1)):1;
  const zip=String(b.zip||"").trim();const fee=travelFee(zip);
  if(fee===null)return Response.json({error:"That ZIP is outside our service area. Please call or text (631) 304-4809."},{status:400});
  for(const k of ["name","phone","email","address","date","time"])if(!String(b[k]||"").trim())return Response.json({error:"Missing "+k},{status:400});
  if(!b.agreed)return Response.json({error:"Please accept the service agreement."},{status:400});
  const site=env("SITE_URL")||new URL(req.url).origin;
  const p={mode:"payment","customer_email":b.email,
    "success_url":site+"/booked/?session_id={CHECKOUT_SESSION_ID}","cancel_url":site+"/book/?svc="+b.pkg+"&canceled=1",
    "line_items[0][price_data][currency]":"usd","line_items[0][price_data][product_data][name]":pk.name,"line_items[0][price_data][unit_amount]":String(pk.price*100),"line_items[0][quantity]":String(qty),
    "payment_intent_data[description]":`Homestallers: ${pk.name} x${qty}, ${clip(b.date,20)} ${clip(b.time,12)}`,
    "metadata[kind]":"booking","metadata[pkg]":b.pkg,"metadata[service]":pk.name+(qty>1?" x"+qty:""),"metadata[qty]":String(qty),
    "metadata[date]":clip(b.date,20),"metadata[iso]":/^\d{4}-\d{2}-\d{2}$/.test(b.iso||"")?b.iso:"","metadata[hours]":String(Math.min(10,Math.max(1,parseFloat(b.hours)||1))),"metadata[time]":clip(b.time,20),"metadata[name]":clip(b.name,100),"metadata[phone]":clip(b.phone,40),"metadata[email]":clip(b.email,120),
    "metadata[address]":clip(b.address,300),"metadata[zip]":zip,"metadata[own_rent]":clip(b.ownRent,10),"metadata[gate_code]":clip(b.code,60),
    "metadata[answers]":clip(b.answers),"metadata[note]":clip(b.note),"metadata[also_want]":clip(b.alsoWant),"metadata[agreed]":clip(b.agreed,60),"metadata[travel_fee]":String(fee)};
  if(fee>0){p["line_items[1][price_data][currency]"]="usd";p["line_items[1][price_data][product_data][name]"]="Travel fee (11 to 30 miles)";p["line_items[1][price_data][unit_amount]"]=String(fee*100);p["line_items[1][quantity]"]="1"}
  const sub=pk.price*100*qty+fee*100;const sf=serviceFee(sub);const n=fee>0?2:1;
  p[`line_items[${n}][price_data][currency]`]="usd";p[`line_items[${n}][price_data][product_data][name]`]="Service fee (3%)";p[`line_items[${n}][price_data][unit_amount]`]=String(sf);p[`line_items[${n}][quantity]`]="1";
  p["metadata[service_fee]"]=(sf/100).toFixed(2);
  try{const s=await stripe("checkout/sessions",p);return Response.json({url:s.url})}
  catch(e){console.error(e);return Response.json({error:"Payment couldn't start. Please try again or call (631) 304-4809."},{status:502})}
};
export const config={path:"/api/checkout"};
