import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import { ProductPreview } from "@/components/marketing-set-2/ProductPreview";
import { offer, personas, steps, assistants, faq } from "@/components/marketing-set-2/content";
import shell from "@/assets/shell-hero.jpg.asset.json";
import portrait from "@/assets/vita-at-work.png.asset.json";
import mist from "@/assets/about-mist.jpg";
import desk from "@/assets/ms-desk.jpg";
import layers from "@/assets/ms-layers.jpg";

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
function MarketingSetTwo() {
  const [buyOpen, setBuyOpen] = useState(false);
  const cta = (light = false) => <Button className={`ms2-cta ${light ? "bg-ivory text-btn-dark hover:bg-ivory/90" : "bg-btn-dark text-btn-dark-foreground hover:bg-btn-dark/90"}`} onClick={() => setBuyOpen(true)}>Отримати Маркетинг-сет <ArrowRight /></Button>;
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
      <section className="ms2-hero ms2-hero-color relative isolate overflow-hidden">
        <div aria-hidden className="ms2-hero-glow" />
        <div className="ms2-wrap relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <p className="label-xs mb-7 text-olive">Маркетинг-сет · платформа</p>
            <h1>Маркетинг-сет</h1>
            <p className="ms2-serif ms2-hero-subtitle mt-5 max-w-[620px] max-lg:mx-auto">Маркетингова стратегія вашого бренду.<br /><em className="text-olive">За один вечір.</em></p>
            <p className="ms2-copy mt-7 max-w-[560px] text-charcoal/80 max-lg:mx-auto">Ви відповідаєте на питання про свій продукт. Платформа разом зі штучним інтелектом збирає з цього унікальність, ринок, аудиторію й ядро бренду.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] uppercase text-charcoal/70 max-lg:justify-center"><span>{offer.strategySteps} кроків</span><span className="h-1 w-1 rounded-full bg-olive" /><span>Одна кнопка на крок</span><span className="h-1 w-1 rounded-full bg-olive" /><span>Без копіювання промптів</span></div>
            <div className="mt-9 flex flex-wrap items-center gap-6 max-lg:justify-center">{cta()}<div className="text-left"><p className="ms2-serif text-3xl">{offer.priceUAH} грн</p><p className="text-[10px] text-charcoal/70">Один платіж · доступ назавжди</p></div></div>
            <p className="mt-5 max-w-[500px] text-[11px] text-charcoal/70 max-lg:mx-auto">Потрібен платний тариф Claude. Тексти створюються у вашому акаунті — дані й ліміти лишаються вашими.</p>
          </div>
          <div className="relative mx-auto aspect-[9/16] h-[380px] sm:h-[460px] lg:h-[600px]">
            <img src={shell.url} alt="Мушля наутілуса — символ системи, що росте з центру" className="absolute inset-0 h-full w-full -rotate-[8deg] object-cover mix-blend-multiply [filter:contrast(1.15)_saturate(1.1)] [mask-image:radial-gradient(closest-side,black_62%,transparent_100%)]" />
          </div>
        </div>
      </section>

      <section className="ms2-section border-t border-line"><div className="ms2-wrap"><h2>Від ваших відповідей<br /><em>до матеріалів для бренду.</em></h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-3"><ProductPreview screen="questions" compact /><ProductPreview screen="passport" compact /><ProductPreview screen="assistant" compact /></div>
        <p className="mt-6 text-[11px] text-smoke">Екрани з розгортки продукту. Дані на них — приклад заповнення.</p>
      </div></section>

      <section className="ms2-section border-t border-line">
        <div className="ms2-wrap grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div><h2>Перш ніж робити<br /><em>більше маркетингу.</em></h2><p className="ms2-copy mt-7 text-charcoal/75">Чому контент, реклама і ШІ не допомагають, коли немає відповідей? ШІ не знає, чим ви відрізняєтесь. Тому кожен новий текст доводиться пояснювати з нуля.</p><div className="mt-8 space-y-5">{["У чому насправді цінність вашого продукту?", "Кому він має бути цікавим, а кому ні?", "Чому обрати саме вас, а не сусіда?", "Навколо чого будувати всю комунікацію?"].map((q,i) => <p key={q} className="flex gap-4"><span className="text-xs text-olive">0{i+1}</span><span className="ms2-serif text-xl">{q}</span></p>)}</div><p className="mt-8 text-sm text-smoke">Маркетинг-сет дає ці відповіді спочатку, а вже потім ви робите контент.</p></div>
          <div className="border border-line bg-paper" aria-label="Приклад стратегії на платформі"><div className="flex justify-between border-b border-line px-6 py-5 text-[10px] uppercase text-smoke"><span>Ваша стратегія</span><span>Приклад</span></div><ol>{steps.slice(0,6).map((s,i) => <li key={s.n} className={`grid grid-cols-[26px_1fr_auto] items-center gap-3 border-b border-line px-6 py-5 ${i === 2 ? "bg-sage/45" : ""}`}><span className="text-xs text-olive">{s.n}</span><span className="ms2-serif text-xl">{s.title}</span><span className="text-[9px] text-smoke">{i < 2 ? <Check className="size-4 text-olive" aria-label="Готово" /> : i === 2 ? "Працює…" : i === 5 ? "Підсумок" : "Далі"}</span></li>)}</ol><div className="flex items-center gap-3 px-6 py-5 text-xs text-smoke"><Sparkles className="size-4 text-olive" />Кожен крок знає все з попередніх.</div></div>
        </div>
      </section>

      <section id="for-whom" className="ms2-section bg-stone/60"><div className="ms2-wrap"><h2>Три ситуації.<br /><em>Одна й та сама причина.</em></h2><Tabs defaultValue="expert" className="mt-10"><TabsList className="ms2-tabs" aria-label="Хто ви">{personas.map(p => <TabsTrigger key={p.id} value={p.id} className="ms2-tab">{p.label}</TabsTrigger>)}</TabsList>{personas.map(p => <TabsContent key={p.id} value={p.id} className="mt-10"><div className="grid gap-10 lg:grid-cols-2 lg:gap-20"><dl>{[{label:"Коли",value:p.when},{label:"Хочете",value:p.want},{label:"Щоб",value:p.so}].map(x => <div key={x.label} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[88px_1fr]"><dt className="text-[10px] uppercase text-olive">{x.label}</dt><dd className="ms2-serif text-xl leading-relaxed">{x.value}</dd></div>)}</dl><div><blockquote className="ms2-serif border-l-2 border-olive pl-6 text-2xl italic leading-relaxed">{p.quote}</blockquote><div className="mt-8"></div><Bullets items={p.gets} /></div></div></TabsContent>)}</Tabs></div></section>

      <figure className="relative h-[300px] overflow-hidden md:h-[420px]">
        <img src={mist} alt="Тихий ранковий туман над водою — метафора ясності" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <figcaption className="absolute inset-0 flex items-center justify-center bg-olive/20 px-6"><p className="ms2-serif max-w-md text-center text-2xl italic leading-snug text-ivory md:text-3xl">Ясність раніше за складність.</p></figcaption>
      </figure>

      <section className="ms2-section"><div className="ms2-wrap"><h2>Не шукати наступний промпт.<br /><em>Продовжувати свою стратегію.</em></h2><p className="mt-5 max-w-2xl text-sm text-smoke">ШІ вже є і в агенціях, і у вашій щоденній роботі. Тут важлива не сама генерація, а те, з якими даними вона працює.</p><div className="mt-10 grid gap-9 md:grid-cols-3">{[
        ["Ваші відповіді → точніші питання", "В анкеті описуєте продукт. На наступному кроці система ставить уточнювальні питання саме про нього."],
        ["Попередні висновки → наступний крок", "Аналіз конкурентів, аудиторії та ядро бренду використовують уже зібрану інформацію. Переносити її між чатами не потрібно."],
        ["Паспорт бренду → робота асистентів", "Після стратегії відкриваєте асистента й ставите завдання. Він уже має паспорт вашого бренду."]
      ].map(([t,b],i)=><article key={t} className="border-t border-line pt-6"><p className="mb-4 text-xs text-olive">0{i+1}</p><h3>{t}</h3><p className="mt-4 text-sm text-smoke">{b}</p></article>)}</div></div></section>

      <section id="how" className="ms2-section teal-room relative overflow-hidden"><div className="ms2-wrap relative"><div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20"><h2>П’ять кроків,<br /><em>з яких складається стратегія.</em></h2><p className="self-end text-sm text-charcoal/85">Ви заповнюєте анкету й відповідаєте на питання. Система використовує ці відповіді для аналізу конкурентів, аудиторії та позиціонування.</p></div><div className="ms2-process mt-14">{steps.slice(0,5).map(s => <article key={s.n}><p className="ms2-serif mb-5 border-b border-line pb-4 text-4xl text-olive">{s.n}</p><h3>{s.title}</h3><p className="mt-4 text-[13px] leading-relaxed text-charcoal/85">{s.body}</p></article>)}</div>
        <div className="ms2-payoffs"><div className="grid gap-6 md:grid-cols-2">
          <article className="ms2-payoff ms2-payoff-result"><img src={shell.url} alt="" aria-hidden className="ms2-payoff-shell" /><p className="ms2-payoff-kicker">Результат</p><h3 className="ms2-payoff-title">Паспорт бренду</h3><p className="ms2-payoff-body max-w-sm">Висновки всіх п’яти кроків в одному документі: продукт, відмінність, клієнти, позиціонування, меседжі.</p><p className="ms2-payoff-foot text-smoke">Для команди або будь-якого ШІ.</p></article>
          <article className="ms2-payoff ms2-payoff-next olive-room"><ShellBackdrop /><p className="ms2-payoff-kicker">Наступний рівень</p><h3 className="ms2-payoff-title">Ваші асистенти</h3><p className="ms2-payoff-body max-w-sm">Паспорт стає їхньою базою знань. Контент, сценарії, реклама — без повторного пояснення бренду.</p><p className="ms2-payoff-foot">Копірайтер у комплекті · решта — за потреби.</p></article>
        </div></div>
      </div></section>

      <section className="ms2-section"><div className="ms2-wrap grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"><div><h2>Ваша стратегія.<br /><em>В одному файлі.</em></h2><p className="ms2-copy mt-7 max-w-md text-charcoal/75">Для SMM-фахівця, таргетолога, дизайнера — або як база знань для ШІ.</p><div className="mt-10 flex flex-wrap gap-3">{["Паспорт бренду", "Точка росту", "Конкуренти", "Аудиторія", "Ядро бренду", "ZIP"].map(f => <span key={f} className="border border-line px-4 py-2 text-[11px] uppercase text-charcoal/80">{f}</span>)}</div></div><figure className="relative aspect-[4/5] overflow-hidden"><img src={layers} alt="Шари паперу — стратегія, зібрана в одне ціле" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></figure></div></section>

      <section className="ms2-section bg-stone/60"><div className="ms2-wrap"><h2>Асистенти, які<br /><em>вже знають ваш бренд.</em></h2><p className="mt-5 max-w-xl text-sm text-smoke">Копірайтер входить у Маркетинг-сет. Решту підключаєте тільки тоді, коли вони вам потрібні.</p><div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{assistants.map(a => <article key={a.title} className="border-t border-line pt-5"><h3>{a.title}</h3><p className="mt-3 text-[13px] text-charcoal/75">{a.body}</p></article>)}</div><div className="mt-10 flex flex-wrap items-baseline justify-between gap-5 border-t border-line pt-7"><p className="ms2-serif text-2xl">Усі 8 асистентів за <em>{offer.bundleEUR} €</em></p><p className="text-xs text-smoke">Окремо в сумі 40 € · доступ лишається у вас</p></div></div></section>

      <section className="ms2-section"><div className="ms2-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><figure><img src={portrait.url} alt="Віта Шаблій — авторка Маркетинг-сету" loading="lazy" className="aspect-[9/13] w-full object-cover" /><figcaption className="mt-4 text-xs text-smoke">Віта Шаблій · стратегиня, засновниця, консультантка</figcaption></figure><div><h2>Спочатку — контекст.<br /><em>Потім — маркетинг.</em></h2><p className="ms2-copy mt-7 text-charcoal/75">Я створила Маркетинг-сет, бо бачила одну закономірність у різних бізнесах: контент стартує до позиціонування, кампанії — до розуміння клієнта. ШІ генерує деталі до того, як хтось вирішив, навколо чого все будується.</p><blockquote className="ms2-serif mt-8 text-2xl italic leading-relaxed">Я не даю відповіді для вашого бізнесу. Я даю систему, щоб ви знайшли свої.</blockquote><div className="mt-10 grid grid-cols-2 gap-7 border-t border-line pt-7">{[["13+","років у маркетингу, стратегії та продуктах"],["500+","реалізованих проєктів і подій"],["15+","брендів, створених з нуля"],["3","ринки: Європа, США, Китай"]].map(([n,t]) => <div key={n}><p className="ms2-serif text-4xl text-olive">{n}</p><p className="mt-2 text-xs text-smoke">{t}</p></div>)}</div></div></div>
      <figure className="relative h-[300px] overflow-hidden md:h-[420px]">
        <img src={desk} alt="Робочий стіл із блокнотом, ескізами й гілкою оливи — процес стратегії" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <figcaption className="absolute inset-0 flex items-center justify-center bg-olive/20 px-6"><p className="ms2-serif max-w-md text-center text-2xl italic leading-snug text-charcoal md:text-3xl">Ідея стає системою.</p></figcaption>
      </figure>

</section>

      <section className="ms2-section border-t border-line"><div className="ms2-wrap"><h2>Три речі, які<br /><em>варто знати наперед.</em></h2><div className="mt-10 grid gap-9 md:grid-cols-3">{[["Платний тариф Claude","Платформа працює в Claude й використовує ваш власний акаунт. На безкоштовному тарифі генерація може не запуститися."],["Чесні відповіді в анкеті","Чим точніше ви опишете продукт, тим точніший результат. Уся робота займає одну-дві сесії."],["Рішення лишаються за вами","ШІ структурує контекст і допомагає досліджувати. Перевірка на реальних клієнтах і відгук ринку лишаються за вами."]].map(([t,b],i) => <article key={t}><p className="mb-4 text-xs text-olive">0{i+1}</p><h3>{t}</h3><p className="mt-4 text-sm text-smoke">{b}</p></article>)}</div></div></section>

      <section id="faq" className="ms2-section bg-stone/60"><div className="ms2-wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><h2>Перш ніж<br /><em>почати.</em></h2></div><Accordion type="single" collapsible>{faq.map((q,i) => <AccordionItem key={q.question} value={`faq-${i}`} className="border-line"><AccordionTrigger className="ms2-serif py-6 text-xl font-normal leading-relaxed hover:no-underline">{q.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed text-smoke">{q.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="buy" className="ms2-section olive-room relative isolate overflow-hidden"><ShellBackdrop /><div className="ms2-wrap relative text-center"><p className="label-xs mb-7">Ідеальна точка старту</p><h2 className="mx-auto max-w-[820px]">Не просіть ШІ зробити більше.<br /><em>Дайте йому основу, з якої варто будувати.</em></h2><p className="mx-auto mt-7 max-w-[620px] text-sm text-charcoal/85">Побудуйте фундамент один раз і вдосконалюйте його разом із розвитком продукту й ринку.</p><p className="ms2-serif mt-9 text-5xl">{offer.priceUAH} грн</p><p className="mb-7 mt-3 text-[11px] text-smoke">Один платіж · доступ назавжди · без підписки</p>{cta(true)}<p className="mt-5 text-[11px] text-smoke">Потрібен платний тариф Claude.</p></div></section>
    </main>
    <footer className="ms2-wrap flex flex-wrap items-center justify-between gap-5 py-10 text-xs text-smoke"><Link to="/">© 2026 Vita Shablii</Link><Link to="/marketing-set">Marketing Set — original edition <ArrowUpRight className="ml-1 inline size-3" /></Link><a href="mailto:hello@vitashablii.com">hello@vitashablii.com</a></footer>
    <Dialog open={buyOpen} onOpenChange={setBuyOpen}><DialogContent className="ms2-page rounded-none shadow-none"><DialogHeader><DialogTitle className="ms2-serif text-3xl">Маркетинг-сет · {offer.priceUAH} грн</DialogTitle><DialogDescription className="mt-4 text-sm leading-relaxed">Оплату на цій сторінці ще не підключено. Щоб дізнатися про доступ, напишіть Віті.</DialogDescription></DialogHeader><Button asChild className="ms2-cta mt-3 bg-btn-dark text-btn-dark-foreground"><a href="mailto:hello@vitashablii.com?subject=Marketing%20Set%202">Запитати про доступ <ArrowUpRight /></a></Button></DialogContent></Dialog>
  </div>;
}
