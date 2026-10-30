import re, json, asyncio, threading, http.server, socketserver, os, datetime, html, shutil, hashlib
from playwright.async_api import async_playwright
import sys;sys.path.insert(0,'/home/claude/parts');import es as ES
P='/home/claude/parts/'; ROOT='/home/claude/site/'; OUT=ROOT+'public/'; DOMAIN='https://homestallers.com'
shutil.rmtree(ROOT,ignore_errors=True); os.makedirs(OUT+'assets',exist_ok=True); os.makedirs(OUT+'og',exist_ok=True)
shutil.copytree('/home/claude/fn/netlify',ROOT+'netlify')
base=open(P+'base.css').read()
fonts=re.search(r'<link rel="stylesheet" href="https://fonts.googleapis.com[^>]+>',base).group(0)
css="\n".join(re.findall(r'<style>.*?</style>',base,re.S))+open(P+'extra.css').read()+open(P+'warm.css').read()+open(P+'pro.css').read()
CSSFILE=re.sub(r"</?style>","",css)+"\nhtml{scroll-behavior:smooth}body{margin:0}img{max-width:100%}[hidden]{display:none!important}\n"
body=open(P+'body2.html').read()
js=open(P+'pk.js').read()+"\n"+open(P+'towns.js').read()+"\n"+open(P+'guides.js').read()+"\n"+open(P+'app2.js').read()
ver=hashlib.md5((CSSFILE+js).encode()).hexdigest()[:8]
open(OUT+'assets/site.css','w').write(CSSFILE); open(OUT+'assets/app.js','w').write(js)
OR='#ec6a1e'
ICON=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="14" fill="{OR}"/><path d="M10 23.5 24 11.5l14 12" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 21v15.5h20V21" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="20.2" y="25.5" width="7.6" height="11" rx="1.6" fill="#ffd774"/></svg>'
BIZLD={"@context":"https://schema.org","@type":"HomeAndConstructionBusiness","@id":DOMAIN+"/#business","name":"Homestallers","url":DOMAIN+"/","logo":DOMAIN+"/icon-512.png","image":DOMAIN+"/og/home.png",
 "description":"Trusted home help in Jacksonville, FL. Flat-price TV mounting, furniture assembly, smart home setup, tech help, moving help, pressure washing and handyman jobs, booked online.",
 "telephone":"+1-631-304-4809","email":"homestallers@gmail.com","founder":{"@type":"Person","name":"Alex Montalbano"},"priceRange":"$80-$499","slogan":"Trusted local professionals","knowsAbout":["TV mounting","Furniture assembly","Smart home setup","Pressure washing","Handyman services","Moving help"],"currenciesAccepted":"USD","paymentAccepted":"Credit card, Apple Pay, Google Pay, Cash",
 "address":{"@type":"PostalAddress","addressLocality":"Jacksonville","addressRegion":"FL","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":30.3322,"longitude":-81.6557},
 "areaServed":[{"@type":"AdministrativeArea","name":n} for n in ["Duval County, FL","St. Johns County, FL","Clay County, FL","Nassau County, FL"]],
 "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"08:00","closes":"18:00"}]}
def fit_title(t):
    if len(t)<=60:return t
    parts=t.split(" | ")
    if len(parts)>1 and parts[-1]=="Homestallers":
        t2=" | ".join(parts[:-1])
        if len(t2)<=60:return t2
        parts=parts[:-1]
    p2=[x for x in parts if not re.match(r"^(From )?\$\d",x)]
    return " | ".join(p2)
def fit_desc(d):
    if len(d)<=158:return d
    cut=d[:158];i=cut.rfind(". ")
    return cut[:i+1] if i>90 else cut[:cut.rfind(" ")].rstrip(",;:")+"."
def head(title,desc,path,lds,og="home",noindex=False,lang="en"):
    url=DOMAIN+path;t=html.escape(fit_title(title));d=html.escape(fit_desc(desc))
    alt=''
    inv={v:k for k,v in ES.PAIRS.items()}
    en=path if path in ES.PAIRS else inv.get(path)
    if en: alt=f'<link rel="alternate" hreflang="en" href="{DOMAIN}{en}"><link rel="alternate" hreflang="es" href="{DOMAIN}{ES.PAIRS[en]}"><link rel="alternate" hreflang="x-default" href="{DOMAIN}{en}">'
    return f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{t}</title><meta name="description" content="{d}"><link rel="canonical" href="{url}">{alt}<meta name="robots" content="{"noindex,follow" if noindex else "index,follow,max-image-preview:large,max-snippet:-1"}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Homestallers"><meta property="og:title" content="{t}"><meta property="og:description" content="{d}"><meta property="og:url" content="{url}"><meta property="og:image" content="{DOMAIN}/og/{og}.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="{t}"><meta property="og:locale" content="{"es_US" if lang=="es" else "en_US"}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{t}"><meta name="twitter:description" content="{d}"><meta name="twitter:image" content="{DOMAIN}/og/{og}.png">
<meta name="theme-color" content="{OR}"><meta name="geo.region" content="US-FL"><meta name="geo.placename" content="Jacksonville"><meta name="format-detection" content="telephone=no">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon-32.png" sizes="32x32"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>{fonts}
<link rel="stylesheet" href="/assets/site.css?v={ver}">
{"".join('<script type="application/ld+json">'+json.dumps(l,ensure_ascii=False)+'</script>' for l in lds)}
</head><body>'''
FORMS='<div hidden aria-hidden="true"><form name="contact" data-netlify="true" netlify-honeypot="website"><input name="website"><input name="name"><input name="email"><input name="phone"><input name="town"><input name="topic"><textarea name="message"></textarea></form><form name="booking" data-netlify="true" netlify-honeypot="website"><input name="website"><input name="service"><input name="total"><input name="date"><input name="time"><input name="name"><input name="phone"><input name="email"><input name="address"><input name="own_rent"><input name="gate_code"><input name="details"><input name="note"><input name="also_want"><input name="status"></form><form name="interest" data-netlify="true" netlify-honeypot="website"><input name="website"><input name="name"><input name="reach"><input name="zip"><input name="interest"></form></div>'

TAIL=FORMS+f'<script>window.HS_STATIC=true;</script><script src="/assets/app.js?v={ver}" defer></script></body></html>'
SHELL=head("Homestallers","","/",[])+body+'<script>window.HS_STATIC=true;</script><script>'+js+'</script></body></html>'
class H(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200);self.send_header("Content-Type","text/html");self.end_headers();self.wfile.write(SHELL.encode())
    def log_message(self,*a):pass
socketserver.TCPServer.allow_reuse_address=True;PORT=8700+os.getpid()%200
srv=socketserver.TCPServer(("127.0.0.1",PORT),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
def og_html(title,sub,price="",kicker="Jacksonville, FL"):
    big=72 if len(title)<30 else 62 if len(title)<44 else 54
    house='<svg width="520" height="520" viewBox="0 0 48 48" style="position:absolute;right:-70px;bottom:-60px;opacity:.07"><path d="M6 23.5 24 8l18 15.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 21v20h26V21" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    chip=f'<span style="background:{OR};color:#fff;padding:12px 22px;border-radius:12px;font-weight:800">{html.escape(price)}</span>' if price else ''
    return f'''<html><head>{fonts}<style>*{{box-sizing:border-box}}body{{margin:0}}</style></head><body>
<div style="position:relative;overflow:hidden;width:1200px;height:630px;background:radial-gradient(900px 500px at 105% 115%,rgba(236,106,30,.38),transparent 60%),#0f2235;font-family:'Public Sans',Arial,sans-serif;color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:60px 72px 64px">
 {house}
 <div style="display:flex;align-items:center;gap:18px;position:relative">{ICON.replace("<svg ","<svg width=68 height=68 ")}<div><div style="font:800 40px/1 Archivo,Arial,sans-serif;letter-spacing:-1px">Homestallers</div><div style="font:700 15px/1 'Public Sans',Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#f39a5c;margin-top:8px">Trusted local professionals</div></div></div>
 <div style="position:relative">
  <div style="font:700 20px/1 'Public Sans',Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#f39a5c;margin-bottom:20px">{html.escape(kicker)}</div>
  <div style="font:800 {big}px/1.04 Archivo,Arial,sans-serif;letter-spacing:-2px;max-width:900px;text-wrap:balance">{html.escape(title)}</div>
  <div style="font-size:28px;line-height:1.35;color:#c9d3de;margin-top:20px;max-width:860px">{html.escape(sub)}</div>
 </div>
 <div style="position:relative;display:flex;gap:18px;align-items:center;font:700 26px 'Public Sans',Arial,sans-serif">{chip}<span>homestallers.com</span><span style="color:#8798ab;font-weight:600">Open 7 days · (631) 304-4809</span></div>
</div></body></html>'''
async def main():
  async with async_playwright() as p:
    br=await p.chromium.launch();pg=await br.new_page(viewport={"width":1280,"height":900})
    errs=[];pg.on("pageerror",lambda e:errs.append(str(e)))
    await pg.goto(f"http://127.0.0.1:{PORT}/",wait_until="networkidle")
    data=await pg.evaluate("""({pk:PKG.map(p=>({id:p.id,slug:p.slug,name:p.name,price:p.price,desc:p.desc,faq:p.faq.concat(shared(p).faq),h1:p.h1,qty:!!p.qty,inc:p.inc,short:p.short})),
      towns:TOWNS.map(t=>({slug:townSlug(t),name:t.name,county:t.county.name,fee:t.fee,zips:t.zips})),counties:Object.values(COUNTIES).map(c=>({slug:c.slug,name:c.name})),
      guides:GUIDES.map(g=>({slug:g.slug,svc:g.svc,h1:g.h1,desc:g.desc})),ts:LOCAL.flatMap(l=>TOWNS.map(t=>({slug:townSvcSlug(l,t),svc:l.id,act:l.act,town:t.name,fee:t.fee,townSlug:townSlug(t)})))})""")
    pkmap={x["slug"]:x for x in data["pk"]};gmap={x["slug"]:x for x in data["guides"]};tsmap={x["slug"]:x for x in data["ts"]};townmap={x["slug"]:x for x in data["towns"]}
    routes=["home","services","areas","book","about","contact","terms","booked","pay","guides","privacy"]+[g["slug"] for g in data["guides"]]+["home-services-jacksonville","licensed-services"]+list(pkmap)+list(townmap)+[c["slug"] for c in data["counties"]]+list(tsmap)
    pages=[]
    for r in routes:
        path="/" if r=="home" else f"/{r}/"
        await pg.goto(f"http://127.0.0.1:{PORT}{path}",wait_until="domcontentloaded");await pg.wait_for_timeout(40)
        info=await pg.evaluate("""()=>{const c=document.body.cloneNode(true);c.querySelectorAll('script').forEach(s=>s.remove());c.querySelectorAll('.page[hidden]').forEach(p=>p.remove());return {title:document.title,desc:document.querySelector('meta[name=description]').content,body:c.innerHTML}}""")
        lds=[BIZLD];crumbs=[{"@type":"ListItem","position":1,"name":"Home","item":DOMAIN+"/"}];og="home"
        pk=pkmap.get(r);ts=tsmap.get(r)
        def faqld(qs):return {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in qs]}
        def svcld(name,stype,desc,price,area):return {"@context":"https://schema.org","@type":"Service","name":name,"serviceType":stype,"description":desc,"provider":{"@id":DOMAIN+"/#business"},"areaServed":{"@type":"Place","name":area},"offers":{"@type":"Offer","price":str(price),"priceCurrency":"USD","url":DOMAIN+path,"availability":"https://schema.org/InStock"}}
        if pk:
            og=pk["id"];crumbs+=[{"@type":"ListItem","position":2,"name":"Services","item":DOMAIN+"/services/"},{"@type":"ListItem","position":3,"name":pk["name"],"item":DOMAIN+path}]
            lds+=[svcld(pk["h1"],pk["name"],pk["desc"],pk["price"],"Jacksonville, FL"),faqld(pk["faq"])]
        elif ts:
            og=ts["svc"];sp=next(x for x in data["pk"] if x["id"]==ts["svc"])
            crumbs+=[{"@type":"ListItem","position":2,"name":ts["town"],"item":DOMAIN+"/"+ts["townSlug"]+"/"},{"@type":"ListItem","position":3,"name":ts["act"],"item":DOMAIN+path}]
            lds.append(svcld(f'{ts["act"]} in {ts["town"]}, FL',sp["name"],info["desc"],sp["price"],ts["town"]+", FL"))
            qs=await pg.evaluate("[...document.querySelectorAll('.page:not([hidden]) .faq details')].map(d=>[d.querySelector('summary').textContent,d.querySelector('p').textContent])")
            lds.append(faqld(qs))
        elif r in gmap:
            g=gmap[r];og="g-"+g["slug"];crumbs+=[{"@type":"ListItem","position":2,"name":"Guides","item":DOMAIN+"/guides/"},{"@type":"ListItem","position":3,"name":g["h1"],"item":DOMAIN+path}]
            lds.append({"@context":"https://schema.org","@type":"Article","headline":g["h1"],"description":g["desc"],"author":{"@type":"Person","name":"Alex Montalbano"},"publisher":{"@id":DOMAIN+"/#business"},"datePublished":"2026-10-30","dateModified":datetime.date.today().isoformat(),"image":DOMAIN+"/og/g-"+g["slug"]+".png","mainEntityOfPage":DOMAIN+path})
        elif r!="home":
            crumbs.append({"@type":"ListItem","position":2,"name":info["title"].split(" | ")[0],"item":DOMAIN+path})
        if r=="home":lds.append({"@context":"https://schema.org","@type":"WebSite","name":"Homestallers","url":DOMAIN+"/"})
        else:lds.append({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":crumbs})
        noidx=r in("booked","pay")
        out=head(info["title"],info["desc"],path,lds,og,noidx)+info["body"]+TAIL
        fn=OUT+("index.html" if r=="home" else r+"/index.html");os.makedirs(os.path.dirname(fn),exist_ok=True);open(fn,"w").write(out)
        if not noidx:pages.append((path,"1.0" if r=="home" else "0.9" if pk else "0.8" if (r in townmap or r in("services","areas")) else "0.7" if ts or r in gmap else "0.5"))
    icons=await pg.evaluate("Object.fromEntries(['tv','tvclean','assembly','smart','tech','hang','blinds','moving','handyman','pressure','movein'].map(id=>[id,svg(P(id).icon)]))")
    logo=await pg.evaluate("LOGO")
    eh,ef=ES.shell(lambda i:icons.get(i,""),logo)
    for pth,(t,d,body_html) in ES.pages(lambda i:icons.get(i,"")).items():
        lds=[BIZLD,{"@context":"https://schema.org","@type":"WebPage","name":t,"inLanguage":"es","url":DOMAIN+pth}]
        fn=OUT+pth.strip("/")+"/index.html";os.makedirs(os.path.dirname(fn),exist_ok=True)
        open(fn,"w").write(head(t,d,pth,lds,"home",False,"es")+eh+body_html+ef+FORMS)
        pages.append((pth,"0.6"))
    open(OUT+"404.html","w").write(head("Page not found | Homestallers","This page doesn't exist.","/404",[BIZLD],"home",True)+f'<main style="display:grid;place-items:center;min-height:70vh;text-align:center;padding:24px"><div style="display:grid;gap:14px;justify-items:center">{ICON.replace("<svg ","<svg width=72 height=72 ")}<h1 style="margin:0">Page not found</h1><p class="muted">That page moved or doesn\'t exist.</p><a href="/" class="btn">Go to the home page</a></div></main></body></html>')
    open(OUT+"favicon.svg","w").write(ICON)
    for size,name in [(32,"favicon-32.png"),(180,"apple-touch-icon.png"),(192,"icon-192.png"),(512,"icon-512.png")]:
        await pg.set_viewport_size({"width":size,"height":size});await pg.set_content(f'<html><body style="margin:0">{ICON.replace("<svg ",f"<svg width={size} height={size} ")}</body></html>');await pg.screenshot(path=OUT+name,omit_background=True)
    await pg.set_viewport_size({"width":1200,"height":630})
    cards=[("home","Trusted local pros for your home.","TV mounting, furniture assembly, smart home setup and the jobs on your list. Flat prices, booked online.","","Jacksonville, Florida")]+[(x["id"],x["h1"],x["short"],"Flat $"+str(x["price"])+(" each" if x["qty"] else ""),"Jacksonville, FL") for x in data["pk"]]+[("g-"+g["slug"],g["h1"],g["desc"],"","Homestallers guide") for g in data["guides"]]
    for k,t,s,pr,kk in cards:
        await pg.set_content(og_html(t,s,pr,kk));await pg.wait_for_timeout(200);await pg.screenshot(path=OUT+f"og/{k}.png")
    await br.close()
    today=datetime.date.today().isoformat()
    open(OUT+"sitemap.xml","w").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(f"<url><loc>{DOMAIN}{pth}</loc><lastmod>{today}</lastmod><priority>{pr}</priority></url>\n" for pth,pr in pages)+"</urlset>\n")
    open(OUT+"robots.txt","w").write(f"User-agent: *\nAllow: /\nDisallow: /booked/\nDisallow: /api/\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n")
    L=["# Homestallers","","> Trusted home help in Jacksonville, Florida. Flat-price TV mounting, furniture assembly, smart home and camera setup, tech help, moving help, pressure washing and handyman jobs. Led by local, experienced professional Alex Montalbano. Book and pay online.","",
       "## Key facts","- Business: Homestallers, Jacksonville, FL (homestallers.com)","- Owner: Alex Montalbano","- Service area: Duval, St. Johns, Clay and Nassau counties, up to 30 miles from central Jacksonville","- Hours: 7 days a week, 8am to 6pm","- Phone and text: (631) 304-4809","- Email: homestallers@gmail.com",
       "- Pricing: flat package price that includes a set amount of time; $80 per hour after that, only with the customer's OK; parts at cost; package price stays the same if a job finishes early","- Travel fee: none within 10 miles of central Jacksonville; $35 flat from 11 to 30 miles","- Payment: online at booking (card, Apple Pay, Google Pay via Stripe); extra time and parts paid the same day in cash or online","- A 3% service fee is added to online bookings and payments (not tips)","- Not offered: electrical, plumbing, HVAC or roofing work (licensed services coming soon)","","## Services and prices"]
    L+=[f"- [{x['name']}]({DOMAIN}/{x['slug']}/): ${x['price']}{' each' if x['qty'] else ''}, includes {x['inc']} hr. {x['short']}" for x in data["pk"]]
    L+=["","## Areas"]+[f"- [{x['name']}]({DOMAIN}/{x['slug']}/) ({x['county']}): {'no travel fee' if not x['fee'] else '$35 travel fee'}; ZIPs {', '.join(x['zips'])}" for x in data["towns"]]
    L+=["","## Pages",f"- [Book a job]({DOMAIN}/book/)",f"- [All services and prices]({DOMAIN}/services/)",f"- [Service areas]({DOMAIN}/areas/)",f"- [About us]({DOMAIN}/about/)",f"- [Contact]({DOMAIN}/contact/)",f"- [Service agreement]({DOMAIN}/terms/)",f"- [Pay for extra time, parts or a tip]({DOMAIN}/pay/)",f"- [Electrical and plumbing (coming soon)]({DOMAIN}/licensed-services/)",""]
    L+=["","## Guides"]+[f"- [{g['h1']}]({DOMAIN}/{g['slug']}/): {g['desc']}" for g in data["guides"]]
    L+=["","## Common questions","- How much is TV mounting in Jacksonville? $100 flat per TV with 1 hour included, or $150 with the wires hidden in the wall.","- Do you work weekends? Yes, 7 days a week, 8am to 6pm.","- Do you mount TVs on concrete block or plaster walls? Yes, with the right masonry or plaster anchors.","- Is there a travel fee? None within 10 miles of central Jacksonville, $35 flat from 11 to 30 miles.","- Do you do electrical or plumbing work? Not yet. Those services are coming soon, done by a licensed contractor."]
    open(OUT+"llms.txt","w").write("\n".join(L))
    open(OUT+"site.webmanifest","w").write(json.dumps({"name":"Homestallers","short_name":"Homestallers","icons":[{"src":"/icon-192.png","sizes":"192x192","type":"image/png"},{"src":"/icon-512.png","sizes":"512x512","type":"image/png"}],"theme_color":OR,"background_color":"#ffffff","display":"standalone","start_url":"/"}))
    open(ROOT+"netlify.toml","w").write('[build]\n  publish = "public"\n  functions = "netlify/functions"\n\n[functions]\n  node_bundler = "esbuild"\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Content-Type-Options = "nosniff"\n    Referrer-Policy = "strict-origin-when-cross-origin"\n    X-Frame-Options = "SAMEORIGIN"\n    Permissions-Policy = "geolocation=(self)"\n\n[[headers]]\n  for = "/assets/*"\n  [headers.values]\n    Cache-Control = "public, max-age=31536000, immutable"\n\n[[headers]]\n  for = "/og/*"\n  [headers.values]\n    Cache-Control = "public, max-age=604800"\n\n[[redirects]]\n  from = "https://www.homestallers.com/*"\n  to = "https://homestallers.com/:splat"\n  status = 301\n  force = true\n')
    print("pages",len(pages),"errors",errs[:3])
asyncio.run(main());srv.shutdown()

# --- move inlined Alex photo to one shared file ---
import base64 as _b64, glob as _glob
_b=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'alex.b64')).read().strip()
_uri='data:image/jpeg;base64,'+_b
open(OUT+'assets/alex.jpg','wb').write(_b64.b64decode(_b))
_n=0
for _f in _glob.glob(OUT+'**/*.html',recursive=True)+_glob.glob(OUT+'assets/*.js'):
    _s=open(_f).read()
    if _uri in _s:
        open(_f,'w').write(_s.replace(_uri,'/assets/alex.jpg')); _n+=1
print('photo refs moved',_n)

# --- Google Search Console verification (keep permanently) ---
open(OUT+'google8fbd5178f243adc2.html','w').write('google-site-verification: google8fbd5178f243adc2.html')
