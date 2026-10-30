import {stripe,env,clip,serviceFee} from "../lib/catalog.mjs";
// Tips, extra time and parts after the job.
export default async (req)=>{
  if(req.method!=="POST")return new Response("Method not allowed",{status:405});
  let b;try{b=await req.json()}catch{return Response.json({error:"Bad request"},{status:400})}
  const amt=Math.round(parseFloat(b.amount)*100);const kinds={tip:"Tip for your pro",extra:"Extra time",parts:"Parts and materials",other:"Payment"};
  const label=kinds[b.kind]||kinds.other;
  if(!(amt>=500&&amt<=250000))return Response.json({error:"Enter an amount between $5 and $2,500."},{status:400});
  if(!String(b.email||"").includes("@")||!String(b.name||"").trim())return Response.json({error:"Add your name and email."},{status:400});
  const site=env("SITE_URL")||new URL(req.url).origin;
  const sf=b.kind==="tip"?0:serviceFee(amt);
  const extra=sf?{"line_items[1][price_data][currency]":"usd","line_items[1][price_data][product_data][name]":"Service fee (3%)","line_items[1][price_data][unit_amount]":String(sf),"line_items[1][quantity]":"1","metadata[service_fee]":(sf/100).toFixed(2)}:{};
  try{const s=await stripe("checkout/sessions",{...extra,mode:"payment",customer_email:b.email,success_url:site+"/booked/?session_id={CHECKOUT_SESSION_ID}",cancel_url:site+"/pay/",
    "line_items[0][price_data][currency]":"usd","line_items[0][price_data][product_data][name]":"Homestallers: "+label,"line_items[0][price_data][unit_amount]":String(amt),"line_items[0][quantity]":"1",
    "metadata[kind]":b.kind||"other","metadata[service]":label,"metadata[name]":clip(b.name,100),"metadata[email]":clip(b.email,120),"metadata[note]":clip(b.note)});
    return Response.json({url:s.url})}
  catch(e){console.error(e);return Response.json({error:"Payment couldn't start. Please try again."},{status:502})}
};
export const config={path:"/api/pay"};
