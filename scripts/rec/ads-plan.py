import re, sys
FORBID = re.compile(r"allstate|progressive|geico|state farm|nationwide|travelers|markel|foremost|dairyland|cheap|lowest|\bbest\b|guarantee|discount|\bsav(e|es|ing|ings)\b|\bprices?\b|\brates?\b|premium|afford|dealer|lender|\bloan|financ|descuento|ahorr|barat|garantiz|\bmejor|precio|tarifa|\bprimas?\b|\$|polaris|yamaha|sea-doo|can-am|club car|honda|kawasaki|harley|slingshot®", re.I)
SITE = "https://mkagencyinc.com"
COMMON_H = ["5,000+ Florida Clients", "Licensed Florida Agency", "EN / ES / RU Agents", "1-Hour Callback (Bus. Hours)", "Send Us Your Policy", "We'll Check Your Coverage"]
COMMON_D_TAIL = "Licensed FL agency #L109526."
L = {
 "motorcycle": dict(name="Motorcycle", path="/en/motorcycle-insurance-florida-city",
   kw=["motorcycle insurance florida","motorcycle insurance florida city","motorcycle insurance homestead fl","motorcycle insurance miami","motorcycle insurance quote florida","florida motorcycle insurance requirements","motorcycle insurance near me","scooter insurance florida","moped insurance florida","motorcycle liability insurance florida","florida motorcycle helmet insurance","motorcycle insurance south dade"],
   neg=["cheap","free","dmv","license test","endorsement course","jobs","salary","rental","dealer","for sale","harley","yamaha","honda","kawasaki"],
   h=["Motorcycle Insurance Florida","Florida Motorcycle Coverage","Riding in Florida? Get Covered","Motorcycle Quote, Florida City","Helmet Law & Medical Coverage","Coverage for Your Bike","Talk to a Local Agent","Florida City Motorcycle Agent","Ask About Scooters & Mopeds"],
   d=["Florida rules for riders, in plain words. Ask a local agent about your bike's coverage.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","No helmet in Florida? Read what the law asks and talk to us about medical coverage.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("Helmet Law Guide","/en/blog/florida-motorcycle-helmet-law-medical-coverage"),("Autocycle & Slingshot","/en/slingshot-autocycle-insurance-florida")]),
 "jet-ski": dict(name="Jet Ski / PWC", path="/en/jet-ski-insurance-florida",
   kw=["jet ski insurance florida","jet ski insurance","pwc insurance florida","personal watercraft insurance","waverunner insurance florida","jet ski insurance miami","jet ski insurance keys","jet ski liability insurance","jet ski insurance quote","insurance for jet ski owners","jet ski guest driver insurance"],
   neg=["rental","rent","tour","jet ski rentals near me","cheap","free","for sale","dealer","jobs","boating license test","sea-doo","yamaha","kawasaki","repair"],
   h=["Jet Ski Insurance Florida","PWC Coverage in Florida","Coverage for Your Jet Ski","Lending Your Jet Ski?","Florida PWC Rules, Explained","Talk to a Local Agent","Florida City Jet Ski Agent","Liability for Watercraft","Ask About Guest Drivers"],
   d=["Florida PWC rules in plain words, plus coverage to ask about. Talk to a local agent.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","Who may drive your jet ski, and what if a guest has an accident? Ask a licensed agent.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("Guest Driver Guide","/en/blog/jet-ski-rental-guest-drivers-florida"),("Boat Insurance","/en/boat-insurance-florida")]),
 "boat": dict(name="Boat", path="/en/boat-insurance-florida",
   kw=["boat insurance florida","boat insurance","boat insurance miami","boat insurance florida keys","boat insurance homestead","boat liability insurance florida","boat hurricane coverage florida","marina insurance requirement boat","boat insurance quote florida","watercraft insurance florida","pontoon boat insurance","fishing boat insurance florida","boat insurance near me"],
   neg=["boat rental","charter","cheap","free","for sale","boat loan","dealer","jobs","captain license","boater safety course","boatus","sea tow","marina jobs","yacht broker"],
   h=["Boat Insurance Florida","Florida Boat Coverage","Hurricane Plan for Your Boat","Marina Asking for Coverage?","Liability on the Water","Talk to a Local Agent","Florida City Boat Agent","Coverage for Your Boat","Storm Season Boat Check"],
   d=["Hurricane season runs June 1 to Nov 30. Review your boat's coverage with a local agent.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","Liability, physical damage and more. Availability depends on the policy. Ask us.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("Boat Hurricane Plan","/en/blog/hurricane-plan-for-your-boat-florida"),("Jet Ski Insurance","/en/jet-ski-insurance-florida")]),
 "off-road": dict(name="Off-road (ATV/UTV/dirt bike)", path="/en/atv-utv-insurance-florida",
   kw=["atv insurance florida","utv insurance florida","side by side insurance florida","dirt bike insurance florida","atv insurance","utv insurance","off road vehicle insurance florida","ohv insurance florida","atv liability insurance","dirt bike insurance","four wheeler insurance florida","atv insurance quote","side by side insurance"],
   neg=["rental","tour","trail park tickets","cheap","free","for sale","dealer","parts","repair","jobs","title transfer form","dmv","polaris","can-am","honda","kawasaki","yamaha"],
   h=["ATV Insurance Florida","UTV & Side-by-Side Coverage","Dirt Bike Insurance Florida","Florida ORV Rules, Explained","Kids on ATVs? Know the Law","ATV on Public Roads?","Talk to a Local Agent","Off-Road Coverage, Florida","Florida City ATV Agent"],
   d=["Titles, helmets for riders under 16, public roads: Florida ORV rules in plain words.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","Liability, medical payments and physical damage. Availability depends on the policy.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("ATV/UTV Road Rules","/en/blog/atv-utv-public-roads-florida"),("Golf Cart Insurance","/en/golf-cart-insurance-florida")]),
 "golf-cart": dict(name="Golf cart / LSV", path="/en/golf-cart-insurance-florida",
   kw=["golf cart insurance florida","golf cart insurance","lsv insurance florida","low speed vehicle insurance","golf cart liability insurance","street legal golf cart insurance","golf cart insurance near me","golf cart insurance quote","neighborhood golf cart insurance","golf cart insurance homestead"],
   neg=["golf cart rental","cheap","free","for sale","dealer","batteries","parts","repair","golf course","jobs","club car","ez-go","yamaha"],
   h=["Golf Cart Insurance Florida","LSV Coverage in Florida","Golf Cart on Your Street?","Golf Cart or LSV? Know Why","Teen Drivers & Golf Carts","Talk to a Local Agent","Florida City Golf Cart Agent","Coverage for Your Cart","Golf Cart Rules, Explained"],
   d=["Where golf carts may go, who may drive, and when one becomes an LSV under Florida law.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","Liability, medical payments and physical damage. Availability depends on the policy.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("Golf Cart Road Rules","/en/blog/golf-cart-rules-florida-public-roads"),("ATV & UTV Insurance","/en/atv-utv-insurance-florida")]),
 "autocycle": dict(name="Slingshot / autocycle", path="/en/slingshot-autocycle-insurance-florida",
   kw=["slingshot insurance florida","autocycle insurance florida","slingshot insurance","autocycle insurance","three wheel motorcycle insurance","trike insurance florida","3 wheeler insurance florida","reverse trike insurance","slingshot insurance quote","autocycle license florida insurance"],
   neg=["rental","rent","tour","cheap","free","for sale","dealer","parts","jobs","slingshot toy","slingshot ammo","polaris","can-am","dmv"],
   h=["Slingshot Insurance Florida","Autocycle Coverage, Florida","3-Wheeler Insurance Florida","Do You Need an Endorsement?","Florida Autocycle Rules","Talk to a Local Agent","Florida City Autocycle Agent","Trike & Autocycle Coverage","Coverage for Your Slingshot"],
   d=["Florida autocycle rules in plain words: license, helmet and what to ask about coverage.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","Liability, medical payments and physical damage. Availability depends on the policy.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("Autocycle License Rules","/en/blog/autocycle-motorcycle-endorsement-florida"),("Motorcycle Insurance","/en/motorcycle-insurance-florida-city")]),
 "life": dict(name="Life", path="/en/life-insurance-florida",
   kw=["life insurance florida","life insurance","term life insurance florida","life insurance miami","life insurance homestead","life insurance florida city","life insurance for parents","life insurance agent near me","how much life insurance do i need","whole life insurance florida","life insurance quote florida","family life insurance florida"],
   neg=["jobs","career","agent license","exam","free","cheap","lawsuit","claim denied","annuity calculator","pet","car insurance","health insurance only"],
   h=["Life Insurance Florida","Protect Your Family's Income","How Much Coverage Do You Need?","Term or Whole Life? Ask Us","Talk to a Local Agent","Florida City Life Agent","Life Coverage Through Work?","Free Coverage Worksheet","Life Insurance for Parents"],
   d=["Estimate how much life insurance your family needs with our income-replacement calculator.","Send us your policy and we'll check your coverage. Agents speak English, Spanish, Russian.","Coverage through work may end when you leave the job. Review it with a licensed agent.","5,000+ clients across Florida. An agent calls back within 1 hour in business hours."],
   sl=[("Coverage Worksheet","/en/blog/life-insurance-income-replacement-florida"),("Life Insurance Basics","/en/protect/life-insurance")]),
}
ES = {
 "motorcycle": dict(path="/es/motorcycle-insurance-florida-city",
   kw=["seguro de motocicleta florida","seguro de moto florida","seguro para moto miami","seguro de moto homestead","seguro de scooter florida","seguro de motoneta florida","aseguranza de moto florida","seguro de moto cerca de mi"],
   neg=["barato","gratis","examen","licencia de manejo","empleo","renta","venta","concesionario"],
   h=["Seguro de Moto en Florida","Cobertura para su Moto","Agentes que Hablan Español","Envíenos su Póliza","Revisamos su Cobertura","Ley de Casco y Cobertura","Agencia en Florida City","Más de 5,000 Clientes","Agencia con Licencia en FL","Llamada en 1 Hora Hábil","Scooters y Motonetas También","Hable con un Agente Local","¿Maneja Moto en Florida?","Cobertura Médica y Casco","Su Agente en Florida City"],
   d=["Las reglas de Florida para motociclistas, en palabras simples. Hable con un agente local.","Envíenos su póliza y revisamos su cobertura. Le atendemos en español, inglés y ruso.","¿Sin casco en Florida? Lea lo que pide la ley y pregúntenos por la cobertura médica.","Más de 5,000 clientes en Florida. Un agente le llama en 1 hora en horario de oficina."],
   sl=[("Guía: Ley del Casco","/es/blog/florida-motorcycle-helmet-law-medical-coverage"),("Seguro de Autociclo","/es/slingshot-autocycle-insurance-florida")]),
 "boat": dict(path="/es/boat-insurance-florida",
   kw=["seguro de bote florida","seguro de bote","seguro para bote miami","seguro de lancha florida","seguro de embarcación florida","seguro de bote cayos de florida","aseguranza de bote","seguro de bote huracán"],
   neg=["barato","gratis","renta de botes","alquiler","venta","préstamo","empleo","curso de navegación"],
   h=["Seguro de Bote en Florida","Cobertura para su Bote","Plan de Huracán para su Bote","¿La Marina Pide Seguro?","Responsabilidad en el Agua","Agentes que Hablan Español","Envíenos su Póliza","Revisamos su Cobertura","Agencia en Florida City","Más de 5,000 Clientes","Agencia con Licencia en FL","Llamada en 1 Hora Hábil","Hable con un Agente Local","Seguro de Lancha en Florida","Su Agente en Florida City"],
   d=["La temporada de huracanes va del 1 de junio al 30 de nov. Revise la cobertura de su bote.","Envíenos su póliza y revisamos su cobertura. Le atendemos en español, inglés y ruso.","Responsabilidad, daños físicos y más. La disponibilidad depende de la póliza.","Más de 5,000 clientes en Florida. Un agente le llama en 1 hora en horario de oficina."],
   sl=[("Plan de Huracán","/es/blog/hurricane-plan-for-your-boat-florida"),("Seguro de Jet Ski","/es/jet-ski-insurance-florida")]),
 "life": dict(path="/es/life-insurance-florida",
   kw=["seguro de vida florida","seguro de vida","seguro de vida miami","seguro de vida homestead","seguro de vida a término","seguro de vida para padres","cuánto seguro de vida necesito","aseguranza de vida florida","agente de seguro de vida cerca de mi"],
   neg=["empleo","trabajo de agente","licencia de agente","examen","gratis","barato","seguro de carro","seguro médico"],
   h=["Seguro de Vida en Florida","Proteja el Ingreso Familiar","¿Cuánta Cobertura Necesita?","¿A Término o Permanente?","Agentes que Hablan Español","Envíenos su Póliza","Revisamos su Cobertura","Agencia en Florida City","Más de 5,000 Clientes","Agencia con Licencia en FL","Llamada en 1 Hora Hábil","Hable con un Agente Local","¿Seguro de Vida del Trabajo?","Calcule su Cobertura","Su Agente en Florida City"],
   d=["Calcule cuánto seguro de vida necesita su familia con nuestra calculadora de ingresos.","Envíenos su póliza y revisamos su cobertura. Le atendemos en español, inglés y ruso.","El seguro del trabajo puede terminar si deja el empleo. Revíselo con un agente licenciado.","Más de 5,000 clientes en Florida. Un agente le llama en 1 hora en horario de oficina."],
   sl=[("Hoja de Cálculo","/es/blog/life-insurance-income-replacement-florida"),("Seguro de Vida: Básicos","/es/protect/life-insurance")]),
}
SEASON = {
 "motorcycle": "Florida rides all year; winter is riding season for snowbirds and visitors. Daytona Bike Week (early-mid March) and Biketoberfest (October) lift search interest statewide. Keep the budget share steady; +10–15% in Feb–Mar and Oct.",
 "jet-ski": "Peak March–September (spring break, summer, holiday weekends). May (National Safe Boating Week) is flagged in the brief as the peak month for boating accidents; check the latest FWC accident report before using that in copy. Hurricane season (June 1–Nov 30) brings storm-prep searches. Reduce Nov–Jan.",
 "boat": "Peak spring–summer; buy/registration season March–June. Hurricane season June 1–Nov 30: run the hurricane-plan sitelink and copy from May to October. Reduce Dec–Jan except Keys/Miami where boating is year-round.",
 "off-road": "Florida riding is busiest in the cooler months (Oct–Apr); summer heat and rain cut riding. Holiday gift season (Nov–Dec) brings new ATV/dirt bike buyers. Keep modest year-round.",
 "golf-cart": "Steady all year, strongest in retirement and planned communities (The Villages, Sun City Center, Port St. Lucie) and in snowbird season (Nov–Apr). Holiday gift season also brings new carts.",
 "autocycle": "Small, steady niche; follows motorcycle seasonality (Bike Week in March, Biketoberfest in October). Keep on a tight cap.",
 "life": "Year-round. Lifts in January (new-year planning) and September (Life Insurance Awareness Month). Life events (marriage, new baby, home purchase) drive intent more than season.",
}
def chk(t, lim, where):
    n=len(t)
    if n>lim: sys.exit(f"TOO LONG ({n}>{lim}) {where}: {t}")
    if FORBID.search(t): sys.exit(f"FORBIDDEN {where}: {t}")
    return n
out=[]
w=out.append
w("# Google Ads plan — Florida recreational + life lines\n")
w("_Prepared 2026-10-03 for M&K Agency Inc. Plan only: **no changes were made to the Google Ads account.**_\n")
w("## Structure and budget\n")
w("- Add **7 new ad groups** (+3 Spanish ad groups) inside the existing campaign **“MK Agency — Auto + Home — Florida City”**. Do not create a new campaign.")
w("- **Budget stays at $45/day** for the whole campaign. The new ad groups share it; no budget increase is proposed.")
w("- Ad groups in one campaign share the daily budget, so watch Auto + Home impression share in the first 30 days. If it drops, pause the lowest-volume new groups (autocycle, golf cart) first.")
w("- Match types: **phrase** and **exact** only. No broad match.")
w("- Location: same targeting as the campaign (Florida City / South Dade / Miami-Dade radius). Golf cart demand is strongest in retirement communities outside this area; with the current geography, keep golf cart on a tight scope.")
w("- Languages: EN ad groups target English; ES ad groups target Spanish. The pages already have ES and RU versions; Russian search volume is too low for a separate RU ad group, so RU speakers reach the RU pages through the language switcher.")
w("- Lead source: each landing page already tags form leads `rec-<line>` (`rec-motorcycle`, `rec-jet-ski`, `rec-boat`, `rec-off-road`, `rec-golf-cart`, `rec-autocycle`, `rec-life`). Add `?utm_source=google&utm_medium=cpc&utm_campaign=rec-<line>` as a final URL suffix at ad-group level to tell paid from organic leads.")
w("- **Phone:** Google Ads policy does not allow phone numbers in headlines or descriptions. Use the campaign’s **call asset** with (305) 859-3953 instead.")
w("- Content rules applied to every ad: no carrier names, no prices, rates or discounts, no “cheap / best / lowest / guaranteed”, no dealers, lenders or finance companies. Character counts below were computed by `scripts/rec/ads-plan.py`, which also fails on any banned word. Limits: headline ≤ 30, description ≤ 90.\n")
w("### Campaign-level negative keywords (add once, apply to all new ad groups)\n")
w("`cheap`, `cheapest`, `free`, `jobs`, `job`, `career`, `salary`, `hiring`, `course`, `exam`, `test`, `dmv`, `form`, `pdf`, `rental`, `rent`, `for sale`, `used`, `dealer`, `loan`, `financing`, `repair`, `parts`, `reddit`, `lawyer`, `attorney`, `barato`, `gratis`, `empleo`\n")
def block(key, name, path, kw, neg, H, D, sl, lang="EN"):
    w(f"## {name} — {lang} ad group `REC {lang} — {name}`\n")
    w(f"**Final URL:** {SITE}{path}\n")
    w("**Keywords** (phrase and exact):\n")
    for k in kw: w(f"- \"{k}\" · [{k}]")
    w("\n**Ad-group negatives:** " + ", ".join(f"`{n}`" for n in neg) + "\n")
    assert len(H)==15, (key, lang, len(H)); assert len(D)==4
    assert len(set(H))==15, (key,lang)
    w("**RSA — 15 headlines**\n\n| # | Headline | Chars |\n|---|---|---|")
    for i,h in enumerate(H,1): w(f"| {i} | {h} | {chk(h,30,key+' H')} |")
    w("\n**RSA — 4 descriptions**\n\n| # | Description | Chars |\n|---|---|---|")
    for i,d in enumerate(D,1): w(f"| {i} | {d} | {chk(d,90,key+' D')} |")
    w("\nPin headline 1 to position 1. Leave the rest unpinned.\n")
    w("**Sitelinks**\n\n| Text | Chars | URL |\n|---|---|---|")
    for t,u in sl: w(f"| {t} | {chk(t,25,key+' SL')} | {SITE}{u} |")
    w("")
for k,v in L.items():
    H = v["h"] + COMMON_H
    block(k, v["name"], v["path"], v["kw"], v["neg"], H, v["d"], v["sl"])
    w(f"**Seasonality:** {SEASON[k]}\n")
    if k in ES:
        e=ES[k]; block(k, v["name"], e["path"], e["kw"], e["neg"], e["h"], e["d"], e["sl"], lang="ES")
w("## Rollout checklist (for whoever makes the account changes)\n")
w("1. Create the 10 ad groups paused, paste keywords, negatives, RSAs and sitelinks.")
w("2. Confirm each final URL returns 200 and shows the right language.")
w("3. Confirm the call asset and the existing conversion actions (form submit, call) apply to the new ad groups.")
w("4. Enable motorcycle, boat, jet ski, life (EN + ES) first; enable off-road, golf cart and autocycle after a week if the campaign is not limited by budget.")
w("5. After 2–3 weeks: add converting search terms as exact keywords and add irrelevant ones as negatives.")
w("6. Keep the campaign at $45/day unless the account owner decides otherwise.\n")
w("## Notes\n")
w("- Seasonality statements are planning guidance, not page claims. Hurricane season dates (June 1–November 30) are the official Atlantic season. The May boating-accident note comes from the task brief and should be re-checked against the latest FWC boating accident statistics before it is used in any ad copy (it is not used in the ads above).")
w("- Brand names (Polaris, Yamaha, Sea-Doo, Can-Am, Club Car, Honda, Kawasaki, Harley) are negatives where they bring parts/dealer traffic. If search terms show owners searching \"<brand> insurance\", they can be reviewed later; ads must still not name an insurer.")
open("/workspace/rec-build/ads-plan.md","w").write("\n".join(out)+"\n")
print("ads-plan.md written", sum(1 for l in out if l.startswith("| ")))
