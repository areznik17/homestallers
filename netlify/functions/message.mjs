import {env,sendEmail,wrap,rows,clip} from "../lib/catalog.mjs";
// Contact form and the coming-soon interest list.
export default async (req)=>{
  if(req.method!=="POST")return new Response("Method not allowed",{status:405});
  let b;try{b=await req.json()}catch{return Response.json({error:"Bad request"},{status:400})}
  if(b.website)return Response.json({ok:true});// spam trap
  if(!String(b.name||"").trim()||!String(b.reach||"").trim())return Response.json({error:"Add your name and a way to reach you."},{status:400});
  const interest=b.type==="interest";
  await sendEmail({to:env("OWNER_EMAIL"),replyTo:String(b.reach).includes("@")?b.reach:undefined,
    subject:interest?`Coming-soon interest: ${clip(b.interest,80)}`:`New message: ${clip(b.topic,60)} from ${clip(b.name,60)}`,
    html:wrap(interest?"Someone wants a licensed service":"New message from the website",rows([["Name",clip(b.name,100)],["Reach them at",clip(b.reach,120)],["ZIP",clip(b.zip,10)],["Topic",clip(b.topic,80)],["Wants",clip(b.interest)],["Message",clip(b.message,2000)]]))});
  return Response.json({ok:true});
};
export const config={path:"/api/message"};
