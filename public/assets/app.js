/* ---------- business settings ---------- */
const BIZ={name:"Homestallers",owner:"Alex Montalbano",phone:"(631) 304-4809",email:"homestallers@gmail.com",hourly:80,travelFee:35,
  // Stripe Payment Links per package, e.g. tv:"https://buy.stripe.com/xxxx". Leave empty to text a payment link instead.
  payLinks:{}};

/* ---------- bookable packages (no trade license needed) ---------- */
const CATS=[["tv","TV & tech"],["home","Home setup"],["help","Hands-on help"]];
const PKG=[
 {id:"tv",cat:"tv",icon:"tv",name:"TV mount & setup",price:100,qty:true,inc:1,slug:"tv-mounting-jacksonville",short:"On the wall, level and set up.",
  h1:"TV mounting in Jacksonville",title:"TV Mounting Jacksonville FL | $100 Flat | Homestallers",
  desc:"TV wall mounting in Jacksonville, FL for a flat $100. Mounted into studs, level, connected and set up with your apps. Book online in two minutes.",
  intro:["Get your TV off the stand and onto the wall. Homestallers mounts TVs for a flat $100, into the studs, perfectly level, and hooked up to your streaming apps and soundbar before your pro leaves.","It's the most booked job we do, from first apartments in Southside to living rooms in Mandarin and bonus rooms in Nocatee."],
  more:[["Picking the right height","The center of the screen should sit about at eye level when you're seated, usually 42 to 48 inches off the floor for a living room. Over a fireplace it ends up higher, so a tilting or pull-down mount helps. Your pro will hold the TV up so you can see it before anything gets drilled."],["Which mount to buy","Fixed mounts sit flattest against the wall. Tilting mounts help when the TV is up high. Full-motion arms are best for corners or rooms where you watch from different spots. Check that the mount's VESA pattern and weight rating match your TV. Not sure? Your pro can bring one at cost."],["Drywall, block and brick","Most Jacksonville homes have drywall over wood studs, but many older homes and lots of exterior walls are concrete block. Your pro brings the right anchors for both, so you don't have to guess."]],
  included:["Find the studs and mount the bracket","Hang the TV level and secure","Connect cable box, streaming stick, game console or soundbar","Set up streaming apps and the remote","Tidy the cords along the wall","Take the boxes to your bins"],
  notIncluded:["The wall mount (you supply it, or your pro brings one at cost)","Hiding cords inside the wall (see TV mount + clean wires)","Brick, stone or over a fireplace, add $40","Moving or adding electrical outlets"],
  prep:["Have the TV and mount in the room","Pick the wall and rough height you want","Have your Wi-Fi password and streaming logins handy"],
  faq:[["How much does TV mounting cost in Jacksonville?","A flat $100 per TV on drywall. Brick, stone or over a fireplace adds $40. Each extra TV on the same visit is also $100."],["Do you bring the mount?","You can supply it, or your pro can bring a quality mount at cost."],["How long does it take?","Usually about an hour per TV, including setup."],["Can you mount a TV on a block wall?","Yes. Many Jacksonville homes have block walls and your pro brings the right anchors."],["Do you mount soundbars too?","Yes, on the same visit. Add a note when you book."]],
  qs:[["TV size",["Under 55 in","55 to 65 in","70 in or larger"]],["Wall type",["Drywall","Brick or block","Over fireplace","Not sure"]]],
  kw:["TV wall mounting Jacksonville","TV installation near me","TV mount service Jacksonville FL","mount TV on wall Jacksonville"]},
 {id:"tvclean",cat:"tv",icon:"tv",name:"TV mount + clean wires",price:150,qty:true,inc:2,slug:"tv-mounting-hide-wires-jacksonville",short:"Mounted, with the cords hidden.",
  h1:"TV mounting with hidden wires in Jacksonville",title:"TV Mounting with Hidden Wires Jacksonville FL | $150 | Homestallers",
  desc:"TV mounting with hidden cords in Jacksonville, FL for $150. HDMI and cables run through the wall with a plug-in cord kit for a clean look. Book online.",
  intro:["Nothing ruins a mounted TV like cords hanging down the wall. This package mounts your TV and hides the cables, so all you see is the screen.","HDMI and low-voltage cables run inside the wall. Power uses a UL-listed plug-in cord kit that plugs into your existing outlet, so there are no changes to your home's wiring."],
  more:[["How the wires get hidden","Your pro cuts two small openings, one behind the TV and one near the floor where your devices sit. The cables run through the wall between them, and both openings get clean plates. With the plug-in power kit, the TV's power runs through the same path and plugs into the outlet you already have."],["Paintable cord covers","On block walls, or when you'd rather not cut the wall, a slim paintable cord cover runs neatly from the TV to the floor. Once it's painted to match, it almost disappears."],["Soundbars and devices","Tell us what you have: soundbar, cable box, Apple TV, game console. Your pro plans the cable runs so everything reaches and nothing looks crowded."]],
  included:["Everything in TV mount & setup","Cables run inside the wall to a low plate","Plug-in in-wall power kit installed","Clean wall plates top and bottom","Small drywall touch-up around the openings"],
  notIncluded:["Plug-in power kit (about $40 to $60, you supply it or at cost)","Adding or moving electrical outlets","Brick or block walls get a paintable cord cover instead"],
  prep:["Have the TV, mount and cord kit on site","Know where your soundbar and devices will sit"],
  faq:[["How much does it cost to mount a TV and hide the wires?","A flat $150, plus the cord kit at cost."],["Is it safe to hide TV wires in the wall?","Yes, when it's done with a UL-listed in-wall cord kit. Regular extension cords should never go inside a wall."],["How long does it take?","Usually 1.5 to 2 hours."],["What if I have a block wall?","Your pro uses a slim paintable cord cover instead, so the cables still look clean."]],
  qs:[["TV size",["Under 55 in","55 to 65 in","70 in or larger"]],["Wall type",["Drywall","Brick or block","Not sure"]]],
  kw:["hide TV wires Jacksonville","TV cord concealment near me","TV mount with hidden cables Jacksonville"]},
 {id:"tech",cat:"tv",icon:"smart",name:"Tech help hour",price:80,qty:true,qtyLabel:"hours",inc:1,slug:"tech-help-jacksonville",short:"Wi-Fi, TVs, phones, printers.",
  h1:"In-home tech help in Jacksonville",title:"In-Home Tech Help Jacksonville FL | $80/hr | Homestallers",
  desc:"In-home tech help in Jacksonville, FL. Wi-Fi, TVs, phones, printers and smart home setup, explained in plain English. $80 an hour. Great for parents too.",
  intro:["Wi-Fi that won't reach the back bedroom. A new TV with three remotes. A printer that says it's offline. Book an hour and your pro comes to your home, gets it working, and shows you how to use it.","It's one of our favorite jobs, and a lot of families book it for parents and grandparents who'd rather not wait on a help line."],
  more:[["Wi-Fi that reaches everywhere","Jacksonville homes are often long and spread out, and block walls can stop a signal cold. A mesh Wi-Fi system with two or three units usually fixes dead spots for good. Your pro sets it up, moves your devices over and tests every room."],["Help for parents and grandparents","Setting up a new phone or tablet, getting video calls working, cleaning up email, making the TV simple to use. Your pro is patient and explains things in plain English, and can leave a simple written cheat sheet."],["New devices, set up right","Printers, streaming boxes, smart speakers, laptops and tablets. Your pro connects them, updates them and makes sure they work together."]],
  included:["1 hour of hands-on help (book more if needed)","Wi-Fi and mesh router setup","TV, streaming and soundbar setup","Phones, tablets, laptops and printers","A simple written cheat sheet if you want one"],
  notIncluded:["Devices and equipment","Computer repair or data recovery"],
  prep:["Have passwords and logins handy","Make a short list of what's bugging you"],
  faq:[["Can you help my parents with their tech?","Yes. That's one of the most common bookings. You can book for them and add their address."],["Do I need to buy equipment first?","Not always. Your pro can tell you what to get, or pick it up at cost."],["Can you fix slow Wi-Fi?","Usually. Often it's router placement or a mesh system."]],
  qs:[["What needs help?",["Wi-Fi","TV","Phone or tablet","Printer","Smart home","Other"]]],
  kw:["tech help near me Jacksonville","home Wi-Fi setup Jacksonville","senior tech help Jacksonville","in-home computer help Jacksonville"]},
 {id:"smart",cat:"tv",icon:"doorbell",name:"Smart home setup",price:100,inc:1,slug:"smart-home-setup-jacksonville",short:"Battery doorbells, cameras, smart plugs.",
  h1:"Smart home setup in Jacksonville",title:"Smart Home & Camera Setup Jacksonville FL | $100 | Homestallers",
  desc:"Smart home setup in Jacksonville, FL. Battery video doorbells, security cameras, smart locks, smart plugs and speakers, mounted and set up. $100.",
  intro:["Battery video doorbells, wireless security cameras, smart locks, smart plugs and speakers, all mounted, connected and working in one app.","Your pro sets up notifications and motion zones so your phone isn't buzzing every time a car drives by."],
  more:[["Video doorbells and cameras","Battery and plug-in models like Ring, Blink, Eufy and Arlo are easy to add. Your pro mounts them at the right height and angle, checks the Wi-Fi signal at each spot, and sets up motion zones."],["Smart locks","Keypad and app-controlled deadbolts that replace your existing deadbolt. Great for rentals, dog walkers and never hiding a key again."],["Making it all work together","Alexa, Google Home or Apple Home. Your pro links your devices and sets up simple routines, like lights on at sunset with smart plugs."]],
  included:["Mount and set up up to 3 devices","Battery or plug-in doorbells and cameras","Smart locks that replace a deadbolt","Smart plugs and speakers","App, alerts and motion zones"],
  notIncluded:["Devices","Hardwired doorbells, thermostats or switches (coming soon, done by a licensed contractor)"],
  prep:["Have the devices and your Wi-Fi password ready","Download the brand's app if you can"],
  faq:[["Do you install Ring doorbells?","Yes, battery and plug-in Ring models. Hardwired installs are coming soon, done by a licensed contractor."],["Can you set up cameras around the house?","Yes. Wireless and plug-in cameras, mounted and connected."]],
  qs:[["What are we setting up?",["Doorbell","Cameras","Smart lock","Smart plugs or speakers","A mix"]]],
  kw:["Ring doorbell setup Jacksonville","security camera installation Jacksonville","smart lock installation near me"]},
 {id:"assembly",cat:"home",icon:"sofa",name:"Furniture assembly",price:80,qty:true,qtyLabel:"items",inc:1,slug:"furniture-assembly-jacksonville",short:"IKEA, Wayfair and Amazon, built right.",
  h1:"Furniture assembly in Jacksonville",title:"Furniture Assembly Jacksonville FL | $80 | Homestallers",
  desc:"Furniture assembly in Jacksonville, FL. IKEA, Wayfair and Amazon beds, dressers, desks and shelves for $80 per item. Tall pieces anchored. Book online.",
  intro:["Save the afternoon and the leftover screws. Homestallers builds bed frames, dressers, desks, bookshelves, patio sets and more for $80 per item.","Tall pieces get anchored to the wall, which matters a lot in homes with kids."],
  more:[["What counts as one item","A dresser, a bed frame, a desk, a bookcase, a TV stand or a patio set each count as one. Very large pieces like PAX wardrobes, bunk beds and sectionals with lots of modules may count as two."],["Anchored for safety","Tipping furniture is a real danger for small kids. Dressers and bookcases over about 30 inches get anchored to the wall with the kit they came with, or one your pro brings."],["Office and outdoor too","Standing desks, office chairs, filing cabinets, grills, patio furniture, play sets and storage sheds under 8x8."]],
  included:["Unbox and build each item","Anchor tall pieces to the wall","Level and adjust doors and drawers","Break down boxes and take them to your bins"],
  notIncluded:["Very large items may count as 2","Hauling furniture away"],
  prep:["Have boxes in the room they'll go in","Clear floor space to build"],
  faq:[["How much is furniture assembly in Jacksonville?","$80 per item. Most items take under an hour."],["Do you anchor dressers?","Yes, always, for tall pieces."],["Can you take apart furniture for a move?","Yes. Book moving help or a handyman hour."]],
  qs:[["What are we building?",["Bed frame","Dresser","Desk","Shelves","Patio set","Other"]]],
  kw:["IKEA assembly Jacksonville","furniture assembly near me","bed frame assembly Jacksonville","Wayfair assembly service"]},
 {id:"hang",cat:"home",icon:"frame",name:"Shelves, mirrors & art",price:90,qty:true,qtyLabel:"items",inc:0.75,slug:"picture-shelf-mirror-hanging-jacksonville",short:"Hung level, secure and right.",
  h1:"Shelf, mirror and picture hanging in Jacksonville",title:"Picture, Mirror & Shelf Hanging Jacksonville FL | Homestallers",
  desc:"Picture, mirror and floating shelf hanging in Jacksonville, FL. Level, secure, into studs or the right anchors. $90 per item. Book online.",
  intro:["Floating shelves that actually hold weight. A big mirror that won't move. A gallery wall that's evenly spaced. Your pro hangs it right the first time, for $90 per item.","Each item includes about 45 minutes, which covers most pieces."],
  more:[["Gallery walls","Lay your frames out on the floor or tape paper templates on the wall first. Your pro can help you settle the spacing, usually 2 to 3 inches between frames, then hangs everything level."],["Heavy mirrors and art","Heavy pieces go into studs or onto rated anchors and French cleats. Block walls get masonry anchors."]],
  included:["Find studs and pick the right anchors","Hang level and secure","Floating shelves, mirrors, art, coat racks","Patch small holes from old hardware"],
  notIncluded:["The items and special hardware"],
  prep:["Have items in the room","Know roughly where you want them"],
  faq:[["How much to hang a mirror?","$90 per item. Gallery walls are usually best booked as a handyman hour."],["Can you hang on block walls?","Yes, with masonry anchors."]],
  qs:[["What are we hanging?",["Shelves","Mirror","Art or frames","Gallery wall","Other"]]],
  kw:["picture hanging service Jacksonville","floating shelf installation","mirror hanging near me"]},
 {id:"blinds",cat:"home",icon:"blinds",name:"Blinds & curtain rods",price:90,qty:true,qtyLabel:"windows",inc:0.75,slug:"blinds-curtain-installation-jacksonville",short:"Measured, mounted and level.",
  h1:"Blinds and curtain rod installation in Jacksonville",title:"Blinds & Curtain Rod Installation Jacksonville FL | Homestallers",
  desc:"Blinds, shades and curtain rod installation in Jacksonville, FL. $90 per window, level and secure. Book online.",
  intro:["Florida sun is strong. New blinds, shades or blackout curtains make a big difference in heat and sleep. Your pro installs them for $90 per window."],
  more:[["Inside or outside mount","Inside mounts look cleaner but need enough window depth. Outside mounts block more light. Your pro can help you choose before you order."],["Curtain rods done right","Hanging rods higher and wider than the window makes ceilings look taller and lets more light in when open."]],
  included:["Mount blinds, shades or rods","Level and test operation","Remove old blinds","Haul away packaging"],
  notIncluded:["Blinds, shades and rods","Motorized shades that need wiring"],
  prep:["Have everything delivered and on site"],
  faq:[["How much does blind installation cost?","$90 per window."],["Do you measure?","Yes. Book a handyman hour to measure before you order."]],
  qs:[["What kind?",["Blinds","Shades","Curtain rods","Shutters","Other"]]],
  kw:["blind installation Jacksonville","curtain rod installation near me"]},
 {id:"lights",cat:"home",icon:"star",name:"Holiday light hanging",price:150,inc:2,slug:"christmas-light-installation-jacksonville",short:"Plug-in lights on the roofline.",
  h1:"Christmas light installation in Jacksonville",title:"Christmas Light Hanging Jacksonville FL | $150 | Homestallers",
  desc:"Holiday and Christmas light hanging in Jacksonville, FL. Plug-in lights on rooflines, bushes and trees for $150. Takedown available. Book online.",
  intro:["Skip the ladder. Your pro hangs your plug-in holiday lights along the roofline, around windows, on bushes and in trees, with timers set so they come on by themselves.","The $150 package includes 2 hours, which covers most single-story homes. Takedown after the holidays is the same easy booking."],
  more:[["Clips, not nails","Lights go up with gutter and shingle clips, so nothing gets nailed into your roof or trim."],["Timers and smart plugs","Outdoor timers or smart plugs turn everything on at dusk and off at bedtime, plugged into your existing outdoor outlets."]],
  included:["2 hours of hanging","Roofline, windows, bushes and trees","Clips and timer setup","Test everything before your pro leaves"],
  notIncluded:["Lights (you supply them, or at cost)","Two-story rooflines may take longer","New outdoor outlets"],
  prep:["Have lights tested and out of the boxes","Know which outlets you want to use"],
  faq:[["Do you take them down too?","Yes. Book takedown in January as a handyman hour."],["Do you hang on two-story homes?","Yes. Two-story rooflines usually take longer than 2 hours."]],
  qs:[["Home",["One story","Two story"]]],
  kw:["Christmas light installation Jacksonville","holiday light hanging service near me"]},
 {id:"homesetup",cat:"home",icon:"tv",name:"Home setup bundle",price:299,inc:4,slug:"home-setup-bundle-jacksonville",short:"1 TV with hidden wires, 2 furniture items, 1 handyman hour.",
  h1:"Home setup bundle in Jacksonville",title:"Home Setup Bundle Jacksonville FL | $299 | Homestallers",
  desc:"Home setup in Jacksonville, FL: 1 TV mounted with hidden wires, 2 furniture items assembled and 1 handyman hour for $299. Save $90. Book online.",
  intro:["Our most popular bundle. One TV on the wall with the wires hidden, two pieces of furniture built, and an hour for the small stuff on your list.","It's $299, which saves $90 compared with booking each job on its own."],
  more:[["What fits in the handyman hour","Hanging a mirror or shelf, curtain rods, smoke alarm batteries, a loose door handle, connecting a soundbar or setting up a streaming stick."],["How the time works","The bundle includes up to 4 hours of work. If it takes longer, extra time is $80 an hour, and we ask before going over. If we finish early, the bundle price stays the same."],["Great for one room","Perfect for setting up a living room, bonus room, bedroom or home office in one visit."]],
  included:["1 TV mounted with hidden wires (drywall)","2 furniture items assembled","1 hour of handyman help","Up to 4 hours of work in total"],
  notIncluded:["TV mount and in-wall cord kit (you supply them, or at cost)","Brick, stone or over-fireplace mounts (add $40)","Time over 4 hours, $80 an hour with your OK"],
  prep:["Have the TV, mount, cord kit and furniture boxes in the room","Write down what you want in the handyman hour"],
  faq:[["What if it takes longer than 4 hours?","Extra time is $80 an hour, and we ask before going over."],["What if it takes less time?","The bundle price stays the same. Leftover time can go to small extras on your list."],["Can I swap the TV for furniture?","Yes. Tell us in the booking notes and we'll adjust."]],
  qs:[["Which room?",["Living room","Bedroom","Office","Bonus room","Other"]]],
  kw:["TV mounting and furniture assembly Jacksonville","room setup service Jacksonville","home setup package"]},
 {id:"movein",cat:"home",icon:"box",name:"Move-in bundle",price:499,inc:7,slug:"move-in-bundle-jacksonville",short:"2 TVs, 3 furniture items, 2 handyman hours.",
  h1:"Move-in bundle in Jacksonville",title:"Move-In Bundle Jacksonville FL | $499 | Homestallers",
  desc:"Move-in help in Jacksonville, FL: 2 TVs mounted, 3 furniture items assembled and 2 handyman hours for $499. Save $100. Book online.",
  intro:["Moving into a new place means boxes, bare walls and a long list. The move-in bundle takes care of the big stuff in one visit: two TVs on the wall, three pieces of furniture built, and two hours for everything else on your list.","It's $499, which saves $100 compared with booking each job on its own."],
  more:[["What fits in the 2 handyman hours","Hanging shelves and mirrors, curtain rods, smoke alarm batteries, door hardware, setting up Wi-Fi, connecting a soundbar, or anything small that's still on your list after the TVs and furniture are done."],["How the time works","The bundle includes up to 7 hours of work. Most move-ins fit comfortably. If yours takes longer, extra time is $80 an hour, and we ask before going over. If we finish early, the bundle price stays the same."],["Perfect for new construction","New homes in Nocatee, St. Johns, Oakleaf, Yulee and Oceanway usually need exactly this: TVs, furniture and a punch list of small things the builder didn't do."]],
  included:["2 TVs mounted and set up (drywall)","3 furniture items assembled","2 hours of handyman help for anything else","Tall furniture anchored to the wall","Up to 7 hours of work in total"],
  notIncluded:["TV mounts and parts (you supply them, or at cost)","Hiding TV wires inside the wall (add $50 per TV)","Brick, stone or over-fireplace mounts (add $40 each)","Time over 7 hours, $80 an hour with your OK"],
  prep:["Have TVs, mounts and furniture boxes in the right rooms","Write a list for the handyman hours","Have your Wi-Fi password handy"],
  faq:[["What if my move-in takes longer than 7 hours?","Extra time is $80 an hour, and we ask before going over. You can also schedule a second visit."],["What if it takes less time?","The bundle price stays the same. Leftover time can go to small extras on your list."],["Can I swap items?","Yes. Swap a TV for 1 extra furniture item, or tell us what you need and we'll suggest the right booking."]],
  qs:[["When did you move in?",["Moving this week","Moved in recently","Been here a while"]]],
  kw:["move-in services Jacksonville","new home setup Jacksonville","TV mounting and furniture assembly package"]},
 {id:"moving",cat:"help",icon:"box",name:"Moving help (2 hrs)",price:160,inc:2,slug:"moving-help-jacksonville",short:"Load, unload or rearrange.",
  h1:"Moving help in Jacksonville",title:"Moving Help Jacksonville FL | $80/hr | Homestallers",
  desc:"Moving labor in Jacksonville, FL. Load or unload a truck, move furniture between rooms and set up the new place. $160 for 2 hours. Book online.",
  intro:["Need an extra set of hands? Book 2 hours to load a rental truck, unload a POD, or rearrange heavy furniture.","Your pro can also set up the new place while we're there: mount the TV, build the bed frame and get the Wi-Fi going."],
  more:[["Move-in setup","The best time to mount TVs, hang shelves and build furniture is right when you move in. Pair moving help with other packages and get it all done in one visit."]],
  included:["2 hours of help","Loading, unloading and carrying","Taking apart and putting back beds and tables","Placing furniture where you want it"],
  notIncluded:["A truck","Pianos, safes and gun safes","Long-distance moves"],
  prep:["Have boxes packed and labeled","Reserve elevators or parking if needed"],
  faq:[["Do you bring a truck?","No. This is labor only. You rent the truck or POD."],["Can I book more than 2 hours?","Yes. Add a handyman hour for each extra hour."]],
  qs:[["What do you need?",["Loading","Unloading","Both","Moving within the house"]]],
  kw:["moving help Jacksonville","moving labor near me","help loading moving truck Jacksonville"]},
 {id:"handyman",cat:"help",icon:"wrench",name:"Handyman hour",price:80,qty:true,qtyLabel:"hours",inc:1,slug:"handyman-jacksonville",short:"Your to-do list, an hour at a time.",
  h1:"Handyman services in Jacksonville",title:"Handyman Jacksonville FL | $80/hr | Homestallers",
  desc:"Handyman and home help in Jacksonville, FL. Small repairs, door hardware, caulking, smoke alarm swaps, odd jobs. $80 an hour. Book online with your pro.",
  intro:["Every home has a list. A cabinet door that won't close. Caulk that's turned gray. A smoke alarm chirping at 3 a.m. A loose door handle. Book an hour or a few, and your pro works through it.","Pick the number of hours when you book. If we finish early, we keep going down the list."],
  more:[["Popular to-do list items","Caulking tubs and sinks, door knobs and deadbolts, cabinet hinges and handles, towel bars and hooks, battery smoke and CO alarm swaps, weatherstripping, baby-proofing, small drywall patches and touch-up paint."],["Getting ready to sell or rent","A few hours of small fixes before photos or a move-out inspection can make a big difference. Bring the punch list from your realtor or landlord."]],
  included:["Small repairs and adjustments","Door hardware and locks","Caulking and weatherstripping","Battery smoke and CO alarm swaps","Small drywall patches","Baby-proofing"],
  notIncluded:["Parts, at cost","Electrical, plumbing or roofing work","Jobs over $2,500"],
  prep:["Write your list, most important first","Have any parts on site"],
  faq:[["What does a handyman cost in Jacksonville?","$80 an hour, 1 hour minimum, plus parts at cost."],["Can you do several small jobs in one visit?","Yes. That's the best way to use the time."],["What can't you do?","Electrical and plumbing work. Those services are coming soon, done by a licensed contractor."]],
  qs:[["Roughly how many tasks?",["1 to 3","4 to 6","7 or more"]]],
  kw:["handyman Jacksonville FL","handyman near me","home repair Jacksonville","odd jobs Jacksonville"]},
 {id:"pressure",cat:"help",icon:"spray",name:"Pressure washing",price:160,inc:2,slug:"pressure-washing-jacksonville",short:"Driveway, patio or pool deck.",
  h1:"Pressure washing in Jacksonville",title:"Pressure Washing Jacksonville FL | $160 | Homestallers",
  desc:"Driveway, sidewalk, patio and pool deck pressure washing in Jacksonville, FL. $160 for 2 hours. Book online.",
  intro:["Florida humidity turns concrete green and black fast. Two hours of pressure washing brings a driveway, walkway or pool deck back to bright.","Most two-car driveways plus the front walk fit in the 2 hours."],
  more:[["What we clean","Driveways, sidewalks, patios, pool decks, fences and outdoor furniture. Painted surfaces and screens get a gentler wash."]],
  included:["2 hours of washing","Driveway, walkways, patio or pool deck","Surface cleaner for even results"],
  notIncluded:["Roof washing","Second-story siding"],
  prep:["Move cars and furniture","Make sure an outdoor spigot works"],
  faq:[["How much does driveway pressure washing cost?","$160 covers 2 hours, which handles most driveways and front walks."]],
  qs:[["What needs washing?",["Driveway","Patio or pool deck","Walkways","Fence","A mix"]]],
  kw:["pressure washing Jacksonville","driveway cleaning Jacksonville","pool deck pressure washing near me"]}
];
const P=id=>PKG.find(p=>p.id===id);
const incTxt=h=>h<1?Math.round(h*60)+" min":h===1?"1 hour":h+" hours";

/* ---------- licensed services: interest list only ---------- */
const SOON=[["ev","Tesla & EV charger install"],["fan","Ceiling fan install"],["light","Light fixture install"],["outlet","Outlets & switches"],["outdoor","Outdoor & motion lights"],["doorbell","Hardwired doorbell"],["thermostat","Smart thermostat"],["landscape","Landscape lighting"],["elecrepair","Electrical repair"],["plumbing","Faucets, toilets & drains"]];

/* ---------- local SEO: counties, towns, and service x town pages ---------- */
const COUNTIES={
 duval:{name:"Duval County",slug:"duval-county",seat:"Jacksonville",note:"Duval County and the City of Jacksonville share one government, which makes Jacksonville the largest city by area in the lower 48 states. That size is why a flat travel policy matters: a job in Oceanway and a job in Mandarin can be 30 minutes apart."},
 stjohns:{name:"St. Johns County",slug:"st-johns-county",seat:"St. Augustine",note:"St. Johns County is one of the fastest growing counties in Florida. Neighborhoods like Nocatee, Julington Creek and Fruit Cove are full of newer homes that need move-in setup."},
 clay:{name:"Clay County",slug:"clay-county",seat:"Green Cove Springs",note:"Clay County sits southwest of Jacksonville along the St. Johns River, with established neighborhoods in Orange Park and Fleming Island and growing communities in Middleburg."},
 nassau:{name:"Nassau County",slug:"nassau-county",seat:"Fernandina Beach",note:"Nassau County is just north of Jacksonville. Yulee is the fastest growing part of the county, with lots of new construction along A1A."}
};
// type: beach | historic | new | suburban | river
const TOWNS=[
 {slug:"jacksonville",name:"Jacksonville",c:"duval",mi:0,type:"suburban",zips:["32207","32216","32217","32256","32257","32246","32211"],spots:"the St. Johns River, downtown and the Town Center",homes:"Jacksonville has everything from 1920s bungalows to new subdivisions, condos and apartments.",near:["san-marco","southside","mandarin","arlington"]},
 {slug:"riverside",name:"Riverside",c:"duval",mi:3,type:"historic",zips:["32204","32205"],spots:"Five Points, the Riverside Arts Market and Memorial Park",homes:"Riverside is one of the largest historic districts in Florida, with bungalows, Prairie-style homes and plaster walls that need the right anchors.",near:["avondale","murray-hill","san-marco"]},
 {slug:"avondale",name:"Avondale",c:"duval",mi:5,type:"historic",zips:["32205","32210"],spots:"the Shoppes of Avondale and the riverfront parks",homes:"Avondale homes from the 1920s often have plaster and lath walls, tall ceilings and original trim worth protecting.",near:["riverside","ortega","murray-hill"]},
 {slug:"murray-hill",name:"Murray Hill",c:"duval",mi:5,type:"historic",zips:["32205"],spots:"Edgewood Avenue and Murray Hill's small-town main street",homes:"Murray Hill is full of 1930s and 1940s cottages and bungalows, many being updated by new owners.",near:["riverside","avondale","westside"]},
 {slug:"ortega",name:"Ortega",c:"duval",mi:7,type:"river",zips:["32210"],spots:"the Ortega River and its waterfront streets",homes:"Ortega has large historic homes on the water, with plaster walls, high ceilings and big outdoor spaces.",near:["avondale","westside","riverside"]},
 {slug:"san-marco",name:"San Marco",c:"duval",mi:2,type:"historic",zips:["32207"],spots:"San Marco Square and the Southbank Riverwalk",homes:"San Marco mixes 1920s homes, mid-century houses and riverfront condos on the Southbank.",near:["southside","riverside","mandarin"]},
 {slug:"springfield",name:"Springfield",c:"duval",mi:2,type:"historic",zips:["32206"],spots:"its historic district and Klutho Park",homes:"Springfield's Victorian and Prairie-style homes are being restored house by house, and new owners have long to-do lists.",near:["riverside","san-marco","northside"]},
 {slug:"southside",name:"Southside",c:"duval",mi:9,type:"suburban",zips:["32216","32246","32256"],spots:"the St. Johns Town Center and Tinseltown",homes:"Southside is full of apartments, townhomes and newer single-family neighborhoods.",near:["baymeadows","deerwood","san-marco"]},
 {slug:"baymeadows",name:"Baymeadows",c:"duval",mi:10,type:"suburban",zips:["32256","32217"],spots:"Baymeadows Road and the nearby golf communities",homes:"Baymeadows has lots of apartments, condos and townhomes, plus single-family homes off Baymeadows Road.",near:["southside","deerwood","mandarin"]},
 {slug:"deerwood",name:"Deerwood",c:"duval",mi:10,type:"suburban",zips:["32256"],spots:"Deerwood Park and the Deerwood Country Club",homes:"Deerwood has larger homes in gated neighborhoods, many with big living rooms and outdoor spaces.",near:["southside","baymeadows","intracoastal-west"]},
 {slug:"mandarin",name:"Mandarin",c:"duval",mi:10,type:"river",zips:["32223","32257","32258"],spots:"Mandarin Road along the St. Johns River and its old live oaks",homes:"Mandarin has big lots, family homes from the 1970s to 2000s and lots of shade from old oaks.",near:["san-marco","baymeadows","julington-creek"]},
 {slug:"arlington",name:"Arlington",c:"duval",mi:6,type:"suburban",zips:["32211","32277","32225"],spots:"Jacksonville University and the riverfront",homes:"Arlington's ranch homes from the 1950s to 1970s often have block walls and are getting updated.",near:["san-marco","intracoastal-west","southside"]},
 {slug:"intracoastal-west",name:"Intracoastal West",c:"duval",mi:13,type:"suburban",zips:["32224","32246"],spots:"the Intracoastal Waterway and Kernan Boulevard",homes:"Intracoastal West has newer subdivisions and townhomes between Southside and the beaches.",near:["jacksonville-beach","deerwood","arlington"]},
 {slug:"northside",name:"Northside",c:"duval",mi:12,type:"suburban",zips:["32218","32219"],spots:"River City Marketplace and the airport area",homes:"Northside has fast-growing subdivisions near River City Marketplace and established neighborhoods closer to town.",near:["oceanway","springfield","yulee"]},
 {slug:"oceanway",name:"Oceanway",c:"duval",mi:14,type:"new",zips:["32218","32226"],spots:"the Cedar Point and Timucuan Preserve area",homes:"Oceanway is full of new construction, which means lots of first-time TV mounting, blinds and furniture setup.",near:["northside","yulee","arlington"]},
 {slug:"westside",name:"Westside",c:"duval",mi:9,type:"suburban",zips:["32210","32244","32254"],spots:"NAS Jacksonville and Blanding Boulevard",homes:"The Westside has established neighborhoods with block homes, plus many military families moving in and out near NAS Jacksonville.",near:["argyle-forest","ortega","orange-park"]},
 {slug:"argyle-forest",name:"Argyle Forest",c:"duval",mi:14,type:"suburban",zips:["32244","32222"],spots:"Argyle Forest Boulevard and Oakleaf Town Center",homes:"Argyle Forest and Oakleaf have newer family homes and plenty of townhomes.",near:["westside","orange-park","middleburg"]},
 {slug:"jacksonville-beach",name:"Jacksonville Beach",c:"duval",mi:16,type:"beach",zips:["32250"],spots:"the Jacksonville Beach Pier and Beach Boulevard",homes:"Jax Beach has beach cottages, condos and rentals that turn over often, so move-in setup is common.",near:["neptune-beach","atlantic-beach","ponte-vedra-beach"]},
 {slug:"neptune-beach",name:"Neptune Beach",c:"duval",mi:16,type:"beach",zips:["32266"],spots:"Beaches Town Center",homes:"Neptune Beach is a small, walkable beach town with cottages and updated older homes.",near:["atlantic-beach","jacksonville-beach"]},
 {slug:"atlantic-beach",name:"Atlantic Beach",c:"duval",mi:17,type:"beach",zips:["32233"],spots:"Beaches Town Center and Hanna Park",homes:"Atlantic Beach mixes beach cottages, newer rebuilds and homes near Hanna Park.",near:["neptune-beach","jacksonville-beach","intracoastal-west"]},
 {slug:"ponte-vedra-beach",name:"Ponte Vedra Beach",c:"stjohns",mi:22,type:"beach",zips:["32082"],spots:"TPC Sawgrass and the Ponte Vedra oceanfront",homes:"Ponte Vedra has larger homes with big great rooms, outdoor living areas and salt air to deal with.",near:["nocatee","jacksonville-beach"]},
 {slug:"nocatee",name:"Nocatee",c:"stjohns",mi:22,type:"new",zips:["32081"],spots:"the Nocatee Town Center and Splash Park",homes:"Nocatee is a master-planned community with mostly newer homes, so TVs, blinds, shelves and furniture are the most common jobs.",near:["ponte-vedra-beach","st-johns","intracoastal-west"]},
 {slug:"julington-creek",name:"Julington Creek",c:"stjohns",mi:18,type:"new",zips:["32259"],spots:"Julington Creek Plantation and Durbin Park",homes:"Julington Creek has family neighborhoods from the 1990s on, with plenty of bonus rooms and garages to set up.",near:["fruit-cove","st-johns","mandarin"]},
 {slug:"fruit-cove",name:"Fruit Cove",c:"stjohns",mi:19,type:"river",zips:["32259"],spots:"the St. Johns River and Alpine Groves Park",homes:"Fruit Cove has larger lots and family homes along the river side of St. Johns County.",near:["julington-creek","st-johns","mandarin"]},
 {slug:"st-johns",name:"St. Johns",c:"stjohns",mi:22,type:"new",zips:["32259","32092"],spots:"Durbin Park and the World Golf Village area",homes:"St. Johns is one of the fastest growing areas in Florida, with new neighborhoods going up every year.",near:["julington-creek","fruit-cove","nocatee"]},
 {slug:"orange-park",name:"Orange Park",c:"clay",mi:15,type:"suburban",zips:["32073","32065"],spots:"the Orange Park Mall and Kingsley Avenue",homes:"Orange Park has established neighborhoods, many military families from NAS Jacksonville and plenty of block homes.",near:["fleming-island","argyle-forest","westside"]},
 {slug:"fleming-island",name:"Fleming Island",c:"clay",mi:22,type:"river",zips:["32003"],spots:"Eagle Harbor and the St. Johns River",homes:"Fleming Island has family neighborhoods like Eagle Harbor, with bigger homes and outdoor living areas.",near:["orange-park","green-cove-springs"]},
 {slug:"middleburg",name:"Middleburg",c:"clay",mi:25,type:"new",zips:["32068"],spots:"Black Creek and Blanding Boulevard",homes:"Middleburg has a mix of rural lots and new subdivisions, with plenty of new homes to set up.",near:["orange-park","argyle-forest","green-cove-springs"]},
 {slug:"green-cove-springs",name:"Green Cove Springs",c:"clay",mi:27,type:"river",zips:["32043"],spots:"Spring Park and the St. Johns River",homes:"Green Cove Springs is a small river town with historic homes downtown and new neighborhoods nearby.",near:["fleming-island","middleburg"]},
 {slug:"yulee",name:"Yulee",c:"nassau",mi:24,type:"new",zips:["32097"],spots:"A1A and the Wildlight community",homes:"Yulee is growing fast with new communities like Wildlight, so move-in setup is a big part of the work.",near:["oceanway","northside","callahan"]},
 {slug:"bartram-park",name:"Bartram Park",c:"duval",mi:15,type:"new",zips:["32258"],spots:"Bartram Park Boulevard and the Durbin Creek area",homes:"Bartram Park is mostly newer homes and townhomes built since the 2000s, with plenty of move-in setup.",near:["mandarin","julington-creek","southside"]},
 {slug:"lakewood",name:"Lakewood",c:"duval",mi:4,type:"historic",zips:["32207"],spots:"University Boulevard and the San Jose corridor",homes:"Lakewood has 1950s ranch homes on quiet streets, many with block walls and updated interiors.",near:["san-marco","san-jose","southside"]},
 {slug:"san-jose",name:"San Jose",c:"duval",mi:6,type:"river",zips:["32217","32207"],spots:"San Jose Boulevard and the river-side streets",homes:"San Jose has 1920s Mediterranean Revival homes near the river alongside mid-century houses.",near:["lakewood","mandarin","san-marco"]},
 {slug:"oakleaf",name:"Oakleaf",c:"clay",mi:18,type:"new",zips:["32065"],spots:"Oakleaf Town Center and Oakleaf Plantation",homes:"Oakleaf Plantation is full of newer family homes and townhomes, many with bonus rooms to set up.",near:["argyle-forest","orange-park","middleburg"]},
 {slug:"callahan",name:"Callahan",c:"nassau",mi:25,type:"suburban",zips:["32011"],spots:"US 1 and downtown Callahan",homes:"Callahan is a small town with larger lots, older homes and new neighborhoods on the edge of Jacksonville.",near:["yulee","northside","oceanway"]}
];
const ROADS={"jacksonville": "I-95, I-295 and J. Turner Butler Boulevard", "riverside": "Riverside Avenue, Park Street and I-10", "avondale": "St. Johns Avenue and Roosevelt Boulevard", "murray-hill": "Edgewood Avenue and Roosevelt Boulevard", "ortega": "Roosevelt Boulevard and Ortega Boulevard", "san-marco": "San Marco Boulevard and I-95", "springfield": "Main Street and I-95", "southside": "J. Turner Butler Boulevard and Southside Boulevard", "baymeadows": "Baymeadows Road and I-95", "deerwood": "Southside Boulevard and J. Turner Butler Boulevard", "mandarin": "San Jose Boulevard and I-295", "arlington": "Arlington Expressway and Atlantic Boulevard", "intracoastal-west": "Kernan Boulevard and Atlantic Boulevard", "northside": "I-95, I-295 and Dunn Avenue", "oceanway": "Pulaski Road and I-295", "westside": "Blanding Boulevard and I-295", "argyle-forest": "Argyle Forest Boulevard and SR 23", "jacksonville-beach": "Beach Boulevard and 3rd Street (A1A)", "neptune-beach": "Atlantic Boulevard and 3rd Street (A1A)", "atlantic-beach": "Atlantic Boulevard and Mayport Road", "ponte-vedra-beach": "A1A and J. Turner Butler Boulevard", "nocatee": "CR 210 and Nocatee Parkway", "julington-creek": "Racetrack Road and SR 13", "fruit-cove": "SR 13 and Roberts Road", "st-johns": "CR 210 and I-95", "orange-park": "US 17 and Blanding Boulevard", "fleming-island": "US 17", "middleburg": "Blanding Boulevard (SR 21)", "green-cove-springs": "US 17 and SR 16", "yulee": "A1A and I-95", "bartram-park": "Bartram Park Boulevard and I-95", "lakewood": "University Boulevard and San Jose Boulevard", "san-jose": "San Jose Boulevard", "oakleaf": "Oakleaf Plantation Parkway and SR 23", "callahan": "US 1 and US 301"};
TOWNS.forEach(t=>{t.roads=ROADS[t.slug]||"";t.fee=t.mi<=10?0:t.mi<=30?35:null;t.county=COUNTIES[t.c]});
const TOWN=s=>TOWNS.find(t=>t.slug===s);

// service x town pages: which services, their search phrase and a local angle per home type
const LOCAL=[
 {id:"tv",act:"TV Mounting",verb:"TV mounting",slug:"tv-mounting",angle:{beach:"Beach condos and rentals often have block or concrete walls. Your pro brings masonry anchors so your TV goes up secure the first time.",historic:"Older homes here often have plaster and lath walls. Your pro finds the studs carefully and uses the right anchors so the plaster doesn't crack.",new:"New homes usually have drywall over wood studs, which makes mounting quick. It's the perfect time to hide the cords too.",suburban:"Most homes here have drywall in the living room and block on exterior walls. Your pro checks before drilling and brings anchors for both.",river:"Big rooms with river views often mean larger TVs and longer viewing distances. Your pro helps you pick the right height before anything gets drilled."}},
 {id:"assembly",act:"Furniture Assembly",verb:"furniture assembly",slug:"furniture-assembly",angle:{beach:"Rentals and beach condos turn over often. Your pro builds beds, dressers and patio sets fast so you can settle in.",historic:"Older homes have narrow doors and stairs, so building pieces in the room is often the only way. That's exactly what your pro does.",new:"Moving into a new build means a lot of boxes. Book a few items at once and get the whole house built in one visit.",suburban:"From kids' rooms to home offices, your pro builds it level and anchors tall pieces to the wall.",river:"Outdoor furniture and patio sets for the porch and the dock are some of the most common requests here."}},
 {id:"handyman",act:"Handyman Services",verb:"handyman services",slug:"handyman",angle:{beach:"Salt air and sand wear things out faster near the ocean. Door hardware, weatherstripping and caulk are common fixes here.",historic:"Older homes come with sticky doors, gaps and worn hardware. Your pro handles the small fixes carefully, without damaging original trim.",new:"Even new homes have a punch list: towel bars, door stops, shelves and the small stuff the builder skipped.",suburban:"A couple of hours usually knocks out a whole to-do list: caulk, hardware, smoke alarm batteries and small repairs.",river:"Bigger homes mean bigger to-do lists. Book a few hours and your pro works straight through it."}},
 {id:"smart",act:"Smart Home & Camera Setup",verb:"smart home setup",slug:"smart-home-camera-setup",angle:{beach:"Rentals and second homes are perfect for battery cameras and smart locks you can check from anywhere.",historic:"Older homes don't always have wiring where you want it. Battery doorbells and cameras get you covered without opening walls.",new:"New homes are a blank slate. Set up a doorbell, cameras and a smart lock that all work in one app.",suburban:"Doorbells, porch cameras and smart locks are the most booked setup jobs in neighborhoods like this.",river:"Larger lots mean more ground to cover. Your pro checks Wi-Fi at each camera spot so nothing drops offline."}},
 {id:"tech",act:"Tech Help",verb:"in-home tech help",slug:"tech-help",angle:{beach:"Wi-Fi can be tricky in long beach houses and condos with concrete walls. A mesh system usually fixes it for good.",historic:"Thick plaster walls block Wi-Fi. A mesh system with a unit on each floor usually fixes dead spots.",new:"Moving in is the best time to set up Wi-Fi, TVs and smart devices properly from the start.",suburban:"Families book your pro for everything from Wi-Fi dead spots to setting up a new TV or helping parents with their phones.",river:"Big homes need strong Wi-Fi everywhere, including the porch and the dock. Your pro sets up mesh Wi-Fi and tests every room."}},
 {id:"pressure",act:"Pressure Washing",verb:"pressure washing",slug:"pressure-washing",angle:{beach:"Sand, salt and humidity turn driveways and pool decks dark fast near the ocean. A wash every year or two keeps them bright.",historic:"Older sidewalks and brick pavers need a gentler touch. Your pro adjusts the pressure so nothing gets damaged.",new:"Even new driveways get stained by irrigation, red clay and Florida mildew within a couple of years.",suburban:"Driveways, walkways and pool decks are the most common jobs. Most fit in the 2 hours included.",river:"Shade from big oaks means more mildew on driveways, docks and patios. A good wash brings them back."}},
 {id:"moving",act:"Moving Help",verb:"moving help",slug:"moving-help",angle:{beach:"Beach rentals turn over often and parking can be tight. Your pro helps load or unload fast.",historic:"Narrow stairs and doorways in older homes make heavy furniture tricky. Your pro takes pieces apart and puts them back together.",new:"New neighborhoods mean lots of moving trucks. Pair moving help with TV mounting and furniture assembly for a one-visit move-in.",suburban:"Load a rental truck, unload a POD or rearrange the house. Two hours goes a long way.",river:"Bigger homes have more to move. Book extra hours for a full load or unload."}}
,
 {id:"tvclean",act:"TV Mounting with Hidden Wires",verb:"TV mounting with hidden wires",slug:"tv-wire-hiding",angle:{beach:"Concrete and block walls are common near the beach, so a slim paintable cord cover is often the cleanest option.",historic:"Plaster walls take extra care when cutting openings. Your pro keeps the holes small and patches around the plates.",new:"New drywall makes in-wall cord kits quick and clean. It's the best time to do it, before furniture goes in.",suburban:"Interior drywall walls usually take an in-wall kit. Block exterior walls get a paintable cord cover instead.",river:"Big rooms often have the TV far from the outlet. Your pro plans the cable route so nothing shows."}},
 {id:"hang",act:"Picture & Mirror Hanging",verb:"picture and mirror hanging",slug:"picture-hanging",angle:{beach:"Block walls near the beach need masonry anchors. Your pro brings them so heavy mirrors and art stay put.",historic:"Plaster walls crack easily. Your pro drills slowly and uses the right anchors for older homes.",new:"New homes are blank walls. Gallery walls, mirrors and floating shelves are the most common requests.",suburban:"Floating shelves, big mirrors and gallery walls, hung level and into studs where possible.",river:"High ceilings and big walls are perfect for large art and oversized mirrors, hung safely."}},
 {id:"blinds",act:"Blinds Installation",verb:"blinds installation",slug:"blinds-installation",angle:{beach:"Strong sun near the ocean makes blackout and solar shades popular. Your pro mounts them level and secure.",historic:"Older windows aren't always square. Your pro checks each opening before mounting inside or outside.",new:"New builds usually come without window treatments. Get every window done in one visit.",suburban:"Blinds, shades and curtain rods, installed level and tested on every window.",river:"Large windows facing the water get a lot of sun. Wide shades and long curtain rods need solid anchoring."}},
 {id:"lights",act:"Christmas Light Installation",verb:"Christmas light hanging",slug:"christmas-light-installation",angle:{beach:"Salt air and wind near the coast mean lights need to be clipped on securely. No nails in your roof or trim.",historic:"Older homes have detailed trim. Clips keep lights neat without damaging the original wood.",new:"New neighborhoods go all out for the holidays. Clean rooflines and timers make it easy.",suburban:"Rooflines, bushes and trees, on timers so they come on by themselves at dusk.",river:"Big oaks and long rooflines look great lit up. Two-story homes may take a little longer."}}
];

const TYPE={
 beach:{life:"Life here moves at beach speed: morning walks on the sand, local restaurants a short ride away and plenty of visitors in the summer. Homes take a beating from salt air, sun and sand, so fixtures, hardware and outdoor surfaces wear faster than they do inland.",
  tips:["Rinse outdoor fixtures and hardware now and then to slow salt corrosion","Use stainless or coated hardware outside","Pressure wash pavers and pool decks once or twice a year","Choose blinds and shades that can handle strong sun"],
  season:"Spring and early summer are busy with rentals turning over and seasonal residents arriving. Book a week or two ahead if you can."},
 historic:{life:"Tree-lined streets, front porches and homes with real character define the area. Many houses are 70 to 100 years old, with plaster walls, original trim and wiring and framing that don't always follow modern rules, so careful work matters.",
  tips:["Plaster walls need slow drilling and the right anchors","Find studs carefully, since they're not always 16 inches apart","Protect original trim and floors during any job","Battery and plug-in smart devices avoid opening old walls"],
  season:"Fall and spring are popular for projects in older homes, when windows are open and it's comfortable to work inside."},
 new:{life:"New neighborhoods, community pools, parks and trails are the norm here, with lots of young families and people relocating to Northeast Florida. Most homes are under 20 years old, and many are brand new.",
  tips:["New drywall makes TV mounting and hidden wires quick","Check HOA rules before mounting anything outside","Anchor tall furniture to the wall right away if you have kids","Set up Wi-Fi, cameras and the doorbell before move-in chaos sets in"],
  season:"Move-in season peaks in summer, when families relocate before school starts. That's the busiest time for TV mounting and furniture assembly."},
 suburban:{life:"Established neighborhoods, good schools and easy access to shopping and highways make this a practical place to live. Homes range from 1960s block ranches to newer subdivisions and townhomes.",
  tips:["Block exterior walls need masonry anchors","Interior walls are usually drywall over wood studs","A mesh Wi-Fi system fixes dead spots in long ranch homes","Driveways and walkways look new again after a pressure wash"],
  season:"Weekends and evenings fill up first. Weekday mornings usually have the most open times."},
 river:{life:"The St. Johns River and its creeks shape life here: big oaks, waterfront views, docks and plenty of shade. Homes often sit on larger lots with porches, patios and outdoor living spaces.",
  tips:["Shade and humidity mean more mildew on concrete and docks","Big rooms and long walls suit larger TVs and art","Strong Wi-Fi out to the porch or dock usually needs a mesh system","Outdoor furniture should be anchored or stored before storms"],
  season:"Spring and fall are perfect for outdoor work like pressure washing and patio setup, before and after the summer heat."}
};
const SVC_EX={
 tv:["Mounting a 65 inch TV in the living room","Bedroom TVs on swivel arms","TVs over a fireplace with a pull-down mount","Soundbars mounted under the TV"],
 tvclean:["Hiding HDMI and power behind the wall","Paintable cord covers on block walls","Clean setups for game consoles and cable boxes","Soundbar wiring kept out of sight"],
 assembly:["Bed frames and dressers for a new bedroom","Home office desks and chairs","Kids' bunk beds and bookshelves (anchored)","Patio sets and grills"],
 handyman:["A list of small fixes before guests arrive","Caulking tubs and sinks","Door hardware and cabinet hinges","Battery smoke and CO alarm swaps"],
 smart:["Ring and Eufy battery doorbells","Wireless cameras for the driveway and backyard","Smart locks for rentals and dog walkers","Smart plugs and lights on schedules"],
 tech:["Fixing Wi-Fi dead spots with mesh","Setting up a new TV and streaming apps","Helping parents with phones and tablets","Printers that won't connect"],
 pressure:["Driveways and front walks","Pool decks and patios","Fences and screened porch floors","Docks and outdoor furniture"],
 moving:["Loading a rental truck or POD","Unloading and placing furniture","Taking apart and rebuilding beds","Rearranging rooms"],
 hang:["Gallery walls in the living room","Large mirrors in entryways","Floating shelves in kitchens and offices","Art over the bed or couch"],
 blinds:["Blackout shades for bedrooms","Blinds for every window in a new home","Curtain rods hung high and wide","Shades for sunny west-facing windows"],
 lights:["Roofline lights on timers","Wrapped trees and bushes","Window outlines","Takedown in January"]
};

const JAX_SVC={
 tv:"Northeast Florida's heat and humidity are hard on electronics in sunrooms and lanais, so we mount outdoor and porch TVs on weather-rated mounts and keep cords out of the weather. Inside, many homes have block exterior walls and drywall interior walls, and we bring anchors for both.",
 tvclean:"Concrete block is common on exterior walls across Jacksonville, which is why we often use a slim paintable cord cover there and in-wall kits on interior drywall. Either way, nothing hangs down the wall.",
 assembly:"Garages in Jacksonville can top 100 degrees in summer, so we build furniture inside where it'll live. Tall pieces get anchored, which also helps keep them steady during storm season.",
 handyman:"Humidity, summer storms and salt air wear on caulk, weatherstripping and hardware faster here than up north. A yearly handyman visit keeps the small stuff from turning into bigger problems.",
 smart:"Afternoon thunderstorms and hurricane season make battery-backed cameras and doorbells popular here, since they keep recording when the power blinks. We check Wi-Fi at each spot so nothing drops offline.",
 tech:"Long ranch homes and concrete block walls are common across Jacksonville, and both block Wi-Fi. A mesh system usually fixes dead spots, including out to the lanai and pool.",
 pressure:"Year-round humidity, frequent rain and pollen in spring turn concrete dark faster in Northeast Florida than almost anywhere. Most driveways here need a wash every 12 to 18 months.",
 moving:"Jacksonville summers are hot and humid, so we plan heavy lifting for cooler morning hours when we can, and we work fast so your stuff isn't sitting in the heat.",
 hang:"Older homes have plaster and newer ones have drywall, while exterior walls are often block. Humidity can also loosen cheap adhesive hooks, so we hang with real hardware.",
 blinds:"Florida sun is strong, especially on west-facing windows in the afternoon. Good shades and blackout blinds keep rooms cooler and can help with your JEA or FPL bill.",
 lights:"Our holidays are breezy and mild, but coastal wind and the occasional cold front mean lights need to be clipped on securely. We use clips, never nails."
};
const LS=id=>LOCAL.find(x=>x.id===id);
const townSvcSlug=(l,t)=>`${l.slug}-${t.slug}-fl`;
const townSlug=t=>`home-services-${t.slug}-fl`;
const feeLine=t=>t.fee?`${t.name} is about ${t.mi} miles from central Jacksonville, so there's a flat $35 travel fee per visit.`:`${t.name} is within 10 miles of central Jacksonville, so there's no travel fee.`;

function seoTownSvc(l,t){
  const p=P(l.id),co=t.county,others=LOCAL.filter(x=>x.id!==l.id),near=t.near.map(TOWN).filter(Boolean);
  return `<article class="seo">
  <div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#${townSlug(t)}">${t.name}</a> / ${l.act}</div>
   <span class="tag">${co.name} · Florida</span>
   <h1>${l.act} in ${t.name}, FL</h1>
   <p class="lead">${p.intro[0]}</p>
   <div class="btnrow"><a class="btn" href="#book" data-svc="${p.id}">Book for ${usd(p.price)}</a><a class="btn ghost" href="#contact">Ask a question</a></div>
   <ul class="facts"><li><b>${usd(p.price)}${p.qty?" each":""}</b><span>Flat price</span></li><li><b>${t.fee?"$35":"$0"}</b><span>Travel to ${t.name}</span></li><li><b>${incTxt(p.inc)}</b><span>Included</span></li></ul></div>
  <div class="seo-grid"><div class="prose">
   <h2>${l.act} for ${t.name} homes</h2>
   <p>${t.homes} ${l.angle[t.type]}</p>
   <p>Homestallers serves ${t.name} and the area around ${t.spots}. You book online, pick a time, and a trusted local pro handles it. Homestallers is led by local, experienced professional Alex Montalbano, and every job is done carefully and cleaned up before we leave.</p>
   <h2>Living in ${t.name}</h2><p>${t.name} is in ${co.name}${t.mi?`, about ${t.mi} miles from downtown Jacksonville`:""}. Locals know it for ${t.spots}. ${TYPE[t.type].life}</p>
   <h2>Getting to ${t.name}</h2><p>We reach ${t.name} by way of ${t.roads}, so most visits arrive right on time. ${feeLine(t)}</p>
   <h2>${l.act} and the Florida climate</h2><p>${JAX_SVC[l.id]||""}</p>
   <h2>Popular ${l.verb} jobs in ${t.name}</h2><ul class="checks">${(SVC_EX[l.id]||[]).map(i=>`<li>${i}</li>`).join("")}</ul>
   <h2>What's included</h2><ul class="checks">${p.included.map(i=>`<li>${i}</li>`).join("")}</ul>
   ${(p.more||[]).slice(0,3).map(m=>`<h2>${m[0]}</h2><p>${m[1]}</p>`).join("")}
   <h2>What ${l.verb} costs in ${t.name}</h2>
   <p>${p.name} is a flat ${usd(p.price)}${p.qty?" each":""}, with ${incTxt(p.inc)} of work included. If it takes longer, it's $80 an hour after that, and we ask before going over. ${feeLine(t)} Parts and materials are extra, at cost.</p>
   <h2>Home tips for ${t.name}</h2><ul class="checks">${TYPE[t.type].tips.map(i=>`<li>${i}</li>`).join("")}</ul>
   <h2>When to book in ${t.name}</h2><p>${TYPE[t.type].season} We're open 7 days a week, 8am to 6pm.</p>
   <h2>Why ${t.name} homeowners book Homestallers</h2><ul class="checks"><li>Flat prices shown before you book, with no surprise quotes</li><li>Led by local, experienced professional Alex Montalbano</li><li>Careful work and a clean space when we leave</li><li>Secure online checkout with card, Apple Pay or Google Pay</li><li>A 30 day workmanship guarantee</li></ul>
   <h2>Before your pro arrives</h2><ul class="checks">${p.prep.map(i=>`<li>${i}</li>`).join("")}</ul>
   <h2>${l.act} questions from ${t.name}</h2>
   <div class="faq">
    <details><summary>How much does ${l.verb} cost in ${t.name}?</summary><p>${p.name} is ${usd(p.price)}${p.qty?" each":""}${t.fee?", plus a $35 travel fee to "+t.name:""}. Parts are extra, at cost.</p></details>
    <details><summary>Do you charge a travel fee to ${t.name}?</summary><p>${feeLine(t)}</p></details>
    <details><summary>Which ZIP codes in ${t.name} do you cover?</summary><p>We cover ${t.zips.join(", ")} and the surrounding area in ${co.name}.</p></details>
    <details><summary>Do you work weekends in ${t.name}?</summary><p>Yes. We're open 7 days a week, 8am to 6pm.</p></details>
    <details><summary>Do I need to be home?</summary><p>An adult should be home, or you can arrange access ahead of time with a gate code or lockbox.</p></details>
    <details><summary>Can you do other jobs on the same visit?</summary><p>Yes. Add another service at checkout, or book a handyman hour for the small stuff on your list.</p></details>
    <details><summary>How soon can you come?</summary><p>Most weeks there are openings within a few days. Pick a time when you book, 7 days a week, 8am to 6pm.</p></details>
    ${p.faq.slice(0,3).map(f=>`<details><summary>${f[0].replace(" in Jacksonville"," in "+t.name)}</summary><p>${f[1]}</p></details>`).join("")}
   </div>
   <h2>Nearby areas</h2><div class="areas">${near.map(n=>`<a href="#${townSvcSlug(l,n)}">${l.act} in ${n.name}</a>`).join("")}<a href="#${COUNTIES[t.c].slug}">${co.name}</a></div>
   <h2>More in ${t.name}</h2><div class="areas">${others.map(o=>`<a href="#${townSvcSlug(o,t)}">${o.act}</a>`).join("")}</div>
  </div>
  <aside class="seo-side"><div class="card"><h3>${p.name}</h3><div class="big-price">${usd(p.price)}<small>${p.qty?" each":""}</small></div>
   <div class="rows"><div><span>Included</span><span>${incTxt(p.inc)}</span></div><div><span>After that</span><span>$80/hr</span></div><div><span>Travel to ${t.name}</span><span>${t.fee?"$35":"Free"}</span></div><div><span>Parts</span><span>At cost</span></div></div>
   <a class="btn" href="#book" data-svc="${p.id}" style="width:100%">Book now</a></div>
   <div class="card"><h3>Questions?</h3><p class="muted">Call or text us</p><p class="sel" style="font-weight:700">${BIZ.phone}</p><p class="sel" style="font-size:.95rem">${BIZ.email}</p></div></aside>
  </div></article>`;
}
function seoTown(t){
  const co=t.county,near=t.near.map(TOWN).filter(Boolean);
  return `<article class="seo"><div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#${co.slug}">${co.name}</a> / ${t.name}</div>
   <span class="tag">${co.name} · Florida</span><h1>Handyman and home services in ${t.name}, FL</h1>
   <p class="lead">TV mounting, furniture assembly, smart home setup, tech help, pressure washing and the small jobs on your list. Flat prices, booked online, done by Alex Montalbano.</p>
   <div class="btnrow"><a class="btn" href="#book">Book a job</a><a class="btn ghost" href="#services">See all prices</a></div>
   <ul class="facts"><li><b>${t.fee?"$35":"$0"}</b><span>Travel fee</span></li><li><b>${t.mi?"~"+t.mi+" mi":"Central"}</b><span>From Jacksonville</span></li><li><b>7 days</b><span>8am to 6pm</span></li></ul></div>
   <div class="prose" style="margin-top:24px">
    <h2>About home services in ${t.name}</h2><p>${t.homes} We work all around ${t.spots}.</p><p>${feeLine(t)} Every job has a flat price you see before you book.</p>
    <h2>Living in ${t.name}</h2><p>${t.name} is in ${co.name}${t.mi?`, about ${t.mi} miles from downtown Jacksonville`:""}. ${TYPE[t.type].life}</p><p>${co.note}</p>
    <h2>Home tips for ${t.name}</h2><ul class="checks">${TYPE[t.type].tips.map(i=>`<li>${i}</li>`).join("")}</ul>
    <h2>Getting to ${t.name}</h2><p>We reach ${t.name} by way of ${t.roads}. ${feeLine(t)}</p>
    <h2>When to book</h2><p>${TYPE[t.type].season} We're open 7 days a week, 8am to 6pm.</p>
    <h2>Popular in ${t.name}</h2><div class="pk-grid">${LOCAL.map(l=>{const p=P(l.id);return `<a class="pk" href="#${townSvcSlug(l,t)}"><span class="ico">${svg(p.icon)}</span><span class="pk-body"><b>${l.act}</b><span class="muted">${p.short}</span></span><span class="pk-price">${usd(p.price)}</span></a>`}).join("")}</div>
    <h2>All services</h2><div class="pk-grid">${PKG.map(pkCard).join("")}</div>
    <h2>ZIP codes we cover in ${t.name}</h2><p>${t.zips.join(", ")}.</p>
    <h2>Nearby</h2><div class="areas">${near.map(n=>`<a href="#${townSlug(n)}">${n.name}</a>`).join("")}<a href="#${co.slug}">All of ${co.name}</a></div>
   </div></article>`;
}
function seoCounty(k){
  const co=COUNTIES[k],ts=TOWNS.filter(t=>t.c===k);
  return `<article class="seo"><div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#areas">Areas</a> / ${co.name}</div>
   <span class="tag">Service area</span><h1>Handyman and home services in ${co.name}, FL</h1>
   <p class="lead">${co.note}</p><div class="btnrow"><a class="btn" href="#book">Book a job</a><a class="btn ghost" href="#services">See prices</a></div></div>
   <div class="prose" style="margin-top:24px">
    <h2>Towns we serve in ${co.name}</h2><div class="pk-grid">${ts.map(t=>`<a class="pk" href="#${townSlug(t)}"><span class="ico">${svg("pin")}</span><span class="pk-body"><b>${t.name}</b><span class="muted">${t.fee?"$35 travel fee":"No travel fee"}</span></span><span class="pk-price" style="font-size:1rem">${ARR}</span></a>`).join("")}</div>
    <h2>Services in ${co.name}</h2><div class="areas">${LOCAL.map(l=>`<a href="#${townSvcSlug(l,ts[0])}">${l.act} in ${ts[0].name}</a>`).join("")}</div>
    <h2>How pricing works</h2><p>Every job has a flat price that includes a set amount of time. If it needs more, it's $80 an hour after that, and we ask first. There's no travel fee within 10 miles of central Jacksonville and a flat $35 from 11 to 30 miles. Parts are extra, at cost.</p>
   </div></article>`;
}

/* ---------- guides (helpful articles for search and AI answers) ---------- */
const GUIDES=[
 {slug:"move-in-checklist-jacksonville",svc:"movein",title:"New Home Move-In Checklist for Jacksonville (2026)",h1:"New home move-in checklist for Jacksonville",desc:"What to set up in your first week in a new Jacksonville home, from TVs and furniture to Wi-Fi, locks and hurricane prep.",
  body:`<p>The first week in a new home goes faster with a plan. Here's what most Jacksonville families set up first, in the order that makes the most sense.</p>
  <h2>Day one</h2><ul class="checks"><li>Change or rekey the exterior locks, or add a smart lock</li><li>Test smoke and CO alarms and note their age</li><li>Find the main water shutoff and the electrical panel</li><li>Get Wi-Fi running so everything else can connect</li></ul>
  <h2>First week</h2><ul class="checks"><li>Build beds first, then dressers and desks</li><li>Mount TVs before furniture gets pushed against the walls</li><li>Hang blinds or blackout shades in bedrooms</li><li>Set up a video doorbell and cameras</li><li>Anchor tall furniture if you have kids</li></ul>
  <h2>First month</h2><ul class="checks"><li>Hang mirrors, art and shelves once you know where furniture lives</li><li>Pressure wash the driveway and walkways</li><li>Put together a hurricane kit before June</li></ul>
  <h2>Get it done in one visit</h2><p>Our move-in bundle covers two TVs, three furniture items and two hours for the rest of your list for $499. It's the most popular booking in new neighborhoods like Nocatee, St. Johns, Oakleaf and Yulee.</p>`},
 {slug:"tv-mounting-block-plaster-walls",svc:"tv",title:"Mounting a TV on Block or Plaster Walls in Jacksonville",h1:"Mounting a TV on block or plaster walls",desc:"Why block and plaster walls in Jacksonville homes need different anchors and more care, and what that means for your TV mount.",
  body:`<p>A lot of Jacksonville homes aren't simple drywall. Exterior walls are often concrete block, and older homes in Riverside, Avondale, San Marco and Springfield have plaster over wood lath. Both can hold a TV securely, but they need the right approach.</p>
  <h2>Concrete block walls</h2><p>Block walls are strong, but the hollow cores mean regular drywall anchors won't hold. TVs on block need masonry anchors set into solid parts of the block, drilled with the right bit so the block doesn't crack or blow out.</p>
  <h2>Plaster and lath walls</h2><p>Plaster is hard and brittle. Drilling too fast or with the wrong bit can crack it around the mount. Studs in older homes also aren't always 16 inches apart, so finding them takes care.</p>
  <h2>Hiding wires on these walls</h2><p>Cutting into block isn't practical, so a slim paintable cord cover is the clean option. In plaster, small openings for an in-wall kit are possible but take more care to patch.</p>
  <h2>What it costs</h2><p>TV mounting is $100 flat on drywall. Brick, block or stone adds $40. We bring the right anchors for your wall, so you don't have to figure it out.</p>`},
 {slug:"how-often-pressure-wash-jacksonville",svc:"pressure",title:"How Often Should You Pressure Wash in Jacksonville?",h1:"How often should you pressure wash in Jacksonville?",desc:"Why Florida humidity turns driveways and pool decks dark, how often to wash them in Jacksonville, and what it costs.",
  body:`<p>In Northeast Florida, most driveways, walkways and pool decks need a wash every 12 to 18 months. Shady yards under big oaks and homes near the beach often need it every year.</p>
  <h2>Why concrete gets dark so fast here</h2><p>Heat and humidity feed mildew and algae, especially on concrete that stays damp. Irrigation overspray, red clay runoff and pollen add stains on top of that.</p>
  <h2>The best time of year</h2><p>Spring, after the heavy pollen, and fall, after the summer rains, are ideal. Washing before you host a holiday or list your home makes the biggest difference.</p>
  <h2>What we wash</h2><ul class="checks"><li>Driveways and sidewalks</li><li>Pool decks and patios</li><li>Fences and screened porch floors</li><li>Docks and outdoor furniture</li></ul>
  <h2>What it costs</h2><p>Pressure washing is $160 for 2 hours, which covers most driveways and front walks.</p>`},
 {slug:"video-doorbell-camera-guide-jacksonville",svc:"smart",title:"Best Video Doorbells & Cameras for Jacksonville Homes",h1:"Video doorbells and cameras for Jacksonville homes",desc:"Battery doorbells, wireless cameras and smart locks: what works best in Jacksonville homes and what professional setup includes.",
  body:`<p>Package theft, beach rentals and long driveways make video doorbells and cameras some of the most popular upgrades in Jacksonville.</p>
  <h2>Battery or plug-in?</h2><p>Battery doorbells and cameras go up anywhere without wiring, which is ideal for older homes and rentals. Plug-in cameras never need charging but need an outlet nearby.</p>
  <h2>Where to put cameras</h2><ul class="checks"><li>Front door, covering the porch and packages</li><li>Driveway, angled to catch faces and plates</li><li>Backyard gate or pool area</li><li>Side yards on corner lots</li></ul>
  <h2>Why setup matters</h2><p>The most common problem is weak Wi-Fi at the camera spot, which makes cameras drop offline. Motion zones that are too wide also mean constant alerts from cars and palm fronds. A proper setup checks the signal at every spot and tunes the alerts.</p>
  <h2>What it costs</h2><p>Smart home setup is $100 for up to 3 devices, including the app, alerts and motion zones.</p>`},
 {slug:"what-to-expect-homestallers-visit",svc:"handyman",title:"What to Expect When You Book Homestallers",h1:"What to expect when you book Homestallers",desc:"How booking, arrival, extra time, payment and cleanup work when you book a job with Homestallers in Jacksonville.",
  body:`<p>Here's exactly how a Homestallers visit works, from booking to cleanup.</p>
  <h2>Booking</h2><p>Pick your job, choose a time and check out online. You'll get a confirmation email right away, and a text the day before.</p>
  <h2>Arrival</h2><p>Your pro arrives in the window you picked, walks through the job with you and confirms the plan before starting.</p>
  <h2>The work</h2><p>Every package includes a set amount of time. If the job needs more, we tell you first. Extra time is $80 an hour, and you decide whether we keep going or come back another day.</p>
  <h2>Cleanup and payment</h2><p>We clean up, haul boxes to your bins and walk you through what we did. Any extra time or parts are paid the same day, in cash or online.</p>
  <h2>After the job</h2><p>If anything we installed doesn't hold or work right within 30 days because of our work, we come back and fix it at no labor charge.</p>`},
 {slug:"tv-mounting-cost-jacksonville",svc:"tv",title:"How Much Does TV Mounting Cost in Jacksonville? (2026)",h1:"How much does TV mounting cost in Jacksonville?",desc:"What TV mounting costs in Jacksonville in 2026, what changes the price, and what's included. Flat $100 mounting, $150 with hidden wires.",
  body:`<p>Most TV mounting jobs in Jacksonville cost between $100 and $250 in labor, depending on the wall, the TV size and whether you want the cords hidden. The mount itself usually runs $30 to $120.</p>
  <h2>What Homestallers charges</h2><ul class="checks"><li>TV mount and setup: $100 flat on drywall</li><li>TV mount with hidden wires: $150 flat, plus a plug-in cord kit at cost (about $40 to $60)</li><li>Brick, stone or over a fireplace: add $40</li><li>No travel fee within 10 miles of central Jacksonville, $35 from 11 to 30 miles</li></ul>
  <h2>What changes the price</h2><p><b>The wall.</b> Drywall over wood studs is the quickest. Many Jacksonville homes, especially older ones and exterior walls, are concrete block, which takes masonry anchors and more time. Plaster in historic Riverside, Avondale and San Marco homes needs care so it doesn't crack.</p>
  <p><b>Hiding the cords.</b> Running cables inside the wall takes about an extra hour. The safe way uses a UL-listed in-wall cord kit. A regular power cord should never be run inside a wall.</p>
  <p><b>Height and size.</b> TVs over 75 inches or mounted high above a fireplace often need two people or a pull-down mount.</p>
  <h2>How to save money</h2><ul class="checks"><li>Buy the right mount ahead of time and check its VESA pattern and weight rating</li><li>Mount more than one TV in the same visit</li><li>Book the hidden-wire package now rather than adding it later</li></ul>`},
 {slug:"how-high-to-mount-a-tv",svc:"tv",title:"How High Should You Mount a TV? A Simple Guide",h1:"How high should you mount a TV?",desc:"The right TV mounting height for living rooms, bedrooms and over fireplaces, with simple measurements you can use today.",
  body:`<p>For most living rooms, the center of the screen should be about at eye level when you're sitting down. That usually means the center of the TV ends up 42 to 48 inches off the floor.</p>
  <h2>A quick way to find your height</h2><ol class="steps"><li><div><b>Sit where you usually watch</b><p class="muted">Have someone measure from the floor to your eyes. That's your target center height.</p></div></li><li><div><b>Find the TV's center</b><p class="muted">Measure the TV's height and divide by two.</p></div></li><li><div><b>Mark it on the wall</b><p class="muted">Put a strip of painter's tape at the center height and live with it for a day before drilling.</p></div></li></ol>
  <h2>Bedrooms</h2><p>When you watch lying down, a little higher is more comfortable. A slight downward tilt helps.</p>
  <h2>Over a fireplace</h2><p>Fireplace mounts end up higher than ideal. A tilting mount, or a pull-down mount that brings the screen to eye level, makes a big difference for your neck. Check that the wall above the fireplace doesn't get hot.</p>
  <h2>How far to sit</h2><p>For a 4K TV, sitting about 1 to 1.5 times the screen size away works well. For a 65 inch TV, that's roughly 5.5 to 8 feet.</p>`},
 {slug:"hide-tv-wires-safely",svc:"tvclean",title:"How to Hide TV Wires Safely (and What Not to Do)",h1:"How to hide TV wires safely",desc:"The safe ways to hide TV cords, including in-wall kits and paintable cord covers, and the common mistake that's against code.",
  body:`<p>A mounted TV looks best when you can't see the cords. There are two safe ways to do it, and one common mistake to avoid.</p>
  <h2>Option 1: an in-wall cord kit</h2><p>A UL-listed in-wall kit runs the TV's power and HDMI through the wall between two neat plates, one behind the TV and one near the floor. Plug-in kits connect to the outlet you already have, so there are no changes to your home's wiring.</p>
  <h2>Option 2: a paintable cord cover</h2><p>On block or brick walls, or when you'd rather not cut the wall, a slim cord cover runs from the TV to the floor. Painted to match the wall, it almost disappears.</p>
  <h2>The mistake to avoid</h2><p>Never run a regular extension cord or the TV's power cord inside a wall. It isn't rated for that and can be a fire risk. HDMI and other low-voltage cables are fine in the wall.</p>
  <h2>What it costs</h2><p>Homestallers mounts your TV and hides the wires for $150 flat, plus the kit at cost.</p>`},
 {slug:"hurricane-season-home-checklist-jacksonville",svc:"handyman",title:"Hurricane Season Home Checklist for Jacksonville Homeowners",h1:"Hurricane season home checklist for Jacksonville",desc:"A simple hurricane prep checklist for Jacksonville homes: what to do before June, before a storm, and after it passes.",
  body:`<p>Atlantic hurricane season runs from June 1 to November 30. Jacksonville doesn't get hit often, but tropical storms bring wind, flooding and power outages almost every year. A little prep goes a long way.</p>
  <h2>Before the season</h2><ul class="checks"><li>Know your evacuation zone on the City of Jacksonville or your county's website</li><li>Test smoke and CO alarms and swap batteries</li><li>Pressure wash and clear gutters and drains so water flows away</li><li>Photograph each room for insurance</li><li>Check that patio furniture and grills can be stored quickly</li></ul>
  <h2>When a storm is coming</h2><ul class="checks"><li>Bring in patio furniture, planters and anything that can blow around</li><li>Charge phones, power banks and flashlights</li><li>Move TVs and electronics away from windows</li><li>Fill the car's tank and get cash</li></ul>
  <h2>After it passes</h2><ul class="checks"><li>Stay clear of downed power lines and report them</li><li>Photograph any damage before cleaning up</li><li>Check for water around outlets and appliances before using them</li></ul>
  <p>Need help getting ready? Book a handyman hour and your pro will work through your list.</p>`},
 {slug:"furniture-assembly-cost-jacksonville",svc:"assembly",title:"How Much Does Furniture Assembly Cost in Jacksonville?",h1:"How much does furniture assembly cost in Jacksonville?",desc:"Furniture assembly prices in Jacksonville for beds, dressers, desks and IKEA pieces, plus tips to make the visit faster.",
  body:`<p>Most furniture assembly in Jacksonville costs $60 to $120 per item, depending on the piece. Large wardrobes, bunk beds and sectional sofas can cost more.</p>
  <h2>What Homestallers charges</h2><ul class="checks"><li>$80 per item, with about an hour included</li><li>Very large pieces like PAX wardrobes or bunk beds may count as two</li><li>Tall pieces are anchored to the wall at no extra cost</li></ul>
  <h2>Typical build times</h2><ul class="checks"><li>Nightstand or small shelf: 20 to 40 minutes</li><li>Dresser: 45 to 90 minutes</li><li>Bed frame: 30 to 60 minutes</li><li>Desk: 30 to 60 minutes</li></ul>
  <h2>Make it faster</h2><ul class="checks"><li>Put boxes in the rooms they'll be built in</li><li>Clear floor space around each spot</li><li>Keep the hardware bags with each box</li></ul>`}
];
const G=s=>GUIDES.find(g=>g.slug===s);
function guidePage(g){const p=P(g.svc);
  return `<article class="seo"><div class="seo-hero"><div class="crumbs"><a href="#home">Home</a> / <a href="#guides">Guides</a> / ${g.h1}</div><h1>${g.h1}</h1><p class="lead">${g.desc}</p></div>
  <div class="seo-grid"><div class="prose">${g.body}
   <h2>Related guides</h2><div class="areas">${GUIDES.filter(x=>x!==g).sort((a,b)=>(b.svc===g.svc)-(a.svc===g.svc)).slice(0,6).map(x=>`<a href="#${x.slug}">${x.h1}</a>`).join("")}</div></div>
  <aside class="seo-side"><div class="card"><h3>${p.name}</h3><div class="big-price">${usd(p.price)}<small>${p.qty?" each":""}</small></div><p class="muted">${p.short}</p><a class="btn" href="#book" data-svc="${p.id}" style="width:100%">Book now</a></div>
   <div class="card"><h3>Questions?</h3><p class="muted">Call or text us</p><p class="sel" style="font-weight:700">${BIZ.phone}</p></div></aside></div></article>`}
function privacyHTML(){return `<p class="muted">Last updated ${TERMS_VERSION}.</p>
 <h3>What we collect</h3><p>When you book or contact us, we collect your name, phone, email, service address and the details you share about the job. We don't collect more than we need.</p>
 <h3>Payments</h3><p>Payments are processed by Stripe. Your card details go directly to Stripe. We never see or store your full card number.</p>
 <h3>How we use it</h3><p>We use your information only to schedule and do your job, send confirmations and receipts, and follow up about your service. We don't sell or rent your information.</p>
 <h3>Who we share it with</h3><p>Only the services that help us run the business: Stripe for payments, our email provider for confirmations, and our website host. Each only gets what it needs.</p>
 <h3>Your location</h3><p>If you tap "Use my location," your browser shares your approximate location once to check whether you're in our area. We don't store it.</p>
 <h3>Your choices</h3><p>You can ask us to update or delete your information at any time by emailing ${BIZ.email}. Reply STOP to any text to stop messages.</p>
 <h3>Contact</h3><p>Homestallers, Jacksonville, FL · ${BIZ.phone} · ${BIZ.email}</p>
 <p class="muted" style="font-size:.8rem;margin-top:28px">Related: <a href="https://homehappenings.com" rel="noopener" target="_blank">Home Happenings</a>, in-home activities in New Jersey.</p>`}

/* ---------- more guides (Oct 2026) ---------- */
GUIDES.push(
 {slug:"handyman-cost-jacksonville",svc:"handyman",title:"Handyman Prices in Jacksonville, FL (2026 Guide)",h1:"What a handyman costs in Jacksonville",desc:"Real flat prices for small jobs around Jacksonville homes, what drives the cost up, and how to get more done in one visit.",
  body:`<p>Most handyman jobs in Jacksonville are small: a towel bar that pulled out of the wall, a closet door that won't close, a few pictures, a shelf in the garage. The problem is that a lot of companies won't come out for small jobs, or they charge a big trip minimum before anyone picks up a drill.</p>
  <p>We price it the simple way. A handyman hour is a flat $80, booked online, and it covers the first hour of work on whatever is on your list. Travel is free within 10 miles of central Jacksonville and a flat $35 from 11 to 30 miles out. A 3% service fee is added at checkout.</p>
  <h2>What fits in one hour</h2><ul class="checks"><li>Hanging 3 to 5 pictures or a large mirror</li><li>Installing a towel bar, toilet paper holder and robe hook</li><li>Adjusting sticking doors and replacing door hardware</li><li>Putting up a curtain rod or two</li><li>Anchoring a dresser or bookcase to the wall</li><li>Swapping cabinet knobs and pulls in a small kitchen or bath</li></ul>
  <h2>What makes a job take longer</h2><p>Three things add time in Northeast Florida homes. Concrete block walls take longer to drill than drywall. Plaster in older homes in Riverside, Avondale and San Marco has to be drilled slowly so it doesn't crack. And anything high up, like a two-story foyer, needs a taller ladder and more setup. If your job runs past the included hour, extra time is $80 an hour, and we always ask before we keep going.</p>
  <h2>How to get the most out of a visit</h2><ul class="checks"><li>Write the list down and put the most important job first</li><li>Have the parts on hand: the towel bar, the hooks, the hardware</li><li>Mark where things go with painter's tape</li><li>Clear a path to the wall and move fragile things out of the way</li></ul>
  <h2>What a handyman can't do in Florida</h2><p>Electrical, plumbing, HVAC and roofing work need a licensed contractor in Florida. Those services are coming soon to Homestallers, done by a licensed contractor. Until then, we stick to the jobs we can do well and legally, which covers most of the small stuff on a typical list.</p>`},
 {slug:"pressure-washing-cost-jacksonville",svc:"pressure",title:"Pressure Washing Cost in Jacksonville, FL (2026)",h1:"Pressure washing prices in Jacksonville",desc:"What driveway, sidewalk and patio pressure washing costs in Jacksonville, why Florida concrete turns black, and how often to clean it.",
  body:`<p>In Jacksonville, concrete doesn't stay clean for long. Between the humidity, summer rain, oak trees and pollen, driveways and pool decks grow mildew and algae that turn them gray, green or black. A good wash brings the original color back and makes walkways less slippery.</p>
  <h2>Our price</h2><p>Pressure washing is a flat $160 for two hours of work, which covers a typical two-car driveway and front walkway, or a back patio. If there's more to do, extra time is $80 an hour, only with your OK. A 3% service fee is added at checkout.</p>
  <h2>Why Florida concrete turns black</h2><p>Those dark streaks and patches are usually mildew and algae, not dirt. They feed on moisture and shade, which is why the part of the driveway under the oak tree or along the north side of the house is always the worst. Rust stains from irrigation water and red clay tracked in from the yard are also common here.</p>
  <h2>How often to wash</h2><ul class="checks"><li><b>Driveways and sidewalks:</b> once or twice a year for most homes</li><li><b>Pool decks and patios:</b> every 6 to 12 months, since they stay wet</li><li><b>Shaded or north-facing areas:</b> more often, they come back fastest</li><li><b>Before selling or listing:</b> always, it's one of the cheapest ways to improve curb appeal</li></ul>
  <h2>Pavers, screen rooms and HOA notices</h2><p>Pavers need lower pressure and a wider tip so the joint sand doesn't get blasted out. Screen enclosures and lanais can be rinsed, but the screens themselves need a gentle touch. If you got a letter from your HOA in Nocatee, Bartram Park, Eagle Landing or anywhere else about a dirty driveway, book online and pick the first open day.</p>
  <h2>Getting ready</h2><ul class="checks"><li>Move cars, bikes, planters and outdoor furniture</li><li>Close windows and garage doors near the area</li><li>Make sure there's an outdoor water spigot that works</li></ul>`},
 {slug:"tv-mount-types-fixed-tilt-full-motion",svc:"tv",title:"Fixed vs Tilting vs Full-Motion TV Mounts: Which to Buy",h1:"Which TV mount should you buy?",desc:"A plain guide to fixed, tilting and full-motion TV wall mounts, which one fits your room, and what to check before you order.",
  body:`<p>The mount matters as much as the TV. Pick the wrong one and you end up with glare you can't fix, a TV that sticks out too far, or a big swing arm you never actually use. Here's how to choose.</p>
  <h2>Fixed mounts</h2><p>A fixed mount holds the TV flat against the wall, usually about an inch or two out. It's the cleanest look and the most solid option. Choose fixed when the TV is at eye level from your main seat and there's no window glare to deal with.</p>
  <h2>Tilting mounts</h2><p>A tilting mount lets the top of the TV angle down. That helps when the TV is a little higher than ideal or when light from a window or sliding door hits the screen in the afternoon. Florida rooms with a lot of glass usually benefit from a tilt.</p>
  <h2>Full-motion mounts</h2><p>A full-motion mount has an arm that pulls out and swivels. It's the right call for corner placements, open kitchen and living rooms where you watch from two spots, or bedrooms where you want to angle the TV toward the bed. They stick out further from the wall and need a stronger anchor point, which matters on Jacksonville's block and plaster walls.</p>
  <h2>Before you order</h2><ul class="checks"><li>Check the VESA pattern on the back of your TV (for example 300 x 300) and make sure the mount lists it</li><li>Check the weight limit, and leave some margin</li><li>For full-motion, check the arm length so the TV can reach where you want it</li><li>Measure the wall width if you're mounting between windows or in a corner</li></ul>
  <h2>We can bring one</h2><p>If you don't have a mount yet, tell us your TV size and room when you book and we can bring a good one. Mounts are charged at cost with no markup. TV mounting is a flat $100 with one hour included, or $150 with the wires hidden.</p>`},
 {slug:"tv-above-fireplace",svc:"tv",title:"Should You Mount a TV Above the Fireplace?",h1:"Mounting a TV above a fireplace",desc:"The honest pros and cons of a TV over the fireplace, how high is too high, and what to check before you drill into the chimney wall.",
  body:`<p>In a lot of Jacksonville homes, especially newer builds in St. Johns County and Clay County, the fireplace is the focal wall and there's nowhere else for the TV to go. You can mount above it, but there are a few things to get right.</p>
  <h2>The height problem</h2><p>The biggest complaint is neck strain. Most fireplace mantels put the bottom of the TV well above eye level. If you're going above the mantel, a tilting mount helps a lot, and so does keeping the TV as low as the mantel allows. A pull-down mount is another option for big rooms where you watch a lot of TV.</p>
  <h2>Heat</h2><p>Many Florida fireplaces are gas or decorative and barely used, which makes life easier. If you do burn wood or run gas logs often, hold your hand under the mantel after the fire's been going for a while. If it's too hot to keep your hand there, it's too hot for a TV.</p>
  <h2>What's in the wall</h2><p>Fireplace walls are often stone, brick, block or a framed chase with a metal flue inside. Each needs a different anchor, and some spots can't be drilled at all. We check the wall before we drill and tell you if a spot won't work.</p>
  <h2>Hiding the wires</h2><p>Running wires inside a fireplace wall isn't always possible because of the firebox and flue. A paintable cord cover along the side is often the cleanest safe option. We'll show you what's possible on your wall before we start.</p>`},
 {slug:"wifi-dead-zones-block-homes-florida",svc:"tech",title:"Fixing Wi-Fi Dead Zones in Florida Block Homes",h1:"Why your Wi-Fi is bad in a Florida block home",desc:"Concrete block and plaster walls block Wi-Fi. Here's how to fix dead zones in Jacksonville homes, from router placement to mesh systems.",
  body:`<p>If your Wi-Fi is fine in the living room but drops in the back bedroom, the garage or out by the pool, your walls are probably the reason. Concrete block, stucco and plaster all block wireless signals far more than drywall, and a lot of Jacksonville homes have all three.</p>
  <h2>Start with where the router is</h2><p>Internet providers usually install the router wherever the cable comes in, which is often a corner of the house, inside a closet or behind the TV. Moving it to a central, open spot up off the floor can fix a surprising amount on its own.</p>
  <h2>When you need a mesh system</h2><p>In bigger homes, two-story homes or homes where the signal has to pass through block walls, a mesh system is usually the real fix. It uses two or three small units placed around the house that work together as one network. Most families never have to think about it again once it's set up right.</p>
  <h2>Outdoor coverage</h2><p>Lanais, pool areas and detached garages are hard to reach through exterior block. A mesh unit near a window or door facing that area, or an outdoor-rated unit, usually solves it. It matters more than people think if you have outdoor cameras.</p>
  <h2>What we do on a tech help visit</h2><ul class="checks"><li>Test speed in each room so we know where the weak spots are</li><li>Move and set up the router in a better spot when possible</li><li>Set up a mesh system you've bought, or help you pick one</li><li>Connect TVs, cameras, printers and smart speakers to the new network</li></ul><p>Tech help is a flat $80 for the first hour. Hardware is charged at cost if we bring it.</p>`},
 {slug:"christmas-lights-jacksonville",svc:"lights",title:"Holiday Light Hanging in Jacksonville: When and How",h1:"Hanging holiday lights in Jacksonville",desc:"When to put up Christmas lights in Jacksonville, how to hang them so they survive Florida weather, and what professional hanging costs.",
  body:`<p>Holiday lights go up a little differently in Northeast Florida. There's no snow or ice to worry about, but there is wind, the occasional late-season storm and a lot of moisture, all of which are hard on clips, cords and connections.</p>
  <h2>When to hang them</h2><p>Most Jacksonville neighborhoods start lighting up the weekend after Thanksgiving, and a lot of HOAs ask that lights come down by mid-January. Booking a time in early to mid November gets you the best choice of days, since the weekends right after Thanksgiving fill up fast.</p>
  <h2>Doing it right in Florida weather</h2><ul class="checks"><li>Use outdoor-rated lights and cords only</li><li>Use gutter and shingle clips, not nails or staples, so you don't damage the roof or trim</li><li>Keep plug connections off the ground and out of puddles, or wrap them</li><li>Use an outdoor GFCI outlet and a timer or smart plug</li><li>Don't overload one outlet with long runs</li></ul>
  <h2>Our price</h2><p>Holiday light hanging is a flat $150 with two hours included, which covers the front roofline of most one-story homes and some bushes or a front tree. You supply the lights, or we can bring them at cost. Taller two-story rooflines can take more time, and we'll always ask before going over.</p>
  <h2>Taking them down</h2><p>Book a handyman hour in January and we'll take everything down, coil the strands and leave them boxed and labeled for next year.</p>`},
 {slug:"anchor-furniture-tip-over",svc:"assembly",title:"How to Anchor Furniture So It Can't Tip",h1:"Anchoring dressers and TVs so they can't tip",desc:"Why tall furniture and TVs should be anchored in homes with kids, how anti-tip kits work, and how to anchor into block, plaster and drywall.",
  body:`<p>Dressers, bookcases and TV stands can tip forward when a child pulls on a drawer or tries to climb. It happens fast, and it's one of the easiest home safety fixes there is. Most new dressers come with an anti-tip kit for exactly this reason.</p>
  <h2>What to anchor</h2><ul class="checks"><li>Dressers and chests of drawers</li><li>Bookcases and tall shelving</li><li>TV stands, and TVs sitting on them</li><li>Wardrobes and armoires</li></ul>
  <h2>How anti-tip kits work</h2><p>Most kits use a strap or bracket attached to the back of the furniture and screwed into the wall. The key is what the screw goes into. In drywall, the strap should go into a stud, not just a drywall anchor. In Jacksonville's concrete block walls, you need masonry anchors. In older plaster homes, you need a slow drill and the right anchor so the plaster doesn't crack.</p>
  <h2>Renters</h2><p>Most landlords are fine with a couple of small screw holes for safety straps, and they're easy to patch when you move out. Ask your landlord if you're unsure.</p>
  <h2>We do it as part of assembly</h2><p>When we build a dresser or bookcase, we can anchor it to the wall while we're there. If you just need existing furniture anchored, a handyman hour covers several pieces.</p>`},
 {slug:"new-build-home-checklist-jacksonville",svc:"movein",title:"New Construction Home Checklist for Jacksonville",h1:"What new-build homes in Jacksonville usually need",desc:"Just closed on a new home in Nocatee, Bartram Park, Oakleaf, Yulee or St. Johns? Here's what new builds usually come without and what to set up first.",
  body:`<p>New construction homes across Northeast Florida, from Nocatee and Bartram Park to Oakleaf, Eagle Landing, Wildlight and Yulee, come with a lot done for you. But builders leave out the things that make a house feel finished, and that list looks almost the same in every new neighborhood.</p>
  <h2>What builders usually leave off</h2><ul class="checks"><li>TV mounts and wire hiding</li><li>Blinds or curtain rods on most windows</li><li>Towel bars and bathroom hooks in some models</li><li>Shelving in the garage and closets</li><li>A video doorbell and outdoor cameras</li><li>Mesh Wi-Fi for two-story or larger floor plans</li></ul>
  <h2>Do this before your furniture arrives</h2><p>It's much easier to mount TVs and hang blinds in an empty room. If you can, book your setup visit for the day before the movers, or the same morning.</p>
  <h2>Builder warranty</h2><p>Keep a list of anything that looks like a construction issue, like nail pops, sticking doors or gaps in trim, and report it to your builder during your warranty window. Small things we add, like mounts and shelves, don't affect your builder warranty.</p>
  <h2>One visit for the whole list</h2><p>Our move-in bundle covers two TVs mounted, three furniture items and two handyman hours for $499, with seven hours of work included. It's built for exactly this.</p>`},
 {slug:"renter-friendly-home-upgrades-jacksonville",svc:"smart",title:"Renter-Friendly Home Upgrades in Jacksonville",h1:"Renter-friendly upgrades for Jacksonville apartments",desc:"Smart home, storage and decor upgrades renters in Jacksonville can make without losing the deposit, and what to ask your landlord first.",
  body:`<p>Renting in Jacksonville doesn't mean living with bare walls and a weak doorbell. Plenty of upgrades are easy to undo when you move out, and most landlords are fine with small holes that get patched.</p>
  <h2>No-drill and low-drill upgrades</h2><ul class="checks"><li><b>Battery video doorbell:</b> mounts with two small screws or a no-drill bracket</li><li><b>Plug-in cameras:</b> inside or on a balcony, no wiring</li><li><b>Smart plugs:</b> put lamps and fans on a schedule</li><li><b>Tension curtain rods:</b> no screws at all</li><li><b>Freestanding shelves:</b> anchored with one small strap</li></ul>
  <h2>Ask your landlord first</h2><p>Mounting a TV, hanging heavy mirrors and putting up shelves usually means a few screw holes. Most leases allow it with permission, and the holes are simple to patch. A quick text to your landlord or property manager saves a fight over the deposit later.</p>
  <h2>Moving out</h2><p>When it's time to go, we can take down mounts, shelves and curtain rods and patch the holes so you can get your walls back to how they were.</p>`}
);

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
