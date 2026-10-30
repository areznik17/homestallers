<script>
const I={
 ev:'<path d="M7 3h7a2 2 0 0 1 2 2v15H5V5a2 2 0 0 1 2-2Z"/><path d="M3 20h15M16 9h2a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V8l-2-2"/><path d="M11 7l-2.5 4h3L9 15"/>',
 outlet:'<rect x="4" y="3" width="16" height="18" rx="4"/><path d="M9.5 8v3M14.5 8v3"/><path d="M10 15.5a2 2 0 0 1 4 0V17h-4Z"/>',
 fan:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7s2 4-4 7ZM14 12c4 0 7 1 7 4s-4 2-7-4ZM12 14c0 4-1 7-4 7s-2-4 4-7ZM10 12c-4 0-7-1-7-4s4-2 7 4Z"/>',
 outdoor:'<path d="M9 3h6l1 5H8Z"/><path d="M8 8h8v4a4 4 0 0 1-8 0Z"/><path d="M12 16v5M4 13l-2 1M20 13l2 1M5 18l-1.5 1.5M19 18l1.5 1.5"/>',
 landscape:'<path d="M12 21V10"/><path d="M12 10c-3 0-6-2-6-6 3 0 6 2 6 6Zm0 0c3 0 6-2 6-6-3 0-6 2-6 6Z"/><path d="M5 21h14"/><circle cx="6" cy="16" r="1.5"/><circle cx="18" cy="16" r="1.5"/>',
 smart:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
 tv:'<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
 bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/>',
 pin:'<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>'
};
const svg=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;
const ARR='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const $=id=>document.getElementById(id);
const esc=t=>String(t??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const usd=n=>"$"+(Math.round(n*100)/100).toLocaleString("en-US",{minimumFractionDigits:n%1?2:0,maximumFractionDigits:2});

/* ---------- pricing zones (distance from central Jacksonville) ---------- */
const ZONES=[
 {id:1,rate:80,label:"Within 10 miles",areas:"Downtown, Riverside, Avondale, San Marco, Arlington, Southside, Mandarin, Baymeadows, Westside"},
 {id:2,rate:100,label:"10 to 20 miles",areas:"Jax Beach, Atlantic & Neptune Beach, Northside, Orange Park, Fruit Cove, Nocatee"},
 {id:3,rate:120,label:"20 to 30 miles",areas:"Ponte Vedra, St. Johns, Fleming Island, Green Cove Springs, Middleburg, Yulee"}
];
const ZIPZONE={};
"32099 32202 32203 32204 32205 32206 32207 32208 32209 32210 32211 32212 32216 32217 32244 32246 32254 32256 32257 32277 32223".split(" ").forEach(z=>ZIPZONE[z]=1);
"32218 32219 32220 32221 32222 32224 32225 32226 32233 32250 32266 32258 32073 32065 32259 32081 32234".split(" ").forEach(z=>ZIPZONE[z]=2);
"32082 32092 32003 32043 32068 32097 32011 32095 32084 32080 32086 32033 32046".split(" ").forEach(z=>ZIPZONE[z]=3);
const zoneFor=zip=>ZONES.find(z=>z.id===ZIPZONE[zip])||null;

/* ---------- services ---------- */
const SERVICES=[
 {id:"ev",slug:"ev-charger-installation-jacksonville",icon:"ev",name:"Tesla & EV chargers",hrs:[3,5],blurb:"Charge at home, fast.",
  h1:"Tesla charger installation in Jacksonville",intro:"Get a Tesla Wall Connector or a 240V outlet put in your garage. I check your panel first so it charges at full speed.",
  points:["Panel check before I start","New breaker and the right wire","Clean, neat install on the wall","Set up and tested with your car","Works for any EV, not just Tesla"],
  body:"Most homes in Jacksonville have room in the panel for a charger. If yours doesn't, I'll tell you your options before any work starts.",
  extra:[["Charger","You buy it or I get it"],["Wire, breaker, parts","Billed at cost"]],
  faq:[["How long does it take?","Usually 3 to 5 hours."],["Do I need a permit?","Often, yes. I'll tell you what your job needs."],["Wall Connector or outlet?","The Wall Connector is a little faster. The outlet costs less. Both charge your car overnight."]]},
 {id:"sink",slug:"sink-faucet-repair-jacksonville",icon:"drop",name:"Sinks, faucets & toilets",hrs:[1,2],blurb:"Leaks, clogs and drips fixed.",
  h1:"Sink and faucet repair in Jacksonville",intro:"Leaky faucet, slow drain or a toilet that keeps running? I fix the small stuff so you don't have to wait on a big plumbing company.",
  points:["Leaky or dripping faucets","Clogged sinks and slow drains","New faucets put in","Running or wobbly toilets","Garbage disposal swaps"],
  body:"Most of these take an hour or less. If it turns out to be a bigger plumbing job, I'll tell you right away.",
  extra:[["Faucet or parts","Billed at cost"]],
  faq:[["Can you put in a faucet I bought?","Yes. Have it there when I arrive."],["What if it's a big leak?","Shut off the water under the sink, then book the soonest time or text me."]]},
 {id:"smart",slug:"tech-help-smart-home-jacksonville",icon:"smart",name:"Tech help",hrs:[1,2],blurb:"Wi-Fi, TVs, doorbells, cameras.",
  h1:"Home tech help in Jacksonville",intro:"Wi-Fi that won't reach the bedroom, a new doorbell camera, a TV that needs setting up. I'll get it working and show you how to use it.",
  points:["Wi-Fi and mesh routers","Ring and Nest doorbells and cameras","Smart thermostats and locks","TV, streaming and sound setup","Printers, phones and new devices"],
  body:"No question is too small. I explain things in plain English.",
  extra:[["Devices","You buy them or I get them"]],
  faq:[["Can you help my parents with their tech?","Yes. That's one of the most common things I do."]]},
 {id:"fan",slug:"ceiling-fan-light-installation-jacksonville",icon:"fan",name:"Ceiling fans & lights",hrs:[1,2],blurb:"Fans and fixtures put up right.",
  h1:"Ceiling fan and light installation in Jacksonville",intro:"New ceiling fan, a light over the kitchen island, or recessed lights. Hung level and solid, with no wobble.",
  points:["Ceiling fans","Chandeliers and pendant lights","Recessed lights","Under-cabinet lights","Old fixture hauled away"],
  body:"A swap usually takes about an hour.",
  extra:[["Fan box or parts","Billed at cost"]],
  faq:[["Can you add a fan where there's only a light?","Usually, yes."]]},
 {id:"outlet",slug:"outlet-switch-installation-jacksonville",icon:"outlet",name:"Outlets & switches",hrs:[1,2],blurb:"New outlets, dimmers, USB.",
  h1:"Outlet and switch installation in Jacksonville",intro:"Add an outlet where you need one, swap old ones, or put dimmers and smart switches in.",
  points:["New outlets","Outlets for kitchens and bathrooms","USB outlets","Dimmers and smart switches","Replacing old or loose outlets"],
  body:"I can usually do 4 to 6 swaps in an hour.",
  extra:[["Outlets and switches","Billed at cost"]],
  faq:[["Can you do a bunch at once?","Yes. Book a few hours and give me the list."]]},
 {id:"tv",slug:"tv-mounting-jacksonville",icon:"tv",name:"TV mounting",hrs:[1,3],blurb:"On the wall, cords hidden.",
  h1:"TV mounting in Jacksonville",intro:"Your TV on the wall, level and secure, with the cords hidden.",
  points:["Mounted into the studs","Cords hidden in the wall","Outlet behind the TV","Over the fireplace","Soundbars too"],
  body:"Brick and block walls are fine. I bring the right hardware.",
  extra:[["Mount","You buy it or I get it"]],
  faq:[["How long does it take?","About 1 to 2 hours."]]},
 {id:"outdoor",slug:"outdoor-security-lighting-jacksonville",icon:"outdoor",name:"Outdoor lights",hrs:[1,3],blurb:"Porch, flood and motion lights.",
  h1:"Outdoor lighting in Jacksonville",intro:"Brighter driveways and porch lights that turn on by themselves.",
  points:["Porch lights","Motion floodlights","Lights that turn on at dusk","Lights under the roof edge","Weatherproof covers"],
  body:"Near the beach, I use fixtures that hold up to salt air.",
  extra:[["Fixtures","You buy them or I get them"]],
  faq:[["Can I control them from my phone?","Yes, with a smart switch or smart light."]]},
 {id:"landscape",slug:"landscape-lighting-jacksonville",icon:"landscape",name:"Landscape lighting",hrs:[4,8],blurb:"Light up the yard at night.",
  h1:"Landscape lighting in Jacksonville",intro:"Lights on your palms and trees, along the walkway, or by the pool. Low voltage, LED, on a timer.",
  points:["Lights on trees and the house","Path lights","Pool and patio lights","Built for Florida weather","Fixing old systems"],
  body:"Not sure what you want? Book 1 hour and we'll plan it together.",
  extra:[["Lights, wire, transformer","Billed at cost"]],
  faq:[["What does it cost to run?","A few dollars a month."]]},
 {id:"call",slug:"electrical-repair-jacksonville",icon:"bolt",name:"Electrical repairs",hrs:[1,2],blurb:"Tripping, flickering or dead.",
  h1:"Electrical repair in Jacksonville",intro:"Breaker keeps tripping, lights flicker, or an outlet stopped working. I find the problem and fix it.",
  points:["Breakers that keep tripping","Flickering lights","Dead outlets","Warm or buzzing outlets","Storm damage"],
  body:"Most problems are found and fixed in the first hour or two.",
  extra:[["Parts","Billed at cost"]],
  faq:[["Is a warm outlet an emergency?","Stop using it and turn off its breaker. Then book the soonest time."]]},
 {id:"list",slug:"home-help-jacksonville",icon:"list",name:"Anything else",hrs:[2,4],blurb:"Your to-do list, done.",
  h1:"Home help and handyman services in Jacksonville",intro:"Shelves to hang, furniture to build, a smoke alarm that won't stop beeping. Book a few hours and hand me your list.",
  points:["Hanging shelves, mirrors and pictures","Building furniture","Smoke alarm swaps","High bulbs you can't reach","Small fixes you keep putting off"],
  body:"Write your list when you book. I'll work through it in order.",
  extra:[["Parts","Billed at cost"]],
  faq:[["What if we run out of time?","I can stay longer at the same rate, or come back."]]}
];
const AREAS=[
 {slug:"electrician-jacksonville-beach",name:"Jacksonville Beach",also:"Atlantic Beach · Neptune Beach",zone:2,note:"Salt air is hard on anything electrical near the ocean. I use sealed outdoor boxes, marine-grade fixtures and corrosion-resistant connections on every beach job.",top:["outdoor","landscape","ev"]},
 {slug:"electrician-mandarin",name:"Mandarin",also:"Julington Creek · Loretto",zone:1,note:"Big lots and big live oaks make Mandarin perfect for landscape lighting, and a lot of homes here are ready for an EV charger in the garage.",top:["landscape","ev","fan"]},
 {slug:"electrician-ponte-vedra-nocatee",name:"Ponte Vedra & Nocatee",also:"Ponte Vedra Beach · Nocatee",zone:2,note:"Newer builds in Nocatee usually have panels with room for a 60A charger circuit. I do a lot of Wall Connectors, smart switches and recessed lighting here.",top:["ev","smart","outlet"]},
 {slug:"electrician-riverside-avondale",name:"Riverside & Avondale",also:"Murray Hill · Ortega",zone:1,note:"Older bungalows here often have two-prong outlets, overloaded circuits and fixtures from decades ago. I update them carefully without tearing up plaster.",top:["outlet","fan","call"]},
 {slug:"electrician-san-marco",name:"San Marco",also:"San Jose · Southbank",zone:1,note:"Lots of 1920s to 1950s homes with original wiring quirks. Outlet upgrades, new fixtures and fans are the most common jobs.",top:["outlet","fan","tv"]},
 {slug:"electrician-southside-baymeadows",name:"Southside & Baymeadows",also:"Tinseltown · Deerwood",zone:1,note:"Townhomes and newer subdivisions. Mostly TV mounting, smart doorbells, fans and EV chargers.",top:["tv","smart","ev"]},
 {slug:"electrician-orange-park-fleming-island",name:"Orange Park & Fleming Island",also:"Clay County",zone:2,note:"I cover Clay County too. Outdoor lighting, fans and chargers are the regulars. Fleming Island is in the 20 to 30 mile zone.",top:["outdoor","fan","ev"]}
];
const S=id=>SERVICES.find(s=>s.id===id);
const hrsTxt=s=>s.hrs[0]===s.hrs[1]?s.hrs[0]+" hr":s.hrs[0]+"–"+s.hrs[1]+" hrs";
const tile=s=>`<a class="tile" href="#${s.slug}"><span class="ico">${svg(s.icon)}</span><h3>${s.name}</h3><p>${s.blurb}</p><span class="foot"><span class="price">Typically ${hrsTxt(s)}</span><span class="arrow">${ARR}</span></span></a>`;
const zoneCard=(z,i)=>`<div class="zone${i===0?" hot":""}"><span class="muted" style="font-weight:700">${z.label}</span><div class="rate">$${z.rate}<small> / hour</small></div><p class="muted" style="font-size:.88rem">${z.areas}</p></div>`;

$("homeTiles").innerHTML=SERVICES.slice(0,8).map(tile).join("");
$("allTiles").innerHTML=SERVICES.map(tile).join("");
$("homeZones").innerHTML=$("priceZones").innerHTML=ZONES.map(zoneCard).join("");
$("areaTiles").innerHTML=AREAS.map(a=>`<a class="tile" href="#${a.slug}"><span class="ico">${svg("pin")}</span><h3>${a.name}</h3><p>${a.also}</p><span class="foot"><span class="price">$${ZONES[a.zone-1].rate}/hr</span><span class="arrow">${ARR}</span></span></a>`).join("");
$("homeAreas").innerHTML=AREAS.map(a=>`<a href="#${a.slug}">${a.name}</a>`).join("")+'<a href="#areas">All areas →</a>';
$("fSvc").innerHTML=SERVICES.map(s=>`<a href="#${s.slug}">${s.name}</a>`).join("");
$("fArea").innerHTML=AREAS.map(a=>`<a href="#${a.slug}">${a.name}</a>`).join("");
$("cTopic").innerHTML=SERVICES.map(s=>`<option>${s.name}</option>`).join("")+"<option>Something else</option>";
$("pZip").addEventListener("input",e=>{const v=e.target.value.trim();const z=zoneFor(v);
  $("pZipOut").innerHTML=v.length<5?"Enter a Jacksonville-area ZIP.":z?`<b>$${z.rate}/hr</b> · ${z.label.toLowerCase()}`:`Outside my usual area. <a href="#contact">Send me a message</a>.`});

/* ---------- long-form SEO content ---------- */
const HOODS=["Riverside","Avondale","Murray Hill","Ortega","San Marco","San Jose","Southbank","Downtown","Springfield","Arlington","Southside","Baymeadows","Deerwood","Tinseltown","Mandarin","Julington Creek","Fruit Cove","St. Johns","Nocatee","Ponte Vedra Beach","Jacksonville Beach","Neptune Beach","Atlantic Beach","Intracoastal West","Northside","Oceanway","Westside","Argyle Forest","Orange Park","Fleming Island"];
const ZIPS="32202, 32204, 32205, 32207, 32210, 32211, 32216, 32217, 32223, 32224, 32225, 32246, 32250, 32256, 32257, 32258, 32259, 32266, 32073, 32081 and 32082";

const LONG={
 list:{
  title:"Home Help & Handyman Services in Jacksonville, FL | Porchlight",
  desc:"Trusted home help in Jacksonville, FL. Small repairs, odd jobs, furniture assembly, shelves, smoke alarms and more. $80/hr, pay after the job. Book online with Alex.",
  kicker:"Handyman and home help · Jacksonville, FL",
  sections:[
   {h:"Home help in Jacksonville, without the runaround",p:["Every house has a list. A shelf that never got hung. A smoke alarm chirping at 3 a.m. A bathroom fan that rattles. Furniture still in the box. Porchlight is a simple way to get that list done by one trusted person in Jacksonville.","You book a time online, tell Alex what you need, and he shows up ready to work. You pay by the hour, after the job is done. No contracts for small stuff, no surprise trip charges, and no sales pitch."]},
   {h:"Odd jobs and small repairs we do",list:["Hanging shelves, mirrors, pictures and curtain rods","Building furniture from IKEA, Wayfair and Amazon","Replacing smoke and carbon monoxide detectors","Changing high ceiling bulbs and light fixtures","Fixing loose cabinet doors, handles and hinges","Installing towel bars, hooks and bathroom hardware","Caulking tubs, sinks and backsplashes","Replacing door knobs, deadbolts and smart locks","Swapping outlet covers and switch plates","Fixing doorbells and chimes","Childproofing: outlet covers, cabinet locks, TV anchors","Getting your home ready to sell or rent"]},
   {h:"Why Jacksonville homeowners book Porchlight",p:["Most handyman companies send whoever is free that day. With Porchlight, every job is done by Alex Montalbano. He knows electrical work, so the jobs that touch wiring, like light fixtures, fans and doorbells, get done safely the first time.","He also covers the jobs most handymen skip, like EV chargers and tech setup, so one visit can take care of the whole list."]},
   {h:"How handyman pricing works",p:["Home help is billed by the hour. It's $80 an hour within 10 miles of central Jacksonville, $100 an hour from 10 to 20 miles out, and $120 an hour from 20 to 30 miles out. Parts are extra, at cost.","Most to-do lists take 2 to 4 hours. Book what you think you need. If the list runs long, Alex can stay at the same rate or come back another day. You pay when the work is done, in cash or online."]},
   {h:"Tips for getting the most out of your visit",list:["Write your full list when you book, most important first","Have parts, fixtures or furniture on site if you bought them","Clear the area so Alex can get right to work","Text photos of anything tricky to (631) 304-4809"]}
  ],
  faq:[["What does a handyman cost in Jacksonville?","Porchlight charges $80 an hour within 10 miles of central Jacksonville, with a 1 hour minimum. Farther areas are $100 or $120 an hour. Parts are extra."],["Do you have a minimum?","Yes, 1 hour. Most people book 2 to 4 hours and give Alex a list."],["Can you do several small jobs in one visit?","Yes. That's the best way to use your time. Put everything in your booking notes."],["Do I pay up front?","No. You pay after the job, in cash or online with card, Apple Pay, Google Pay or PayPal."],["Do you bring tools and supplies?","Yes, Alex brings his own tools. Parts like anchors or caulk are billed at cost. Bigger items like fixtures you can buy or he can pick up."],["Do you work on weekends?","Monday through Saturday, 8 a.m. to 6 p.m."],["What areas do you cover?","All of Jacksonville plus the Beaches, Ponte Vedra, Nocatee, St. Johns, Orange Park and Fleming Island."]]
 },
 sink:{
  title:"Sink, Faucet & Toilet Repair in Jacksonville, FL | Porchlight",
  desc:"Leaky faucet, clogged drain or running toilet in Jacksonville? Porchlight fixes sinks, faucets, toilets and garbage disposals. $80/hr, pay after the job.",
  kicker:"Sink and faucet repair · Jacksonville, FL",
  sections:[
   {h:"Sink and faucet repair in Jacksonville",p:["A dripping faucet wastes water and runs up your JEA bill. A slow drain only gets worse. A toilet that keeps running can waste hundreds of gallons a day. These are small fixes, but they're easy to put off.","Porchlight handles the everyday sink, faucet and toilet problems that don't need a full plumbing company. Book online, describe the problem, and Alex shows up with the tools to fix it."]},
   {h:"Common sink and faucet problems we fix",list:["Leaky or dripping kitchen and bathroom faucets","Faucets with low water pressure","Clogged kitchen sinks and slow bathroom drains","Leaks under the sink from loose or worn fittings","New faucet installation, including ones you bought","Garbage disposal replacement and jams","Running, leaking or wobbly toilets","Replacing toilet flappers, fill valves and seats","Shut-off valves that won't turn or that leak","Replacing sink drains and P-traps"]},
   {h:"Installing a new faucet",p:["Bought a new faucet at Home Depot or Lowe's? Alex will take out the old one, install the new one, connect new supply lines if needed and check for leaks. Most faucet installs take about an hour.","If your shut-off valves are old and stuck, which is common in older Jacksonville homes, he'll let you know and can replace them on the same visit."]},
   {h:"When it's a bigger plumbing job",p:["Some problems need a licensed plumber, like main line backups, water heater replacement, slab leaks or moving pipes inside walls. If Alex sees one of these, he'll tell you right away and you only pay for the time he was there."]},
   {h:"What to do before Alex arrives",list:["If something is leaking, shut off the valve under the sink or behind the toilet","Clear out the cabinet under the sink","Have your new faucet or parts on site if you bought them","Text a photo of the problem to (631) 304-4809"]},
   {h:"Sink repair pricing",p:["Sink and faucet work is billed at Porchlight's hourly rate: $80 an hour within 10 miles of central Jacksonville. Most fixes take 1 hour or less. Parts like supply lines, flappers or a new disposal are billed at cost. You pay after the job."]}
  ],
  faq:[["How much does it cost to fix a leaky faucet in Jacksonville?","Most leaky faucets are fixed in about an hour, so $80 plus any parts within 10 miles of central Jacksonville."],["Can you install a faucet I already bought?","Yes. Have it on site and Alex will install it."],["Do you unclog drains?","Yes, for sinks and tubs. Main sewer line backups need a plumber with a camera and big equipment."],["Can you replace a garbage disposal?","Yes. Most swaps take about an hour. You can buy the disposal or Alex can bring one."],["My toilet keeps running. Can you fix it?","Yes. It's usually the flapper or fill valve, and it's a quick fix."],["Are you a licensed plumber?","Porchlight handles common repairs and fixture swaps. For work that needs a licensed plumber, Alex will tell you before starting."]]
 },
 ev:{
  title:"Tesla & EV Charger Installation in Jacksonville, FL | Porchlight",
  desc:"Tesla Wall Connector and EV charger installation in Jacksonville, FL. Panel check, 240V circuit, clean install. Nocatee, Mandarin, Ponte Vedra and more. Book online.",
  kicker:"EV charger installation · Jacksonville, FL",
  sections:[
   {h:"Home EV charger installation in Jacksonville",p:["Charging off a regular wall outlet adds only a few miles of range per hour. A Level 2 charger on a 240V circuit can fill most cars overnight. Porchlight installs Tesla Wall Connectors and 240V outlets for any electric car in Jacksonville and the surrounding area.","Every install starts with a check of your electrical panel. That tells us how big a charger your home can safely handle, so you get the fastest charging without tripping breakers."]},
   {h:"Tesla Wall Connector or a 240V outlet?",p:["A Tesla Wall Connector is hardwired, a little faster, and has nothing to wear out. It's the best choice if you drive a Tesla and plan to stay in the home.","A NEMA 14-50 outlet costs less and works with any mobile charger, including the one many EVs come with. It's a good pick if you might switch cars or want flexibility. Both will charge most cars from low to full overnight."]},
   {h:"What's included in an EV charger install",list:["Electrical panel and load check","New double-pole breaker sized for your charger","Copper wire sized for the circuit","Conduit run along the garage wall, neat and secure","Charger or outlet mounted where your cable reaches","Wall Connector setup in the Tesla app","Test charge with your car","Cleanup before Alex leaves"]},
   {h:"EVs we install chargers for",p:["Tesla Model 3, Model Y, Model S, Model X and Cybertruck. Ford Mustang Mach-E and F-150 Lightning. Chevy Equinox EV, Blazer EV and Bolt. Rivian R1S and R1T. Hyundai Ioniq 5 and Ioniq 6. Kia EV6 and EV9. Plus any car with a J1772 or NACS plug."]},
   {h:"How long does it take?",p:["Most garage installs where the panel is in or next to the garage take 3 to 5 hours. If the panel is on the far side of the house, or the charger goes outside, it can take longer. Book 3 hours and Alex can stay longer at the same rate if needed."]},
   {h:"Permits and safety",p:["A new 240V circuit usually needs an electrical permit in Jacksonville and St. Johns County. Alex will tell you what your job needs before he starts. If your panel is full or too small for a charger, he'll explain your options, like a lower amp charger that still fills your car overnight."]},
   {h:"EV charger installation pricing",p:["EV chargers are billed at Porchlight's hourly rate: $80 an hour within 10 miles of central Jacksonville, $100 an hour in areas like Nocatee and the Beaches, and $120 an hour in Ponte Vedra and St. Johns. Wire, breaker and conduit are billed at cost. You can buy the charger or Alex can get it. You pay after the job, in cash or online."]}
  ],
  faq:[["How much does it cost to install a Tesla charger in Jacksonville?","Most installs are 3 to 5 hours of labor at $80 to $120 an hour depending on your area, plus wire, breaker and conduit at cost. The charger itself is separate."],["How fast will my car charge?","On a 60 amp circuit, a Tesla Wall Connector adds about 44 miles of range per hour. A 14-50 outlet adds about 30."],["Can you install a charger outside?","Yes, with weatherproof parts rated for Florida rain and sun."],["Do I need a panel upgrade?","Most Jacksonville homes built after the 1990s don't. Alex checks your panel first and tells you before starting."],["Will you install a charger I bought?","Yes. Have it on site and Alex will install and set it up."],["Do you install chargers in condos and townhomes?","Often, yes, if your HOA allows it and there's a path to your parking spot. Mention it when you book."]]
 },
 smart:{
  title:"Home Tech Help & Smart Home Setup in Jacksonville, FL | Porchlight",
  desc:"In-home tech help in Jacksonville, FL. Wi-Fi, mesh routers, Ring and Nest doorbells, TVs, thermostats and helping parents with tech. $80/hr, pay after.",
  kicker:"Tech help · Jacksonville, FL",
  sections:[
   {h:"In-home tech help in Jacksonville",p:["Wi-Fi that drops in the back bedroom. A new doorbell camera still in the box. A TV with three remotes and no picture. Porchlight comes to your home and gets it working, then shows you how to use it in plain English.","It's a great fit for busy families and for older parents who want help without a store visit or a long phone call."]},
   {h:"Tech help we do",list:["Wi-Fi setup and mesh routers for dead spots","Ring, Nest, Eufy and Arlo doorbells and cameras","Smart thermostats like Ecobee and Nest","Smart locks and garage door openers","TV setup, streaming apps and soundbars","Setting up new phones, tablets and printers","Connecting everything to one app","Helping parents and grandparents with their devices"]},
   {h:"Pricing",p:["Tech help is $80 an hour within 10 miles of central Jacksonville. Most visits take 1 to 2 hours. You pay after the job."]}
  ],
  faq:[["Can you help my parents with their phone and TV?","Yes. That's one of the most common bookings."],["Do I need to buy the devices first?","Either way works. Buy them yourself or Alex can recommend and pick them up."],["Can you fix slow Wi-Fi?","Usually, yes. Often it's router placement or a mesh system that fixes it."]]
 }
};

function generic(s){
  return {
   title:`${s.h1} | Porchlight`,
   desc:`${s.intro} $80/hr in Jacksonville, FL. Pay after the job. Book online with Alex Montalbano.`,
   kicker:`${s.name} · Jacksonville, FL`,
   sections:[
    {h:`${s.name} in Jacksonville`,p:[s.intro,s.body]},
    {h:"What's included",list:s.points},
    {h:"How long it takes and what it costs",p:[`This kind of job usually takes ${hrsTxt(s)}. Porchlight charges $80 an hour within 10 miles of central Jacksonville, $100 an hour from 10 to 20 miles out, and $120 an hour from 20 to 30 miles out. Parts are billed at cost. You pay after the job, in cash or online.`]}
   ],
   faq:s.faq
  };
}

function seoService(s){
  const L=LONG[s.id]||generic(s);const lo=s.hrs[0]*80,hi=s.hrs[1]*80;
  const related=SERVICES.filter(x=>x.id!==s.id).slice(0,6);
  return `<article class="seo">
   <div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#services">Services</a> / ${s.name}</div>
    <span class="tag">${L.kicker}</span>
    <h1>${s.h1}</h1><p class="lead">${s.intro}</p>
    <div class="btnrow"><a class="btn" href="#book" data-svc="${s.id}">Book now</a><a class="btn ghost" href="#contact">Ask a question</a></div>
    <ul class="facts"><li><b>${hrsTxt(s)}</b><span>Typical time</span></li><li><b>$80/hr</b><span>Within 10 miles</span></li><li><b>$0 today</b><span>Pay after the job</span></li></ul>
   </div>
   <div class="seo-grid">
    <div class="prose">${L.sections.map(x=>`<h2>${x.h}</h2>${(x.p||[]).map(p=>`<p>${p}</p>`).join("")}${x.list?`<ul class="checks">${x.list.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}`).join("")}
     <h2>How booking works</h2>
     <ol class="steps"><li><div><b>Book online</b><p class="muted">Pick a time, describe the job and enter your address.</p></div></li><li><div><b>Sign the service agreement</b><p class="muted">Agree to pay after the job. Nothing is charged today.</p></div></li><li><div><b>Alex does the work</b><p class="muted">If it's bigger than booked, he can stay at the same rate or come back.</p></div></li><li><div><b>Pay when it's done</b><p class="muted">Cash, card, Apple Pay, Google Pay or PayPal.</p></div></li></ol>
     <h2>Frequently asked questions</h2>
     <div class="faq">${L.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div>
     <h2>Areas we serve</h2>
     <p>Porchlight serves homes across Jacksonville and Northeast Florida, including ${HOODS.slice(0,-1).join(", ")} and ${HOODS[HOODS.length-1]}. ZIP codes include ${ZIPS}.</p>
    </div>
    <aside class="seo-side">
     <div class="card"><h3>Pricing</h3><div class="rows">
      <div><span>Typical time</span><span>${hrsTxt(s)}</span></div>
      <div><span>Labor at $80/hr</span><span>${lo===hi?usd(lo):usd(lo)+"–"+usd(hi)}</span></div>
      ${s.extra.map(r=>`<div><span>${r[0]}</span><span>${r[1]}</span></div>`).join("")}
      <div><span>Due when booking</span><span>$0</span></div>
     </div><a class="btn" href="#book" data-svc="${s.id}" style="width:100%">Book a time</a></div>
     <div class="card"><h3>Questions?</h3><p class="muted">Call or text Alex</p><p class="sel" style="font-weight:700">(631) 304-4809</p><p class="sel" style="font-weight:600;font-size:.95rem">montalbanoa23@gmail.com</p></div>
     <div class="card"><h3>Related services</h3><div class="links-list">${related.map(r=>`<a href="#${r.slug}">${r.name}</a>`).join("")}</div></div>
    </aside>
   </div>
   <div class="cta-band" style="margin-top:48px"><div style="display:grid;gap:6px"><h2>Ready when you are</h2><p style="opacity:.75">Book online. Pay after the job.</p></div><a class="btn glow" href="#book" data-svc="${s.id}">See open times</a></div>
  </article>`;
}

/* ---------- service-specific booking questions ---------- */
const QS={
 ev:[["sel","What car do you drive?",["Tesla","Ford","Chevy","Rivian","Hyundai or Kia","Other"]],["sel","Charger type",["Tesla Wall Connector","240V outlet (NEMA 14-50)","Other charger","Not sure, need advice"]],["sel","Where is your electrical panel?",["In the garage","Inside the house","Outside","Not sure"]],["sel","Where should the charger go?",["Inside the garage","Outside wall","Carport","Not sure"]]],
 sink:[["sel","What's going on?",["Leaky or dripping faucet","Clogged drain","Install a new faucet","Running or leaking toilet","Garbage disposal","Leak under the sink","Other"]],["sel","Which room?",["Kitchen","Bathroom","Laundry","Outside spigot","Other"]]],
 smart:[["txt","What devices need help?","e.g. Ring doorbell, Wi-Fi router, new TV"]],
 fan:[["sel","How many fans or lights?",["1","2","3","4 or more"]],["sel","Ceiling height",["Under 10 ft","10 to 12 ft","Over 12 ft","Not sure"]],["sel","Is there a light or fan there now?",["Yes","No, it's a new spot","Not sure"]]],
 outlet:[["sel","How many outlets or switches?",["1","2 to 4","5 to 10","More than 10"]]],
 tv:[["txt","TV size","e.g. 65 inch"],["sel","Wall type",["Drywall","Brick or block","Over a fireplace","Not sure"]],["sel","Hide the cords in the wall?",["Yes","No","Not sure"]]],
 outdoor:[["sel","How many lights?",["1","2 to 3","4 or more"]]],
 landscape:[["sel","Yard size",["Small","Medium","Large","Not sure"]],["sel","Is there an existing system?",["No, new install","Yes, needs repair","Yes, adding to it"]]],
 call:[["txt","What's happening?","e.g. Kitchen breaker trips when the microwave runs"],["sel","Is it urgent?",["Yes, something is warm, smoking or sparking","Soon, but nothing is dangerous","Not urgent"]]],
 list:[["sel","Roughly how many tasks?",["1 to 3","4 to 6","7 or more"]]]
};

function seoArea(a){
  const z=ZONES[a.zone-1];
  return `<div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#areas">Areas</a> / ${a.name}</div>
   <span class="tag">${a.also}</span>
   <h1 style="font-size:clamp(2.4rem,6vw,4.2rem)">Electrician &amp; home installs in ${a.name}</h1>
   <p style="font-size:1.15rem" class="muted">${a.note}</p>
   <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn" href="#book">Book in ${a.name}</a><a class="btn ghost" href="#pricing">$${z.rate}/hr here</a></div></div>
   <div style="margin-top:32px"><h2 style="margin-bottom:16px">Popular in ${a.name}</h2><div class="tiles">${a.top.map(t=>tile(S(t))).join("")}</div></div>
   <div class="card" style="margin-top:20px"><h3>Why neighbors book Porchlight</h3><ul class="checks"><li>Alex does every job himself, no subcontractors</li><li>One hourly rate, paid after the job, cash or online</li><li>Leftover time goes to the rest of your list</li><li>On time, or a text if I-95 or JTB says otherwise</li></ul></div>
   <div style="margin-top:32px"><h3 style="margin-bottom:12px">All services</h3><div class="areas">${SERVICES.map(s=>`<a href="#${s.slug}">${s.name}</a>`).join("")}</div></div>`;
}


/* ---------- service agreement ---------- */
const TERMS_VERSION="October 29, 2026";
function termsHTML(rate){const r=rate?"$"+rate:"your zone rate ($80, $100 or $120)";
 return `<p class="muted">Last updated ${TERMS_VERSION}. This agreement is between you (the customer) and Porchlight, operated by Alex Montalbano in Jacksonville, Florida.</p>
 <h3>1. The work</h3><p>Porchlight provides home help, small repairs, fixture installs, EV charger installs and tech help as described in your booking. Alex may decline or stop any work that is unsafe, needs a permit he can't pull, or needs a licensed specialist. If that happens, he'll tell you before going further and you only pay for time already spent.</p>
 <h3>2. Booking and time</h3><p>You book a start time and a number of hours. Time starts when Alex arrives and ends when the work is done and the area is cleaned up. The minimum charge is 1 hour. After the first hour, time is billed in 30 minute increments.</p>
 <h3>3. Rates</h3><p>Your hourly rate is ${r}, based on your job's ZIP code: $80 an hour within 10 miles of central Jacksonville, $100 an hour from 10 to 20 miles, and $120 an hour from 20 to 30 miles. There are no trip fees inside these areas.</p>
 <h3>4. Extra time</h3><p>Jobs can take longer than expected. If your job needs more time than you booked, Alex will tell you before going over. He can keep working at the same hourly rate, or come back another day. You choose.</p>
 <h3>5. Parts and materials</h3><p>Parts and materials are billed at cost, with receipts on request. You can also supply your own fixtures, chargers or devices. Porchlight isn't responsible for defects in parts you supply.</p>
 <h3>6. Payment</h3><p>Nothing is charged when you book. Payment is due on the day of service, when the work is done. You can pay in cash, or online with card, Apple Pay, Google Pay or PayPal from your job page. Any balance not paid on the day of service will be sent to you by text or email and is due within 3 days.</p>
 <h3>7. Cancelling or rescheduling</h3><p>You can cancel or reschedule for free up to 24 hours before your start time. With less than 24 hours' notice, or if Alex can't get in when he arrives, a trip fee equal to 30 minutes at your rate may apply.</p>
 <h3>8. Access and safety</h3><p>An adult (18 or older) should be home, or you must arrange access in advance. Please keep pets secured and the work area clear. If you rent, you confirm you have your landlord's permission for the work.</p>
 <h3>9. Workmanship</h3><p>If something Alex installed or repaired doesn't work right within 30 days because of his workmanship, he'll come back and fix it at no labor charge. This doesn't cover parts you supplied, misuse, or damage from storms or power surges.</p>
 <h3>10. Limits</h3><p>Porchlight's liability for any claim related to a job is limited to the amount you paid for that job, except where the law doesn't allow this limit.</p>
 <h3>11. Messages</h3><p>By booking, you agree Porchlight can contact you by text, phone or email about your job. Message and data rates may apply. Reply STOP to stop texts.</p>
 <h3>12. Signing</h3><p>Typing your name and checking the boxes when you book is your electronic signature and means you agree to this agreement.</p>
 <p class="muted">Questions? Call or text (631) 304-4809 or email montalbanoa23@gmail.com.</p>`}

/* ---------- data store: shared db when available, else this tab only ---------- */
let DB=null,USER=null,IS_OWNER=false;
const mem={docs:{},subs:new Set()};
function memEmit(){mem.subs.forEach(f=>f())}
const store={
  async create(id,data){if(DB)return DB.doc("bookings/"+id).set(data);mem.docs[id]=data;memEmit()},
  async update(id,patch){if(DB)return DB.doc("bookings/"+id).update(patch);mem.docs[id]={...mem.docs[id],...patch};memEmit()},
  watchAll(cb){if(DB)return DB.collection("bookings").onSnapshot(s=>cb(s.docs.map(d=>({id:d.id,...d.data()}))),e=>cb(null,e));
    const f=()=>cb(Object.entries(mem.docs).map(([id,d])=>({id,...d})));mem.subs.add(f);f();return()=>mem.subs.delete(f)},
  watch(id,cb){if(DB)return DB.doc("bookings/"+id).onSnapshot(s=>cb(s.exists?{id,...s.data()}:null),()=>cb(null));
    const f=()=>cb(mem.docs[id]?{id,...mem.docs[id]}:null);mem.subs.add(f);f();return()=>mem.subs.delete(f)}
};

/* ---------- money ---------- */
function totals(b){
  const ex=b.extras||[],pay=(b.payments||[]);
  const labor=b.hours*b.rate;
  const time=ex.filter(e=>e.type==="time"&&e.status==="approved").reduce((a,e)=>a+e.amount,0);
  const pending=ex.filter(e=>e.type==="time"&&e.status==="pending");
  const parts=ex.filter(e=>e.type==="parts").reduce((a,e)=>a+e.amount,0);
  const owed=labor+time+parts;
  const paid=pay.filter(p=>p.kind==="pay").reduce((a,p)=>a+p.amount,0);
  const tips=pay.filter(p=>p.kind==="tip").reduce((a,p)=>a+p.amount,0);
  return {labor,time,parts,owed,paid,tips,pending,balance:Math.round((owed-paid)*100)/100};
}
const STAGES=["booked","onway","working","done"];
const STAGE_LABEL={booked:"Booked",onway:"On the way",working:"Working",done:"Done"};

/* ---------- routing ---------- */
const DEFAULT_DESC="Porchlight. Trusted home help in Jacksonville, FL. Tesla chargers, sink and faucet fixes, tech help, ceiling fans, lighting and more. $80/hr, pay after the job.";
function setDesc(t){let m=document.querySelector('meta[name="description"]');if(!m){m=document.createElement("meta");m.name="description";document.head.appendChild(m)}m.content=t}
const STATIC=["home","services","areas","pricing","book","about","contact","alex","terms"];
let unsubJob=null,unsubDash=null;
function route(){
  const h=location.hash.slice(1);let page="home",title="Porchlight | Electrical & Home Services in Jacksonville, FL";
  const svc=SERVICES.find(s=>s.slug===h),area=AREAS.find(a=>a.slug===h);
  if(unsubJob){unsubJob();unsubJob=null}
  if(unsubDash&&h!=="alex"){unsubDash();unsubDash=null}
  if(STATIC.includes(h))page=h;
  else if(svc){page="seo";$("seoBody").innerHTML=seoService(svc);const L=LONG[svc.id]||generic(svc);title=L.title;setDesc(L.desc)}
  else if(area){page="seo";$("seoBody").innerHTML=seoArea(area);title="Electrician in "+area.name+" | Porchlight"}
  else if(h.startsWith("job-")){page="job";openJob(h.slice(4))}
  if(page==="alex")openDash();
  if(page==="terms")$("termsPage").innerHTML=termsHTML(null);
  if(!svc)setDesc(DEFAULT_DESC);
  document.title=title;
  document.querySelectorAll(".page").forEach(p=>p.hidden=p.dataset.page!==page);
  const navKey=svc?"services":area?"areas":page;
  document.querySelectorAll(".links a").forEach(a=>a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+navKey));
  $("links").classList.remove("open");$("menuBtn").setAttribute("aria-expanded","false");
  window.scrollTo(0,0);
}
addEventListener("hashchange",route);
$("menuBtn").onclick=()=>{const o=$("links").classList.toggle("open");$("menuBtn").setAttribute("aria-expanded",o)};
document.addEventListener("click",e=>{const a=e.target.closest("[data-svc]");if(a){pickService(a.dataset.svc);setTimeout(()=>showStep(1),0)}});

/* ---------- booking ---------- */
const B={svc:null,hours:1,zone:null,zip:"",date:null,time:null,method:"card"};
const TIMES=["8:00 AM","10:00 AM","12:00 PM","2:00 PM","4:00 PM"];
const START=[8,10,12,14,16];
const taken=(d,i)=>(((d.getMonth()*31+d.getDate())*7+i*13)*2654435761>>>0)%10<4;
const fits=(j)=>START[j]+(B.hours||1)<=18;
const today=new Date();today.setHours(0,0,0,0);
const DAYS=[];for(let i=1;DAYS.length<14;i++){const d=new Date(today);d.setDate(today.getDate()+i);DAYS.push(d)}
const fmt=d=>d.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});
const iso=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const fromIso=s=>{const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
(function(){for(const d of DAYS){if(d.getDay()===0)continue;const j=TIMES.findIndex((t,j)=>!taken(d,j));if(j>-1){const tm=new Date(today);tm.setDate(today.getDate()+1);$("nextSlot").textContent=(d.getTime()===tm.getTime()?"Tomorrow":fmt(d))+", "+TIMES[j];return}}})();

$("svcPick").innerHTML=SERVICES.map(s=>`<button type="button" class="opt" data-id="${s.id}" aria-pressed="false"><span class="ico">${svg(s.icon)}</span><span><b>${s.name}</b><small>Typically ${hrsTxt(s)}</small></span></button>`).join("");
const HOUR_OPTS=[1,2,3,4,6,8];
function renderHours(){$("hours").innerHTML=HOUR_OPTS.map(h=>`<button type="button" class="hr" data-h="${h}" aria-pressed="${B.hours===h}">${h===8?"Full day (8)":h+" hr"+(h>1?"s":"")}</button>`).join("")}
function pickService(id){B.svc=S(id);document.querySelectorAll(".opt").forEach(b=>b.setAttribute("aria-pressed",b.dataset.id===id));
  $("hoursHint").textContent=`This usually takes ${hrsTxt(B.svc)}. Not sure? Book 1 hour.`;renderHours();check1();renderSum()}
$("svcPick").addEventListener("click",e=>{const b=e.target.closest(".opt");if(b)pickService(b.dataset.id)});
$("bDesc").addEventListener("input",check1);
$("hours").addEventListener("click",e=>{const b=e.target.closest(".hr");if(!b)return;B.hours=+b.dataset.h;B.time=null;renderHours();renderSum()});
$("bZip0").addEventListener("input",e=>{B.zip=e.target.value.trim();B.zone=zoneFor(B.zip);
  $("zoneOut").innerHTML=B.zip.length<5?"":B.zone?`<div class="ratebox"><b>$${B.zone.rate}/hr</b><span class="muted">${B.zone.label} from Alex. 1 hour minimum.</span></div>`:`<div class="ratebox warn"><span>That ZIP is outside my usual area. <a href="#contact">Send me a message</a> and I'll see what I can do.</span></div>`;
  check1();renderSum()});
function check1(){$("to2").disabled=!(B.svc&&B.zone&&$("bDesc").value.trim().length>=4)}
renderHours();

function renderDays(){
  $("days").innerHTML=DAYS.map((d,i)=>{const sun=d.getDay()===0,full=!sun&&TIMES.every((t,j)=>taken(d,j)||!fits(j));
   return `<button type="button" class="day" data-i="${i}" aria-pressed="${B.date===i}" ${sun||full?"disabled":""}><small>${d.toLocaleDateString("en-US",{weekday:"short"})}</small><b>${d.getDate()}</b><small>${sun?"Off":full?"Full":d.toLocaleDateString("en-US",{month:"short"})}</small></button>`}).join("");
  renderSlots();
}
function renderSlots(){
  if(B.date===null){$("slots").innerHTML='<p class="muted" style="grid-column:1/-1">Pick a day to see open times.</p>';return}
  const d=DAYS[B.date];$("slots").innerHTML=TIMES.map((t,j)=>`<button type="button" class="slot" data-t="${t}" aria-pressed="${B.time===t}" ${taken(d,j)||!fits(j)?"disabled":""}>${t}</button>`).join("");
}
$("days").addEventListener("click",e=>{const b=e.target.closest(".day");if(!b||b.disabled)return;B.date=+b.dataset.i;B.time=null;$("to3").disabled=true;renderDays();renderSum()});
$("slots").addEventListener("click",e=>{const b=e.target.closest(".slot");if(!b||b.disabled)return;B.time=b.dataset.t;$("to3").disabled=false;renderSlots();renderSum()});

const LABELS=["Step 1 of 4 · The job","Step 2 of 4 · Date & time","Step 3 of 4 · Address","Step 4 of 4 · Payment"];
function go(n){showStep(n);if(location.hash!=="#book")location.hash="book";else window.scrollTo(0,0)}
function showStep(n){
  ["s1","s2","s3","s4","s5"].forEach((id,i)=>$(id).hidden=i+1!==n);
  [...$("progress").children].forEach((x,i)=>x.className=i<n?"on":"");
  $("progress").hidden=$("stepLabel").hidden=n===5;$("stepLabel").textContent=LABELS[n-1]||"";
  $("sumCard").hidden=n===5;
  if(n===2){$("to3").disabled=!B.time;renderDays()}
  if(n===3){$("bZip").value=B.zip;renderQs()}
  if(n===4){const r=B.zone.rate;$("agreeRate").textContent="$"+r;$("termsBox").innerHTML=termsHTML(r);$("estRows").innerHTML=reviewRows();syncAgree()}
  renderSum();
}
$("to2").onclick=()=>go(2);$("to3").onclick=()=>go(3);
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>go(+b.dataset.back));
function renderQs(){const qs=QS[B.svc?.id]||[];$("svcQs").innerHTML=qs.map((q,n)=>q[0]==="sel"
  ?`<label class="fl">${q[1]}<select data-q="${n}"><option value="">Choose one</option>${q[2].map(o=>`<option>${esc(o)}</option>`).join("")}</select></label>`
  :`<label class="fl">${q[1]}<input data-q="${n}" placeholder="${esc(q[2]||"")}"></label>`).join("")}
function answers(){const qs=QS[B.svc?.id]||[];const out={};qs.forEach((q,n)=>{const el=document.querySelector(`#svcQs [data-q="${n}"]`);if(el&&el.value.trim())out[q[1]]=el.value.trim()});return out}
$("bOwn").addEventListener("change",()=>{$("landlordRow").hidden=$("bOwn").value!=="Rent"});
const val=id=>$(id).value.trim();
$("s3").addEventListener("submit",e=>{e.preventDefault();
  const miss=[];
  if(!val("bFirst"))miss.push("first name");if(!val("bLast"))miss.push("last name");
  if(val("bPhone").replace(/\D/g,"").length<10)miss.push("a 10-digit mobile number");
  if(!/^\S+@\S+\.\S+$/.test(val("bEmail")))miss.push("a valid email");
  if(!val("bPref"))miss.push("how to reach you");if(!val("bStreet"))miss.push("street address");if(!val("bCity"))miss.push("city");
  if(!val("bProp"))miss.push("type of home");if(!val("bOwn"))miss.push("own or rent");
  if(val("bOwn")==="Rent"&&!$("bLandlord").checked)miss.push("landlord OK");
  if(!val("bHome"))miss.push("who will be there");if(!val("bParts"))miss.push("parts question");
  $("s3err").hidden=!miss.length;$("s3err").textContent=miss.length?"Please add: "+miss.join(", ")+".":"";
  if(!miss.length)go(4);else $("s3err").scrollIntoView({block:"center"})});
function fullName(){return (val("bFirst")+" "+val("bLast")).trim()}
function fullAddr(){return val("bStreet")+(val("bUnit")?", "+val("bUnit"):"")+", "+val("bCity")+", "+val("bState")+" "+B.zip}
function reviewRows(){const r=B.zone.rate;const a=answers();
  return [["Job",B.svc.name],["When",fmt(DAYS[B.date])+", "+B.time],["Booked",`${B.hours} hr${B.hours>1?"s":""} × $${r}/hr`],["Estimated labor",usd(B.hours*r)],["Due today","$0"],
   ["Name",fullName()],["Mobile",val("bPhone")],["Email",val("bEmail")],["Contact by",val("bPref")],["Address",fullAddr()],["Home",val("bProp")+" · "+val("bOwn")],["Who's there",val("bHome")],["Pets",val("bPets")],
   ...Object.entries(a),["Parts",val("bParts")],["Job details",$("bDesc").value.trim()]]
   .filter(x=>x[1]).map(x=>`<div><span>${esc(x[0])}</span><span>${esc(x[1])}</span></div>`).join("")}
function renderSum(){
  const s=B.svc;if(!s){$("sum").innerHTML='<p class="empty">Pick a service to get started.</p>';return}
  const addr=$("bStreet").value.trim();const rate=B.zone?B.zone.rate:null;const total=rate?B.hours*rate:null;
  $("sum").innerHTML=`<div class="sumhead"><span class="ico">${svg(s.icon)}</span><div><b>${s.name}</b><div class="muted" style="font-size:.88rem">${B.hours} hr${B.hours>1?"s":""} booked</div></div></div>
   <div class="rows" style="margin-top:6px">
    <div><span>Rate</span><span>${rate?"$"+rate+" / hr":"Enter ZIP"}</span></div>
    <div><span>When</span><span>${B.date!==null?fmt(DAYS[B.date])+(B.time?", "+B.time:""):"Not picked"}</span></div>
    <div><span>Where</span><span>${addr?esc(addr):B.zip||"Not picked"}</span></div>
    <div><span>With</span><span>Alex Montalbano</span></div>
   </div>
   <div class="total"><span class="muted" style="font-weight:700">Est. total · pay after</span><b>${total!==null?usd(total):"$0"}</b></div>`;
}
function sigOk(){const s=val("sig").toLowerCase().replace(/\s+/g," ");return s.length>2&&s===fullName().toLowerCase().replace(/\s+/g," ")}
function syncAgree(){const all=[...document.querySelectorAll(".ag")].every(c=>c.checked);
  $("confirmBtn").disabled=!(all&&sigOk());
  $("sigHint").textContent=val("sig")&&!sigOk()?`Type your name exactly as entered: ${fullName()}`:"Signed today. Typing your name counts as your signature."}
document.querySelectorAll(".ag").forEach(c=>c.addEventListener("change",syncAgree));$("sig").addEventListener("input",syncAgree);
$("confirmBtn").onclick=async()=>{
  if($("confirmBtn").disabled)return;
  $("payMsg").textContent="Booking…";$("overlay").hidden=false;
  const id="j"+Math.random().toString(36).slice(2,10);const rate=B.zone.rate;const amt=B.hours*rate;
  const doc={svc:B.svc.id,svcName:B.svc.name,hours:B.hours,rate,zone:B.zone.id,zip:B.zip,date:iso(DAYS[B.date]),time:B.time,
    name:fullName(),first:val("bFirst"),last:val("bLast"),phone:val("bPhone"),email:val("bEmail"),contactPref:val("bPref"),textsOk:$("bTexts").checked,
    address:fullAddr(),neighborhood:val("bHood"),property:val("bProp"),ownRent:val("bOwn"),landlordOk:val("bOwn")==="Rent"?$("bLandlord").checked:null,
    whoHome:val("bHome"),pets:val("bPets"),accessCode:val("bCode"),parking:val("bPark"),
    description:$("bDesc").value.trim(),answers:answers(),parts:val("bParts"),extraNotes:val("bNotes"),heardFrom:val("bHeard"),
    notes:[$("bDesc").value.trim(),val("bNotes")].filter(Boolean).join("\n\n"),
    agreement:{version:TERMS_VERSION,signedName:val("sig"),signedAt:Date.now(),agreedTerms:true,agreedPayment:true,agreedExtraTime:true,agreedCancellation:true},
    agreed:true,method:"Pay after job",cardOnFile:false,status:"booked",extras:[],payments:[],createdAt:Date.now()};
  try{await store.create(id,doc)}catch(err){}
  setTimeout(()=>{$("overlay").hidden=true;
    $("okText").textContent=`We emailed a confirmation to ${doc.email}. If your job sounds bigger than ${B.hours} hour${B.hours>1?"s":""}, Alex will reach out by ${doc.contactPref.toLowerCase()} before the visit.`;
    $("receipt").innerHTML=`<div><span>Job</span><span>${esc(B.svc.name)}</span></div><div><span>When</span><span>${fmt(DAYS[B.date])}, ${B.time}</span></div><div><span>Where</span><span>${esc(doc.address)}</span></div><div><span>Booked</span><span>${B.hours} hr × $${rate}</span></div><div><span>Estimated</span><span>${usd(amt)}</span></div><div><span>Pay</span><span>After the job, cash or online</span></div>`;
    $("emailPrev").innerHTML=`<div class="email-head"><span class="pill blue">Confirmation email</span><span class="muted" style="font-size:.82rem">To ${esc(doc.email)}</span></div>
     <b>You're booked with Porchlight: ${fmt(DAYS[B.date])}, ${B.time}</b>
     <p>Hi ${esc(doc.first)},</p><p>Thanks for booking. Here are your details:</p>
     <p>${esc(B.svc.name)}<br>${fmt(DAYS[B.date])} at ${B.time}<br>${esc(doc.address)}<br>${B.hours} hr booked at $${rate}/hr</p>
     <p>Nothing is due today. You'll pay after the job, in cash or online. If your job looks like it needs more time, Alex will reach out first.</p>
     <p>Track your job anytime from your job page. Need to change something? Reply to this email or text (631) 304-4809.</p>
     <p>Alex Montalbano<br>Porchlight</p>
     <p class="muted" style="font-size:.8rem">Preview: emails are sent automatically once the site is live.</p>`;
    $("trackLink").href="#job-"+id;showStep(5);window.scrollTo(0,0)},800)};
$("again").onclick=()=>{Object.assign(B,{svc:null,hours:1,date:null,time:null});$("bDesc").value="";$("sig").value="";document.querySelectorAll(".ag").forEach(c=>c.checked=false);document.querySelectorAll(".opt").forEach(b=>b.setAttribute("aria-pressed","false"));renderHours();check1();showStep(1)};

/* ---------- customer job page ---------- */
function openJob(id){
  $("jobBody").innerHTML='<p class="muted">Loading your job…</p>';
  unsubJob=store.watch(id,b=>{if(!b){$("jobBody").innerHTML=`<div class="locked"><h2>Job not found</h2><p class="muted">Check the link from your confirmation, or <a href="#contact">message Alex</a>.</p></div>`;return}renderJob(b)});
}
function renderJob(b){
  const t=totals(b),si=STAGES.indexOf(b.status);const s=S(b.svc)||{icon:"bolt"};
  const lines=[`<div class="l"><span>${b.hours} hr${b.hours>1?"s":""} × $${b.rate}/hr (booked)</span><span>${usd(t.labor)}</span></div>`]
   .concat((b.extras||[]).filter(e=>!(e.type==="time"&&e.status==="pending")).map(e=>e.type==="note"?`<div class="l"><span>${esc(e.label)}</span><span class="muted">To schedule</span></div>`:e.type==="free"
     ?`<div class="l free"><span>${esc(e.label)}</span><span>On the house</span></div>`
     :`<div class="l"><span>${esc(e.label)}</span><span>${usd(e.amount)}</span></div>`));
  const pays=(b.payments||[]).map(p=>`<div class="l"><span class="muted">${p.kind==="tip"?"Tip":"Paid"} · ${esc(p.method)}</span><span>${p.kind==="tip"?"":"− "}${usd(p.amount)}</span></div>`).join("");
  $("jobBody").innerHTML=`
   <div style="display:grid;gap:18px">
    <div class="sumhead"><span class="ico">${svg(s.icon)}</span><div><span class="tag">Your job</span><h2 style="font-size:2rem">${esc(b.svcName)}</h2></div></div>
    <p class="muted">${fmt(fromIso(b.date))}, ${esc(b.time)} · ${esc(b.address)} · with Alex Montalbano</p>
    <div class="track">${STAGES.map((st,i)=>`<div class="${i<=si?"on":""}">${STAGE_LABEL[st]}</div>`).join("")}</div>
    ${t.pending.map(e=>`<div class="approve"><b>Alex says this needs ${e.hours} more hour${e.hours>1?"s":""}</b><p class="muted" style="font-size:.92rem">${esc(e.why||"To finish the job.")} ${usd(e.amount)} at your $${b.rate}/hr rate.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm" data-approve="${e.id}">Approve ${usd(e.amount)}</button><button class="btn ghost sm" data-decline="${e.id}">Not today</button></div></div>`).join("")}
    <div class="card"><h3>Bill</h3><div class="lines">${lines.join("")}${pays}</div>
     <div class="bal" style="margin-top:8px"><span>${t.balance>0?"Balance due":"All paid"}</span><span>${usd(Math.max(t.balance,0))}</span></div>
     ${t.balance>0?(b.status==="booked"||b.status==="onway"?`<p class="muted" style="font-size:.88rem">You'll pay after the job. Cash to Alex, or online right here.</p>`:`<p class="muted" style="font-size:.88rem">Pay online below, or hand Alex cash and he'll mark it paid.</p><div class="express"><button class="xp apple" data-paybal="Apple Pay">Apple&nbsp;Pay</button><button class="xp gpay" data-paybal="Google Pay"><b style="color:#4285f4">G</b>&nbsp;Pay</button><button class="xp paypal" data-paybal="PayPal">Pay<span>Pal</span></button></div><button class="btn ghost" data-paybal="Card" style="width:100%">Pay ${usd(t.balance)} by card</button>`):""}
    </div>
    ${b.status==="done"?`<div class="card"><h3>${t.tips?"Thanks for the tip!":"Leave a tip for Alex?"}</h3>${t.tips?`<p class="muted">${usd(t.tips)} sent. Alex appreciates it.</p>`:`<p class="muted" style="font-size:.92rem">Totally optional. 100% goes to Alex.</p><div class="tips">${[10,15,20].map(p=>`<button class="hr" data-tip="${Math.round(t.owed*p)/100}">${p}% · ${usd(Math.round(t.owed*p)/100)}</button>`).join("")}<button class="hr" data-tip="custom">Other</button></div><div class="inline" id="tipCustom" hidden><input id="tipAmt" class="amt" inputmode="decimal" placeholder="$" aria-label="Tip amount"><button class="btn sm" id="tipGo">Send tip</button></div>`}</div>`:""}
    ${b.notes?`<div class="card"><h3>What you asked for</h3><p class="muted" style="white-space:pre-wrap">${esc(b.notes)}</p></div>`:""}
    <p class="muted" style="font-size:.84rem">Preview site: payments here are simulated. Questions? Text Alex at (631) 304-4809 or email montalbanoa23@gmail.com.</p>
   </div>`;
  const J=$("jobBody");
  J.querySelectorAll("[data-approve]").forEach(x=>x.onclick=()=>{const ex=(b.extras||[]).map(e=>e.id===x.dataset.approve?{...e,status:"approved"}:e);
    const e=ex.find(e=>e.id===x.dataset.approve);const pays=[...(b.payments||[])];if(b.cardOnFile)pays.push({kind:"pay",method:"Card on file",amount:e.amount,note:"Extra time",at:Date.now()});
    store.update(b.id,{extras:ex,payments:pays})});
  J.querySelectorAll("[data-decline]").forEach(x=>x.onclick=()=>store.update(b.id,{extras:(b.extras||[]).filter(e=>e.id!==x.dataset.decline)}));
  J.querySelectorAll("[data-paybal]").forEach(x=>x.onclick=()=>store.update(b.id,{payments:[...(b.payments||[]),{kind:"pay",method:x.dataset.paybal||"Card on file",amount:t.balance,note:"Balance",at:Date.now()}]}));
  J.querySelectorAll("[data-tip]").forEach(x=>x.onclick=()=>{if(x.dataset.tip==="custom"){$("tipCustom").hidden=false;$("tipAmt").focus();return}sendTip(b,+x.dataset.tip)});
  if($("tipGo"))$("tipGo").onclick=()=>{const v=parseFloat($("tipAmt").value.replace(/[^0-9.]/g,""));if(v>0)sendTip(b,v)};
}
function sendTip(b,amt){store.update(b.id,{payments:[...(b.payments||[]),{kind:"tip",method:"Online",amount:Math.round(amt*100)/100,at:Date.now()}]})}

/* ---------- Alex's dashboard ---------- */
let DASH=[],dashFilter="upcoming";
function openDash(){
  if(!IS_OWNER&&DB){$("dashBody").innerHTML=`<div class="locked"><span class="ico" style="width:64px;height:64px">${svg("bolt")}</span><h2>Alex's dashboard</h2><p class="muted">Only Alex can see this page.</p></div>`;return}
  if(unsubDash)return renderDash();
  $("dashBody").innerHTML='<p class="muted">Loading jobs…</p>';
  unsubDash=store.watchAll((rows,err)=>{if(rows===null){$("dashBody").innerHTML='<p class="err">Couldn\'t load jobs. Reload the page to try again.</p>';return}DASH=rows;renderDash()});
}
function renderDash(){
  const todayIso=iso(new Date());
  const rows=DASH.slice().sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  const shown=rows.filter(b=>dashFilter==="all"?true:dashFilter==="done"?b.status==="done":b.status!=="done");
  const sum=k=>rows.reduce((a,b)=>a+totals(b)[k],0);
  const open=rows.reduce((a,b)=>a+Math.max(totals(b).balance,0),0);
  $("dashBody").innerHTML=`
   <div class="dash-top"><div><span class="tag">Alex's dashboard</span><h2>Jobs</h2></div>
    <div class="seg" style="margin:0;grid-template-columns:repeat(3,auto)" id="dashSeg">${["upcoming","done","all"].map(f=>`<button data-f="${f}" aria-pressed="${dashFilter===f}">${f[0].toUpperCase()+f.slice(1)}</button>`).join("")}</div></div>
   <div class="stats">
    <div class="stat"><span>Jobs today</span><b>${rows.filter(b=>b.date===todayIso).length}</b></div>
    <div class="stat"><span>Collected</span><b>${usd(sum("paid"))}</b></div>
    <div class="stat"><span>Tips</span><b>${usd(sum("tips"))}</b></div>
    <div class="stat"><span>Still owed</span><b>${usd(open)}</b></div>
   </div>
   ${!DB?`<p class="muted" style="font-size:.85rem;margin-bottom:12px">Jobs booked in this tab show here. Open on claude.ai while signed in to keep them saved.</p>`:""}
   <div class="jobs">${shown.length?shown.map(jobCard).join(""):`<div class="card" style="text-align:center"><b>No ${dashFilter==="all"?"":dashFilter+" "}jobs yet</b><p class="muted">New bookings from the site show up here live.</p><div><a class="btn sm" href="#book">Make a test booking</a></div></div>`}</div>`;
  $("dashSeg").onclick=e=>{const x=e.target.closest("button");if(x){dashFilter=x.dataset.f;renderDash()}};
  $("dashBody").querySelectorAll(".job").forEach(el=>wireJob(el,DASH.find(b=>b.id===el.dataset.id)));
}
function infoBlock(b){
  const rows=[["Email",b.email],["Contact by",b.contactPref],["Texts OK",b.textsOk===false?"No":b.textsOk?"Yes":""],["Home",[b.property,b.ownRent].filter(Boolean).join(" · ")],["Landlord OK",b.landlordOk===null||b.landlordOk===undefined?"":b.landlordOk?"Yes":"No"],["Neighborhood",b.neighborhood],["Who's there",b.whoHome],["Pets",b.pets],["Access code",b.accessCode],["Parking",b.parking],
    ...Object.entries(b.answers||{}),["Parts",b.parts],["Heard from",b.heardFrom],["Signed",b.agreement?`${b.agreement.signedName} · ${new Date(b.agreement.signedAt).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}`:""]].filter(r=>r[1]);
  return rows.length?`<details class="more"><summary>Full booking info</summary><div class="rows" style="margin-top:8px">${rows.map(r=>`<div><span>${esc(r[0])}</span><span>${esc(r[1])}</span></div>`).join("")}</div></details>`:""}
function jobCard(b){
  const t=totals(b),si=STAGES.indexOf(b.status);const next=STAGES[si+1];
  const nextLbl={onway:"I'm on my way",working:"Start job",done:"Mark done"}[next];
  return `<div class="job" data-id="${b.id}">
   <div class="jobhead"><div style="display:grid;gap:4px;min-width:0"><h3>${esc(b.name)} · ${esc(b.svcName)}</h3>
    <div class="meta"><span>${fmt(fromIso(b.date))}, ${esc(b.time)}</span><span>${b.hours} hr × $${b.rate}</span><span>${esc(b.address)}</span><span>${esc(b.phone)}</span></div></div>
    <div style="display:flex;gap:6px;flex-wrap:wrap"><span class="pill ${b.status==="done"?"ok":"blue"}">${STAGE_LABEL[b.status]}</span>${t.pending.length?'<span class="pill warn">Waiting on approval</span>':""}<span class="pill">${esc(b.method)}</span></div></div>
   ${b.notes?`<p class="muted" style="font-size:.9rem;white-space:pre-wrap;border-left:3px solid var(--glow);padding-left:10px">${esc(b.notes)}</p>`:""}
   ${infoBlock(b)}
   <div class="bal"><span>Owed ${usd(t.owed)} · Paid ${usd(t.paid)}${t.tips?" · Tip "+usd(t.tips):""}</span><span>${t.balance>0?usd(t.balance)+" due":"Paid up"}</span></div>
   <div class="acts">
    ${nextLbl?`<button class="chipbtn primary" data-act="stage" data-to="${next}">${nextLbl}</button>`:""}
    <button class="chipbtn" data-act="time" data-h="1">Stayed +1 hr</button>
    <button class="chipbtn" data-act="time" data-h="0.5">+30 min</button>
    <button class="chipbtn" data-act="back">Coming back</button>
    ${t.balance>0?`<button class="chipbtn money" data-act="cash">Paid cash ${usd(t.balance)}</button><button class="chipbtn money" data-act="card">Paid online ${usd(t.balance)}</button>`:""}
    <a class="chipbtn" href="#job-${b.id}" style="text-decoration:none">Customer view</a>
   </div>
   <details class="more"><summary>Add a free extra or parts</summary>
    <div style="display:grid;gap:10px;margin-top:10px">
     <div class="inline"><input placeholder="Free extra, e.g. Swapped porch light bulb" data-in="free" aria-label="Free extra"><button class="chipbtn" data-act="free">Add on the house</button></div>
     <div class="inline"><input placeholder="Parts, e.g. 60A breaker + wire" data-in="plabel" aria-label="Parts description"><input class="amt" placeholder="$" inputmode="decimal" data-in="pamt" aria-label="Parts cost"><button class="chipbtn" data-act="parts">Add parts</button></div>
    </div>
   </details>
  </div>`;
}
function wireJob(el,b){
  el.querySelectorAll("[data-act]").forEach(x=>x.onclick=()=>{
    const ex=[...(b.extras||[])],pays=[...(b.payments||[])],t=totals(b),nid="x"+Math.random().toString(36).slice(2,8);
    switch(x.dataset.act){
     case"stage":return store.update(b.id,{status:x.dataset.to});
     case"time":{const h=+x.dataset.h;ex.push({id:nid,type:"time",hours:h,amount:h*b.rate,label:`Extra time · ${h<1?"30 min":h+" hr"} at $${b.rate}/hr`,status:"approved"});return store.update(b.id,{extras:ex})}
     case"back":ex.push({id:nid,type:"note",label:"Return visit to finish the job",amount:0});return store.update(b.id,{extras:ex});
     case"cash":pays.push({kind:"pay",method:"Cash",amount:t.balance,at:Date.now()});return store.update(b.id,{payments:pays});
     case"card":pays.push({kind:"pay",method:"Online",amount:t.balance,at:Date.now()});return store.update(b.id,{payments:pays});
     case"free":{const v=el.querySelector('[data-in="free"]').value.trim();if(!v)return;ex.push({id:nid,type:"free",label:v,amount:0});return store.update(b.id,{extras:ex})}
     case"parts":{const l=el.querySelector('[data-in="plabel"]').value.trim()||"Parts";const a=parseFloat(el.querySelector('[data-in="pamt"]').value.replace(/[^0-9.]/g,""));if(!(a>0))return;ex.push({id:nid,type:"parts",label:l,amount:a});return store.update(b.id,{extras:ex})}
    }});
}

/* ---------- contact ---------- */
$("contactForm").addEventListener("submit",e=>{e.preventDefault();
  const ok=$("cName").value.trim()&&$("cPhone").value.trim()&&$("cMsg").value.trim();
  $("cErr").hidden=!!ok;if(ok){$("contactForm").hidden=true;$("cOk").hidden=false}});

/* ---------- start ---------- */
showStep(1);route();
(async()=>{
  try{const c=window.claude;if(!c||!c.use)return;
    const [db,user]=await Promise.all([c.use("db"),c.use("user")]);
    USER=user;IS_OWNER=user?.isOwner()??false;$("dashLink").hidden=!IS_OWNER;
    if(db){DB=db;
      // carry over anything booked in this tab before the shared store connected
      for(const [id,d] of Object.entries(mem.docs)){try{await db.doc("bookings/"+id).set(d)}catch(e){}}
      if(unsubJob||unsubDash){if(unsubDash){unsubDash();unsubDash=null}route()}
    }
  }catch(e){}
})();
</script>
