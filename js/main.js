
(function(){
  /* Número de WhatsApp de la división de eventos. */
  var WHATSAPP = "15612892565";

  var T={
   en:{
    "nav.estates":"The Estates",
    "ft.terms":"Terms & Conditions","ft.privacy":"Privacy","ft.access":"Accessibility",
    "terms.eye":"Legal & Policies",
    "terms.cta":"Request a date",
    "terms.title":"Terms & Conditions",
    "terms.mainTitle":"Terms & Conditions",
    "terms.1.t":"Event Reservations & Financials",
    "terms.1.p":"All private estate bookings require a 50% non-refundable retainer upon contract execution. A separate refundable security deposit is mandatory 30 days prior to the event to cover potential incidental damages to the property's architectural assets.",
    "terms.2.t":"Capacity & Estate Usage",
    "terms.2.p":"Estates are strictly contracted for the agreed-upon guest count, not to exceed a maximum capacity of 150 seated guests. Clients and guests must strictly adhere to local noise ordinances and community guidelines after 11:00 PM.",
    "terms.3.t":"Vendor Exclusivity & Insurance",
    "terms.3.p":"To safeguard the integrity of our estates, all third-party production, catering, and audiovisual services must be pre-authorized. Approved external vendors must submit a valid Certificate of Insurance (COI) naming Grace Collection as additionally insured no later than 30 days prior to load-in.",
    "terms.4.t":"Property Protection & Liability",
    "terms.4.p":"The contracting client assumes full financial and legal responsibility for the conduct of their guests and vendors. No permanent alterations, affixing of materials to walls, or use of non-approved pyrotechnics are permitted on the premises.",
    "terms.5.t":"Cancellations & Force Majeure",
    "terms.5.p":"Retainers are strictly non-refundable. In the event of unforeseen tropical weather advisories (e.g., named hurricanes affecting the immediate area) or official force majeure, Grace Collection will honor date rescheduling within a twelve-month window, subject to estate availability.",
    "terms.6.t":"Inquiries & Legal Notices",
    "terms.6.p":"For questions regarding our event policies, vendor approvals, or to submit legal documentation, please contact our Event Directorate directly.",
    "terms.6.cta":"Contact Event Directorate",
    "cta.collection":"Request a date",
    "cta.suites":"Schedule a private tour",
    "cta.service":"Plan your event",
    "cta.process":"Request a date",
    "modal.title":"Request Received",
    "modal.desc":"Thank you for inquiring about Privée Events. Our event director will contact you personally within 24 hours.",
    "modal.btn":"Return to site","nav.occasions":"Occasions","nav.spaces":"Spaces","nav.service":"Service","nav.location":"Location",
    "nav.cta":"Request a date","hero.tour":"Book a private tour",
    "hero.title":"A new landmark in private events<br>by the Atlantic.",
    "hero.sub":"Oceanfront villas, reserved entirely for your event.",
    "caps":["Villa Paradiso · Dining room","Villa Paradiso · Pool and ocean","Villa Azure · Suite"],
    "intro.eye":"The Collection","intro.title":"You're not just booking a space — you're creating a memorable moment,<br>where every corner becomes part of the experience.","intro.quiet":"Private settings where every detail, every toast and every memory carry your signature.","fig.1d":"Villa Paradiso, Villa Azure and Ocean Suites, opening in 2027.","fig.2d":"Nine at Paradiso, seven at Azure. Your guests sleep behind the same gate.","fig.3d":"Ceremony, dinner and dancing without leaving the property.","fig.4d":"No adjoining events, no public lobby, no strangers at the pool.",
    "intro.body":"Privée is the private-events division of Grace Hotel Collection. When you reserve with us, the gates close behind your party: every suite, every terrace, every meter of shoreline belongs to your celebration alone. No shared lobbies. No adjoining events. No compromise.",
    "fig.1":"Private villas","fig.2":"Bedrooms en suite","fig.3":"Guests seated","fig.4":"Shared spaces",
    "est.eye":"The Estates","est.title":"Two villas, one collection.",
    "est.sub":"Each estate carries its own character beneath the parent house. Reserve one — or take the collection in full for a multi-day celebration.","est.sub2":"Reserve one, or take the whole collection.",
    "est.p.tag":"Oceanfront","est.p.1":"9 bedrooms en suite","est.p.2":"Private pool &amp; garden pavilion","est.p.3":"Private beach access",
    "est.a.tag":"Ocean view","est.a.1":"7 bedrooms en suite","est.a.2":"Private pool, BBQ &amp; gardens","est.a.3":"Ocean view, beach within walking distance",
    "est.o.tag":"Opening 2027","est.o.1":"Currently under construction","est.o.2":"Suites and event terrace","est.o.3":"Reservations by advance inquiry",
    "est.ask":"Plan your event","est.preview":"Join the preview list",
    "occ.eye":"Occasions","occ.title":"Three ways to close the gates.","occ.sub":"Every celebration starts from a blank page.",
    "occ.w.t":"Weddings","occ.w.p":"Ceremony on the sand, dinner beneath the pavilion, and a house that sleeps your closest guests until morning.","occ.w.cta":"Plan a wedding",
    "occ.m.t":"Milestones","occ.m.p":"Birthdays, anniversaries and family reunions — long tables, low light, and the sound of the Atlantic behind the music.","occ.m.cta":"Plan a celebration",
    "occ.c.t":"Corporate","occ.c.p":"Board retreats, incentive weekends and brand activations, hosted with the discretion of a private residence.","occ.c.cta":"Plan a retreat","occ.1.t":"Corporate","occ.1.p":"Brand activations, launches and corporate retreats.","occ.1.cta":"Plan a corporate event","occ.2.t":"Destination Weddings","occ.2.p":"Ceremony on the sand, dinner beneath the pavilion, and a house that sleeps your closest guests.","occ.2.cta":"Plan your wedding","occ.3.t":"Retreats","occ.3.p":"Several days, one gate: leadership offsites, wellness weekends and creative retreats by the sea.","occ.3.cta":"Plan a retreat","occ.4.t":"Birthdays","occ.4.p":"Long tables, low light and the sound of the Atlantic behind the music.","occ.4.cta":"Plan a birthday",
    "sp.eye":"The Spaces","sp.title":"Rooms that know how to hold a moment.",
    "sp.1.t":"The Garden Pavilion","sp.1.p":"A glass structure in the garden — ceremonies at dusk, dinner for the full party under one roof.",
    "sp.2.t":"The Pool Deck","sp.2.p":"Glass-walled infinity pool, loungers and cabana bar — cocktails while the sun goes down over the water.",
    "sp.3.t":"The Coastal Dining Room","sp.3.p":"Floor-to-ceiling windows and a single long table — private dinners and intimate toasts.",
    "sp.4.t":"The Private Beach","sp.4.p":"Direct access to Ocean Park sand — barefoot ceremonies, morning yoga, late-night bonfires.",
    "su.eye":"The Suites","su.title":"Sixteen suites behind one gate.","su.sub":"Your guests sleep where they celebrate.","su.1.t":"Oceanfront suites","su.1.p":"Nine suites, all with private baths, a few steps from the sand.","su.2.t":"Ocean-view suites","su.2.p":"Seven suites with private baths, surrounded by pool and gardens.","su.3.p":"Hotel suites and an event terrace, now under construction.","marquee":"Where the Atlantic keeps your secrets",
    "svc.eye":"The Service","svc.title":"A DEDICATED CONCIERGE FOR A FULLY PERSONALIZED EXPERIENCE","svc.sub":"A dedicated event director from first inquiry to the last guest — coordinating a vetted network of the island's finest.","svc.sub2":"You will have an exclusive Concierge focused on estate care and ensuring every space aligns seamlessly with your event's vision.","svc.vend":"Our villas are designed to host distinctive celebrations in complete privacy. We gladly welcome your chosen Event Planner or production team and, upon request, provide access to our trusted network of local partners.","svc.listIntro":"Services and partnerships at your disposal:",
    "svc.1.t":"Private gastronomy &amp; craft cocktails",
    "svc.2.t":"Floral design &amp; ambiance styling",
    "svc.3.t":"Photography, film &amp; audiovisual production",
    "svc.4.t":"In-villa wellness, spa &amp; styling",
    "svc.5.t":"Logistics, VIP transportation &amp; security",
    "svc.partners":"Part of our network",
    "pr.eye":"The Process","pr.title":"From first note to last dance.",
    "pr.1.t":"Inquiry","pr.1.p":"Share your date, guest count and the shape of the occasion. We reply within 24 hours.",
    "pr.2.t":"Private tour","pr.2.p":"Walk the estates in person or by video with the event director. Hold your date while you decide.",
    "pr.3.t":"Design","pr.3.p":"Floor plans, vendor selection, menus and a run-of-show built around the day you imagined.",
    "pr.4.t":"Celebration","pr.4.p":"The gates close, the team takes over, and the only thing left for you is to be present.","pr.1.p2":"Share your date and guest count. We reply within 24 hours.","pr.2.p2":"Walk the estates with your event director. We hold your date.","pr.3.p2":"Floor plans, vendors, menus and the run-of-show.","pr.4.p2":"The gates close. The only thing left is to be present.",
    "inq.eye":"Inquiries","inq.title":"The first step of a great story.",
    "inq.sub":"Each season's dates are released in limited number. Share the essentials and your event director will reply personally within 24 hours.","inq.sub2":"Share the essentials. Your event director replies within 24 hours.",
    "f.name":"Full name","f.email":"Email","f.phone":"Phone / WhatsApp","f.type":"Type of event","f.date":"Preferred date","f.flex":"My dates are flexible",
    "f.guests":"Guests","f.estate":"Estate of interest","f.nights":"Nights required","f.more":"Tell us more",
    "f.moreph":"Ceremony on the beach, dinner for 120 under the pavilion…","f.send":"Send inquiry","f.sending":"Sending…",
    "f.legal":"By sending this inquiry you agree to be contacted by the Privée events team. Your details are never shared outside Grace Hotel Collection.",
    "f.thanksT":"Thank you, {n}.","f.thanksP":"Your event director will reply personally within 24 hours, in the language you wrote to us in.",
    "e.req":"Add this so we can prepare your proposal.","e.email":"Check the email address — it needs an @ and a domain.","e.date":"Pick a date, or mark your dates as flexible.",
    "o.type":["Wedding","Celebration","Corporate","Other"],
    "o.guests":["1–25","26–50","51–100","101–150","More than 150"],
    "o.estate":["Villa Paradiso","Villa Azure","The full collection","Not decided yet"],
    "o.nights":["Event only","1 night","2 nights","3+ nights"],
    "tour.eye":"Or see it for yourself","tour.title":"Book a private tour.",
    "tour.p":"Thirty minutes, in person or by video, with the event director. Choose a time that suits you.",
    "tour.cta":"Reserve a time","tour.pick":"Choose a day first.",
    "tour.note":"Tour selected: {d}, at {t} — add your details in the form and we'll confirm it.",
    "tr.1":"Personal reply","tr.2":"Dedicated director","tr.3b":"Hold","tr.3":"Date held 7 days",
    "wa.pre":"Prefer to write?","wa.link":"WhatsApp the events team",
    "loc.eye":"The Address","loc.p2":"Between Condado and Isla Verde, fifteen minutes from the airport.","loc.p":"A residential stretch of sand between Condado and Isla Verde — palm-lined, unhurried, and fifteen minutes from the airport. Old San Juan sits twenty minutes west.",
    "loc.1":"Luis Muñoz Marín International (SJU)","loc.2":"Old San Juan","loc.3":"Condado Lagoon","loc.5":"Ocean Park Beach","loc.5b":"Steps away",
    "ft.est":"The Estates","ft.stay":"Stay with us","ft.occ":"Occasions","ft.contact":"Contact","ft.legal":"Privacy · Terms · Accessibility","ft.email":"events@gracecollectionpr.com","ft.phone":"+1 (954) 900-1988","ft.whatsapp":"WhatsApp Events Concierge",
    "locale":"en-US","dw":["M","T","W","T","F","S","S"]
   },
   es:{
    "nav.estates":"Las villas",
    "ft.terms":"Términos y Condiciones","ft.privacy":"Privacidad","ft.access":"Accesibilidad",
    "terms.eye":"Legal y Políticas",
    "terms.cta":"Solicitar fecha",
    "terms.title":"Términos y Condiciones",
    "terms.mainTitle":"Términos y Condiciones",
    "terms.1.t":"Reservas de Eventos y Finanzas",
    "terms.1.p":"Todas las reservas de propiedades privadas requieren un anticipo no reembolsable del 50% tras la firma del contrato. Es obligatorio un depósito de garantía reembolsable independiente 30 días antes del evento para cubrir posibles daños imprevistos al patrimonio arquitectónico de la propiedad.",
    "terms.2.t":"Capacidad y Uso de la Finca",
    "terms.2.p":"Las fincas se contratan estrictamente para la cantidad acordada de asistentes, sin exceder la capacidad máxima de 150 invitados sentados. Los clientes e invitados deben acatar estrictamente las ordenanzas locales de control de ruido y las pautas de convivencia comunitaria después de las 11:00 PM.",
    "terms.3.t":"Exclusividad de Proveedores y Seguros",
    "terms.3.p":"Para salvaguardar la integridad de nuestras propiedades, todos los servicios de producción de terceros, banquetes y medios audiovisuales deben contar con autorización previa. Los proveedores externos aprobados deberán presentar un Certificado de Seguro (COI) válido que designe a Grace Collection como asegurado adicional a más tardar 30 días antes del montaje.",
    "terms.4.t":"Protección de la Propiedad y Responsabilidad",
    "terms.4.p":"El cliente contratante asume total responsabilidad financiera y legal por la conducta de sus invitados y proveedores. No se permiten alteraciones permanentes, fijación de materiales en paredes ni el uso de artículos pirotécnicos no autorizados dentro de las instalaciones.",
    "terms.5.t":"Cancelaciones y Fuerza Mayor",
    "terms.5.p":"Los anticipos son estrictamente no reembolsables. En caso de advertencias climáticas tropicales imprevistas (ej. huracanes con nombre que impacten el área inmediata) o fuerza mayor oficial, Grace Collection respetará la reprogramación de la fecha dentro de un período de doce meses, sujeto a disponibilidad de la finca.",
    "terms.6.t":"Consultas y Notificaciones Legales",
    "terms.6.p":"Para consultas relativas a nuestras políticas de eventos, aprobación de proveedores o para presentar documentación legal, comuníquese directamente con nuestra Dirección de Eventos.",
    "terms.6.cta":"Contactar Dirección de Eventos",
    "cta.collection":"Solicitar fecha",
    "cta.suites":"Agendar visita privada",
    "cta.service":"Planificar tu evento",
    "cta.process":"Solicitar fecha",
    "modal.title":"Solicitud Recibida",
    "modal.desc":"Gracias por tu consulta sobre Privée Events. Nuestro director de eventos te contactará personalmente en 24 horas.",
    "modal.btn":"Volver al sitio","nav.occasions":"Ocasiones","nav.spaces":"Espacios","nav.service":"Servicio","nav.location":"Ubicación",
    "nav.cta":"Solicitar fecha","hero.tour":"Agendar visita privada",
    "hero.title":"Una nueva referencia en eventos privados frente al mar.",
    "hero.sub":"Villas frente al mar que se reservan en su totalidad para tu evento.",
    "caps":["Villa Paradiso · Comedor","Villa Paradiso · Piscina y mar","Villa Azure · Suite"],
    "intro.eye":"La Colección","intro.title":"No solo reservas un espacio, creas un momento memorable, donde cada rincón se transforma en parte de la experiencia.","intro.quiet":"Escenarios privados donde cada detalle, cada brindis y cada recuerdo llevan tu sello.","fig.1d":"Villa Paradiso, Villa Azure y Ocean Suites, que abre en 2027.","fig.2d":"Nueve en Paradiso y siete en Azure. Tus invitados duermen detrás de la misma puerta.","fig.3d":"Ceremonia, cena y baile sin salir de la propiedad.","fig.4d":"Sin eventos vecinos, sin lobby público, sin extraños en la piscina.",
    "intro.body":"Privée es la división de eventos privados de Grace Hotel Collection. Al reservar con nosotros, las puertas se cierran detrás de tus invitados: cada suite, cada terraza y cada metro de costa pertenecen únicamente a tu celebración. Sin recepciones compartidas. Sin eventos vecinos. Sin concesiones.",
    "fig.1":"Villas privadas","fig.2":"Habitaciones en suite","fig.3":"Invitados sentados","fig.4":"Áreas compartidas",
    "est.eye":"Las villas","est.title":"Dos villas, una misma colección",
    "est.sub":"Cada villa tiene carácter propio bajo la casa madre. Reserva una — o toma la colección completa para una celebración de varios días.",
    "est.p.tag":"Frente al mar","est.p.1":"9 habitaciones en suite","est.p.2":"Piscina privada y pabellón de jardín","est.p.3":"Acceso privado a la playa",
    "est.a.tag":"Vista al mar","est.a.1":"7 habitaciones en suite","est.a.2":"Piscina privada, BBQ y jardines","est.a.3":"Vista al mar, playa a pasos",
    "est.o.tag":"Apertura 2027","est.o.1":"Actualmente en construcción","est.o.2":"Suites y terraza de eventos","est.o.3":"Reservas por consulta anticipada",
    "est.ask":"Consultar esta villa","est.preview":"Unirme a la lista de preview",
    "occ.eye":"Ocasiones","occ.title":"Tres formas de cerrar las puertas.","occ.sub":"Cada celebración empieza desde cero.",
    "occ.w.t":"Bodas","occ.w.p":"Ceremonia sobre la arena, cena bajo el pabellón y una casa que aloja a tus invitados más cercanos hasta la mañana siguiente.","occ.w.cta":"Planear una boda",
    "occ.m.t":"Celebraciones","occ.m.p":"Cumpleaños, aniversarios y reencuentros familiares — mesas largas, luz baja y el sonido del Atlántico detrás de la música.","occ.m.cta":"Planear una celebración",
    "occ.c.t":"Corporativo","occ.c.p":"Retiros de directorio, fines de semana de incentivo y activaciones de marca, con la discreción de una residencia privada.","occ.c.cta":"Planear un retiro",
    "sp.eye":"Los espacios","sp.title":"Espacios que saben sostener un momento.",
    "sp.1.t":"El Pabellón del Jardín","sp.1.p":"Una estructura de cristal en el jardín — ceremonias al atardecer y cena para todos bajo un mismo techo.",
    "sp.2.t":"La Terraza de la Piscina","sp.2.p":"Piscina infinita con muro de cristal, camastros y bar de cabaña — cócteles mientras el sol baja sobre el agua.",
    "sp.3.t":"El Comedor Costero","sp.3.p":"Ventanales de piso a techo y una sola mesa larga — cenas privadas y brindis íntimos.",
    "sp.4.t":"La Playa Privada","sp.4.p":"Acceso directo a la arena de Ocean Park — ceremonias a pie descalzo, yoga al amanecer, fogatas de madrugada.",
    "marquee":"Donde el Atlántico guarda tus secretos",
    "svc.eye":"El servicio","svc.title":"UN CONCIERGE DEDICADO PARA REALIZAR TU EXPERIENCIA TOTALMENTE PERSONALIZADA","svc.sub":"Un director de eventos dedicado, desde la primera consulta hasta el último detalle.","svc.sub2":"Contarás con un Concierge exclusivo enfocado en la atención de la propiedad y en asegurar que cada espacio responda exactamente a la visión de tu evento.","svc.vend":"Diseñamos nuestras villas para celebraciones únicas con total privacidad. Recibimos con gusto al Event Planner o equipo de producción de tu elección y, si lo requieres, ponemos a tu disposición nuestra red de aliados locales de confianza.","svc.listIntro":"Servicios y alianzas a tu disposición:",
    "svc.1.t":"Gastronomía privada y alta coctelería",
    "svc.2.t":"Diseño floral y ambientación",
    "svc.3.t":"Fotografía, video y producción audiovisual",
    "svc.4.t":"Bienestar, spa y estilismo en villa",
    "svc.5.t":"Logística, transporte VIP y seguridad",
    "svc.partners":"Parte de nuestra red",
    "pr.eye":"El proceso","pr.title":"Desde la primera nota hasta el último baile de la velada.",
    "pr.1.t":"Consulta Inicial","pr.1.p":"Comparta con nosotros la visión de su evento, detallando la fecha estimada, el estilo deseado y el número de invitados.",
    "pr.2.t":"Visita Privada","pr.2.p":"Recorra la villa en compañía de su director de eventos personal y asegure en exclusiva la fecha de su preferencia.",
    "pr.3.t":"Diseño y Planificación","pr.3.p":"Orquestamos cada detalle: distribución de espacios, selección de proveedores, propuesta gastronómica y el cronograma minuto a minuto.",
    "pr.4.t":"La Celebración","pr.4.p":"Las puertas se cierran al mundo exterior. Su única responsabilidad será disfrutar y estar presente.",
    "inq.eye":"Solicitudes","inq.title":"El primer paso de una gran historia.",
    "inq.sub":"Compártenos lo esencial de su evento y lo que imagina para ese día.",
    "f.name":"Nombre completo","f.email":"Correo","f.phone":"Teléfono / WhatsApp","f.type":"Tipo de evento","f.date":"Fecha preferida","f.flex":"Mis fechas son flexibles",
    "f.guests":"Invitados","f.estate":"Villa de interés","f.nights":"Noches requeridas","f.more":"Cuéntanos más",
    "f.moreph":"Ceremonia en la playa, cena para 120 bajo el pabellón…","f.send":"Enviar solicitud","f.sending":"Enviando…",
    "f.legal":"Al enviar esta solicitud aceptas que el equipo de eventos de Privée te contacte. Tus datos nunca se comparten fuera de Grace Hotel Collection.",
    "f.thanksT":"Gracias, {n}.","f.thanksP":"Tu director de eventos te responderá personalmente en 24 horas, en el idioma en que nos escribiste.",
    "e.req":"Complétalo para poder preparar tu propuesta.","e.email":"Revisa el correo: necesita una @ y un dominio.","e.date":"Elige una fecha o marca tus fechas como flexibles.",
    "o.type":["Boda","Celebración","Corporativo","Otro"],
    "o.guests":["1–25","26–50","51–100","101–150","Más de 150"],
    "o.estate":["Villa Paradiso","Villa Azure","La colección completa","Aún no lo decido"],
    "o.nights":["Solo el evento","1 noche","2 noches","3+ noches"],
    "tour.eye":"O conócela en persona","tour.title":"Agenda una visita privada.",
    "tour.p":"Treinta minutos de atención personalizada, presencial o por videollamada, con su director de eventos.",
    "tour.cta":"Reservar horario","tour.pick":"Elige un día primero.",
    "tour.note":"Visita elegida: {d}, a las {t} — completa tus datos en el formulario y te la confirmamos.",
    "tr.1":"Respuesta personal","tr.2":"Director dedicado","tr.3b":"7 días","tr.3":"Fecha retenida",
    "wa.pre":"¿Prefieres escribir?","wa.link":"Escríbele al equipo por WhatsApp",
    "loc.eye":"La dirección","loc.p":"Un tramo residencial de arena entre Condado e Isla Verde — bordeado de palmas, sin prisa, a quince minutos del aeropuerto. El Viejo San Juan queda veinte minutos al oeste.",
    "loc.1":"Aeropuerto Internacional Luis Muñoz Marín (SJU)","loc.2":"Viejo San Juan","loc.3":"Laguna del Condado","loc.5":"Playa de Ocean Park","loc.5b":"A pasos",
    "ft.est":"Las villas","ft.stay":"Hospédate con nosotros","ft.occ":"Ocasiones","ft.contact":"Contacto","ft.legal":"Privacidad · Términos · Accesibilidad","ft.email":"events@gracecollectionpr.com","ft.phone":"+1 (954) 900-1988","ft.whatsapp":"WhatsApp Concierge de Eventos",
    "locale":"es-PR","dw":["L","M","M","J","V","S","D"]
   }
  };

  /* Copy v5 · categorías oficiales y textos más cortos */
  Object.assign(T.en,{
    "occ.title":"Four ways to close the gates.","occ.sub":"Every celebration starts from a blank page.",
    "occ.1.t":"Corporate","occ.1.p":"Launches, incentive nights and brand activations, with the discretion of a private residence.","occ.1.cta":"Plan a corporate event",
    "occ.2.t":"Destination Weddings","occ.2.p":"Ceremony on the sand, dinner beneath the pavilion, and a house that sleeps your closest guests.","occ.2.cta":"Plan your wedding",
    "occ.3.t":"Retreats","occ.3.p":"Several days, one gate: leadership offsites, wellness weekends and creative retreats by the sea.","occ.3.cta":"Plan a retreat",
    "occ.4.t":"Birthdays","occ.4.p":"Long tables, low light and the sound of the Atlantic behind the music.","occ.4.cta":"Plan a birthday",
    "est.sub2":"Reserve one, or take the whole collection.","est.p.spec":"9 suites · Private beach access","est.a.spec":"7 suites · Pool and gardens","est.o.spec":"Suites and event terrace",
    "svc.sub2":"You will have an exclusive Concierge focused on estate care and ensuring every space aligns seamlessly with your event's vision.",
    "pr.1.p2":"Share your date and guest count. We reply within 24 hours.","pr.2.p2":"Walk the estates with your event director. We hold your date.",
    "pr.3.p2":"Floor plans, vendors, menus and the run-of-show.","pr.4.p2":"The gates close. The only thing left is to be present.",
    "inq.title":"Tell us about the occasion.","inq.sub2":"Share the essentials. Your event director replies within 24 hours.",
    "loc.p2":"Between Condado and Isla Verde, fifteen minutes from the airport.",
    "o.type":["Corporate","Destination wedding","Retreat","Birthday","Other"]
  });
  Object.assign(T.es,{
    "occ.title":"Cuatro formas de hacer las villas en tu propio escenario","occ.sub":"Cada celebración comienza desde cero, tomando forma a través de tus ideas, tu estilo y los momentos que deseas memorar.",
    "occ.1.t":"Corporativos","occ.1.p":"Lanzamientos de marca, activaciones y<br>corporate retreats.","occ.1.cta":"Planear un evento corporativo",
    "occ.2.t":"Bodas de destino","occ.2.p":"Ceremonia y welcome party.","occ.2.cta":"Planear tu boda",
    "occ.3.t":"Encuentros privados","occ.3.p":"Cenas de autor y estadías en grupo.","occ.3.cta":"Planear un encuentro privado",
    "occ.4.t":"Cumpleaños","occ.4.p":"Mesas largas, luz baja y el sonido del Atlántico detrás de la música.","occ.4.cta":"Planear un cumpleaños",
    "est.sub2":"Reserva una villa, o vive la colección completa.","est.p.spec":"9 suites · Acceso privado a la playa","est.a.spec":"7 suites · Piscina y jardines","est.o.spec":"Suites y terraza de eventos",
    "svc.title":"UN CONCIERGE DEDICADO PARA REALIZAR TU EXPERIENCIA TOTALMENTE PERSONALIZADA",
    "svc.sub2":"Contarás con un Concierge exclusivo enfocado en la atención de la propiedad y en asegurar que cada espacio responda exactamente a la visión de tu evento.",
    "pr.1.p2":"Comparta con nosotros la visión de su evento, detallando la fecha estimada, el estilo deseado y el número de invitados.","pr.2.p2":"Recorra la villa en compañía de su director de eventos personal y asegure en exclusiva la fecha de su preferencia.",
    "pr.3.p2":"Orquestamos cada detalle: distribución de espacios, selección de proveedores, propuesta gastronómica y el cronograma minuto a minuto.","pr.4.p2":"Las puertas se cierran al mundo exterior. Su única responsabilidad será disfrutar y estar presente.",
    "inq.title":"El primer paso de una gran historia.","inq.sub2":"Compártenos lo esencial de su evento y lo que imagina para ese día.",
    "loc.p2":"Entre Condado e Isla Verde, a quince minutos del aeropuerto.",
    "o.type":["Corporativo","Boda de destino","Encuentros privados","Cumpleaños","Otro"]
  });
  Object.assign(T.en,{"nav.spaces":"Suites","su.eye":"The Suites","su.title":"Sixteen suites behind one gate.","su.sub":"Your guests sleep where they celebrate.",
    "su.1.t":"Oceanfront suites","su.1.p":"Nine suites, all with private baths, a few steps from the sand.",
    "su.2.t":"Ocean-view suites","su.2.p":"Seven suites with private baths, surrounded by pool and gardens.",
    "su.3.p":"Hotel suites and an event terrace, now under construction.",
    "svc.vend":"Our villas are designed to host distinctive celebrations in complete privacy. We gladly welcome your chosen Event Planner or production team and, upon request, provide access to our trusted network of local partners."});
  Object.assign(T.es,{"nav.spaces":"Suites","su.eye":"Las suites","su.title":"17 suites en una sola colección.","su.sub":"Un concepto diseñado para vivir cada instante sin salir del escenario: celebración y descanso bajo una misma experiencia privada.",
    "su.1.t":"Suites frente al mar","su.1.p":"Nueve suites, todas con baño privado, a pasos de la arena.",
    "su.2.t":"Suites con vista al mar","su.2.p":"Siete suites con baño privado, rodeadas de piscina y jardines.",
    "su.3.p":"Suites de hotel y terraza de eventos, hoy en construcción.",
    "svc.vend":"Diseñamos nuestras villas para celebraciones únicas con total privacidad. Recibimos con gusto al Event Planner o equipo de producción de tu elección y, si lo requieres, ponemos a tu disposición nuestra red de aliados locales de confianza."});
  var TYPE_KEYS = ["corporate", "wedding", "retreat", "birthday", "other"],
      ESTATE_KEYS = ["paradiso", "azure", "suites", "collection", "undecided"];

  var $ = function(q, r) { return (r || document).querySelector(q); };
  var $$ = function(q, r) { return [].slice.call((r || document).querySelectorAll(q)); };

  function fillSelect(sel, key) {
    var cur = sel.selectedIndex;
    sel.innerHTML = "";
    if (T[lang] && T[lang]["o." + key]) {
      T[lang]["o." + key].forEach(function(t, i) {
        var o = document.createElement("option");
        o.textContent = t;
        o.value = i;
        sel.appendChild(o);
      });
      if (cur >= 0) sel.selectedIndex = cur;
    }
  }

  /* Idioma y persistencia */
  var lang = "en";
  try {
    var saved = localStorage.getItem("lang") || localStorage.getItem("privee_lang");
    if (saved === "es" || saved === "en") {
      lang = saved;
    } else if (navigator.language && navigator.language.slice(0, 2).toLowerCase() === "es") {
      lang = "es";
    }
  } catch (e) {}

  function apply() {
    var d = T[lang];
    document.documentElement.lang = lang;

    $$("[data-t]").forEach(function(el) {
      var k = el.getAttribute("data-t");
      if (d && d[k] != null) el.innerHTML = d[k];
    });

    $$("[data-tp]").forEach(function(el) {
      var k = el.getAttribute("data-tp");
      if (d && d[k] != null) el.placeholder = d[k];
    });

    $$("select[data-opts]").forEach(function(s) {
      fillSelect(s, s.getAttribute("data-opts"));
    });

    $$("[data-lang]").forEach(function(b) {
      var isActive = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", isActive);
      b.classList.toggle("active", isActive);
    });

    var mt = $("#mtrack");
    if (mt && d && d.marquee) {
      var unit = '<span>' + d.marquee + '</span><img src="./assets/images/sun.webp" alt="" aria-hidden="true">';
      mt.innerHTML = unit + unit + unit + unit;
    }

    var scap = $("#scap");
    if (scap && d && d.caps && typeof idx !== "undefined" && d.caps[idx]) {
      scap.textContent = d.caps[idx];
    }

    if (typeof buildCal === "function" && $("#calgrid")) {
      buildCal();
      if (typeof selDay !== "undefined" && selDay && typeof renderTimes === "function") renderTimes();
      if (typeof tourSel !== "undefined" && tourSel && $("#tournote")) $("#tournote").textContent = noteText();
    }
  }

  // Event listeners de idioma globales
  $$("[data-lang]").forEach(function(b) {
    b.addEventListener("click", function() {
      lang = b.getAttribute("data-lang");
      try {
        localStorage.setItem("lang", lang);
        localStorage.setItem("privee_lang", lang);
      } catch (e) {}
      apply();
    });
  });

  /* Slider del hero */
  var slider = $("#slider");
  var idx = 0;
  if (slider) {
    var slides = $$("#slider img");
    function go(n) {
      slides[idx].classList.remove("on");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("on");
      var sc = $("#scount"); if (sc) sc.textContent = (idx + 1) + " / " + slides.length;
      var sp = $("#scap"); if (sp && T[lang].caps) sp.textContent = T[lang].caps[idx];
    }
    var prevBtn = $("#sprev"), nextBtn = $("#snext");
    if (prevBtn) prevBtn.addEventListener("click", function() { go(idx - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function() { go(idx + 1); });
  }

  /* Barra fija y botón de subir */
  var top = $("#topbar"), totop = $("#totop"), ring = $("#ringp"), C = 153.9, mast = $(".masthead");
  if (top && mast) {
    function onScroll() {
      var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
      var show = y > mast.offsetHeight - 80;
      top.classList.toggle("show", show);
      top.setAttribute("aria-hidden", !show);
      $$("a,button", top).forEach(function(el) { el.tabIndex = show ? 0 : -1; });
      if (totop) totop.classList.toggle("show", y > 600);
      if (ring) ring.style.strokeDashoffset = C - (h > 0 ? y / h : 0) * C;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  if (totop) {
    totop.addEventListener("click", function() { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* Menú móvil */
  var ov = $("#overlay");
  if (ov) {
    $$("[data-open-menu]").forEach(function(b) {
      b.addEventListener("click", function() {
        ov.classList.add("open");
        var closeBtn = $(".close", ov);
        if (closeBtn) closeBtn.focus();
        document.body.style.overflow = "hidden";
      });
    });
    $$("[data-close-menu]").forEach(function(b) {
      b.addEventListener("click", function() {
        ov.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && ov.classList.contains("open")) {
        ov.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  /* Acordeón de espacios */
  var accWrap = $("#acc");
  if (accWrap) {
    var items = $$("#acc .acc-item");
    function openAcc(it) {
      items.forEach(function(x) {
        var on = x === it;
        x.classList.toggle("on", on);
        x.setAttribute("aria-expanded", on);
      });
    }
    items.forEach(function(it) {
      it.addEventListener("click", function(e) {
        var link = e.target.closest("a");
        if (link && it.classList.contains("on")) {
          return;
        }
        if (!it.classList.contains("on")) {
          if (link) e.preventDefault();
          openAcc(it);
        }
      });
      it.addEventListener("mouseenter", function() {
        if (window.matchMedia("(hover:hover) and (min-width:861px)").matches) openAcc(it);
      });
      it.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
          if (!it.classList.contains("on")) {
            e.preventDefault();
            openAcc(it);
          }
        }
      });
    });
  }

  /* Preseleccionar tipo de evento o villa y bajar al formulario */
  function toForm() {
    var inq = $("#inquire");
    if (inq) {
      inq.scrollIntoView({ behavior: "smooth" });
      setTimeout(function() {
        var fn = $("#fname");
        if (fn) fn.focus({ preventScroll: true });
      }, 700);
    }
  }
  $$("[data-pick-type]").forEach(function(b) {
    b.addEventListener("click", function() {
      var ft = $("#ftype");
      if (ft) ft.selectedIndex = TYPE_KEYS.indexOf(b.getAttribute("data-pick-type"));
      toForm();
    });
  });
  $$("[data-pick-estate]").forEach(function(b) {
    b.addEventListener("click", function() {
      var fe = $("#festate");
      if (fe) fe.selectedIndex = ESTATE_KEYS.indexOf(b.getAttribute("data-pick-estate"));
      toForm();
    });
  });

  /* WhatsApp */
  $$("[data-wa]").forEach(function(a) {
    if (WHATSAPP) {
      a.href = "https://wa.me/" + WHATSAPP.replace(/\D/g, "");
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.href = $("#inquire") ? "#inquire" : "index.html#inquire";
    }
  });

  /* Calendario de visitas */
  var selDay = null, tourSel = null;
  var calGrid = $("#calgrid");
  if (calGrid) {
    function buildCal() {
      var d = T[lang], g = $("#calgrid"), today = new Date(); today.setHours(0,0,0,0);
      var start = new Date(today); start.setDate(today.getDate() + 2);
      var end = new Date(today); end.setDate(today.getDate() + 21);
      var first = new Date(start); var wd = (first.getDay() + 6) % 7; first.setDate(first.getDate() - wd);
      var fm = new Intl.DateTimeFormat(d.locale, { month: "long" }), fy = start.getFullYear();
      var m1 = fm.format(start), m2 = fm.format(end);
      var cmh = $("#calmh");
      if (cmh) cmh.textContent = (m1 === m2 ? m1 : m1 + " – " + m2) + " " + fy;
      g.innerHTML = d.dw.map(function(x) { return '<span class="dw">' + x + '</span>'; }).join("");
      for (var c = new Date(first); c <= end || (c.getDay() + 6) % 7 !== 0; c.setDate(c.getDate() + 1)) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = c.getDate();
        var ok = c >= start && c <= end && c.getDay() !== 0;
        if (ok) {
          b.className = "av";
          b.dataset.d = c.getFullYear() + "-" + String(c.getMonth() + 1).padStart(2, "0") + "-" + String(c.getDate()).padStart(2, "0");
          b.setAttribute("aria-label", new Intl.DateTimeFormat(d.locale, { weekday: "long", day: "numeric", month: "long" }).format(c));
          if (selDay === b.dataset.d) b.classList.add("sel");
          b.addEventListener("click", function() {
            selDay = this.dataset.d; tourSel = null;
            var tn = $("#tournote"); if (tn) tn.textContent = "";
            $$(".cal .av").forEach(function(x) { x.classList.toggle("sel", x.dataset.d === selDay); });
            renderTimes();
          });
        } else {
          b.disabled = true; b.tabIndex = -1;
        }
        g.appendChild(b);
        if (c > end && (c.getDay() + 6) % 7 === 6) break;
      }
    }
    var TIMES = ["10:00", "12:00", "15:00", "17:00"];
    function fmtTime(t) {
      var p = t.split(":"), dt = new Date(2000, 0, 1, +p[0], +p[1]);
      return new Intl.DateTimeFormat(T[lang].locale, { hour: "numeric", minute: "2-digit" }).format(dt);
    }
    function renderTimes() {
      var w = $("#times");
      if (!w) return;
      w.hidden = false; w.innerHTML = "";
      TIMES.forEach(function(t) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = fmtTime(t);
        b.setAttribute("aria-pressed", tourSel && tourSel.t === t);
        b.addEventListener("click", function() {
          tourSel = { d: selDay, t: t };
          $$("#times button").forEach(function(x) { x.setAttribute("aria-pressed", x === b); });
          var resBtn = $("#reserve"); if (resBtn) resBtn.disabled = false;
        });
        w.appendChild(b);
      });
      var resBtn = $("#reserve"); if (resBtn) resBtn.disabled = !tourSel;
    }
    function noteText() {
      var p = tourSel.d.split("-"), dt = new Date(+p[0], +p[1] - 1, +p[2]);
      var ds = new Intl.DateTimeFormat(T[lang].locale, { weekday: "long", day: "numeric", month: "long" }).format(dt);
      return T[lang]["tour.note"].replace("{d}", ds).replace("{t}", fmtTime(tourSel.t));
    }
    var resBtn = $("#reserve");
    if (resBtn) {
      resBtn.addEventListener("click", function() {
        if (!tourSel) return;
        var ft = $("#ftour"); if (ft) ft.value = tourSel.d + " " + tourSel.t;
        var tn = $("#tournote"); if (tn) tn.textContent = noteText();
        toForm();
      });
    }
  }

  /* Validación de formulario */
  var form = $("#form");
  if (form) {
    function setErr(input, msg) {
      if (!input) return;
      var f = input.closest(".f");
      if (f) {
        f.classList.toggle("bad", !!msg);
        var errSpan = $(".err", f);
        if (errSpan) errSpan.textContent = msg || "";
      }
    }
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      // Validación Honeypot
      if (form.company && form.company.value.trim() !== "") return;
      var d = T[lang], ok = true, firstBad = null;
      [["fname", "req"], ["femail", "email"], ["fphone", "req"]].forEach(function(p) {
        var el = $("#" + p[0]);
        if (!el) return;
        var v = el.value.trim(), m = "";
        if (!v) m = d["e.req"];
        else if (p[1] === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(v)) m = d["e.email"];
        setErr(el, m);
        if (m) { ok = false; firstBad = firstBad || el; }
      });
      var dt = $("#fdate");
      var dm = (dt && !dt.value && $("#fflex") && !$("#fflex").checked) ? d["e.date"] : "";
      if (dt) setErr(dt, dm);
      if (dm) { ok = false; firstBad = firstBad || dt; }
      if (!ok) { if (firstBad) firstBad.focus(); return; }

      var submitBtn = form.querySelector('button[type="submit"]');
      var origBtnText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = d["f.sending"] || (lang === "es" ? "Enviando…" : "Sending…");
      }

      var formData = new FormData(form);

      fetch("https://formspree.io/f/xeaonrpb", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      })
      .then(function(res) {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(function(data) {
        var modal = $("#successModal");
        if (modal) {
          modal.classList.add("active");
          modal.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
        } else {
          var name = $("#fname") ? $("#fname").value.trim().split(/\s+/)[0] : "";
          var thT = $("#thanksT"); if (thT) thT.textContent = d["f.thanksT"].replace("{n}", name);
          form.style.display = "none";
          var th = $("#thanks"); if (th) { th.style.display = "block"; th.focus(); }
        }
        form.reset();
        if (typeof fpInstance !== "undefined" && fpInstance) fpInstance.clear();
      })
      .catch(function(err) {
        alert(lang === "es" ? "Hubo un error al enviar el formulario. Por favor intenta de nuevo o contáctanos por WhatsApp." : "There was an error submitting the inquiry. Please try again or reach out via WhatsApp.");
      })
      .finally(function() {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = origBtnText;
        }
      });
    });

    $$("#form input").forEach(function(i) {
      i.addEventListener("input", function() {
        var f = i.closest(".f");
        if (f && f.classList.contains("bad")) setErr(i, "");
      });
    });

    var flx = $("#fflex");
    if (flx) {
      flx.addEventListener("change", function() {
        if (this.checked) setErr($("#fdate"), "");
      });
    }
  }

  /* Ocasiones: Cortina */
  var panels = $$(".panel");
  if (panels.length > 0 && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function(es) {
      es.forEach(function(e) {
        var l = e.target.querySelector(".layer");
        if (!l) return;
        if (e.intersectionRatio > 0.5) l.removeAttribute("inert");
        else l.setAttribute("inert", "");
      });
    }, { threshold: [0, 0.5, 1] });
    panels.forEach(function(p) {
      var l = p.querySelector(".layer");
      if (l) { l.setAttribute("inert", ""); io.observe(p); }
    });
  }

  /* Flatpickr */
  var fpInstance = null;
  function initDatePicker() {
    var dateInput = $("#fdate");
    if (dateInput && typeof flatpickr !== "undefined") {
      fpInstance = flatpickr(dateInput, {
        dateFormat: "Y-m-d",
        altInput: true,
        altFormat: "F j, Y",
        minDate: "today",
        disableMobile: "true"
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDatePicker);
  } else {
    initDatePicker();
  }

  /* Modal de éxito */
  var sModal = $("#successModal");
  if (sModal) {
    function closeModal() {
      sModal.classList.remove("active");
      sModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (form) form.reset();
    }
    var closeBtn = $("#successModalClose");
    var returnBtn = $("#successModalButton");
    var backdrop = $(".success-modal__backdrop", sModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (returnBtn) returnBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);
    window.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && sModal.classList.contains("active")) closeModal();
    });
  }

  /* Scroll Spy */
  var navLinks = $$(".topbar .top-nav a.nv, .split a.nv");
  var targetIds = [];
  navLinks.forEach(function(l){
    var href = l.getAttribute("href");
    if(href && href.charAt(0) === '#') {
      var id = href.substring(1);
      if(targetIds.indexOf(id) === -1) targetIds.push(id);
    }
  });
  if(targetIds.indexOf("inquire") === -1) targetIds.push("inquire"); var observerTargets = targetIds.map(function(id) { return document.getElementById(id); }).filter(Boolean);
  if ("IntersectionObserver" in window && observerTargets.length > 0) {
    var spyObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function(link) {
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px" });
    observerTargets.forEach(function(t) { spyObserver.observe(t); });
  }

  apply();
  /* ── Location slider ── */
  (function(){
    var slider = document.getElementById('locSlider');
    var slides = document.querySelectorAll('.loc-slide');
    if(!slider || !slides.length) return;
    var cur = 0;
    function show(n){
      slides[cur].classList.remove('loc-on');
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add('loc-on');
      /* Update counter labels in ALL slides */
      var counters = document.querySelectorAll('.loc-count-el');
      counters.forEach(function(el){ el.textContent = (cur+1) + ' / ' + slides.length; });
    }
    /* Event delegation: listen on the whole slider container */
    slider.addEventListener('click', function(e){
      var btn = e.target.closest('button[data-loc]');
      if(!btn) return;
      btn.getAttribute('data-loc') === 'prev' ? show(cur-1) : show(cur+1);
    });
  })();

})();