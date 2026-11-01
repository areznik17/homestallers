const I={
 ev:'<path d="M7 3h7a2 2 0 0 1 2 2v15H5V5a2 2 0 0 1 2-2Z"/><path d="M3 20h15M16 9h2a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V8l-2-2"/><path d="M11 7l-2.5 4h3L9 15"/>',
 outlet:'<rect x="4" y="3" width="16" height="18" rx="4"/><path d="M9.5 8v3M14.5 8v3"/><path d="M10 15.5a2 2 0 0 1 4 0V17h-4Z"/>',
 fan:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7s2 4-4 7ZM14 12c4 0 7 1 7 4s-4 2-7-4ZM12 14c0 4-1 7-4 7s-2-4 4-7ZM10 12c-4 0-7-1-7-4s4-2 7 4Z"/>',
 bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>',
 outdoor:'<path d="M9 3h6l1 5H8Z"/><path d="M8 8h8v4a4 4 0 0 1-8 0Z"/><path d="M12 16v5M4 13l-2 1M20 13l2 1"/>',
 doorbell:'<rect x="7" y="2" width="10" height="20" rx="5"/><circle cx="12" cy="8" r="2"/><circle cx="12" cy="16" r="1.5"/>',
 thermo:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
 landscape:'<path d="M12 21V10"/><path d="M12 10c-3 0-6-2-6-6 3 0 6 2 6 6Zm0 0c3 0 6-2 6-6-3 0-6 2-6 6Z"/><path d="M5 21h14"/>',
 tv:'<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
 smart:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
 sofa:'<path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"/><path d="M2 12a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2Z"/><path d="M5 17v2M19 17v2"/>',
 box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4Z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
 wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4Z"/>',
 frame:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="m4 16 5-5 4 4 2-2 5 5"/><circle cx="15" cy="9" r="1.5"/>',
 blinds:'<path d="M4 3h16M5 3v18M19 3v18M5 7h14M5 11h14M5 15h14"/><path d="M12 15v4"/>',
 star:'<path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.3l6-.7Z"/>',
 spray:'<path d="M4 20 14 10M14 10l3-3 3 3-3 3Z"/><path d="M18 3v1M21 6h-1M20.5 3.5l-.7.7"/>',
 tag:'<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9Z"/><circle cx="8" cy="8" r="1.5"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 level:'<rect x="2" y="8" width="20" height="8" rx="2"/><path d="M10 12h4"/><circle cx="12" cy="12" r="1"/>',
 lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 pin:'<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
 phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
 chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
};
const svg=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[k]||I.bolt}</svg>`;
const ARR='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const LOGO='<svg class="logo" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="14" fill="var(--blue)"/><path d="M10 23.5 24 11.5l14 12" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 21v15.5h20V21" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="20.2" y="25.5" width="7.6" height="11" rx="1.6" fill="#ffd774"/></svg>';
const NOOP=new Proxy(function(){},{get:(t,k)=>k===Symbol.iterator?function*(){}:k===Symbol.toPrimitive?()=>"":k==="length"?0:NOOP,set:()=>true,apply:()=>NOOP});
const $=id=>document.getElementById(id)||NOOP;
const STATIC=!!window.HS_STATIC;
const PAY_LIVE=STATIC&&Object.keys(BIZ.payLinks||{}).length>0;
async function api(path,data){const r=await fetch(path,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});let out={};try{out=await r.json()}catch(e){}if(!r.ok)throw new Error(out.error||"Something went wrong. Please call or text (631) 304-4809.");return out}
async function sendForm(name,d){if(!STATIC)return;
  const body=new URLSearchParams({"form-name":name,...Object.fromEntries(Object.entries(d).map(([k,v])=>[k,Array.isArray(v)?v.join(", "):String(v??"")]))});
  const r=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:body.toString()});if(!r.ok)throw new Error("send failed")}
function toPath(h){if(!h||h==="home")return "/";return "/"+h+"/"}
function fixLinks(root){if(!STATIC)return;(root||document).querySelectorAll('a[href^="#"]').forEach(a=>{const h=a.getAttribute("href").slice(1);const s=a.dataset.svc;a.setAttribute("href",toPath(h)+(s&&h==="book"?"?svc="+s:""))})}
const esc=t=>String(t??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const usd=n=>"$"+(Math.round(n*100)/100).toLocaleString("en-US",{minimumFractionDigits:n%1?2:0,maximumFractionDigits:2});

/* ---------- travel fee by ZIP ---------- */
const ZIPZONE={};
"32099 32202 32203 32204 32205 32206 32207 32208 32209 32210 32211 32212 32216 32217 32244 32246 32254 32256 32257 32277 32223".split(" ").forEach(z=>ZIPZONE[z]=1);
"32218 32219 32220 32221 32222 32224 32225 32226 32233 32250 32266 32258 32073 32065 32259 32081 32234 32082 32092 32003 32043 32068 32097 32011 32095 32084 32080 32086 32033 32046".split(" ").forEach(z=>ZIPZONE[z]=2);
const feeFor=zip=>ZIPZONE[zip]===1?0:ZIPZONE[zip]===2?BIZ.travelFee:null;
const CENTER=[30.3322,-81.6557];
function miles(a,b){const R=3958.8,r=x=>x*Math.PI/180;const dLat=r(b[0]-a[0]),dLon=r(b[1]-a[1]);const h=Math.sin(dLat/2)**2+Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(h))}
const feeMsg=f=>f===0?"<b>No travel fee.</b> You're within 10 miles.":f===BIZ.travelFee?`<b>$${f} travel fee.</b> You're 11 to 30 miles out.`:`You're outside the usual area. <a href="#contact">Message your pro</a> and he'll see what he can do.`;

/* ---------- areas + SEO helpers ---------- */
const AREAS=TOWNS.map(t=>({slug:townSlug(t),name:t.name,also:t.county.name,fee:t.fee,t}));
const HOODS=["Riverside","Avondale","Murray Hill","Ortega","San Marco","San Jose","Southbank","Downtown","Springfield","Arlington","Southside","Baymeadows","Deerwood","Tinseltown","Mandarin","Julington Creek","Fruit Cove","St. Johns","Nocatee","Ponte Vedra Beach","Jacksonville Beach","Neptune Beach","Atlantic Beach","Intracoastal West","Northside","Oceanway","Westside","Argyle Forest","Orange Park","Fleming Island"];
const ZIPS="32202, 32204, 32205, 32207, 32210, 32211, 32216, 32217, 32223, 32224, 32225, 32246, 32250, 32256, 32257, 32258, 32259, 32266, 32073, 32081 and 32082";
const unitTxt=p=>p.qty?" each":"";
const pkCard=p=>`<a class="pk" href="#${p.slug}"><span class="ico">${svg(p.icon)}</span><span class="pk-body"><b>${p.name}</b><span class="muted">${p.short}</span></span><span class="pk-price">${usd(p.price)}<small>${unitTxt(p)}</small></span></a>`;

function shared(p){
  return {
   why:`Homestallers is led by local, experienced professional Alex Montalbano, with trusted local pros who show up on time, treat your home with care, explain what they did and clean up before they leave.`,
   faq:[["Is there a travel fee?","No travel fee within 10 miles of central Jacksonville. From 11 to 30 miles out, there's a flat $35 travel fee. You'll see it at checkout."],["When do I pay?","You pay online when you book, with Apple Pay, PayPal, Google Pay or card. A 3% service fee is added at checkout. If the job needs extra time, you approve and pay for it in the app."],["What if the job takes longer?","Each price includes the time most jobs take. If yours needs more, it's $80 an hour after, and we ask before going over. We can also come back another day."],["Can I tip?","Yes. You can leave a tip in the app after the job. It's always optional."],["What if I need to cancel?","Cancel up to 24 hours before for a full refund."]]
  };
}
function seoPkg(p){
  const S=shared(p),rel=PKG.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(PKG.filter(x=>x.cat!==p.cat)).slice(0,6);
  return `<article class="seo">
   <div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#services">Services</a> / ${p.name}</div>
    <span class="tag">${p.name} · Jacksonville, FL</span>
    <h1>${p.h1}</h1><p class="lead">${p.intro[0]}</p>
    <div class="btnrow"><a class="btn" href="#book" data-svc="${p.id}">Book for ${usd(p.price)}</a><a class="btn ghost" href="#contact">Ask a question</a></div>
    <ul class="facts"><li><b>${usd(p.price)}${unitTxt(p)}</b><span>Flat price</span></li><li><b>${incTxt(p.inc)}</b><span>Included</span></li><li><b>$80/hr</b><span>After that</span></li></ul>
   </div>
   <div class="seo-grid">
    <div class="prose">
     <h2>${p.h1.replace(" in Jacksonville","")} you can count on</h2>${p.intro.slice(1).map(x=>`<p>${x}</p>`).join("")}<p>${S.why}</p>
     ${(p.more||[]).map(m=>`<h2>${m[0]}</h2><p>${m[1]}</p>`).join("")}${JAX_SVC[p.id]?`<h2>Built for Jacksonville homes</h2><p>${JAX_SVC[p.id]}</p>`:""}
     <h2>What's included for ${usd(p.price)}</h2><ul class="checks">${p.included.map(i=>`<li>${i}</li>`).join("")}</ul>
     <h2>Not included</h2><ul class="minus">${p.notIncluded.map(i=>`<li>${i}</li>`).join("")}</ul>
     <h2>How pricing works</h2>
     <p>${p.name} is a flat ${usd(p.price)}${p.qty?" per item":""}. It includes up to ${incTxt(p.inc)} of work${p.qty?" for each one":""}, which covers most jobs. If yours needs more time, it's $80 an hour after that, billed in 30 minute steps, and we ask before going over. Parts and materials are extra, at cost.</p>
     <p>The price is the same anywhere in our area. There's no travel fee within 10 miles of central Jacksonville, and a flat $35 travel fee from 11 to 30 miles out, like Jacksonville Beach, Nocatee, Ponte Vedra, Fleming Island and Orange Park.</p>
     <h2>How to book</h2>
     <ol class="steps"><li><div><b>Pick ${p.name.toLowerCase()}</b><p class="muted">See the price before you book.</p></div></li><li><div><b>Choose a time</b><p class="muted">7 days a week, 8am to 6pm.</p></div></li><li><div><b>Check out online</b><p class="muted">Apple Pay, PayPal, Google Pay or card.</p></div></li><li><div><b>We do the job</b><p class="muted">Track it in the app and tip if you like.</p></div></li></ol>
     <h2>Before your pro arrives</h2><ul class="checks">${p.prep.map(i=>`<li>${i}</li>`).join("")}</ul>
     <h2>Frequently asked questions</h2>
     <div class="faq">${p.faq.concat(S.faq).map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div>
     <h2>Areas we serve</h2>
     <p>Homestallers offers ${p.name.toLowerCase()} across Jacksonville and Northeast Florida, including ${HOODS.slice(0,-1).join(", ")} and ${HOODS[HOODS.length-1]}. ZIP codes include ${ZIPS}.</p>${LS(p.id)?`<div class="areas">${TOWNS.map(t=>`<a href="#${townSvcSlug(LS(p.id),t)}">${LS(p.id).act} in ${t.name}</a>`).join("")}</div>`:""}
     <h2>Need electrical or plumbing work?</h2><p>Ceiling fans, light fixtures, EV chargers and plumbing are coming soon, done by a licensed contractor. <a href="#licensed-services">Join the list</a> and we'll let you know when they're available.</p>
     <h2>Also searched as</h2><div class="areas">${p.kw.map(k=>`<span>${k}</span>`).join("")}</div>
    </div>
    <aside class="seo-side">
     <div class="card"><h3>${p.name}</h3><div class="big-price">${usd(p.price)}<small>${unitTxt(p)}</small></div><div class="rows">
      <div><span>Included time</span><span>${incTxt(p.inc)}</span></div><div><span>After that</span><span>$80/hr</span></div><div><span>Travel 11 to 30 mi</span><span>$35</span></div><div><span>Parts</span><span>At cost</span></div></div>
      <a class="btn" href="#book" data-svc="${p.id}" style="width:100%">Book now</a></div>
     <div class="card"><h3>Questions?</h3><p class="muted">Call or text us</p><p class="sel" style="font-weight:700">${BIZ.phone}</p><p class="sel" style="font-weight:600;font-size:.95rem">${BIZ.email}</p></div>
     <div class="card"><h3>Related</h3><div class="links-list">${rel.map(r=>`<a href="#${r.slug}">${r.name} · ${usd(r.price)}</a>`).join("")}</div></div>
    </aside>
   </div>
   <div class="cta-band" style="margin-top:44px"><div style="display:grid;gap:6px"><h2>Book ${p.name.toLowerCase()}</h2><p>Flat ${usd(p.price)}. Book in two minutes.</p></div><a class="btn" href="#book" data-svc="${p.id}">Book now</a></div>
  </article>`;
}
function seoHub(){
  return `<article class="seo"><div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / Home services in Jacksonville</div>
   <span class="tag">Trusted home help · Jacksonville, FL</span>
   <h1>Handyman and home services in Jacksonville, FL</h1>
   <p class="lead">TV mounting, furniture assembly, tech help, smart home setup, moving help and the small jobs on your list. Flat prices, booked online, done by Alex Montalbano.</p>
   <div class="btnrow"><a class="btn" href="#book">Book a job</a><a class="btn ghost" href="#services">See all prices</a></div></div>
   <div class="prose" style="margin-top:24px">
    ${CATS.map(([c,l])=>`<h2>${l}</h2><div class="pk-grid">${PKG.filter(p=>p.cat===c).map(pkCard).join("")}</div>`).join("")}
    <h2>Why Jacksonville homeowners book Homestallers</h2>
    <ul class="checks"><li>Flat prices you see before you book</li><li>Led by local, experienced professional Alex Montalbano</li><li>Book online in two minutes</li><li>On time, careful in your home, and cleaned up after</li><li>Tip in the app if you're happy</li></ul>
    <h2>Common jobs in Jacksonville homes</h2>
    <p>Jacksonville homes range from 1920s bungalows in Riverside and San Marco to brand new builds in Nocatee and Oceanway. New homes need move-in setup: TVs on the wall, blinds, shelves and furniture. Older homes have plaster and block walls that need the right anchors. Near the beaches, salt air and sand mean more pressure washing and outdoor upkeep.</p>
    <p>Families also book your pro for parents and grandparents: setting up a new TV or phone, fixing the Wi-Fi, swapping smoke alarm batteries up high and handling the small fixes that get hard to do.</p>
    <h2>How pricing works</h2>
    <p>Every job has a flat price that includes a set amount of time. If a job needs more, it's $80 an hour after that, and we ask first. There's no travel fee within 10 miles of central Jacksonville and a flat $35 from 11 to 30 miles. Parts are extra, at cost.</p>
    <h2>Areas we serve</h2><p>${HOODS.join(", ")}. ZIP codes include ${ZIPS}.</p>
    <h2>Questions</h2><div class="faq">${shared({}).faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div>
   </div></article>`;
}
function soonPage(){
  return `<article class="seo"><div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / Licensed services</div>
   <span class="tag">Coming soon</span><h1>Electrical and plumbing services</h1>
   <p class="lead">Electrical and plumbing services are coming soon, and that work will be done by a licensed contractor. Tell us what you need and we'll reach out when it's available.</p></div>
   <div class="split" style="margin-top:22px">
    <div class="prose"><h2>What's coming</h2><ul class="checks">${SOON.map(s=>`<li>${s[1]}</li>`).join("")}</ul>
     <p>Until then, Homestallers handles TV mounting, smart home setup, furniture assembly, hanging, blinds, moving help, pressure washing and handyman jobs that don't need a trade license.</p></div>
    <div class="card"><h3>Get on the list</h3>
     <form id="soonForm" class="fields" novalidate>
      <div class="fl">What do you need?<div class="chips multi" id="soonChips">${SOON.map(s=>`<button type="button" data-v="${s[1]}">${s[1]}</button>`).join("")}</div></div>
      <div class="fr c2"><label class="fl">Name<input id="sName" autocomplete="name"></label><label class="fl">Mobile or email<input id="sReach"></label></div>
      <label class="fl">ZIP<input id="sZip" inputmode="numeric" maxlength="5"></label>
      <p class="err" id="sErr" hidden>Pick at least one service and add your name and a way to reach you.</p>
      <button class="btn" type="submit">Let me know</button></form>
     <div id="sOk" class="done" hidden style="padding-block:10px"><h3>You're on the list</h3><p class="muted">We'll reach out as soon as these services are available.</p></div>
    </div></div></article>`;
}
function seoArea(a){
  return `<article class="seo"><div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#areas">Areas</a> / ${a.name}</div>
   <span class="tag">${a.also}</span>
   <h1>Handyman and home help in ${a.name}</h1>
   <p class="lead">${a.note}</p>
   <div class="btnrow"><a class="btn" href="#book">Book in ${a.name}</a><a class="btn ghost" href="#services">See all prices</a></div>
   <ul class="facts"><li><b>${a.fee?"$"+a.fee:"$0"}</b><span>Travel fee</span></li><li><b>Flat</b><span>Prices</span></li><li><b>Local</b><span>Trusted pros</span></li></ul></div>
   <div class="prose" style="margin-top:24px">
    <h2>Popular in ${a.name}</h2><div class="pk-grid">${a.top.map(id=>pkCard(P(id))).join("")}</div>
    <h2>Flat prices in ${a.name}</h2><p>Every job has the same flat price anywhere we work. ${a.fee?`Because ${a.name} is 11 to 30 miles from central Jacksonville, there's a flat $${a.fee} travel fee per visit.`:`${a.name} is within 10 miles, so there's no travel fee.`} You pay online when you book.</p>
    <h2>All services</h2><div class="pk-grid">${PKG.map(pkCard).join("")}</div>
   </div></article>`;
}

/* ---------- service agreement ---------- */
const TERMS_VERSION="October 29, 2026";
function termsHTML(){return `<p class="muted">Last updated ${TERMS_VERSION}. This Service Agreement is between you (the customer) and Homestallers, operated by Alex Montalbano in Jacksonville, Florida ("we", "us"). By checking the agreement box and completing checkout, you agree to these terms.</p>
 <h3>1. What we do</h3><p>Homestallers provides home help such as TV mounting, furniture assembly, hanging, blinds, smart home and tech setup, moving help, pressure washing and small handyman tasks. We do not perform work that requires a Florida trade license, including electrical, plumbing, HVAC, roofing or structural work, and we do not take on any single job with a total price over $2,500. We may decline or stop any work that is unsafe, outside this scope, or requires a permit or licensed contractor. If we stop for one of these reasons, we'll explain why and refund any part of the package we didn't start.</p>
 <h3>2. Booking and payment</h3><p>You pay the package price, any travel fee and a 3% service fee online when you book. The 3% service fee is added to every online booking and payment (except tips) and is shown before you pay. Payments are processed securely by Stripe. We never see or store your full card number. Your booking is confirmed once payment goes through. If we can't make your chosen time, we'll offer a new time or a full refund.</p>
 <h3>3. Package price and included time</h3><p>Each package has a flat price that covers the work described and a set amount of included time, shown on the service page and at checkout. The package price stays the same even if the job takes less time than included. There are no partial refunds for unused time. At our discretion, leftover time may be used for small related tasks.</p>
 <h3>4. Extra time</h3><p>If the job needs more time than is included, we'll tell you before going over. You can choose to have us keep working at $80 an hour, billed in 30 minute increments, or schedule a return visit. Extra time and any parts are due the same day, when the work is done, in cash or online at homestallers.com/pay. Any balance not paid that day is due within 3 days. We may decline future bookings until a balance is paid.</p>
 <h3>5. Changes to the job</h3><p>Work that wasn't described in your booking may need extra time or a new booking. We'll tell you the cost before doing it.</p>
 <h3>6. Travel fee</h3><p>There is no travel fee within 10 miles of central Jacksonville. From 11 to 30 miles, there is a flat $35 travel fee per visit, shown at checkout. We don't currently serve addresses more than 30 miles away.</p>
 <h3>7. Parts and items you supply</h3><p>Prices are for labor. Parts and materials we provide are billed at cost, with receipts on request. If you supply items such as a TV, mount, furniture, blinds or devices, you're responsible for making sure they are complete, undamaged and suitable for the job (for example, a mount rated for your TV's size and weight). We're not responsible for defects in, or damage caused by, items you supply.</p>
 <h3>8. Cancelling and rescheduling</h3><p>You can cancel or reschedule for free up to 24 hours before your visit and get a full refund. With less than 24 hours' notice, or if we arrive and can't get in or do the work, we keep $35 to cover the trip and refund the rest, or you can reschedule. If we cancel, you get a full refund.</p>
 <h3>9. Your part</h3><p>An adult (18 or older) must be home during the visit, or you must arrange access ahead of time. Please secure pets and clear the work area. Tell us about anything that could affect the work, such as known pipes or wires inside a wall, damage or prior repairs. You confirm you have the right to authorize the work at the address. If you rent or live in an HOA community, you confirm you have any permission required.</p>
 <h3>10. Hidden conditions</h3><p>We take care to avoid hidden pipes, wires and other items inside walls, but we can't see inside them. We're not responsible for pre-existing conditions, or for damage to hidden items that a careful person couldn't reasonably detect. Older plaster walls can crack when drilled even with care. We'll talk with you about any risk before drilling.</p>
 <h3>11. Our workmanship guarantee</h3><p>If something we installed or assembled doesn't hold or work right within 30 days because of our workmanship, we'll come back and fix it at no labor charge. This doesn't cover items you supplied, misuse, moving the item, or damage from accidents, storms or power surges.</p>
 <h3>12. Damage and limits</h3><p>If you believe we damaged something, tell us within 48 hours with photos so we can make it right. To the fullest extent the law allows, our total liability for any claim related to a job is limited to the amount you paid for that job, and we're not liable for indirect or consequential losses. Nothing in this agreement limits liability that can't be limited under Florida law.</p>
 <h3>13. Payment questions</h3><p>If you have a problem with a charge, please contact us first. We'll work it out quickly, and that's usually faster than a bank dispute.</p>
 <h3>14. Photos and your information</h3><p>We may take before and after photos of the work for our records. We won't publish photos of your home without your permission. We use your contact details only to provide and follow up on your service. We don't sell your information.</p>
 <h3>15. Messages</h3><p>You agree that we can contact you by text, call or email about your booking. Message and data rates may apply. Reply STOP to stop texts.</p>
 <h3>16. Florida law</h3><p>This agreement is governed by Florida law. Any dispute will be handled in the courts of Duval County, Florida, or in small claims court where eligible.</p>
 <h3>17. The whole agreement</h3><p>This is the full agreement for your booking. If any part is found unenforceable, the rest still applies. We may update these terms for future bookings. The version you agreed to at checkout applies to your booking.</p>
 <p class="muted">Questions? Call or text ${BIZ.phone} or email ${BIZ.email}.</p>`}

/* ---------- data store ---------- */
let DB=null,IS_OWNER=false;
const mem={docs:{},inq:{},subs:new Set()};
const memEmit=()=>mem.subs.forEach(f=>f());
const store={
  async create(id,data){if(DB)return DB.doc("bookings/"+id).set(data);mem.docs[id]=data;memEmit()},
  async update(id,patch){if(DB)return DB.doc("bookings/"+id).update(patch);mem.docs[id]={...mem.docs[id],...patch};memEmit()},
  async inquiry(data){const id="m"+Date.now().toString(36);if(DB)return DB.doc("inquiries/"+id).set(data);mem.inq[id]=data;memEmit()},
  watchAll(col,cb){if(DB)return DB.collection(col).onSnapshot(s=>cb(s.docs.map(d=>({id:d.id,...d.data()}))),()=>cb(null));
    const src=col==="inquiries"?mem.inq:mem.docs;const f=()=>cb(Object.entries(src).map(([id,d])=>({id,...d})));mem.subs.add(f);f();return()=>mem.subs.delete(f)},
  watch(id,cb){if(DB)return DB.doc("bookings/"+id).onSnapshot(s=>cb(s.exists?{id,...s.data()}:null),()=>cb(null));
    const f=()=>cb(mem.docs[id]?{id,...mem.docs[id]}:null);mem.subs.add(f);f();return()=>mem.subs.delete(f)}
};
function totals(b){
  const ex=b.extras||[],pay=b.payments||[];
  const base=b.total!=null?b.total:(b.hours||1)*(b.rate||80);
  const time=ex.filter(e=>e.type==="time"&&e.status==="approved").reduce((a,e)=>a+e.amount,0);
  const pending=ex.filter(e=>e.type==="time"&&e.status==="pending");
  const parts=ex.filter(e=>e.type==="parts").reduce((a,e)=>a+e.amount,0);
  const owed=base+time+parts,paid=pay.filter(p=>p.kind==="pay").reduce((a,p)=>a+p.amount,0),tips=pay.filter(p=>p.kind==="tip").reduce((a,p)=>a+p.amount,0);
  return {base,time,parts,owed,paid,tips,pending,balance:Math.round((owed-paid)*100)/100};
}
const STAGES=["booked","onway","working","done"],STAGE_LABEL={booked:"Booked",onway:"On the way",working:"Working",done:"Done"};

/* ---------- static fills ---------- */
document.querySelectorAll("#logoNav,#logoFoot").forEach(e=>e.outerHTML=LOGO);
document.querySelectorAll("[data-ico]").forEach(e=>e.innerHTML=svg(e.dataset.ico));
$("heroPrices").innerHTML=["tv","tvclean","assembly","smart","handyman"].map(id=>{const p=P(id);return `<a href="#${p.slug}" class="hc-row"><span class="ico">${svg(p.icon)}</span><span>${p.name}</span><b>${usd(p.price)}</b></a>`}).join("");
$("homePk").innerHTML=PKG.slice(0,6).map(pkCard).join("");
$("svcCats").innerHTML=CATS.map(([c,l])=>`<h2 class="cat-h">${l}</h2><div class="pk-grid">${PKG.filter(p=>p.cat===c).map(pkCard).join("")}</div>`).join("");
$("areaTiles").innerHTML=Object.entries(COUNTIES).map(([k,co])=>{const ts=TOWNS.filter(t=>t.c===k);return `<div class="area-card${ts.length>8?" wide":""}"><div class="ac-head"><h2><a href="#${co.slug}">${co.name}</a></h2><span>${ts.length} areas</span></div><ul class="ac-list">${ts.map(t=>`<li><a href="#${townSlug(t)}">${t.name}</a>${t.fee?`<span class="ac-fee">$35</span>`:""}</li>`).join("")}</ul></div>`}).join("")+`<p class="ac-key"><span class="ac-fee">$35</span> travel fee applies. All other areas have no travel fee.</p>`;
$("homeAreas").innerHTML=["jacksonville","jacksonville-beach","ponte-vedra-beach","nocatee","mandarin","riverside","san-marco","southside","orange-park"].map(s=>{const t=TOWN(s);return `<a href="#${townSlug(t)}">${t.name}</a>`}).join("");
$("fElec").innerHTML=PKG.filter(p=>p.cat==="tv").map(p=>`<a href="#${p.slug}">${p.name}</a>`).join("");
$("fHome").innerHTML=PKG.filter(p=>p.cat!=="tv").map(p=>`<a href="#${p.slug}">${p.name}</a>`).join("");
$("cTopic").innerHTML=PKG.map(p=>`<option>${p.name}</option>`).join("")+"<option>Electrical or plumbing (coming soon)</option><option>Something else</option>";

$("guideList").innerHTML=GUIDES.map(g=>`<a class="guide" href="#${g.slug}"><b>${g.h1}</b><span class="muted">${g.desc}</span><span class="textlink">Read the guide →</span></a>`).join("");
$("alsoChips").innerHTML=SOON.map(s=>`<button type="button" data-v="${s[1]}">${s[1]}</button>`).join("");

/* ---------- location check ---------- */
$("locZip").addEventListener("input",e=>{const v=e.target.value.trim();if(v.length===5)$("locOut").innerHTML=feeMsg(feeFor(v))});
$("locBtn").onclick=()=>{
  $("locOut").textContent="Checking your location…";
  try{navigator.geolocation.getCurrentPosition(pos=>{const m=miles(CENTER,[pos.coords.latitude,pos.coords.longitude]);
      $("locOut").innerHTML=`About ${Math.round(m)} miles from Jacksonville. `+feeMsg(m<=10?0:m<=30?BIZ.travelFee:null)},
    ()=>{$("locOut").textContent="Couldn't get your location. Enter your ZIP instead."},{timeout:8000})}
  catch(e){$("locOut").textContent="Couldn't get your location. Enter your ZIP instead."}};

/* ---------- routing ---------- */
const PAGES=["home","services","areas","book","about","contact","alex","terms","booked","pay","guides","privacy"];
const DEFAULT_DESC="TV mounting, furniture assembly, smart home setup and handyman help in Jacksonville, FL. Flat prices, open 7 days. Book online in two minutes.";
const PAGE_META={
 services:["Prices for TV Mounting, Assembly & Handyman | Jacksonville","Flat prices for every job: TV mounting from $100, furniture assembly from $80, handyman hours, smart home setup and pressure washing in Jacksonville."],
 areas:["Service Areas in Jacksonville & Northeast Florida | Homestallers","Home help across Duval, St. Johns, Clay and Nassau counties. No travel fee within 10 miles of Jacksonville, $35 flat from 11 to 30 miles."],
 about:["About Homestallers | Local Jacksonville Home Help","Homestallers is a Jacksonville home help company led by local, experienced professional Alex Montalbano. Flat prices, careful work, open 7 days."],
 contact:["Contact Homestallers | Call or Text (631) 304-4809","Questions about a job in Jacksonville? Call or text (631) 304-4809, email homestallers@gmail.com or send a message. Open 7 days, 8am to 6pm."],
 book:["Book TV Mounting or Handyman Help Online | Homestallers","Pick a job, choose a time and pay securely online. TV mounting, assembly, smart home setup and handyman help in Jacksonville, 7 days a week."],
 terms:["Service Agreement | Homestallers","The Homestallers service agreement: flat package pricing, extra time, travel fees, the 3% service fee, cancellations and our workmanship promise."],
 contact_es:null};
function setDesc(t){let m=document.querySelector('meta[name="description"]');if(!m){m=document.createElement("meta");m.name="description";document.head.appendChild(m)}m.content=t}
let unsubJob=null,unsubDash=[];
function route(){
  const h=STATIC?(location.pathname.replace(/^\/|\/$/g,"")||"home"):location.hash.slice(1);let page="home",title="TV Mounting & Handyman in Jacksonville, FL | Homestallers",desc=DEFAULT_DESC;
  const pk=PKG.find(p=>p.slug===h),area=AREAS.find(a=>a.slug===h),county=Object.entries(COUNTIES).find(([k,c])=>c.slug===h);
  const guide=G(h);let ts=null;for(const l of LOCAL){for(const t of TOWNS){if(townSvcSlug(l,t)===h)ts=[l,t]}}
  if(unsubJob){unsubJob();unsubJob=null}
  if(h!=="alex"&&unsubDash.length){unsubDash.forEach(f=>f());unsubDash=[]}
  if(PAGES.includes(h)){page=h;if(PAGE_META[h]){title=PAGE_META[h][0];desc=PAGE_META[h][1]}}
  else if(pk){page="seo";$("seoBody").innerHTML=seoPkg(pk);title=pk.title;desc=pk.desc}
  else if(area){const t=area.t;page="seo";$("seoBody").innerHTML=seoTown(t);title=`Handyman & Home Services in ${t.name}, FL | Homestallers`;desc=`Trusted handyman and home help in ${t.name}, FL. Flat prices on TV mounting, furniture assembly, smart home setup and more. ${t.fee?"$35 travel fee.":"No travel fee."} Book online.`}
  else if(county){const [k,co]=county;page="seo";$("seoBody").innerHTML=seoCounty(k);title=`Handyman & Home Services in ${co.name}, FL | Homestallers`;desc=`Trusted handyman and home help across ${co.name}, Florida. Flat-price TV mounting, assembly, smart home setup, pressure washing and more. Book online.`}
  else if(ts){const [l,t]=ts,p=P(l.id);page="seo";$("seoBody").innerHTML=seoTownSvc(l,t);title=`${l.act} in ${t.name}, FL | ${usd(p.price)} Flat | Homestallers`;desc=`${l.act} in ${t.name}, FL for a flat ${usd(p.price)}${p.qty?" each":""}. ${t.fee?"$35 travel fee.":"No travel fee."} Trusted local pro, careful work, book online in two minutes.`}
  else if(h==="home-services-jacksonville"){page="seo";$("seoBody").innerHTML=seoHub();title="All Home Services in Jacksonville, FL | Flat Prices";desc="Every home service we offer in Jacksonville, FL, in one place. Flat-price TV mounting, furniture assembly, tech help, smart home setup and more. Book online."}
  else if(h==="licensed-services"){page="seo";$("seoBody").innerHTML=soonPage();wireSoon();title="Electrical & Plumbing Services Coming Soon | Homestallers";desc="Electrical and plumbing services are coming soon to Homestallers in Jacksonville. Join the list to hear when they're available."}
  else if(guide){page="seo";$("seoBody").innerHTML=guidePage(guide);title=guide.title+" | Homestallers";desc=guide.desc}
  else if(h.startsWith("job-")){page="job";openJob(h.slice(4))}
  if(page==="alex")openDash();
  if(page==="terms")$("termsPage").innerHTML=termsHTML();
  if(page==="booked"){title="You're booked | Homestallers";loadBooked()}
  if(page==="privacy"){$("privacyPage").innerHTML=privacyHTML();title="Privacy Policy | Homestallers";desc="How Homestallers collects, uses and protects your information when you book or contact us in Jacksonville, FL."}
  if(page==="guides"){title="Home Guides for Jacksonville Homeowners | Homestallers";desc="Plain answers on TV mounting costs, TV heights, hiding wires, furniture assembly and hurricane prep for Jacksonville homes."}
  if(page==="pay"){title="Make a Payment | Homestallers";desc="Pay securely for extra time, parts or a tip after your Homestallers job in Jacksonville. Card, Apple Pay or Google Pay."}
  document.title=title;setDesc(desc);linkContacts();
  document.querySelectorAll(".page").forEach(p=>p.hidden=p.dataset.page!==page);document.body.dataset.page=page;
  const navKey=guide?"guides":pk||ts?"services":area||county?"areas":page;
  document.querySelectorAll(".links a").forEach(a=>a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+navKey));
  $("links").classList.remove("open");$("menuBtn").setAttribute("aria-expanded","false");
  if(!STATIC)window.scrollTo(0,0);
  fixLinks();
}
if(!STATIC)addEventListener("hashchange",route);
$("menuBtn").onclick=()=>{const o=$("links").classList.toggle("open");$("menuBtn").setAttribute("aria-expanded",o)};
document.addEventListener("click",e=>{if(STATIC)return;const a=e.target.closest("[data-svc]");if(a){pickPkg(a.dataset.svc);setTimeout(()=>showStep(1),0)}});

/* ---------- booking ---------- */
const B={pkg:null,qty:1,date:null,time:null,own:"",cat:"tv"};
const TIMES=["8:00 AM","10:00 AM","12:00 PM","2:00 PM","4:00 PM"],START=[8,10,12,14,16];
const taken=(d,i)=>!STATIC&&(((d.getMonth()*31+d.getDate())*7+i*13)*2654435761>>>0)%10<4;
const jobHrs=()=>B.pkg?B.pkg.inc*(B.pkg.qty?B.qty:1):1;
const fits=j=>START[j]+Math.min(jobHrs(),8)<=18||j===0;
const today=new Date();today.setHours(0,0,0,0);
const DAYS=[];for(let i=1;DAYS.length<14;i++){const d=new Date(today);d.setDate(today.getDate()+i);DAYS.push(d)}
const fmt=d=>d.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});
const iso=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const fromIso=s=>{const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
const val=id=>$(id).value.trim();

function renderCats(){$("catTabs").innerHTML=CATS.map(([c,l])=>`<button type="button" data-c="${c}" aria-pressed="${B.cat===c}">${l}</button>`).join("");
  $("svcPick").innerHTML=PKG.filter(p=>p.cat===B.cat).map(p=>`<button type="button" class="opt" data-id="${p.id}" aria-pressed="${B.pkg&&B.pkg.id===p.id}"><span class="ico">${svg(p.icon)}</span><span style="min-width:0"><b>${p.name}</b><small>${p.short}</small></span><span class="opt-price">${usd(p.price)}</span></button>`).join("")}
$("catTabs").addEventListener("click",e=>{const b=e.target.closest("button");if(b){B.cat=b.dataset.c;renderCats()}});
function pickPkg(id){B.pkg=P(id);B.cat=B.pkg.cat;B.qty=1;renderCats();
  $("qtyRow").hidden=!B.pkg.qty;$("qVal").textContent=B.qty;$("qtyLabel").textContent=`How many${B.pkg.qtyLabel?" "+B.pkg.qtyLabel:""}? (${usd(B.pkg.price)} each)`;
  $("to2").disabled=false;renderSum()}
$("svcPick").addEventListener("click",e=>{const b=e.target.closest(".opt");if(b)pickPkg(b.dataset.id)});
$("qMinus").onclick=()=>{B.qty=Math.max(1,B.qty-1);$("qVal").textContent=B.qty;renderSum()};
$("qPlus").onclick=()=>{B.qty=Math.min(10,B.qty+1);$("qVal").textContent=B.qty;renderSum()};

function renderDays(){
  $("days").innerHTML=DAYS.map((d,i)=>{const sun=false,full=TIMES.every((t,j)=>taken(d,j)||!fits(j));
   return `<button type="button" class="day" data-i="${i}" aria-pressed="${B.date===i}" ${sun||full?"disabled":""}><small>${d.toLocaleDateString("en-US",{weekday:"short"})}</small><b>${d.getDate()}</b><small>${sun?"Off":full?"Full":d.toLocaleDateString("en-US",{month:"short"})}</small></button>`}).join("");renderSlots()}
function renderSlots(){
  if(B.date===null){$("slots").innerHTML='<p class="muted" style="grid-column:1/-1">Pick a day to see open times.</p>';return}
  const d=DAYS[B.date];$("slots").innerHTML=TIMES.map((t,j)=>`<button type="button" class="slot" data-t="${t}" aria-pressed="${B.time===t}" ${taken(d,j)||!fits(j)?"disabled":""}>${t}</button>`).join("")}
$("days").addEventListener("click",e=>{const b=e.target.closest(".day");if(!b||b.disabled)return;B.date=+b.dataset.i;B.time=null;$("to3").disabled=true;renderDays();renderSum()});
$("slots").addEventListener("click",e=>{const b=e.target.closest(".slot");if(!b||b.disabled)return;B.time=b.dataset.t;$("to3").disabled=false;renderSlots();renderSum()});

function renderQs(){$("svcQs").innerHTML=(B.pkg.qs||[]).map((q,n)=>`<div class="fl">${q[0]}<div class="chips" data-q="${n}">${q[1].map(o=>`<button type="button" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div></div>`).join("")}
document.addEventListener("click",e=>{const b=e.target.closest(".chips.multi button");if(b)b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")==="true"?"false":"true")});
$("svcQs").addEventListener("click",e=>{const b=e.target.closest(".chips button");if(!b)return;const on=b.getAttribute("aria-pressed")==="true";b.parentElement.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed","false"));if(!on)b.setAttribute("aria-pressed","true")});
function answers(){const out={};(B.pkg.qs||[]).forEach((q,n)=>{const b=document.querySelector(`#svcQs [data-q="${n}"] [aria-pressed="true"]`);if(b)out[q[0]]=b.dataset.v});return out}
$("ownSeg").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;B.own=b.dataset.v;[...$("ownSeg").children].forEach(x=>x.setAttribute("aria-pressed",x===b))});
$("bZip").addEventListener("input",()=>{const z=val("bZip");$("zipFee").innerHTML=z.length===5?feeMsg(feeFor(z)):"";renderSum()});

const LABELS=["Step 1 of 3 · Pick a job","Step 2 of 3 · Pick a time","Step 3 of 3 · Checkout"];
function go(n){showStep(n);if(!STATIC&&location.hash!=="#book")location.hash="book";else window.scrollTo(0,0)}
function showStep(n){
  $("s1").hidden=n!==1;$("s2").hidden=n!==2;$("s3").hidden=n!==3;$("s3pay").hidden=n!==3;$("s5").hidden=n!==5;
  [...$("progress").children].forEach((x,i)=>x.className=i<n?"on":"");
  $("progress").hidden=$("stepLabel").hidden=n===5;$("stepLabel").textContent=LABELS[n-1]||"";
  $("sumCard").hidden=n===5;
  if(n===1)renderCats();
  if(n===2){$("to3").disabled=!B.time;renderDays()}
  if(n===3)renderQs();
  renderSum();
}
$("to2").onclick=()=>go(2);$("to3").onclick=()=>go(3);
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>go(+b.dataset.back));

function calc(){if(!B.pkg)return null;const sub=B.pkg.price*(B.pkg.qty?B.qty:1);const f=feeFor(val("bZip"));const fee=f==null?0:f;const sf=Math.round((sub+fee)*3)/100;return {sub,fee,sf,total:Math.round((sub+fee+sf)*100)/100,feeKnown:val("bZip").length===5,outside:val("bZip").length===5&&f==null}}
function renderSum(){
  const p=B.pkg;if(!p){$("sum").innerHTML='<p class="empty">Pick a job to get started.</p>';return}
  const c=calc();
  $("sum").innerHTML=`<div class="sumhead"><span class="ico">${svg(p.icon)}</span><div style="min-width:0"><b>${p.name}${p.qty&&B.qty>1?" × "+B.qty:""}</b><div class="muted" style="font-size:.86rem">Includes ${incTxt(p.inc*(p.qty?B.qty:1))}</div></div></div>
   <div class="rows">
    <div><span>When</span><span>${B.date!==null?fmt(DAYS[B.date])+(B.time?", "+B.time:""):"Not picked"}</span></div>
    <div><span>${p.name}</span><span>${usd(c.sub)}</span></div>
    <div><span>Travel fee</span><span>${c.feeKnown?(c.outside?"Ask your pro":usd(c.fee)):"Enter ZIP"}</span></div>
    <div><span>Service fee (3%)</span><span>${usd(c.sf)}</span></div>
   </div>
   <div class="total"><span class="muted" style="font-weight:700">Total</span><b>${usd(c.total)}</b></div>
   <p class="muted" style="font-size:.82rem">Extra time, if needed, is $80/hr. Parts at cost.</p>`;
  $("payTotal").innerHTML=`<span>${STATIC&&!PAY_LIVE?"Total":"Total today"}</span><b>${usd(c.total)}</b>`;
  $("applePay").textContent=`Pay ${usd(c.total)} with Apple Pay`;
}

const PAYS=document.querySelectorAll("#s3pay [data-pay]");
PAYS.forEach(btn=>btn.onclick=async()=>{
  const miss=[];
  if(!val("bName"))miss.push("your name");if(val("bPhone").replace(/\D/g,"").length<10)miss.push("a mobile number");
  if(!/^\S+@\S+\.\S+$/.test(val("bEmail")))miss.push("your email");if(!val("bStreet"))miss.push("street address");
  if(!/^\d{5}$/.test(val("bZip")))miss.push("ZIP");if(!B.own)miss.push("own or rent");
  const c=calc();
  if(c&&c.outside)miss.push("a ZIP in our area (or message your pro)");
  if(!$("agree").checked)miss.push("a check in the agreement box");
  $("payErr").hidden=!miss.length;$("payErr").textContent=miss.length?"Please add "+miss.join(", ")+".":"";
  if(miss.length){(miss[0]==="a check in the agreement box"?$("agree"):$("s3")).scrollIntoView({block:"center",behavior:"smooth"});return}
  const m=btn.dataset.pay;$("payMsg").textContent=STATIC?"Opening secure checkout…":"Paying with "+m+"…";$("overlay").hidden=false;
  const id="j"+Math.random().toString(36).slice(2,10);
  const doc={pkg:B.pkg.id,svc:B.pkg.id,svcName:B.pkg.name+(B.pkg.qty&&B.qty>1?" × "+B.qty:""),qty:B.qty,unitPrice:B.pkg.price,subtotal:c.sub,travelFee:c.fee,total:c.total,includedHrs:B.pkg.inc*(B.pkg.qty?B.qty:1),rate:BIZ.hourly,
    date:iso(DAYS[B.date]),time:B.time,name:val("bName"),phone:val("bPhone"),email:val("bEmail"),
    address:val("bStreet")+(val("bUnit")?", "+val("bUnit"):"")+", "+val("bCity")+", FL "+val("bZip"),zip:val("bZip"),ownRent:B.own,accessCode:val("bCode"),
    answers:answers(),notes:val("bNote"),alsoWant:[...document.querySelectorAll("#alsoChips [aria-pressed=true]")].map(b=>b.dataset.v),agreement:{version:TERMS_VERSION,agreedAt:Date.now()},
    method:m,status:"booked",extras:[],payments:[{kind:"pay",method:m,amount:c.total,note:"Booking",at:Date.now()}],createdAt:Date.now()};
  if(STATIC){try{await sendForm("booking",{service:doc.svcName,total:usd(c.total),date:fmt(DAYS[B.date]),time:B.time,name:doc.name,phone:doc.phone,email:doc.email,address:doc.address,own_rent:doc.ownRent,gate_code:doc.accessCode,
      details:Object.entries(doc.answers).map(x=>x.join(": ")).join("; "),note:doc.notes,also_want:doc.alsoWant.join(", "),status:"Sent to checkout. Check Stripe to confirm it was paid."})}catch(e){}}
  if(STATIC){try{const out=await api("/api/checkout",{pkg:B.pkg.id,qty:B.qty,zip:val("bZip"),date:fmt(DAYS[B.date]),iso:iso(DAYS[B.date]),hours:jobHrs(),time:B.time,name:doc.name,phone:doc.phone,email:doc.email,address:doc.address,ownRent:doc.ownRent,code:doc.accessCode,
      answers:Object.entries(doc.answers).map(x=>x.join(": ")).join("; "),note:doc.notes,alsoWant:doc.alsoWant.join(", "),agreed:"Yes, agreement of "+TERMS_VERSION});location.href=out.url;return}
    catch(e){$("overlay").hidden=true;$("payErr").hidden=false;$("payErr").textContent=e.message;return}}
  else{try{await store.create(id,doc)}catch(e){}}
  setTimeout(()=>{$("overlay").hidden=true;
    const paidTxt=STATIC?"Your pro will text you a secure payment link":usd(c.total)+" · "+m;
    $("okText").textContent=STATIC?`Booking sent. We'll text you to confirm your time and send a secure payment link (Apple Pay, Google Pay, PayPal or card). Questions? ${BIZ.phone}.`:`Paid ${usd(c.total)} with ${m}. A confirmation is on its way to ${doc.email}.`;
    $("receipt").innerHTML=[["Job",doc.svcName],["Requested",fmt(DAYS[B.date])+", "+B.time],["Where",doc.address],["Total",usd(c.total)],["Payment",paidTxt]].map(r=>`<div><span>${r[0]}</span><span>${esc(r[1])}</span></div>`).join("");
    $("emailPrev").hidden=STATIC;$("trackLink").hidden=STATIC;
    if(!STATIC)$("emailPrev").innerHTML=`<div class="email-head"><span class="pill blue">Confirmation email</span><span class="muted" style="font-size:.82rem">To ${esc(doc.email)}</span></div>
     <b>You're booked: ${esc(doc.svcName)}, ${fmt(DAYS[B.date])} at ${B.time}</b>
     <p>Hi ${esc(doc.name.split(" ")[0])}, thanks for booking with Homestallers.</p>
     <p>${esc(doc.svcName)}<br>${fmt(DAYS[B.date])} at ${B.time}<br>${esc(doc.address)}<br>Paid ${usd(c.total)} with ${m}</p>
     <p>We'll text you the day before. If the job needs extra time, we'll ask first and you can approve it in the app.</p>
     <p>Questions? Reply here or text ${BIZ.phone}.</p><p>Alex Montalbano<br>Homestallers</p>
     <p class="muted" style="font-size:.8rem">Preview. Emails send automatically once the site is live.</p>`;
    $("trackLink").href="#job-"+id;showStep(5);window.scrollTo(0,0)},STATIC?200:900)});
$("again").onclick=()=>{Object.assign(B,{pkg:null,qty:1,date:null,time:null});$("agree").checked=false;$("to2").disabled=true;$("qtyRow").hidden=true;showStep(1)};

/* ---------- customer job page ---------- */
function openJob(id){$("jobBody").innerHTML='<p class="muted">Loading your job…</p>';
  unsubJob=store.watch(id,b=>{if(!b){$("jobBody").innerHTML=`<div class="locked"><h2>Job not found</h2><p class="muted">Check your confirmation link, or <a href="#contact">message your pro</a>.</p></div>`;return}renderJob(b)})}
const XP=a=>`<div class="paybtns"><button class="xp apple" ${a}="Apple Pay">Apple&nbsp;Pay</button><button class="xp paypal" ${a}="PayPal">Pay<span>Pal</span></button></div>`;
function renderJob(b){
  const t=totals(b),si=STAGES.indexOf(b.status),p=P(b.pkg)||{icon:"bolt"};
  const lines=[`<div class="l"><span>${esc(b.svcName)}</span><span>${usd(b.subtotal??t.base)}</span></div>`];
  if(b.travelFee)lines.push(`<div class="l"><span>Travel fee</span><span>${usd(b.travelFee)}</span></div>`);
  (b.extras||[]).filter(e=>!(e.type==="time"&&e.status==="pending")).forEach(e=>lines.push(e.type==="note"?`<div class="l"><span>${esc(e.label)}</span><span class="muted">To schedule</span></div>`:e.type==="free"?`<div class="l free"><span>${esc(e.label)}</span><span>On the house</span></div>`:`<div class="l"><span>${esc(e.label)}</span><span>${usd(e.amount)}</span></div>`));
  (b.payments||[]).forEach(x=>lines.push(`<div class="l"><span class="muted">${x.kind==="tip"?"Tip":"Paid"} · ${esc(x.method)}</span><span>${x.kind==="tip"?"":"− "}${usd(x.amount)}</span></div>`));
  $("jobBody").innerHTML=`<div style="display:grid;gap:18px">
   <div class="sumhead"><span class="ico">${svg(p.icon)}</span><div><span class="tag">Your job</span><h2 style="font-size:1.9rem">${esc(b.svcName)}</h2></div></div>
   <p class="muted">${fmt(fromIso(b.date))}, ${esc(b.time)} · ${esc(b.address)} · with Alex Montalbano</p>
   <div class="track">${STAGES.map((s,i)=>`<div class="${i<=si?"on":""}">${STAGE_LABEL[s]}</div>`).join("")}</div>
   ${t.pending.map(e=>`<div class="approve"><b>Your pro needs ${e.hours<1?"30 more minutes":e.hours+" more hour"+(e.hours>1?"s":"")}</b><p class="muted" style="font-size:.92rem">${usd(e.amount)} at $80/hr. Approve and pay, or ask us to come back another day.</p><div class="btnrow"><button class="btn sm" data-approve="${e.id}">Approve ${usd(e.amount)}</button><button class="btn ghost sm" data-decline="${e.id}">Come back another day</button></div></div>`).join("")}
   <div class="card"><h3>Bill</h3><div class="lines">${lines.join("")}</div>
    <div class="bal"><span>${t.balance>0?"Balance due":"All paid"}</span><span>${usd(Math.max(t.balance,0))}</span></div>
    ${t.balance>0?`<p class="muted" style="font-size:.9rem">Pay now, or pay in cash and we'll mark it paid.</p>${XP("data-paybal")}`:""}</div>
   <div class="card"><h3>${t.tips?"Thanks for the tip!":"Leave a tip for your pro"}</h3>${t.tips?`<p class="muted">${usd(t.tips)} sent. Your pro appreciates it.</p>`:`<p class="muted" style="font-size:.92rem">Always optional. 100% goes to your pro.</p><div class="tips">${[10,15,20].map(x=>{const v=Math.max(5,Math.round(t.owed*x)/100);return `<button class="hr" data-tip="${v}">${x}% · ${usd(v)}</button>`}).join("")}<button class="hr" data-tip="custom">Other</button></div><div class="inline" id="tipCustom" hidden><input id="tipAmt" class="amt" inputmode="decimal" placeholder="$" aria-label="Tip amount"><button class="btn sm" id="tipGo">Send tip</button></div>`}</div>
   <p class="muted" style="font-size:.84rem">Questions? Text your pro at ${BIZ.phone}.</p></div>`;
  const J=$("jobBody");
  J.querySelectorAll("[data-approve]").forEach(x=>x.onclick=()=>{const ex=(b.extras||[]).map(e=>e.id===x.dataset.approve?{...e,status:"approved"}:e);const e=ex.find(e=>e.id===x.dataset.approve);
    store.update(b.id,{extras:ex,payments:[...(b.payments||[]),{kind:"pay",method:"Apple Pay",amount:e.amount,note:"Extra time",at:Date.now()}]})});
  J.querySelectorAll("[data-decline]").forEach(x=>x.onclick=()=>{const ex=(b.extras||[]).filter(e=>e.id!==x.dataset.decline);ex.push({id:"n"+Date.now(),type:"note",label:"Return visit to finish the job",amount:0});store.update(b.id,{extras:ex})});
  J.querySelectorAll("[data-paybal]").forEach(x=>x.onclick=()=>store.update(b.id,{payments:[...(b.payments||[]),{kind:"pay",method:x.dataset.paybal,amount:t.balance,at:Date.now()}]}));
  J.querySelectorAll("[data-tip]").forEach(x=>x.onclick=()=>{if(x.dataset.tip==="custom"){$("tipCustom").hidden=false;$("tipAmt").focus();return}tip(b,+x.dataset.tip)});
  if($("tipGo"))$("tipGo").onclick=()=>{const v=parseFloat($("tipAmt").value.replace(/[^0-9.]/g,""));if(v>0)tip(b,v)};
}
const tip=(b,amt)=>store.update(b.id,{payments:[...(b.payments||[]),{kind:"tip",method:"Apple Pay",amount:Math.round(amt*100)/100,at:Date.now()}]});

/* ---------- Alex's dashboard ---------- */
let DASH=[],INQ=[],dashFilter="upcoming";
function openDash(){
  if(!IS_OWNER&&DB){$("dashBody").innerHTML=`<div class="locked"><h2>Alex's dashboard</h2><p class="muted">Only your pro can see this page.</p></div>`;return}
  if(unsubDash.length)return renderDash();
  $("dashBody").innerHTML='<p class="muted">Loading jobs…</p>';
  unsubDash.push(store.watchAll("bookings",rows=>{if(rows){DASH=rows;renderDash()}}));
  unsubDash.push(store.watchAll("inquiries",rows=>{if(rows){INQ=rows;renderDash()}}));
}
function renderDash(){
  const rows=DASH.slice().sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  const shown=dashFilter==="messages"?[]:rows.filter(b=>dashFilter==="all"?true:dashFilter==="done"?b.status==="done":b.status!=="done");
  const sum=k=>rows.reduce((a,b)=>a+totals(b)[k],0),open=rows.reduce((a,b)=>a+Math.max(totals(b).balance,0),0);
  $("dashBody").innerHTML=`<div class="dash-top"><div><span class="tag">Alex's dashboard</span><h2>Jobs</h2></div>
   <div class="seg" style="margin:0;grid-template-columns:repeat(4,auto)" id="dashSeg">${[["upcoming","Upcoming"],["done","Done"],["all","All"],["messages","Messages ("+INQ.length+")"]].map(([f,l])=>`<button data-f="${f}" aria-pressed="${dashFilter===f}">${l}</button>`).join("")}</div></div>
   <div class="stats"><div class="stat"><span>Jobs today</span><b>${rows.filter(b=>b.date===iso(new Date())).length}</b></div><div class="stat"><span>Collected</span><b>${usd(sum("paid"))}</b></div><div class="stat"><span>Tips</span><b>${usd(sum("tips"))}</b></div><div class="stat"><span>Still owed</span><b>${usd(open)}</b></div></div>
   ${dashFilter==="messages"?`<div class="jobs">${INQ.length?INQ.sort((a,b)=>b.at-a.at).map(m=>`<div class="job"><div class="jobhead"><h3>${esc(m.name)}</h3><span class="pill">${esc(m.topic)}</span></div><p class="sel" style="font-weight:600">${esc(m.reach)}</p><p class="muted" style="white-space:pre-wrap">${esc(m.msg)}</p></div>`).join(""):`<div class="card"><b>No messages yet</b><p class="muted">Contact form messages show up here.</p></div>`}</div>`
   :`<div class="jobs">${shown.length?shown.map(jobCard).join(""):`<div class="card" style="text-align:center"><b>No jobs here yet</b><p class="muted">New bookings show up here live.</p></div>`}</div>`}`;
  $("dashSeg").onclick=e=>{const x=e.target.closest("button");if(x){dashFilter=x.dataset.f;renderDash()}};
  $("dashBody").querySelectorAll(".job[data-id]").forEach(el=>wireJob(el,DASH.find(b=>b.id===el.dataset.id)));
}
function infoBlock(b){const rows=[["Email",b.email],["Own or rent",b.ownRent],["Gate code",b.accessCode],["Includes",b.includedHrs?incTxt(b.includedHrs):""],["Travel fee",b.travelFee!=null?usd(b.travelFee):""],...Object.entries(b.answers||{}),["Note",b.notes],["Also wants (coming soon)",(b.alsoWant||[]).join(", ")],["Agreed",b.agreement?new Date(b.agreement.agreedAt||b.agreement.signedAt).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):""]].filter(r=>r[1]);
  return `<details class="more"><summary>Full booking info</summary><div class="rows" style="margin-top:8px">${rows.map(r=>`<div><span>${esc(r[0])}</span><span>${esc(r[1])}</span></div>`).join("")}</div></details>`}
function jobCard(b){const t=totals(b),si=STAGES.indexOf(b.status),next=STAGES[si+1],nl={onway:"I'm on my way",working:"Start job",done:"Mark done"}[next];
  return `<div class="job" data-id="${b.id}"><div class="jobhead"><div style="display:grid;gap:4px;min-width:0"><h3>${esc(b.name)} · ${esc(b.svcName)}</h3>
   <div class="meta"><span>${fmt(fromIso(b.date))}, ${esc(b.time)}</span><span>${esc(b.address)}</span><span class="sel">${esc(b.phone)}</span></div></div>
   <div class="pills"><span class="pill ${b.status==="done"?"ok":"blue"}">${STAGE_LABEL[b.status]}</span>${t.pending.length?'<span class="pill warn">Waiting on approval</span>':""}</div></div>
   ${b.notes?`<p class="muted" style="font-size:.9rem;border-left:3px solid var(--glow);padding-left:10px">${esc(b.notes)}</p>`:""}
   ${infoBlock(b)}
   <div class="bal"><span>Total ${usd(t.owed)} · Paid ${usd(t.paid)}${t.tips?" · Tip "+usd(t.tips):""}</span><span>${t.balance>0?usd(t.balance)+" due":"Paid up"}</span></div>
   <div class="acts">${nl?`<button class="chipbtn primary" data-act="stage" data-to="${next}">${nl}</button>`:""}
    <button class="chipbtn" data-act="time" data-h="0.5">Ask +30 min</button><button class="chipbtn" data-act="time" data-h="1">Ask +1 hr</button><button class="chipbtn" data-act="back">Coming back</button>
    ${t.balance>0?`<button class="chipbtn money" data-act="cash">Paid cash ${usd(t.balance)}</button>`:""}<a class="chipbtn" href="#job-${b.id}" style="text-decoration:none">Customer view</a></div>
   <details class="more"><summary>Add parts or a free extra</summary><div style="display:grid;gap:10px;margin-top:10px">
    <div class="inline"><input placeholder="Parts, e.g. 60A breaker + wire" data-in="pl" aria-label="Parts"><input class="amt" placeholder="$" inputmode="decimal" data-in="pa" aria-label="Parts cost"><button class="chipbtn" data-act="parts">Add parts</button></div>
    <div class="inline"><input placeholder="Free extra, e.g. Swapped porch bulb" data-in="free" aria-label="Free extra"><button class="chipbtn" data-act="free">On the house</button></div></div></details></div>`}
function wireJob(el,b){el.querySelectorAll("[data-act]").forEach(x=>x.onclick=()=>{
  const ex=[...(b.extras||[])],pays=[...(b.payments||[])],t=totals(b),nid="x"+Math.random().toString(36).slice(2,8);
  switch(x.dataset.act){
   case"stage":return store.update(b.id,{status:x.dataset.to});
   case"time":{const h=+x.dataset.h;ex.push({id:nid,type:"time",hours:h,amount:h*BIZ.hourly,label:`Extra time · ${h<1?"30 min":h+" hr"}`,status:"pending"});return store.update(b.id,{extras:ex})}
   case"back":ex.push({id:nid,type:"note",label:"Return visit to finish the job",amount:0});return store.update(b.id,{extras:ex});
   case"cash":pays.push({kind:"pay",method:"Cash",amount:t.balance,at:Date.now()});return store.update(b.id,{payments:pays});
   case"parts":{const l=el.querySelector('[data-in="pl"]').value.trim()||"Parts",a=parseFloat(el.querySelector('[data-in="pa"]').value.replace(/[^0-9.]/g,""));if(!(a>0))return;ex.push({id:nid,type:"parts",label:l,amount:a});return store.update(b.id,{extras:ex})}
   case"free":{const v=el.querySelector('[data-in="free"]').value.trim();if(!v)return;ex.push({id:nid,type:"free",label:v,amount:0});return store.update(b.id,{extras:ex})}
  }})}

function wireSoon(){$("soonForm").addEventListener("submit",async e=>{e.preventDefault();
  const picks=[...document.querySelectorAll("#soonChips [aria-pressed=true]")].map(b=>b.dataset.v);
  const ok=picks.length&&val("sName")&&val("sReach");$("sErr").hidden=!!ok;if(!ok)return;
  const d={name:val("sName"),reach:val("sReach"),zip:val("sZip"),topic:"Coming soon interest",msg:"Wants: "+picks.join(", "),interest:picks,at:Date.now()};
  try{await store.inquiry(d);await sendForm("interest",{name:d.name,reach:d.reach,zip:d.zip,interest:picks})}catch(err){}
  $("soonForm").hidden=true;$("sOk").hidden=false})}
async function loadBooked(){const id=new URLSearchParams(location.search).get("session_id");if(!STATIC||!id)return;
  try{const r=await fetch("/api/session?id="+encodeURIComponent(id));const s=await r.json();if(!r.ok)return;
    if(s.kind&&s.kind!=="booking"){$("bkTitle").textContent="Payment received. Thank you!";$("bkText").textContent="A receipt is on its way to "+(s.email||"your email")+"."}
    else{$("bkTitle").textContent=`You're booked${s.first?", "+s.first:""}!`;$("bkText").textContent=`A confirmation is on its way to ${s.email||"your email"}. We'll text you the day before to confirm.`}
    $("bkRows").innerHTML=[["Service",s.service],["When",s.date&&s.time?s.date+", "+s.time:""],["Where",s.address],["Paid",s.total!=null?usd(s.total):""]].filter(r=>r[1]).map(r=>`<div><span>${r[0]}</span><span>${esc(r[1])}</span></div>`).join("")}catch(e){}}
let payKind="extra";
function payFeeTxt(){const v=parseFloat(val("payAmt").replace(/[^0-9.]/g,""));const el=$("payFee");if(!el)return;if(payKind==="tip"){el.textContent="No service fee on tips.";return}el.textContent=v>=5?`Plus 3% service fee (${usd(Math.round(v*3)/100)}). Total ${usd(Math.round(v*103)/100)}.`:"A 3% service fee is added at checkout. No fee on tips."}
$("payAmt").addEventListener("input",payFeeTxt);
$("payKind").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;payKind=b.dataset.v;[...$("payKind").children].forEach(x=>x.setAttribute("aria-pressed",x===b));payFeeTxt()});
$("payForm").addEventListener("submit",async e=>{e.preventDefault();const amt=parseFloat(val("payAmt").replace(/[^0-9.]/g,""));
  const err=!(amt>=5&&amt<=2500)?"Enter an amount between $5 and $2,500.":!val("payName")||!/^\S+@\S+\.\S+$/.test(val("payEmail"))?"Add your name and email.":"";
  $("payFormErr").hidden=!err;$("payFormErr").textContent=err;if(err)return;
  if(!STATIC){$("payFormErr").hidden=false;$("payFormErr").textContent="Payments work on the live site.";return}
  try{const out=await api("/api/pay",{kind:payKind,amount:amt,name:val("payName"),email:val("payEmail"),note:val("payNote")});location.href=out.url}catch(er){$("payFormErr").hidden=false;$("payFormErr").textContent=er.message}});
/* ---------- contact ---------- */
$("contactForm").addEventListener("submit",async e=>{e.preventDefault();
  if(val("cWeb"))return;
  const ok=val("cName")&&/^\S+@\S+\.\S+$/.test(val("cEmail"))&&val("cMsg");$("cErr").hidden=!!ok;if(!ok)return;
  const d={name:val("cName"),email:val("cEmail"),phone:val("cPhone"),town:val("cTown"),topic:$("cTopic").value,message:val("cMsg")};
  try{await store.inquiry({...d,reach:d.email,msg:d.message,at:Date.now()});await sendForm("contact",d)}catch(err){if(STATIC){$("cErr").hidden=false;$("cErr").textContent="Couldn't send. Please call or text "+BIZ.phone+".";return}}
  $("contactForm").hidden=true;$("cOk").hidden=false});

/* ---------- start ---------- */
showStep(1);route();
if(STATIC){const q=new URLSearchParams(location.search).get("svc");if(q&&P(q)){pickPkg(q)}
  document.querySelectorAll('a[href="#alex"],a[href="/alex/"],#dashLink').forEach(a=>a.remove());
  $("requestBtn").hidden=false;$("payWith").hidden=false;document.querySelectorAll(".paybtns,.paymore").forEach(e=>e.hidden=true);
  if(new URLSearchParams(location.search).get("canceled")){setTimeout(()=>{$("payErr").hidden=false;$("payErr").textContent="Checkout was canceled. Nothing was charged. You can try again below."},50)}
  new MutationObserver(()=>fixLinks()).observe(document.body,{childList:true,subtree:true});fixLinks()}
(async()=>{try{const c=window.claude;if(STATIC||!c||!c.use)return;
  const [db,user]=await Promise.all([c.use("db"),c.use("user")]);
  IS_OWNER=user?.isOwner()??false;$("dashLink").hidden=!IS_OWNER;
  if(db){DB=db;for(const [id,d] of Object.entries(mem.docs)){try{await db.doc("bookings/"+id).set(d)}catch(e){}}
    if(unsubJob||unsubDash.length){unsubDash.forEach(f=>f());unsubDash=[];route()}}
}catch(e){}})();

/* share / forward */
(function(){
  var URL_="https://homestallers.com/";
  var MSG="Homestallers: trusted local pros in Jacksonville for TV mounting, furniture assembly, smart home setup and more. Flat prices, open 7 days.";
  function note(el,t){var s=el.closest(".share-strip");var o=s&&s.querySelector(".share-ok");if(o){o.textContent=t;clearTimeout(o._t);o._t=setTimeout(function(){o.textContent=""},4000)}else if(el.dataset){var old=el.textContent;el.textContent=t;setTimeout(function(){el.textContent=old},2500)}}
  function copy(el){
    var done=function(){note(el,"Link copied. Paste it in a text, email or group post.")};
    var fallback=function(){try{var t=document.createElement("textarea");t.value=URL_;t.setAttribute("readonly","");t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();t.setSelectionRange(0,999);var ok=document.execCommand("copy");t.remove();ok?done():note(el,"Copy this link: "+URL_)}catch(e){note(el,"Copy this link: "+URL_)}};
    try{if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(URL_).then(done,fallback)}else fallback()}catch(e){fallback()}
  }
  document.addEventListener("click",function(e){
    var sh=e.target.closest("[data-share]"),cp=e.target.closest("[data-copy]");
    if(sh){e.preventDefault();
      if(navigator.share){navigator.share({title:"Homestallers",text:MSG,url:URL_}).catch(function(){})}
      else copy(sh);
    }else if(cp){e.preventDefault();copy(cp)}
  });
  function setSms(){document.querySelectorAll("[data-sms]").forEach(function(a){a.setAttribute("href","sms:?&body="+encodeURIComponent(MSG+" "+URL_))})}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setSms);else setSms();
})();

/* make phone numbers and emails clickable everywhere */
function linkContacts(root){
  const re=/\(631\) 304-4809|homestallers@gmail\.com/g;
  const w=document.createTreeWalker(root||document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{if(!re.test(n.nodeValue)){re.lastIndex=0;return NodeFilter.FILTER_REJECT}re.lastIndex=0;const p=n.parentElement;return p&&!p.closest("a,button,script,style,textarea,input,option,title")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
  const nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  nodes.forEach(n=>{const frag=document.createDocumentFragment();let last=0;n.nodeValue.replace(re,(m,i)=>{frag.append(n.nodeValue.slice(last,i));const a=document.createElement("a");a.textContent=m;a.className="contact-link";a.href=m.includes("@")?"mailto:"+m:"tel:+16313044809";frag.append(a);last=i+m.length});frag.append(n.nodeValue.slice(last));n.replaceWith(frag)});
}

linkContacts();
