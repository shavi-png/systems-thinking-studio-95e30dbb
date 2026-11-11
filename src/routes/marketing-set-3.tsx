import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { offer3, stages, assistants3, benefits, situations, opportunities, howSteps, faq3, docPages } from "@/components/marketing-set-3/content";
import shell from "@/assets/shell-hero.jpg.asset.json";
import portrait from "@/assets/ms3/vita-portrait.png.asset.json";

const title = "Маркетинг-сет — маркетингова стратегія та Action-навігатор за 39 € | Vita Shablii";
const description = "AI-платформа для підприємців, експертів і маркетологів: індивідуальна маркетингова стратегія, готові PDF і Action-навігатор, який допоможе перейти до реалізації.";
export const Route = createFileRoute("/marketing-set-3")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: MarketingSetThree,
});

/* Nautilus log spiral r = a·e^(b·t), b = 0.1784 — brand formula */
const B = 0.1784;
const A = 9;
const C = 300;
const pt = (t: number) => { const r = A * Math.exp(B * t); return [C + r * Math.cos(-t), C + r * Math.sin(-t)] as const; };
const spiralPath = (() => { const p: string[] = []; for (let t = 0; t <= 6.1 * Math.PI; t += 0.04) { const [x, y] = pt(t); p.push(`${x.toFixed(1)} ${y.toFixed(1)}`); } return `M${p.join(" L")}`; })();
const nodeT = [0, 14.2, 15.0, 15.8, 16.6, 17.5, 18.35, 19.15];
const VB = (() => { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (let t = 0; t <= 6.1 * Math.PI; t += 0.04) { const [x, y] = pt(t); x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); } const pad = 30; return { x: x0 - pad, y: y0 - pad, w: x1 - x0 + 2 * pad, h: y1 - y0 + 2 * pad }; })();

function DocModal({ pages, start, label, open, onOpenChange }: { pages: string[]; start: number; label: string; open: boolean; onOpenChange: (v: boolean) => void }) {
  const [i, setI] = useState(start);
  return <Dialog open={open} onOpenChange={(v) => { if (v) setI(start); onOpenChange(v); }}>
    <DialogContent className="ms3-page ms3-modal max-h-[94dvh] max-w-3xl overflow-y-auto rounded-none bg-paper p-4 shadow-none sm:p-8">
      <DialogTitle className="ms3-serif pr-8 text-xl">{label}</DialogTitle>
      <DialogDescription className="text-xs text-smoke">Приклад створено під час тестування Маркетинг-сету · сторінка {i + 1} з {pages.length}</DialogDescription>
      <img src={pages[i]} alt={`${label} — сторінка ${i + 1}`} className="mt-2 h-auto w-full border border-line" />
      {pages.length > 1 && <div className="mt-3 flex justify-between">
        <button type="button" className="ms3-link" disabled={i === 0} onClick={() => setI(i - 1)}><ChevronLeft className="size-4" /> Попередня</button>
        <button type="button" className="ms3-link" disabled={i === pages.length - 1} onClick={() => setI(i + 1)}>Наступна <ChevronRight className="size-4" /></button>
      </div>}
    </DialogContent>
  </Dialog>;
}

function MarketingSetThree() {
  const [buyOpen, setBuyOpen] = useState(false);
  const [stage, setStage] = useState(1);
  const [zoom, setZoom] = useState(false);
  const [asst, setAsst] = useState("nav");
  const s = stages[stage]!;
  const a = assistants3.find((x) => x.id === asst)!;
  const cta = (cls = "") => <button type="button" className={`ms3-cta ${cls}`} onClick={() => setBuyOpen(true)}>Отримати доступ <ArrowRight className="size-4" /></button>;

  return <div className="ms3-page" lang="uk">
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="ms3-wrap flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="ms3-serif text-xl" aria-label="Vita Shablii — головна">Маркетинг-сет</Link>
        <nav className="flex items-center gap-7" aria-label="Розділи сторінки">
          {[["#docs", "Що входить"], ["#how", "Як працює"], ["#assistants", "AI-асистенти"], ["#author", "Про авторку"], ["#faq", "FAQ"]].map(([h, l]) => <a key={h} href={h} className="hidden text-[13px] text-charcoal/75 hover:text-teal lg:block">{l}</a>)}
          <a href="#buy" className="ms3-cta ms3-cta-sm">Отримати доступ <ArrowRight className="size-4" /></a>
        </nav>
      </div>
    </header>

    <main>
      {/* 01 Hero */}
      <section className="ms3-hero bg-paper">
        <div className="ms3-wrap grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="ms3-kicker">Маркетинг-сет</p>
            <p className="mt-2 text-sm text-charcoal/70">AI-платформа для підприємців, експертів і маркетологів</p>
            <h1 className="mt-6">Маркетингова стратегія, яка допомагає заробляти більше</h1>
            <p className="ms3-copy mt-6 max-w-[560px]">Зрозумійте, кому продавати свій продукт, чим вирізнятися серед конкурентів та куди вкладати гроші й зусилля в просування.</p>
            <p className="ms3-copy mt-4 max-w-[560px]">Маркетинг-сет створить індивідуальну стратегію та план дій для вашого бізнесу. А 8 AI-асистентів допоможуть перейти до реалізації.</p>
            <div className="mt-9 grid items-center gap-6 border-y border-line py-6 sm:grid-cols-[auto_1fr]">
              <p className="ms3-serif text-[64px] leading-none text-teal">{offer3.priceEUR} €</p>
              <div className="border-olive-soft sm:border-l sm:pl-6"><p className="ms3-serif text-lg italic">Маркетингова стратегія + Action-навігатор — в одному наборі.</p><p className="mt-2 text-sm text-charcoal/70">Ви отримуєте не лише рекомендації, а й персонального AI-помічника, який складе покроковий план їх реалізації. Action-навігатор уже входить у вартість.</p></div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">{cta()}<a href="#docs" className="ms3-link">Подивитися приклад результату <ArrowUpRight className="size-4" /></a></div>
            <p className="mt-6 text-sm text-charcoal/70">+ 7 окремих AI-асистентів під різні задачі маркетингу</p>
          </div>
          <div className="ms3-hero-visual" aria-label="Приклади документів Маркетинг-сету">
            <img src={shell.url} alt="" aria-hidden className="ms3-hero-shell" />
            <figure className="ms3-doc ms3-doc-a"><img src={docPages.strategy} alt="Обкладинка документа «Маркетинговий паспорт бренду»" /></figure>
            <figure className="ms3-doc ms3-doc-b"><img src={docPages.audience} alt="Сторінка аналізу цільової аудиторії" loading="lazy" /></figure>
            <figure className="ms3-doc ms3-doc-c"><img src={docPages.ads} alt="Рекламний план від асистента Таргетолог" loading="lazy" /></figure>
            <p className="ms3-hero-note">Реальні документи з тестування платформи</p>
          </div>
        </div>
      </section>

      {/* 02 Why */}
      <section className="ms3-section bg-sand">
        <div className="ms3-wrap">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20"><h2>Чому Маркетинг-сет вартий уваги?</h2><div className="ms3-copy space-y-4"><p>Перед тим як вкладати гроші в рекламу, наймати маркетолога, запускати нову послугу або витрачати ще більше часу на контент, варто розібратися, що саме може допомогти вашому продукту продаватися краще.</p><p>Маркетинг-сет допомагає знайти відповіді на основі інформації про ваш бізнес.</p></div></div>
          <div className="mt-14 grid md:grid-cols-3">{benefits.map(([t, b], i) => <article key={t} className="ms3-col"><p className="ms3-num">0{i + 1}</p><h3 className="mt-5">{t}</h3><p className="mt-4 text-charcoal/75">{b}</p></article>)}</div>
          <p className="ms3-serif mt-12 max-w-3xl text-2xl italic text-olive-soft">І все це — на основі дослідження саме вашого продукту, його покупців і конкурентного середовища.</p>
        </div>
      </section>

      {/* 03 Familiar */}
      <section className="ms3-section bg-paper">
        <div className="ms3-wrap"><h2>Вам це знайомо?</h2>
          <ul className="mt-12 grid gap-x-16 md:grid-cols-2">{situations.map((q) => <li key={q} className="ms3-situation"><span aria-hidden className="ms3-tick" />{q}</li>)}</ul>
        </div>
      </section>
      <section className="ms3-section bg-sand">
        <div className="ms3-wrap"><h2 className="max-w-3xl">Ось як Маркетинг-сет допомагає побачити можливості</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">{opportunities.map(([t, b], i) => <article key={t} className="ms3-col"><svg viewBox="0 0 600 600" className="size-10" aria-hidden><path d={spiralPath} fill="none" stroke="var(--ms3-olive-soft)" strokeWidth="14" /></svg><h3 className="mt-5 !text-[21px]">{t}</h3><p className="mt-4 text-charcoal/75">{b}</p></article>)}</div>
          <p className="mt-12 max-w-2xl text-charcoal/75">Усе це збирається в індивідуальну маркетингову стратегію, на яку ви можете спиратися під час просування свого продукту.</p>
        </div>
      </section>

      {/* 04 Docs gallery */}
      <section id="docs" className="ms3-section bg-paper">
        <div className="ms3-wrap">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20"><h2>Подивіться, як створюється ваша маркетингова стратегія</h2><p className="ms3-copy self-end">Маркетинг-сет проводить вас через послідовне дослідження бізнесу. Кожен етап допомагає краще зрозуміти продукт і підготувати основу для наступних маркетингових рішень.</p></div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <ol className="ms3-stages" aria-label="Етапи дослідження">{stages.map((st, i) => <li key={st.n}>
              <button type="button" aria-expanded={i === stage} className={`ms3-stage ${i === stage ? "is-active" : ""}`} onClick={() => setStage(i)}><span className="ms3-stage-n">{st.n}</span><span className="ms3-serif text-xl">{st.title}</span></button>
              {i === stage && <div className="ms3-stage-body">{st.lead && <p className="font-medium">{st.lead}</p>}{st.body.map((p) => <p key={p} className="mt-3 text-charcoal/75">{p}</p>)}
                {st.pages.length > 0 && <button type="button" className="ms3-link mt-4" onClick={() => setZoom(true)}>{st.cta} <Maximize2 className="size-4" /></button>}
                {st.pages.length > 0 && <button type="button" className="ms3-doc-mobile lg:hidden" onClick={() => setZoom(true)} aria-label={`Відкрити на весь екран: ${st.title}`}><img src={st.pages[1] ?? st.pages[0]} alt={`${st.title} — приклад документа`} loading="lazy" /></button>}
              </div>}
            </li>)}</ol>
            <div className="hidden lg:block">
              {s.pages.length > 0 ? <button type="button" className="ms3-gallery" onClick={() => setZoom(true)} aria-label={`Збільшити документ: ${s.title}`}>
                <img src={s.pages[0]} alt="" aria-hidden className="ms3-gallery-back" loading="lazy" />
                <img src={s.pages[1] ?? s.pages[0]} alt={`${s.title} — приклад документа`} className="ms3-gallery-front" />
                <span className="ms3-zoom"><Maximize2 className="size-4" /> Збільшити</span>
              </button> : <div className="ms3-brief"><p className="ms3-kicker">Бриф</p>{["Що ви продаєте?", "Кому?", "На якому ринку працюєте?", "Які маєте цілі?", "Що вже пробували в маркетингу?"].map((q, i) => <p key={q} className="ms3-brief-row"><span className="ms3-num">0{i + 1}</span><span className="ms3-serif text-2xl">{q}</span></p>)}</div>}
            </div>
          </div>
          <div className="mt-16 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div><h3>Ваші дослідження — у готових документах</h3><p className="mt-4 text-charcoal/75">Результати кожного змістового етапу можна завантажити у PDF та у вигляді оформлених презентацій. Ви можете повертатися до них, використовувати для власної роботи, обговорювати з командою або передавати маркетинговим спеціалістам.</p></div>
            <p className="self-end text-sm text-smoke">Приклади на сторінці створені під час тестування Маркетинг-сету. Модельні висновки та неперевірені припущення потребують підтвердження реальними даними.</p>
          </div>
        </div>
        {s.pages.length > 0 && <DocModal key={stage} pages={s.pages} start={s.pages.length > 1 ? 1 : 0} label={s.title} open={zoom} onOpenChange={setZoom} />}
      </section>

      {/* 05 Assistants on the nautilus spiral */}
      <section id="assistants" className="ms3-section bg-sand overflow-hidden">
        <div className="ms3-wrap">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <h2>8 AI-асистентів допоможуть рухатися далі, щоб стратегія не лягла в шухляду</h2>
              <p className="ms3-copy mt-6">Стратегія допомагає визначити напрямок. Але щоб рухатися далі, потрібно підготувати матеріали, організувати роботу й перевіряти заплановане на практиці.</p>
              <p className="ms3-copy mt-4">Для цього в Маркетинг-сеті є 8 AI-асистентів. Вони використовують інформацію про ваш бренд, аудиторію та позиціонування, зібрану під час дослідження.</p>
              <div className="ms3-asst-card mt-10" aria-live="polite">
                <p className={`ms3-badge ${a.included ? "is-included" : ""}`}>{a.included ? "Входить у вартість Маркетинг-сету" : "Можна додати за потреби"}</p>
                <h3 className="mt-4">{a.name}</h3><p className="mt-3 text-charcoal/80">{a.body}</p>
              </div>
            </div>
            <div>
              <div className="ms3-spiral" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
                <svg viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`} aria-hidden className="h-full w-full"><path d={spiralPath} fill="none" stroke="var(--ms3-olive-soft)" strokeWidth="1.3" />{nodeT.slice(1).map((t, i) => { const [x, y] = pt(t); return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="var(--ms3-olive-soft)" strokeOpacity="0.22" strokeWidth="0.8" />; })}</svg>
                {assistants3.map((x, i) => { const [px, py] = pt(nodeT[i] ?? 0); return <button key={x.id} type="button" onClick={() => setAsst(x.id)} onMouseEnter={() => setAsst(x.id)} aria-pressed={asst === x.id} className={`ms3-node ${x.included ? "is-main" : ""} ${py < C ? "is-up" : ""} ${asst === x.id ? "is-active" : ""}`} style={{ left: `${((px - VB.x) / VB.w) * 100}%`, top: `${((py - VB.y) / VB.h) * 100}%` }}><span className="ms3-dot" aria-hidden />{x.included ? <span className="ms3-node-main"><span className="ms3-serif text-lg">{x.name}</span><span className="ms3-badge is-included mt-1 !text-[9px]">Входить у вартість</span></span> : <span className="ms3-node-label">{x.name}</span>}</button>; })}
              </div>
              <ul className="ms3-asst-list" aria-label="AI-асистенти">{assistants3.map((x) => <li key={x.id}><button type="button" aria-pressed={asst === x.id} onClick={() => setAsst(x.id)} className={asst === x.id ? "is-active" : ""}><span>{x.name}</span><span className="text-xs text-smoke">{x.included ? "У вартості" : "За потреби"}</span></button></li>)}</ul>
            </div>
          </div>
          <div className="mt-16 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div><h3>Усі вони вже знають ваш бренд</h3><p className="mt-4 text-charcoal/75">Наприклад, якщо стратегія рекомендує протестувати рекламу, Action-навігатор допоможе визначити необхідні завдання, а Таргетолог — підготувати рекламний план з урахуванням вашої аудиторії та позиціонування. Вам не потрібно щоразу пояснювати новому асистенту, що саме ви продаєте і кому.</p></div>
            <div className="self-end space-y-3"><p className="ms3-serif text-xl italic text-olive-soft">Ви самі вирішуєте, які завдання виконувати самостійно, а для яких додати спеціалізованого AI-асистента.</p><p className="text-sm text-charcoal/70">Action-навігатор входить у вартість Маркетинг-сету. Ще 7 AI-асистентів можна додати за потреби, за додаткову оплату.</p></div>
          </div>
        </div>
      </section>

      {/* 06 How */}
      <section id="how" className="ms3-section bg-paper">
        <div className="ms3-wrap">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20"><h2>Як працює Маркетинг-сет?</h2><p className="ms3-copy self-end">Щоб створити стратегію, вам не потрібно знати маркетингові методології або вміти писати складні запити до AI. Достатньо розповісти про свій продукт.</p></div>
          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">{howSteps.map(([t, b], i) => <li key={t} className="ms3-step"><p className="ms3-serif text-[56px] leading-none text-teal">{i + 1}</p><p className="mt-2 text-xs uppercase tracking-[0.14em] text-smoke">Крок {i + 1}</p><h3 className="mt-4 !text-[21px]">{t}</h3><p className="mt-3 text-charcoal/75">{b}</p></li>)}</ol>
        </div>
      </section>

      {/* 07 Method */}
      <section className="ms3-section bg-sand">
        <div className="ms3-wrap">
          <h2 className="max-w-3xl">Стратегія з AI, в основі якої — реальна маркетингова методологія</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="ms3-copy space-y-4"><p>Маркетинг-сет побудований на підходах, які використовуються у практичній роботі маркетологів із бізнесами.</p><p>В основі платформи — дослідження продукту, аналіз конкурентного середовища, сегментація аудиторії, формування ціннісної пропозиції, позиціонування, вибір маркетингових каналів і визначення пріоритетів.</p><p>Ці підходи описані в професійній маркетинговій літературі та застосовуються під час роботи над реальними проєктами. У Маркетинг-сеті вони об'єднані в послідовний процес дослідження з використанням AI.</p></div>
            <div className="ms3-copy space-y-4"><p>Спочатку платформа збирає інформацію про бізнес. Потім допомагає дослідити продукт, аудиторію та конкурентне середовище. На основі цих результатів формує позиціонування та рекомендації щодо просування.</p><p>Кожен наступний етап спирається на контекст, зібраний раніше.</p></div>
          </div>
          <ol className="ms3-flow mt-14" aria-label="Схема методології">{["Дані про бізнес", "Дослідження", "Стратегічні рекомендації", "Перевірка на практиці"].map((x, i) => <li key={x}><svg viewBox="0 0 60 60" className="size-14" aria-hidden><circle cx="30" cy="30" r={8 + i * 6} fill="none" stroke="var(--ms3-olive-soft)" strokeWidth="1" />{i > 0 && <circle cx="30" cy="30" r="6" fill="none" stroke="var(--ms3-olive-soft)" strokeWidth="1" />}<circle cx="30" cy="30" r="2.5" fill="var(--ms3-teal)" /></svg><span className="ms3-serif text-xl">{x}</span></li>)}</ol>
          <div className="mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div><h3>Від чого залежить якість вашої стратегії?</h3><p className="ms3-serif mt-4 text-2xl italic text-teal">Чим повніше й точніше ви розповісте про свій бізнес, тим більше корисного контексту отримає Маркетинг-сет для дослідження.</p></div>
            <div className="space-y-4 text-charcoal/80"><p>Наприклад, інформація про ваших покупців, ціни, ринок, попередні рекламні кампанії та результати продажів допомагає формувати конкретніші гіпотези й рекомендації.</p><p>Якщо ви тільки запускаєте продукт і частини цих даних ще немає, платформа все одно допоможе визначити можливі напрямки розвитку. Просто деякі висновки потребуватимуть перевірки на реальних покупцях.</p><p>Так працюють і маркетингові дослідження: вони допомагають приймати більш обґрунтовані рішення, а результати цих рішень перевіряються на практиці.</p><p className="font-medium text-charcoal">Маркетинг-сет дає вам основу для таких рішень і допомагає зрозуміти, що варто перевірити насамперед.</p></div>
          </div>
        </div>
      </section>

      {/* 08 Author */}
      <section id="author" className="ms3-section bg-paper">
        <div className="ms3-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <figure><img src={portrait.url} alt="Віта Шаблій — авторка Маркетинг-сету, чорно-білий портрет" loading="lazy" className="aspect-[4/5] w-full object-cover grayscale" /><figcaption className="mt-3 text-xs text-smoke">Віта Шаблій</figcaption></figure>
          <div>
            <h2>Хто створив Маркетинг-сет?</h2>
            <dl className="mt-10 grid grid-cols-2 border-t border-line">{[["13", "років практичного маркетингу"], ["2", "проєкти: «Анатомія маркетингу» та «Синтез»"], ["2020", "з цього року інтегрую AI у бізнес-процеси"], ["200+", "людей працювали з попередніми версіями"]].map(([n, l]) => <div key={l} className="border-b border-line py-6 pr-4 odd:border-r odd:pr-6 even:pl-6"><dt className="ms3-serif text-[44px] leading-none text-teal">{n}</dt><dd className="mt-2 text-sm text-charcoal/75">{l}</dd></div>)}</dl>
            <div className="ms3-copy mt-10 space-y-4"><p>Привіт! Мене звати Віта Шаблій. Я маркетологиня-практик, засновниця проєктів «Анатомія маркетингу» та «Синтез» і авторка Маркетинг-сету.</p><p>Я вже 13 років працюю в маркетингу. За цей час працювала з різними бізнесами та IT-проєктами, досліджувала ринки, займалася позиціонуванням, стратегіями просування й реалізацією маркетингових рішень. З 2020 року також інтегрую AI у маркетингові та бізнес-процеси.</p><p>За роки роботи я переконалася, що до вибору реклами, контенту та інструментів продажу важливо розібратися в самому продукті. Хто його покупець? Чому він має обрати саме цю пропозицію? Що вже працює, а які рішення ще потрібно перевірити?</p><p>Саме з цих запитань я починаю маркетингову роботу. Таку логіку я заклала й у Маркетинг-сет.</p><p>Із попередніми версіями продукту вже працювали понад 200 людей. З часом я вдосконалила підхід до досліджень, додала нові інструменти та перетворила Маркетинг-сет на повноцінну AI-платформу. У ній я об'єднала частину своїх практичних напрацювань із можливостями технологій, щоб підприємці, експерти та маркетологи могли самостійно досліджувати свої продукти, створювати стратегії та переходити до їх реалізації.</p></div>
          </div>
        </div>
      </section>

      {/* 09 Offer */}
      <section id="buy" className="ms3-section ms3-teal">
        <div className="ms3-wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div><h2>Маркетинг-сет + Action-навігатор</h2><p className="ms3-serif mt-5 text-2xl italic">Ваша маркетингова стратегія та персональний план її реалізації — в одному наборі</p><p className="ms3-serif mt-10 text-[88px] leading-none">{offer3.priceEUR} €</p><p className="mt-6 max-w-md">Ви розповідаєте про свій продукт, а Маркетинг-сет допомагає пройти дослідження й отримати:</p></div>
          <div>
            <ul className="border-t border-current/30">{[["Індивідуальну маркетингову стратегію", "Із висновками про продукт, потенційних покупців, конкурентне середовище, позиціонування та перспективні канали просування."], ["Готові PDF та презентації", "Щоб користуватися результатами у власній роботі, обговорювати їх із командою або передавати спеціалістам."], ["Action-навігатор — уже у вашому наборі", "Ваш персональний AI-помічник складе план реалізації стратегії, допоможе визначити послідовність завдань і відстежувати їх виконання."]].map(([t, b]) => <li key={t} className="border-b border-current/30 py-6"><h3 className="!text-[22px]">{t}</h3><p className="mt-2 opacity-85">{b}</p></li>)}</ul>
            <p className="mt-6 font-medium">Усе це входить у {offer3.priceEUR} €.</p>
            <div className="mt-8">{cta("ms3-cta-light")}</div>
            <div className="mt-12 border-t border-current/30 pt-8"><h3 className="!text-[22px]">А якщо знадобиться допомога з реалізацією?</h3><p className="mt-3 opacity-85">Ви можете доповнити свій Маркетинг-сет ще {offer3.extraAssistantsCount} спеціалізованими AI-асистентами — для контенту, реклами, email, продажів, лід-магнітів, лендингів і воронок. Додавайте потрібних асистентів окремо за додаткову оплату або оберіть комплект усіх 7 за {offer3.allSevenAssistantsEUR} €.</p></div>
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <section id="faq" className="ms3-section bg-paper">
        <div className="ms3-wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><h2>Часті запитання</h2>
          <Accordion type="single" collapsible>{faq3.map(([q, ans], i) => <AccordionItem key={q} value={`f${i}`} className="border-line"><AccordionTrigger className="ms3-serif py-6 text-left text-xl font-normal hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-6 text-base leading-relaxed text-charcoal/80">{ans}</AccordionContent></AccordionItem>)}</Accordion>
        </div>
      </section>

      {/* 11 Final CTA */}
      <section className="ms3-section ms3-final bg-sand relative overflow-hidden">
        <img src={shell.url} alt="" aria-hidden className="ms3-final-shell" loading="lazy" />
        <div className="ms3-wrap relative">
          <div className="max-w-[640px]"><h2>Почніть із рішень, які справді потрібні вашому проєкту чи ідеї</h2>
            <p className="ms3-copy mt-6">Зрозумійте, кому потрібен ваш продукт, чим він може вирізнятися серед конкурентів та куди варто спрямовувати гроші й зусилля.</p>
            <p className="ms3-copy mt-4">Маркетинг-сет допоможе створити індивідуальну маркетингову стратегію, а Action-навігатор — перейти до конкретних завдань.</p>
            <div className="mt-9 flex flex-wrap items-center gap-8"><p className="ms3-serif text-[56px] leading-none text-teal">{offer3.priceEUR} €</p>{cta()}</div>
            <p className="mt-6 text-sm text-charcoal/75">Маркетингова стратегія та Action-навігатор входять у вартість.</p>
            <p className="mt-1 text-sm text-charcoal/75">+ 7 окремих AI-асистентів під різні задачі маркетингу</p>
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-line bg-paper"><div className="ms3-wrap flex flex-wrap items-center justify-between gap-5 py-10 text-xs text-smoke"><Link to="/">© 2026 Vita Shablii</Link><div className="flex flex-wrap gap-6"><Link to="/ua/marketing-set">Маркетинг-сет</Link><Link to="/marketing-set-2">Маркетинг-сет 2</Link></div><a href="mailto:hello@vitashablii.com">hello@vitashablii.com</a></div></footer>

    <Dialog open={buyOpen} onOpenChange={setBuyOpen}><DialogContent className="ms3-page rounded-none bg-paper shadow-none"><DialogTitle className="ms3-serif text-3xl">Маркетинг-сет · {offer3.priceEUR} €</DialogTitle><DialogDescription className="mt-3 text-sm leading-relaxed text-charcoal/80">Оплату на цій сторінці ще не підключено. Напишіть нам — і ми надішлемо посилання на доступ до платформи.</DialogDescription><a className="ms3-cta mt-4 justify-center" href="mailto:hello@vitashablii.com?subject=Маркетинг-сет%20—%20доступ">Написати на hello@vitashablii.com <ArrowRight className="size-4" /></a></DialogContent></Dialog>
  </div>;
}
