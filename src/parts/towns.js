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
