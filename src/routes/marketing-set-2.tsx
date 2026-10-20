import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Download, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import { offer, personas, steps, assistants, faq, comparisons, passport } from "@/components/marketing-set-2/content";
import shell from "@/assets/shell-hero.jpg.asset.json";
import portrait from "@/assets/vita-portrait.jpg";

const title = "Маркетинг-сет 2 — стратегія вашого бренду | Vita Shablii";
const description = "П’ять кроків від продукту до позиціонування. Маркетинг-сет Віти Шаблій: стратегія, паспорт бренду й асистенти з ШІ.";
export const Route = createFileRoute("/marketing-set-2")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: MarketingSetTwo,
});

function Label({ n, children }: { n: string; children: ReactNode }) {
  return <p className="section-num mb-6">{n} / {children}</p>;
}
function Bullets({ items }: { items: readonly string[] }) {
  return <ul className="space-y-4">{items.map(item => <li key={item} className="flex gap-3"><ArrowRight className="mt-1.5 size-4 shrink-0 text-olive" /><span>{item}</span></li>)}</ul>;
}
const sampleText = "# Паспорт бренду\n\nКерамічна студія «Глина і вечір»\n\n" + passport.map(x => `## ${x.label}\n${x.value}`).join("\n\n") + "\n\nВигаданий приклад для ілюстрації.";

function MarketingSetTwo() {
  const [buyOpen, setBuyOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const cta = (light = false) => <Button className={`ms2-cta ${light ? "bg-ivory text-btn-dark hover:bg-ivory/90" : "bg-btn-dark text-btn-dark-foreground hover:bg-btn-dark/90"}`} onClick={() => setBuyOpen(true)}>Отримати Маркетинг-сет <ArrowRight /></Button>;
  function downloadSample() {
    const url = URL.createObjectURL(new Blob([sampleText], { type: "text/markdown;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "passport-brand-example.md"; a.click(); URL.revokeObjectURL(url);
  }
  async function copySample() {
    try { await navigator.clipboard.writeText(sampleText); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  return <div className="ms2-page bg-ivory text-charcoal" lang="uk">
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-ivory/95 backdrop-blur-sm">
      <div className="ms2-wrap flex h-20 items-center justify-between gap-4">
        <Link to="/" className="ms2-serif text-xl" aria-label="Vita Shablii — головна">Vita Shablii<span className="ml-3 hidden font-sans-neutral text-[10px] text-smoke sm:inline">clarity before complexity.</span></Link>
        <nav className="flex items-center gap-7" aria-label="Розділи Маркетинг-сету">
          <a href="#for-whom" className="hidden text-xs text-smoke hover:text-charcoal lg:block">Для кого</a>
          <a href="#how" className="hidden text-xs text-smoke hover:text-charcoal lg:block">Як це працює</a>
          <a href="#faq" className="hidden text-xs text-smoke hover:text-charcoal lg:block">Питання</a>
          <Button asChild variant="ghost" className="rounded-none px-0 text-[11px] hover:bg-transparent hover:text-olive"><a href="#buy">Отримати доступ <ArrowUpRight /></a></Button>
        </nav>
      </div>
    </header>
    <main>
      <section className="ms2-hero relative isolate overflow-hidden">
        <img src={shell.url} alt="" aria-hidden className="pointer-events-none absolute right-0 top-20 -z-10 h-[570px] w-[650px] max-w-none object-contain opacity-[0.13] sm:right-[7%]" />
        <div className="ms2-wrap relative text-center">
          <p className="label-xs mb-7">Маркетинг-сет · платформа</p>
          <h1>Маркетинг-сет</h1>
          <p className="ms2-serif ms2-hero-subtitle mx-auto mt-5 max-w-[790px]">Маркетингова стратегія вашого бренду.<br /><em className="text-olive">За один вечір.</em></p>
          <p className="ms2-copy mx-auto mt-7 max-w-[650px] text-charcoal/75">Ви відповідаєте на питання про свій продукт. Платформа разом зі штучним інтелектом збирає з цього унікальність, ринок, аудиторію й ядро бренду.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] uppercase text-smoke"><span>{offer.strategySteps} кроків</span><span className="h-1 w-1 rounded-full bg-olive" /><span>Одна кнопка на крок</span><span className="h-1 w-1 rounded-full bg-olive" /><span>Без копіювання промптів</span></div>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6">{cta()}<div className="text-left"><p className="ms2-serif text-3xl">{offer.priceUAH} грн</p><p className="text-[10px] text-smoke">Один платіж · доступ назавжди</p></div></div>
          <p className="mx-auto mt-5 max-w-[500px] text-[11px] text-smoke">Потрібен платний тариф Claude. Тексти створюються у вашому акаунті — дані й ліміти лишаються вашими.</p>
        </div>
      </section>

      <section className="ms2-section border-t border-line">
        <div className="ms2-wrap grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div><Label n="01">Спочатку — ясність</Label><h2>Перш ніж робити<br /><em>більше маркетингу.</em></h2><p className="ms2-copy mt-7 text-charcoal/75">Чому контент, реклама і ШІ не допомагають, коли немає відповідей? ШІ не знає, чим ви відрізняєтесь. Тому кожен новий текст доводиться пояснювати з нуля.</p><div className="mt-8 space-y-5">{["У чому насправді цінність вашого продукту?", "Кому він має бути цікавим, а кому ні?", "Чому обрати саме вас, а не сусіда?", "Навколо чого будувати всю комунікацію?"].map((q,i) => <p key={q} className="flex gap-4"><span className="text-xs text-olive">0{i+1}</span><span className="ms2-serif text-xl">{q}</span></p>)}</div><p className="mt-8 text-sm text-smoke">Маркетинг-сет дає ці відповіді спочатку, а вже потім ви робите контент.</p></div>
          <div className="border border-line bg-paper" aria-label="Приклад стратегії на платформі"><div className="flex justify-between border-b border-line px-6 py-5 text-[10px] uppercase text-smoke"><span>Ваша стратегія</span><span>Приклад</span></div><ol>{steps.slice(0,6).map((s,i) => <li key={s.n} className={`grid grid-cols-[26px_1fr_auto] items-center gap-3 border-b border-line px-6 py-5 ${i === 2 ? "bg-sage/45" : ""}`}><span className="text-xs text-olive">{s.n}</span><span className="ms2-serif text-xl">{s.title}</span><span className="text-[9px] text-smoke">{i < 2 ? <Check className="size-4 text-olive" aria-label="Готово" /> : i === 2 ? "Працює…" : i === 5 ? "Підсумок" : "Далі"}</span></li>)}</ol><div className="flex items-center gap-3 px-6 py-5 text-xs text-smoke"><Sparkles className="size-4 text-olive" />Кожен крок знає все з попередніх.</div></div>
        </div>
      </section>

      <section id="for-whom" className="ms2-section bg-stone/60"><div className="ms2-wrap"><Label n="02">Це для мене?</Label><h2>Три ситуації.<br /><em>Одна й та сама причина.</em></h2><Tabs defaultValue="expert" className="mt-10"><TabsList className="ms2-tabs" aria-label="Хто ви">{personas.map(p => <TabsTrigger key={p.id} value={p.id} className="ms2-tab">{p.label}</TabsTrigger>)}</TabsList>{personas.map(p => <TabsContent key={p.id} value={p.id} className="mt-10"><div className="grid gap-10 lg:grid-cols-2 lg:gap-20"><dl>{[{label:"Коли",value:p.when},{label:"Я хочу",value:p.want},{label:"Щоб",value:p.so}].map(x => <div key={x.label} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[76px_1fr]"><dt className="text-[10px] uppercase text-olive">{x.label}</dt><dd className="ms2-serif text-xl leading-relaxed">{x.value}</dd></div>)}</dl><div><blockquote className="ms2-serif border-l-2 border-olive pl-6 text-2xl italic leading-relaxed">{p.quote}</blockquote><p className="label-xs mb-5 mt-8">Що ви отримаєте</p><Bullets items={p.gets} /></div></div></TabsContent>)}</Tabs></div></section>

      <section className="ms2-section"><div className="ms2-wrap"><Label n="03">Чим це відрізняється</Label><h2>Не чат із ШІ.<br /><em>І не агенція.</em></h2><p className="mt-5 max-w-xl text-sm text-smoke">Це середина між двома способами, які зазвичай обирають.</p><div className="mt-10 grid gap-9 md:grid-cols-3">{["Чат із ШІ","Агенція чи консультант","Маркетинг-сет"].map((name,i) => <article key={name} className={`border-t-2 pt-6 ${i===2 ? "border-olive" : "border-line"}`}><div className="flex items-center justify-between"><h3>{name}</h3>{i===2 && <Sparkles className="size-5 text-olive" />}</div><dl className="mt-6 space-y-6">{comparisons.map(row => <div key={row.label}><dt className="mb-1 text-[10px] uppercase text-smoke">{row.label}</dt><dd className="text-sm">{row.values[i]}</dd></div>)}</dl></article>)}</div></div></section>

      <section id="how" className="ms2-section teal-room relative overflow-hidden"><div className="ms2-wrap relative"><Label n="04">Як це працює</Label><div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20"><h2>П’ять кроків.<br /><em>Одна зв’язана система.</em></h2><p className="self-end text-sm text-charcoal/85">Кожен крок робить наступний точнішим. Платформа сама складає завдання для ШІ з ваших відповідей — нічого копіювати й вставляти не треба.</p></div><div className="ms2-process mt-14">{steps.slice(0,5).map(s => <article key={s.n}><p className="ms2-serif mb-5 border-b border-line pb-4 text-4xl text-olive">{s.n}</p><h3>{s.title}</h3><p className="mt-4 text-[13px] leading-relaxed text-charcoal/85">{s.body}</p><p className="mt-5 text-[10px] uppercase text-olive">{s.out}</p></article>)}</div><div className="mt-14 grid gap-10 border-t border-line pt-9 md:grid-cols-2">{steps.slice(5).map(s => <div key={s.n} className="flex gap-5"><FileText className="mt-1 size-6 shrink-0 text-olive" /><div><p className="mb-3 text-[10px] uppercase text-olive">{s.n === '06' ? 'Результат' : 'Наступний рівень'}</p><h3>{s.title}</h3><p className="mt-3 text-sm text-charcoal/85">{s.body}</p></div></div>)}</div></div></section>

      <section className="ms2-section"><div className="ms2-wrap grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><Label n="05">Що буде на виході</Label><h2>Не ще один документ,<br /><em>який забудеться в папці.</em></h2><p className="ms2-copy mt-7 text-charcoal/75">Паспорт бренду стисло описує, хто ви, для кого, чим сильні й як говорите. Його вставляєте в будь-який ШІ, і той одразу пише у вашому тоні. Його ж дасте дизайнеру, таргетологу чи новому колезі.</p><div className="mt-8"><Bullets items={["Цінність і відмінність: чому обирати вас", "Карта ринку й вільне місце для позиціонування", "Сегменти клієнтів і логіка їхнього вибору", "Меседжі, тон і заборонені слова"]} /></div></div><div><div className="ms2-passport border border-line bg-paper"><div className="flex justify-between gap-3 border-b border-line px-6 py-4 text-[10px] uppercase text-smoke"><span>passport-brand.md</span><span>Приклад</span></div><div className="p-6 sm:p-8"><h3>Керамічна студія<br /><em>«Глина і вечір»</em></h3><dl className="mt-6">{passport.map(row => <div key={row.label} className="border-t border-line py-4"><dt className="mb-2 text-[9px] uppercase text-olive">{row.label}</dt><dd className="text-[13px] leading-relaxed">{row.value}</dd></div>)}</dl></div><div className="flex flex-wrap gap-3 border-t border-line p-5"><Button variant="outline" className="rounded-none shadow-none text-xs" onClick={downloadSample}><Download />Завантажити приклад</Button><Button variant="ghost" className="rounded-none text-xs" onClick={copySample}>{copied ? <Check /> : <Copy />}{copied ? "Скопійовано" : "Скопіювати текст"}</Button></div></div><p className="mt-4 text-[11px] text-smoke" role="status">{copyError ? "Не вдалося скопіювати. Завантажте приклад файлом." : "Вигаданий приклад для ілюстрації. Ваш паспорт буде про ваш бренд."}</p></div></div></section>

      <section className="ms2-section bg-stone/60"><div className="ms2-wrap"><Label n="06">Після паспорта</Label><h2>Асистенти, які<br /><em>вже знають ваш бренд.</em></h2><p className="mt-5 max-w-xl text-sm text-smoke">Копірайтер входить у Маркетинг-сет. Решту підключаєте тільки тоді, коли вони вам потрібні.</p><div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{assistants.map(a => <article key={a.title} className="border-t border-line pt-5"><p className="mb-4 text-[10px] text-olive">{a.price===0 ? "Входить у комплект" : `${a.price} €`}</p><h3>{a.title}</h3><p className="mt-3 text-[13px] text-charcoal/75">{a.body}</p></article>)}</div><div className="mt-10 flex flex-wrap items-baseline justify-between gap-5 border-t border-line pt-7"><p className="ms2-serif text-2xl">Усі 8 асистентів за <em>{offer.bundleEUR} €</em></p><p className="text-xs text-smoke">Окремо в сумі 40 € · доступ лишається у вас</p></div></div></section>

      <section className="ms2-section"><div className="ms2-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><figure><img src={portrait} alt="Віта Шаблій — авторка Маркетинг-сету" loading="lazy" className="aspect-[4/5] w-full object-cover" /><figcaption className="mt-4 text-xs text-smoke">Віта Шаблій · стратегиня, засновниця, консультантка</figcaption></figure><div><Label n="07">Виросло з практики</Label><h2>Спочатку — контекст.<br /><em>Потім — маркетинг.</em></h2><p className="ms2-copy mt-7 text-charcoal/75">Я створила Маркетинг-сет, бо бачила одну закономірність у різних бізнесах: контент стартує до позиціонування, кампанії — до розуміння клієнта. ШІ генерує деталі до того, як хтось вирішив, навколо чого все будується.</p><blockquote className="ms2-serif mt-8 text-2xl italic leading-relaxed">Я не даю відповіді для вашого бізнесу. Я даю систему, щоб ви знайшли свої.</blockquote><div className="mt-10 grid grid-cols-2 gap-7 border-t border-line pt-7">{[["13+","років у маркетингу, стратегії та продуктах"],["500+","реалізованих проєктів і подій"],["15+","брендів, створених з нуля"],["3","ринки: Європа, США, Китай"]].map(([n,t]) => <div key={n}><p className="ms2-serif text-4xl text-olive">{n}</p><p className="mt-2 text-xs text-smoke">{t}</p></div>)}</div></div></div></section>

      <section className="ms2-section border-t border-line"><div className="ms2-wrap"><Label n="08">Перш ніж купувати</Label><h2>Три речі, які<br /><em>варто знати наперед.</em></h2><div className="mt-10 grid gap-9 md:grid-cols-3">{[["Платний тариф Claude","Платформа працює в Claude й використовує ваш власний акаунт. На безкоштовному тарифі генерація може не запуститися."],["Чесні відповіді в анкеті","Чим точніше ви опишете продукт, тим точніший результат. Уся робота займає одну-дві сесії."],["Рішення лишаються за вами","ШІ структурує контекст і допомагає досліджувати. Перевірка на реальних клієнтах і відгук ринку лишаються за вами."]].map(([t,b],i) => <article key={t}><p className="mb-4 text-xs text-olive">0{i+1}</p><h3>{t}</h3><p className="mt-4 text-sm text-smoke">{b}</p></article>)}</div></div></section>

      <section id="faq" className="ms2-section bg-stone/60"><div className="ms2-wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><Label n="09">Питання</Label><h2>Перш ніж<br /><em>почати.</em></h2></div><Accordion type="single" collapsible>{faq.map((q,i) => <AccordionItem key={q.question} value={`faq-${i}`} className="border-line"><AccordionTrigger className="ms2-serif py-6 text-xl font-normal leading-relaxed hover:no-underline">{q.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed text-smoke">{q.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="buy" className="ms2-section olive-room relative isolate overflow-hidden"><ShellBackdrop /><div className="ms2-wrap relative text-center"><p className="label-xs mb-7">Одна краща точка старту</p><h2 className="mx-auto max-w-[820px]">Не просіть ШІ зробити більше.<br /><em>Дайте йому основу, з якої варто будувати.</em></h2><p className="mx-auto mt-7 max-w-[620px] text-sm text-charcoal/85">Побудуйте фундамент один раз і вдосконалюйте його разом із розвитком продукту й ринку.</p><p className="ms2-serif mt-9 text-5xl">{offer.priceUAH} грн</p><p className="mb-7 mt-3 text-[11px] text-smoke">Один платіж · доступ назавжди · без підписки</p>{cta(true)}<p className="mt-5 text-[11px] text-smoke">Потрібен платний тариф Claude.</p></div></section>
    </main>
    <footer className="ms2-wrap flex flex-wrap items-center justify-between gap-5 py-10 text-xs text-smoke"><Link to="/">© 2026 Vita Shablii</Link><Link to="/marketing-set">Marketing Set — original edition <ArrowUpRight className="ml-1 inline size-3" /></Link><a href="mailto:hello@vitashablii.com">hello@vitashablii.com</a></footer>
    <Dialog open={buyOpen} onOpenChange={setBuyOpen}><DialogContent className="ms2-page rounded-none shadow-none"><DialogHeader><DialogTitle className="ms2-serif text-3xl">Маркетинг-сет · {offer.priceUAH} грн</DialogTitle><DialogDescription className="mt-4 text-sm leading-relaxed">Оплату на цій сторінці ще не підключено. Щоб дізнатися про доступ, напишіть Віті.</DialogDescription></DialogHeader><Button asChild className="ms2-cta mt-3 bg-btn-dark text-btn-dark-foreground"><a href="mailto:hello@vitashablii.com?subject=Marketing%20Set%202">Запитати про доступ <ArrowUpRight /></a></Button></DialogContent></Dialog>
  </div>;
}