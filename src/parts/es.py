# Spanish versions of the top pages. Static pages with their own header/footer.
import html
PAIRS={"/":"/es/","/services/":"/es/servicios/","/tv-mounting-jacksonville/":"/es/montaje-de-tv-jacksonville/","/furniture-assembly-jacksonville/":"/es/armado-de-muebles-jacksonville/",
 "/handyman-jacksonville/":"/es/handyman-jacksonville/","/moving-help-jacksonville/":"/es/ayuda-con-mudanzas-jacksonville/","/contact/":"/es/contacto/"}
SVCS=[("Montaje de TV","$100","Su TV en la pared, nivelado y configurado.","/es/montaje-de-tv-jacksonville/","tv"),
 ("TV con cables ocultos","$150","Montaje de TV con los cables dentro de la pared.","/tv-mounting-hide-wires-jacksonville/","tvclean"),
 ("Armado de muebles","$80 c/u","Camas, cómodas, escritorios y repisas.","/es/armado-de-muebles-jacksonville/","assembly"),
 ("Casa inteligente","$100","Timbres con cámara, cámaras y cerraduras inteligentes.","/smart-home-setup-jacksonville/","smart"),
 ("Ayuda con tecnología","$80/hora","Wi-Fi, televisores, teléfonos e impresoras.","/tech-help-jacksonville/","tech"),
 ("Cuadros, espejos y repisas","$90 c/u","Colgados nivelados y seguros.","/picture-shelf-mirror-hanging-jacksonville/","hang"),
 ("Persianas y cortineros","$90 por ventana","Instaladas y probadas.","/blinds-curtain-installation-jacksonville/","blinds"),
 ("Ayuda con mudanzas","$160 (2 horas)","Cargar, descargar o reacomodar muebles.","/es/ayuda-con-mudanzas-jacksonville/","moving"),
 ("Servicios de handyman","$80/hora","Su lista de reparaciones pequeñas.","/es/handyman-jacksonville/","handyman"),
 ("Lavado a presión","$160 (2 horas)","Entradas, patios y terrazas de piscina.","/pressure-washing-jacksonville/","pressure"),
 ("Paquete de mudanza","$499","2 TV, 3 muebles y 2 horas de handyman.","/move-in-bundle-jacksonville/","movein")]
PRICING='''<div class="pgrid">
 <div class="pcell"><span class="plabel">Precio</span><b class="pval">Fijo</b><p>Cada trabajo tiene un precio fijo que incluye un tiempo establecido.</p></div>
 <div class="pcell"><span class="plabel">Tiempo extra</span><b class="pval">$80<small>/hora</small></b><p>Solo si el trabajo se extiende y solo con su aprobación.</p></div>
 <div class="pcell"><span class="plabel">Traslado</span><b class="pval">Gratis</b><p>Hasta 10 millas de Jacksonville. $35 de 11 a 30 millas.</p></div>
 <div class="pcell"><span class="plabel">Piezas</span><b class="pval">Al costo</b><p>Sin recargo en piezas o materiales, con recibo.</p></div></div>'''
BOOKNOTE='<p class="muted" style="font-size:.95rem">La reserva en línea está en inglés y es muy sencilla. Si prefiere, llámenos o envíenos un mensaje de texto al <span class="sel"><a class="contact-link" href="tel:+16313044809">(631) 304-4809</a></span>.</p>'
def svc_cards(svg):
    return '<div class="pk-grid">'+"".join(f'<a class="pk" href="{u}"><span class="ico">{svg(i)}</span><span class="pk-body"><b>{html.escape(n)}</b><span class="muted">{html.escape(s)}</span></span><span class="pk-price">{p}</span></a>' for n,p,s,u,i in SVCS)+'</div>'
def detail(title,lead,price,included,notincl,faqs,book_svc,extra):
    return f'''<section><div class="wrap"><article class="seo"><div class="seo-hero"><div class="crumbs"><a href="/es/">Inicio</a> / <a href="/es/servicios/">Servicios</a> / {title}</div>
 <span class="tag">Jacksonville, Florida</span><h1>{title} en Jacksonville</h1><p class="lead">{lead}</p>
 <div class="btnrow"><a class="btn" href="/book/?svc={book_svc}">Reservar por {price}</a><a class="btn ghost" href="/es/contacto/">Hacer una pregunta</a></div>{BOOKNOTE}</div>
 <div class="seo-grid"><div class="prose">{extra}
 <h2>Qué incluye</h2><ul class="checks">{"".join(f"<li>{x}</li>" for x in included)}</ul>
 <h2>Qué no incluye</h2><ul class="minus">{"".join(f"<li>{x}</li>" for x in notincl)}</ul>
 <h2>Cómo funcionan los precios</h2><p>El precio es fijo e incluye el tiempo que normalmente toma el trabajo. Si su trabajo necesita más tiempo, son $80 por hora adicional y siempre le preguntamos antes. No cobramos traslado dentro de 10 millas del centro de Jacksonville y cobramos $35 fijos de 11 a 30 millas. Las piezas se cobran al costo.</p>
 <h2>Preguntas frecuentes</h2><div class="faq">{"".join(f"<details><summary>{q}</summary><p>{a}</p></details>" for q,a in faqs)}</div>
 <h2>Zonas que atendemos</h2><p>Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Nocatee, St. Johns, Mandarin, Orange Park, Fleming Island, Middleburg, Yulee y comunidades cercanas hasta 30 millas.</p></div>
 <aside class="seo-side"><div class="card"><h3>{title}</h3><div class="big-price">{price}</div><a class="btn" href="/book/?svc={book_svc}" style="width:100%">Reservar</a></div>
 <div class="card"><h3>¿Preguntas?</h3><p class="muted">Llame o envíe un mensaje de texto</p><p class="sel" style="font-weight:700"><a class="contact-link" href="tel:+16313044809">(631) 304-4809</a></p><p class="sel" style="font-size:.95rem"><a class="contact-link" href="mailto:homestallers@gmail.com">homestallers@gmail.com</a></p></div></aside></div></article></div></section>'''
COMMON_FAQ=[("¿Cuándo pago?","Paga en línea al reservar con tarjeta, Apple Pay o Google Pay. Si el trabajo necesita tiempo extra, se paga el mismo día en efectivo o en línea."),
 ("¿Qué pasa si el trabajo toma menos tiempo?","El precio del paquete se mantiene igual."),("¿Puedo cancelar?","Sí. Puede cancelar sin costo hasta 24 horas antes de su cita."),("¿Qué días trabajan?","Los 7 días de la semana, de 8am a 6pm.")]
def pages(svg):
    P={}
    P["/es/"]=("Montaje de TV y Handyman en Jacksonville, FL | Homestallers","Montaje de TV, armado de muebles, casa inteligente y handyman en Jacksonville, FL. Precios fijos, trabajo cuidadoso. Abierto 7 días.",
     f'''<section class="h-hero"><div class="wrap h-hero-in"><div class="h-copy"><p class="loc-chip">Jacksonville, Florida</p>
 <h1>Profesionales locales de confianza para su&nbsp;hogar.</h1>
 <p class="lead hero-lead">Montaje de TV, armado de muebles, casa inteligente y las tareas de su lista. Precios fijos y trabajo cuidadoso, directo a su puerta.</p>
 <div class="btnrow"><a class="btn lg" href="/book/">Reservar</a><a class="btn ghost lg" href="/es/servicios/">Ver precios</a></div>
 <ul class="h-proof"><li>Precios claros</li><li>Abierto 7 días</li><li>Profesionales locales</li><li>Hasta 30 millas de Jax</li></ul>{BOOKNOTE}</div>
 <div class="h-panel"><div class="hp-head"><b>Trabajos populares</b><a href="/es/servicios/">Todos los precios</a></div><div class="hc-list">{"".join(f'<a href="{u}" class="hc-row"><span class="ico">{svg(i)}</span><span>{html.escape(n)}</span><b>{p.split(" ")[0]}</b></a>' for n,p,s,u,i in SVCS[:5])}</div></div></div></section>
 <section><div class="wrap"><div class="sec-head"><div><h2>Elija un trabajo. Vea el precio.</h2></div><a class="textlink" href="/es/servicios/">Todos los servicios →</a></div>{svc_cards(svg)}</div></section>
 <section><div class="wrap"><div class="sec-head"><div><h2>Claro de principio a fin.</h2></div></div>{PRICING}</div></section>
 <section><div class="wrap"><div class="cta-band"><div><h2>Listos cuando usted lo esté.</h2><p>Reserve en línea o llame o escriba al <span class="sel"><a class="contact-link" href="tel:+16313044809">(631) 304-4809</a></span>.</p></div><a class="btn" href="/book/">Reservar</a></div></div></section>''')
    P["/es/servicios/"]=("Servicios y precios en Jacksonville | Homestallers","Precios fijos para montaje de TV, armado de muebles, casa inteligente, handyman, mudanzas y lavado a presión en Jacksonville, FL.",
     f'<section><div class="wrap"><div class="head"><h1 class="h1s">Precios fijos para cada trabajo</h1><p class="lead">Cada precio incluye el tiempo que normalmente toma el trabajo. Si se extiende, son $80 por hora adicional con su aprobación.</p>{BOOKNOTE}</div>{svc_cards(svg)}<div style="margin-top:28px">{PRICING}</div></div></section>')
    P["/es/montaje-de-tv-jacksonville/"]=("Montaje de TV en Jacksonville FL | $100 | Homestallers","Montaje de TV en Jacksonville, FL por $100 fijos. En los montantes, nivelado y configurado. Cables ocultos por $150. Reserve en línea.",
     detail("Montaje de TV","Instalamos su TV en la pared por $100 fijos: en los montantes, perfectamente nivelado y conectado a sus aplicaciones y barra de sonido antes de irnos.","$100",
      ["Ubicar los montantes e instalar el soporte","Colgar el TV nivelado y seguro","Conectar decodificador, consola o barra de sonido","Configurar aplicaciones de streaming","Ordenar los cables"],
      ["El soporte (usted lo compra o lo llevamos al costo)","Ocultar cables dentro de la pared (vea TV con cables ocultos, $150)","Ladrillo, piedra o sobre chimenea: $40 adicionales"],
      [("¿Cuánto cuesta montar un TV en Jacksonville?","$100 fijos en pared de yeso (drywall). Ladrillo, bloque o sobre chimenea cuesta $40 adicionales.")]+COMMON_FAQ,"tv",
      "<h2>Paredes de bloque y yeso</h2><p>Muchas casas en Jacksonville tienen paredes exteriores de bloque de concreto, y las casas antiguas de Riverside, Avondale y San Marco tienen paredes de yeso. Llevamos los anclajes correctos para cada tipo de pared, para que su TV quede seguro.</p>"))
    P["/es/armado-de-muebles-jacksonville/"]=("Armado de muebles en Jacksonville FL | $80 | Homestallers","Armado de muebles de IKEA, Wayfair y Amazon en Jacksonville, FL por $80 cada uno. Muebles altos anclados a la pared. Reserve en línea.",
     detail("Armado de muebles","Armamos camas, cómodas, escritorios, repisas y muebles de patio por $80 cada uno. Los muebles altos se anclan a la pared, algo muy importante en casas con niños.","$80 c/u",
      ["Desempacar y armar cada mueble","Anclar muebles altos a la pared","Nivelar y ajustar puertas y cajones","Llevar las cajas a su contenedor"],["Muebles muy grandes pueden contar como dos","Retirar muebles viejos"],
      [("¿Cuánto cuesta armar muebles en Jacksonville?","$80 por mueble. La mayoría toma menos de una hora.")]+COMMON_FAQ,"assembly",""))
    P["/es/handyman-jacksonville/"]=("Servicios de handyman en Jacksonville FL | $80/hora | Homestallers","Handyman en Jacksonville, FL por $80 la hora: reparaciones pequeñas, herrajes, sellado, alarmas de humo y más. Reserve en línea.",
     detail("Servicios de handyman","Toda casa tiene una lista de pendientes. Reserve una o varias horas y trabajamos en su lista, de lo más importante a lo menos.","$80/hora",
      ["Reparaciones y ajustes pequeños","Manijas, cerraduras y bisagras","Sellado de bañeras y lavabos","Cambio de baterías en alarmas de humo","Protección para niños"],["Piezas, al costo","Trabajos eléctricos, de plomería o techos","Trabajos de más de $2,500"],
      [("¿Cuánto cuesta un handyman en Jacksonville?","$80 por hora, mínimo una hora, más piezas al costo.")]+COMMON_FAQ,"handyman",""))
    P["/es/ayuda-con-mudanzas-jacksonville/"]=("Ayuda con mudanzas en Jacksonville FL | $160 | Homestallers","Ayuda para cargar y descargar mudanzas en Jacksonville, FL: $160 por 2 horas. También montamos TV y armamos muebles en su nuevo hogar.",
     detail("Ayuda con mudanzas","¿Necesita manos extra? Reserve 2 horas para cargar un camión, descargar un contenedor o reacomodar muebles pesados.","$160",
      ["2 horas de ayuda","Cargar, descargar y mover muebles","Desarmar y armar camas y mesas"],["El camión","Pianos y cajas fuertes"],
      [("¿Ustedes llevan camión?","No. Este servicio es solo mano de obra. Usted renta el camión o contenedor.")]+COMMON_FAQ,"moving",""))
    P["/es/contacto/"]=("Contacto | Homestallers Jacksonville","Contacte a Homestallers en Jacksonville, FL. Llame o envíe un mensaje de texto al (631) 304-4809 o escriba a homestallers@gmail.com.",
     '''<section><div class="wrap split" style="align-items:start"><div style="display:grid;gap:16px"><h1 class="h1s">Contáctenos</h1><p class="lead">¿Preguntas o un proyecto más grande? Escríbanos como prefiera.</p>
 <div class="card"><div class="rows"><div><span>Llamar o texto</span><span class="sel"><a class="contact-link" href="tel:+16313044809">(631) 304-4809</a></span></div><div><span>Correo</span><span class="sel"><a class="contact-link" href="mailto:homestallers@gmail.com">homestallers@gmail.com</a></span></div><div><span>Horario</span><span>7 días, 8am a 6pm</span></div></div></div></div>
 <div class="card"><h3>Envíe un mensaje</h3><form id="esForm" class="fields" novalidate><label class="fl">Nombre<input name="name" required></label><label class="fl">Correo electrónico<input name="email" type="email" required></label>
 <div class="fr c2"><label class="fl"><span>Teléfono <span class="opt-l">Opcional</span></span><input name="phone" type="tel"></label><label class="fl"><span>Ciudad <span class="opt-l">Opcional</span></span><input name="town"></label></div>
 <label class="fl">Mensaje<textarea name="message" rows="4" required></textarea></label><p class="err" id="esErr" hidden>Agregue su nombre, un correo válido y un mensaje.</p><button class="btn" type="submit">Enviar mensaje</button></form>
 <p id="esOk" hidden class="lead">¡Gracias! Le responderemos pronto.</p></div></div></section>''')
    return P
def shell(svg,logo):
    head=f'''<header class="top"><div class="wrap nav"><a class="brand" href="/es/" aria-label="Homestallers inicio">{logo}<span class="word">Homestallers<small>Profesionales de confianza</small></span></a>
 <nav class="links" id="links"><a href="/es/">Inicio</a><a href="/es/servicios/">Servicios y precios</a><a href="/es/contacto/">Contacto</a><a href="/" lang="en">English</a></nav>
 <div class="navcta"><a class="btn sm" href="/book/">Reservar</a><button class="menu-btn" id="menuBtn" aria-label="Abrir menú" aria-expanded="false" aria-controls="links"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div></header><main>'''
    foot='''</main><footer class="site"><div class="wrap foot-bar" style="margin-top:0;border-top:0"><span>© 2026 Homestallers. Todos los derechos reservados.</span><span class="foot-links"><a href="/terms/">Acuerdo de servicio</a><a href="/privacy/">Privacidad</a><a href="/" lang="en">English</a></span></div></footer>
<script>document.getElementById("menuBtn").onclick=function(){var l=document.getElementById("links");var o=l.classList.toggle("open");this.setAttribute("aria-expanded",o)};
var f=document.getElementById("esForm");if(f){f.onsubmit=async function(e){e.preventDefault();var d=new FormData(f);if(!d.get("name")||!/^\\S+@\\S+\\.\\S+$/.test(d.get("email")||"")||!d.get("message")){document.getElementById("esErr").hidden=false;return}
d.append("form-name","contact");d.append("topic","Mensaje en español");try{var r=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(d).toString()});if(!r.ok)throw 0;f.hidden=true;document.getElementById("esOk").hidden=false}catch(x){document.getElementById("esErr").hidden=false;document.getElementById("esErr").textContent="No se pudo enviar. Llame o escriba al (631) 304-4809."}}}</script></body></html>'''
    return head,foot
