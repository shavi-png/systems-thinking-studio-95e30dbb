import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, FileText, Maximize2, Plus, Presentation } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { offer3, stages, assistants3, benefits, situations, opportunities, faq3 } from "@/components/marketing-set-3/content";
import portrait from "@/assets/ms3/vita-portrait.png.asset.json";
import audienceEditorial from "@/assets/ms3/audience-editorial.jpg";
import { Button } from "@/components/ui/button";
import nautilus from "@/assets/ms3/nautilus-soft-ivory.jpg";
import oliveCover from "@/assets/ms3/olive-cover.jpg";

const title = "Маркетинг-сет — маркетингова стратегія та Action-навігатор за 39 € | Vita Shablii";
const description = "AI-платформа для підприємців, експертів і маркетологів: індивідуальна маркетингова стратегія, готові PDF і Action-навігатор, який допоможе перейти до реалізації.";
export const Route = createFileRoute("/marketing-set-3")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: MarketingSetThree,
});

/* Line icons in the spirit of the prototype: nautilus spiral and scallop fan. */
function Spiral({ className = "" }: { className?: string }) {
  const p: string[] = [];
  for (let t = 0; t <= 5.6 * Math.PI; t += 0.08) { const r = 0.9 * Math.exp(0.1784 * t); p.push(`${(24 + r * Math.cos(t)).toFixed(2)} ${(24 + r * Math.sin(t)).toFixed(2)}`); }
  return <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden><path d={`M${p.join(" L")}`} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
}
function Fan({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <path d="M6 30 A18 18 0 0 1 42 30 Z" />{[-60, -36, -12, 12, 36, 60].map((a) => { const r = (a * Math.PI) / 180; return <line key={a} x1="24" y1="30" x2={(24 + 17 * Math.sin(r)).toFixed(1)} y2={(30 - 17 * Math.cos(r)).toFixed(1)} />; })}<path d="M20 30 L20 36 L28 36 L28 30" />
  </svg>;
}
const icons = [Fan, Spiral, Fan, Spiral];

function DocModal({ pages, label, open, onOpenChange }: { pages: string[]; label: string; open: boolean; onOpenChange: (v: boolean) => void }) {
  const [i, setI] = useState(0);
  return <Dialog open={open} onOpenChange={(v) => { if (v) setI(0); onOpenChange(v); }}>
    <DialogContent className="ms3p max-h-[94dvh] max-w-3xl overflow-y-auto bg-cream p-4 sm:p-8">
      <DialogTitle className="ms3p-serif pr-8 text-2xl">{label}</DialogTitle>
      <DialogDescription className="text-xs text-muted">Приклад створено під час тестування Маркетинг-сету · сторінка {i + 1} з {pages.length}</DialogDescription>
      <img src={pages[i]} alt={`${label} — сторінка ${i + 1}`} className="mt-2 h-auto w-full rounded-md" />
      {pages.length > 1 && <div className="mt-3 flex justify-between text-sm">
        <button type="button" className="ms3p-link" disabled={i === 0} onClick={() => setI(i - 1)}><ChevronLeft className="size-4" /> Попередня</button>
        <button type="button" className="ms3p-link" disabled={i === pages.length - 1} onClick={() => setI(i + 1)}>Наступна <ChevronRight className="size-4" /></button>
      </div>}
    </DialogContent>
  </Dialog>;
}

/* Prototype-style layered presentation covers; source documents remain in the gallery. */
function DocStack({ variant, front }: { variant: "hero" | "plan"; front?: { img: string; label: string } | undefined }) {
  return <div className={`ms3p-stack is-${variant}`}>
    <div className="ms3p-doc ms3p-doc-main">
      <div className="ms3p-doc-text"><p className="ms3p-brand"><Spiral className="size-3.5" /> Маркетинг-сет</p><p className="ms3p-serif ms3p-doc-title">Маркетингова<br />стратегія</p>{variant === "hero" && <p className="ms3p-doc-sub">Індивідуальний план<br />розвитку бізнесу</p>}</div>
      <img src={oliveCover} alt="" width={768} height={1024} className="ms3p-doc-art" />
    </div>
    <div className="ms3p-doc ms3p-doc-plan"><p className="ms3p-serif ms3p-plan-title">План дій</p>{[1, 2, 3, 4].map((k) => <div key={k} className="ms3p-plan-row"><span className="ms3p-plan-dot" /><div><i /><i /><i /></div></div>)}</div>
    {variant === "hero" ? <div className="ms3p-doc ms3p-doc-aud"><p className="ms3p-brand"><Spiral className="size-3" /> Маркетинг-сет</p><p className="ms3p-serif ms3p-aud-title">Цільова аудиторія</p><div className="ms3p-aud-content"><img src={audienceEditorial} alt="Ілюстрація портрета аудиторії" width={992} height={672} /><div>{[1, 2, 3].map((k) => <div key={k} className="ms3p-plan-row"><span className="ms3p-plan-dot" /><div><i /><i /></div></div>)}</div></div></div>
      : <div className="ms3p-doc ms3p-doc-aud is-plan">{front ? <img src={front.img} alt={front.label} className="ms3p-source-page" /> : <><p className="ms3p-serif ms3p-plan-heading">Стратегічний план дій</p><div className="ms3p-plan-columns">{["Пріоритети", "Канали", "Завдання"].map((x, i) => { const I = icons[i] ?? Spiral; return <div key={x}><I className="ms3p-plan-icon" /><p>{x}</p><i /><i /></div>; })}</div></>}</div>}
  </div>;
}

const assistantPositions: Record<string, { left: string; top: string }> = {
  lead: { left: "28%", top: "7%" }, landing: { left: "72%", top: "7%" },
  content: { left: "88%", top: "27%" }, target: { left: "90%", top: "52%" },
  funnel: { left: "83%", top: "77%" }, email: { left: "21%", top: "79%" },
  direct: { left: "9%", top: "44%" },
};

function MarketingSetThree() {
  const [buyOpen, setBuyOpen] = useState(false);
  const [stage, setStage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [asst, setAsst] = useState("nav");
  const s = stages[stage] ?? stages[0];
  const a = assistants3.find((x) => x.id === asst) ?? assistants3[0];
  const extras = assistants3.filter((x) => !x.included);
  const ring = assistants3.filter((x) => !x.included);
  if (!s || !a) return null;
  const cta = (cls = "") => <button type="button" className={`ms3p-btn ${cls}`} onClick={() => setBuyOpen(true)}>Отримати доступ <ArrowRight className="size-4" /></button>;

  return <div className="ms3p" lang="uk">
    <header className="ms3p-top">
      <div className="ms3p-wrap flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.18em]" aria-label="Vita Shablii — головна"><span className="grid size-8 place-items-center rounded-full border border-ink/30"><Spiral className="size-5" /></span><span className="whitespace-nowrap">Маркетинг-сет</span></Link>
        <nav className="flex items-center gap-7" aria-label="Розділи сторінки">
          {[["#benefits", "Що входить"], ["#how", "Як працює"], ["#assistants", "AI-асистенти"], ["#author", "Про авторку"], ["#faq", "FAQ"]].map(([h, l]) => <a key={h} href={h} className="hidden text-[13px] hover:text-olive lg:block">{l}</a>)}
          {cta("is-sm")}
        </nav>
      </div>
    </header>

    <main>
      {/* Hero */}
      <section className="ms3p-hero">
        <img src={nautilus} alt="" width={1024} height={1024} className="ms3p-hero-shell" />
        <div className="ms3p-wrap relative grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div className="relative z-10">
            <p className="ms3p-eyebrow">Маркетинг-сет <span /></p>
            <p className="mt-3 text-sm font-medium">AI-платформа для підприємців, експертів і маркетологів</p>
            <h1 className="ms3p-serif ms3p-h1 mt-4">Маркетингова стратегія, яка допомагає заробляти більше</h1>
            <p className="mt-6 max-w-xl">Зрозумійте, кому продавати свій продукт, чим вирізнятися серед конкурентів та куди вкладати гроші й зусилля в просування.</p>
            <p className="mt-3 max-w-xl">Маркетинг-сет створить індивідуальну стратегію та план дій для вашого бізнесу. А 8 AI-асистентів допоможуть перейти до реалізації.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <p className="ms3p-serif text-[56px] leading-none">{offer3.priceEUR} €</p>
              <div className="border-l border-ink/25 pl-5"><p className="ms3p-serif ms3p-hl italic">Маркетинг-сет + Action-навігатор — в одному наборі</p><p className="mt-1 text-xs text-muted">Action-навігатор уже входить у вартість.</p></div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">{cta()}<a href="#process" className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline">Подивитися приклад результату <ArrowUpRight className="size-4" /></a></div>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted"><Plus className="size-3.5" /> 7 окремих AI-асистентів під різні задачі маркетингу</p>
          </div>
          <DocStack variant="hero" />
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="ms3p-sec">
        <div className="ms3p-wrap">
          <h2 className="ms3p-serif ms3p-h2">Чому Маркетинг-сет вартий уваги?</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-0">{benefits.map(([t, b], i) => { const I = icons[i] ?? Spiral; return <div key={t} className="ms3p-benefit"><I className="size-11 shrink-0 text-olive" /><div><h3 className="font-semibold leading-snug">{t}</h3><p className="mt-2 text-sm text-muted">{b}</p></div></div>; })}</div>
        </div>
      </section>

      {/* Situations */}
      <section className="ms3p-sec pt-0">
        <div className="ms3p-wrap">
          <h2 className="ms3p-serif ms3p-h2">Вам це знайомо?</h2>
          <ul className="mt-8 grid gap-x-14 gap-y-5 md:grid-cols-2">{situations.map((x) => <li key={x} className="flex gap-3 text-[15px]"><span className="ms3p-bullet" aria-hidden />{x}</li>)}</ul>
        </div>
      </section>

      {/* Opportunities band */}
      <section className="ms3p-band">
        <img src={nautilus} alt="" className="ms3p-band-shell" />
        <div className="ms3p-wrap relative py-12 md:py-14">
          <h2 className="ms3p-serif ms3p-h2 flex items-center gap-4">Ось як Маркетинг-сет допомагає побачити можливості <Fan className="hidden size-9 shrink-0 md:block" /></h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">{opportunities.map(([t, b], i) => { const I = icons[i] ?? Spiral; return <div key={t} className="ms3p-opp"><I className="size-10" /><h3 className="mt-3 text-[15px] font-medium leading-snug">{t}</h3><p className="mt-2 text-sm opacity-75">{b}</p></div>; })}</div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="ms3p-sec">
        <div className="ms3p-wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="ms3p-serif ms3p-h2">Подивіться, як створюється ваша маркетингова стратегія</h2>
            <ol className="ms3p-timeline mt-8">{stages.map((x, i) => <li key={x.n} className={i === stage ? "is-active" : ""}>
              <button type="button" onClick={() => setStage(i)} aria-expanded={i === stage} className="flex w-full gap-4 text-left">
                <span className="ms3p-num">{x.n}</span>
                <span className="min-w-0 flex-1"><span className="block font-semibold">{x.title}</span><span className="mt-0.5 block text-[13px] text-muted">{x.lead ?? x.body[0]}</span></span>
              </button>
              {i === stage && <div className="ms3p-stage-body">{(x.lead ? x.body : x.body.slice(1)).map((p) => <p key={p}>{p}</p>)}{x.pages.length > 0 && <button type="button" className="ms3p-link mt-1" onClick={() => setZoom(true)}><Maximize2 className="size-3.5" /> {x.cta}</button>}
                {x.pages.length > 0 && <button type="button" className="mt-4 block w-full lg:hidden" onClick={() => setZoom(true)} aria-label={`Збільшити: ${x.title}`}><img src={x.pages[0]} alt={`${x.title} — приклад документа`} loading="lazy" className="w-full rounded-md shadow-[0_18px_40px_-20px_rgba(40,40,20,0.45)]" /></button>}
              </div>}
            </li>)}</ol>
          </div>
          <div className="hidden lg:block lg:sticky lg:top-24">
            <button type="button" className="block w-full" onClick={() => s.pages.length && setZoom(true)} aria-label={s.pages.length ? `Збільшити документ: ${s.title}` : undefined} disabled={!s.pages.length}>
              <DocStack variant="plan" front={s.pages[0] ? { img: s.pages[0], label: `${s.title} — приклад документа` } : undefined} />
            </button>
            <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs text-muted"><span className="flex items-center gap-2"><FileText className="size-4" /> Готова стратегія у PDF</span><span className="flex items-center gap-2"><Presentation className="size-4" /> Презентація з ключовими висновками</span></div>
          </div>
        </div>
        {s.pages.length > 0 && <DocModal key={stage} pages={s.pages} label={s.title} open={zoom} onOpenChange={setZoom} />}
      </section>

      {/* Assistants */}
      <section id="assistants" className="ms3p-sec ms3p-asst-sec">
        <img src={nautilus} alt="" className="ms3p-asst-shell" />
        <div className="ms3p-wrap relative">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="ms3p-serif ms3p-h2">8 AI-асистентів допоможуть реалізувати стратегію, щоб вона не лягла в шухляду</h2>
              <p className="mt-5 text-[15px]">Action-навігатор уже входить у вартість. За бажанням ви можете додати ще 7 спеціалізованих AI-асистентів.</p>
              <div className="ms3p-asst-card mt-8" aria-live="polite"><p className="text-[11px] font-medium uppercase tracking-[0.16em] text-olive">{a.included ? "Входить у вартість" : "Можна додати за потреби"}</p><h3 className="ms3p-serif mt-2 text-2xl">{a.name}</h3><p className="mt-2 text-sm text-muted">{a.body}</p></div>
            </div>
            <div className="ms3p-ring" role="group" aria-label="AI-асистенти">
              <svg className="ms3p-ring-spiral" viewBox="0 0 520 520" fill="none" aria-hidden><path d="M 397 428 C 464 348 467 231 413 148 C 354 57 209 36 130 116 C 53 194 62 329 143 394 C 219 454 326 423 354 341 C 382 262 341 184 273 172 C 211 160 164 207 171 263" /></svg>
              <button type="button" onClick={() => setAsst("nav")} aria-pressed={asst === "nav"} className="ms3p-ring-center"><span className="ms3p-serif text-[clamp(18px,2.2vw,24px)] leading-tight">Action-<br />навігатор</span><span className="ms3p-pill">Входить у вартість</span></button>
              {ring.map((x) => <Button key={x.id} variant="ghost" type="button" onClick={() => setAsst(x.id)} aria-pressed={asst === x.id} className={`ms3p-ring-node ${asst === x.id ? "is-active" : ""}`} style={assistantPositions[x.id]}><span>{x.name}</span></Button>)}
            </div>
          </div>
          <ul className="ms3p-asst-grid mt-12">{extras.map((x, i) => { const I = icons[i % 4] ?? Spiral; return <li key={x.id}><button type="button" onClick={() => setAsst(x.id)} aria-pressed={asst === x.id} className={asst === x.id ? "is-active" : ""}><I className="size-8 text-olive" /><span className="mt-2 block text-[13px] font-semibold leading-tight">{x.name}</span><span className="mt-1.5 block text-xs text-muted">{x.body.split(/[:.]/)[0]}.</span></button></li>; })}</ul>
        </div>
      </section>

      {/* Trust / how it works */}
      <section id="how" className="ms3p-band">
        <div className="ms3p-wrap relative py-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
            <h2 className="ms3p-serif ms3p-h2">Чому можна довіряти стратегії, яку створює ця AI-платформа?</h2>
            <div>
              <p className="text-sm opacity-80">Вона поєднує ваші дані, перевірені підходи в маркетингу та практичну логіку прийняття рішень.</p>
              <ol className="mt-6 grid grid-cols-2 gap-6 md:flex md:items-start md:justify-between">{["Дані про бізнес", "Дослідження", "Стратегічні рекомендації", "Перевірка на практиці"].map((t, i) => { const I = icons[i] ?? Spiral; return <li key={t} className="flex items-start gap-3 md:flex-1 md:flex-col md:items-center md:text-center"><I className="size-11 shrink-0" /><span className="text-[13px] font-medium leading-snug">{t}</span>{i < 3 && <ArrowRight className="mt-4 hidden size-4 opacity-60 md:absolute" aria-hidden />}</li>; })}</ol>
            </div>
          </div>
          <div className="mt-10 grid gap-6 border-t border-cream/20 pt-6 text-sm opacity-80 md:grid-cols-2"><p>Чим точніше й повніше ви опишете свій бізнес, тим кориснішими й конкретнішими будуть гіпотези й рекомендації.</p><p>Маркетинг — це про обґрунтовані гіпотези, перевірку і розвиток, а не про хибні гарантії. Саме так працює ця платформа.</p></div>
        </div>
      </section>

      {/* Author */}
      <section id="author" className="ms3p-sec pb-0">
        <div className="ms3p-wrap grid items-end gap-8 md:grid-cols-[1fr_1fr_1.2fr]">
          <h2 className="ms3p-serif ms3p-h2 self-start">Хто створив Маркетинг-сет?</h2>
          <img src={portrait.url} alt="Віта Шаблій — авторка Маркетинг-сету" loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-[320px] object-cover grayscale" />
          <div className="self-center pb-8">
            <h3 className="ms3p-serif text-3xl">Віта Шаблій</h3>
            <ul className="mt-5 space-y-4">{["13 років у практичному маркетингу.", "Засновниця «Анатомія маркетингу» та «Синтез».", "Інтегрую AI в маркетинг і бізнес-процеси з 2020 року.", "Попередні версії інструментів використовують понад 200 людей."].map((x, i) => { const I = icons[i] ?? Spiral; return <li key={x} className="flex items-center gap-3 text-sm"><I className="size-8 shrink-0 text-olive" />{x}</li>; })}</ul>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="buy" className="ms3p-band">
        <div className="ms3p-wrap py-10 md:py-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr_1.2fr]">
            <p className="ms3p-serif text-center text-[clamp(26px,3vw,36px)] leading-tight md:text-left">Маркетинг-сет +<br />Action-навігатор</p>
            <div className="text-center"><p className="ms3p-serif text-[64px] leading-none">{offer3.priceEUR} €</p>{cta("is-light mt-5")}</div>
            <ul className="space-y-2.5 text-sm">{["Індивідуальна маркетингова стратегія", "Готові PDF та презентації", "Action-навігатор — уже у вашому наборі", `Доступ ${offer3.accessDays} днів, одноразова оплата`].map((x) => <li key={x} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0" />{x}</li>)}</ul>
          </div>
          <p className="mt-8 text-center text-sm opacity-80">За бажанням ви можете додати ще 7 спеціалізованих AI-асистентів — по одному або всі разом за {offer3.allSevenAssistantsEUR} €.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="ms3p-sec">
        <div className="ms3p-wrap grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
          <h2 className="ms3p-serif text-[28px]">Популярні запитання</h2>
          <Accordion type="single" collapsible className="w-full">{faq3.map(([q, ans], i) => <AccordionItem key={q} value={`f${i}`} className="border-ink/15"><AccordionTrigger className="text-left text-sm font-medium hover:no-underline">{q}</AccordionTrigger><AccordionContent className="text-sm text-muted">{ans}</AccordionContent></AccordionItem>)}</Accordion>
        </div>
      </section>

      {/* Final */}
      <section className="ms3p-final">
        <img src={nautilus} alt="" className="ms3p-final-shell" />
        <div className="ms3p-wrap relative py-16 md:py-20">
          <h2 className="ms3p-serif ms3p-h2 max-w-2xl">Почніть із рішень, які справді потрібні вашому проєкту чи ідеї</h2>
          <p className="mt-4 max-w-lg text-[15px]">Отримайте індивідуальну маркетингову стратегію та план дій, а також Action-навігатор — уже у вашому наборі.</p>
          <div className="mt-8">{cta()}</div>
        </div>
      </section>
    </main>

    <footer className="border-t border-ink/10"><div className="ms3p-wrap flex flex-wrap items-center justify-between gap-5 py-8 text-xs text-muted"><Link to="/">© 2026 Vita Shablii</Link><div className="flex flex-wrap gap-6"><Link to="/ua/marketing-set">Маркетинг-сет</Link><Link to="/marketing-set-2">Маркетинг-сет 2</Link></div><a href="mailto:hello@vitashablii.com">hello@vitashablii.com</a></div></footer>

    <Dialog open={buyOpen} onOpenChange={setBuyOpen}><DialogContent className="ms3p bg-cream"><DialogTitle className="ms3p-serif text-3xl">Маркетинг-сет · {offer3.priceEUR} €</DialogTitle><DialogDescription className="mt-2 text-sm leading-relaxed text-muted">Оплату на цій сторінці ще не підключено. Напишіть нам — і ми надішлемо посилання на доступ до платформи.</DialogDescription><a className="ms3p-btn mt-4 justify-center" href="mailto:hello@vitashablii.com?subject=Маркетинг-сет%20—%20доступ">Написати на hello@vitashablii.com <ArrowRight className="size-4" /></a></DialogContent></Dialog>
  </div>;
}
