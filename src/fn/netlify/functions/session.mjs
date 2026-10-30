import {stripe} from "../lib/catalog.mjs";
// Lets the thank-you page show what was paid.
export default async (req)=>{
  const id=new URL(req.url).searchParams.get("id")||"";
  if(!/^cs_[A-Za-z0-9_]+$/.test(id))return Response.json({error:"bad id"},{status:400});
  try{const s=await stripe("checkout/sessions/"+id,{},"GET");const m=s.metadata||{};
    return Response.json({paid:s.payment_status==="paid",total:s.amount_total/100,kind:m.kind,service:m.service,date:m.date,time:m.time,address:m.address,first:(m.name||"").split(" ")[0],email:s.customer_details?.email||m.email})}
  catch(e){return Response.json({error:"not found"},{status:404})}
};
export const config={path:"/api/session"};
