import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ChamberSet, ChannelLanes } from "@/components/site/LineArt";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import portrait from "@/assets/vita-at-work.png.asset.json";
import layers from "@/assets/ms-layers.jpg";
import desk from "@/assets/ms-desk.jpg";
import ink from "@/assets/ink-layers.jpg.asset.json";
import ripple from "@/assets/ripple.jpg.asset.json";


const title = "Маркетинг-сет — маркетингова система зі ШІ | Віта Шаблій";
const description =
  "Покрокова маркетингова система зі штучним інтелектом: 5 стратегічних сценаріїв, особистий ШІ-асистент і 45 схем воронок. Спершу збудуйте маркетинг — потім масштабуйте.";

export const Route = createFileRoute("/ua/marketing-set")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketingSetPage,
});

const CTA_HREF = "mailto:hello@vitashablii.com?subject=Marketing%20Set";

function Cta({
  className = "",
  invert = false,
  fixed = false,
}: {
  className?: string;
  invert?: boolean;
  /** keeps the exact hero button tones even inside a colored room */
  fixed?: boolean;
}) {
  return (
    <a
      href={CTA_HREF}
      className={`label-xs group inline-flex items-center gap-3 border px-8 py-4 !tracking-[0.2em] transition-colors ${
        fixed
          ? "border-btn-dark bg-btn-dark !text-btn-dark-foreground hover:border-slate-deep hover:bg-slate-deep"
          : invert
            ? "border-ivory bg-ivory !text-slate-deep hover:border-slate hover:bg-slate hover:!text-ivory"
            : "border-charcoal bg-charcoal !text-ivory hover:border-slate-deep hover:bg-slate-deep"
      } ${className}`}
    >
      ОТРИМАТИ МАРКЕТИНГ-СЕТ
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="label-xs mb-5">{children}</p>;
}

const audience = [
  {
    n: "01",
    t: "Експерт / особистий бренд",
    d: "Ви знаєте, що робите. Але пояснити, чому обрати варто саме вас, досі складніше, ніж мало б бути.",
    o: "Прояснити цінність і позиціонування",
  },
  {
    n: "02",
    t: "Засновник / бізнес",
    d: "Продукт уже є, але частина маркетингу досі тримається на здогадках.",
    o: "Зрозуміти ринок і клієнтів",
  },
  {
    n: "03",
    t: "Маркетолог / фрилансер",
    d: "Інструменти ви знаєте. Хочеться системнішого способу думати перед тим, як робити, — особливо з ШІ.",
    o: "Збудувати логіку, до якої можна повертатися",
  },
  {
    n: "04",
    t: "Команда / клієнт агенції",
    d: "Маркетинг уже працює, але канали, брифи й кампанії не завжди виходять з одного розуміння.",
    o: "Створити спільний фундамент",
  },
];

const shift = [
  ["шум", "ясність"],
  ["здогадки", "позиціонування"],
  ["шаблонні відповіді ШІ", "контекст ринку"],
  ["розрізнена комунікація", "логіка клієнта"],
  ["випадкові експерименти", "пов’язані рішення"],
];

const outcomes = [
  {
    n: "01",
    t: "Цінність і відмінність",
    d: "Чітке формулювання того, чому варто обрати ваш продукт, послугу чи експертизу, — і звідки насправді може братися ваша найсильніша відмінність.",
  },
  {
    n: "02",
    t: "Карта ринку",
    d: "Структурований погляд на конкурентів, альтернативи, закономірності категорії та вільне місце для позиціонування.",
  },
  {
    n: "03",
    t: "Карта рішень клієнта",
    d: "Сегменти клієнтів, побудовані на мотивах, потребах, тригерах, запереченнях і логіці вибору — а не лише на демографії.",
  },
  {
    n: "04",
    t: "Позиціонування й основа повідомлень",
    d: "Ключове позиціонування, смисли й напрями комунікації, які можна перенести на сайт, у пропозиції, контент і кампанії.",
  },
  {
    n: "05",
    t: "Особистий ШІ-асистент з маркетингу",
    d: "ШІ-асистент, який спирається на вже зібраний вами контекст: продукт, ринок, аудиторію й стратегічні рішення.",
  },
];

const steps = [
  { n: "01", t: "Відмінність", q: "Чому варто обрати саме це?" },
  { n: "02", t: "Ринок", q: "З ким ви насправді конкуруєте?" },
  { n: "03", t: "Люди", q: "Кому це потрібно — і навіщо?" },
  {
    n: "04",
    t: "Ядро бренду",
    q: "Як перетворити це на позиціонування й комунікацію?",
  },
  { n: "05", t: "ШІ-асистент", q: "Як і далі користуватися всім, що ви з’ясували?" },
];

const notPrompts = [
  {
    t: "Послідовність, а не випадкові запити",
    d: "Кожен сценарій починається там, де закінчився попередній.",
  },
  {
    t: "Ваш контекст, а не шаблонні відповіді",
    d: "ШІ працює з вашим продуктом, конкурентами, клієнтами й рішеннями.",
  },
  {
    t: "Стратегія раніше за контент",
    d: "Спершу ви будуєте логіку — і лише потім просите ШІ щось виробляти.",
  },
  {
    t: "Контекст, що не втрачає цінності",
    d: "Замість щоразу починати з нуля ви створюєте основу, до якої можна повертатися.",
  },
];

const how = [
  { t: "Дивитеся", d: "Коротке відео пояснює завдання." },
  { t: "Копіюєте", d: "Берете готовий покроковий сценарій." },
  { t: "Працюєте з ШІ", d: "Проходите його на прикладі власного бізнесу." },
  { t: "Зберігаєте", d: "Залишаєте важливі висновки." },
  { t: "З’єднуєте", d: "Збираєте все в особистого ШІ-асистента з маркетингу." },
];

const receive = [
  { n: "01", t: "5 стратегічних сценаріїв зі ШІ" },
  { n: "02", t: "Покрокові відеопояснення" },
  { n: "03", t: "Налаштування особистого ШІ-асистента" },
  { n: "04", t: "45 схем воронок" },
  { n: "05", t: "Довічний доступ" },
];

const useCases = [
  {
    t: "Експерт",
    q: "Я знаю, що роблю. Просто не можу пояснити, чим це відрізняється.",
    o: "відмінність + позиціонування",
  },
  {
    t: "Бізнес",
    q: "Маркетинг у нас уже є, але кожен канал ніби говорить своє.",
    o: "логіка клієнта + спільна основа повідомлень",
  },
  {
    t: "Маркетолог",
    q: "Я постійно користуюся ШІ, але кожну нову задачу починаю майже з нуля.",
    o: "стратегічний контекст, що працює щоразу + ШІ-асистент",
  },
];

const proof = [
  { k: "13+", v: "років у маркетингу, стратегії та продуктах" },
  { k: "500+", v: "реалізованих проєктів і подій" },
  { k: "15+", v: "брендів, збудованих з нуля" },
  { k: "3", v: "ринки: Європа, США, Китай" },
];

const included = [
  "5 стратегічних сценаріїв зі ШІ",
  "Особистий ШІ-асистент з маркетингу",
  "Покрокові відеопояснення",
  "45 схем воронок",
  "Довічний доступ",
];

const faq = [
  {
    q: "Чи потрібен досвід у маркетингу?",
    a: "Ні. Система крок за кроком веде вас через логіку. Важливо лише, щоб ви могли розповісти про свій продукт, експертизу чи бізнес.",
  },
  {
    q: "Чи потрібен досвід роботи з ШІ?",
    a: "Ні. Сценарії вже вибудувані. Ви йдете за процесом і додаєте контекст свого проєкту.",
  },
  {
    q: "З якими ШІ-інструментами це працює?",
    a: "Маркетинг-сет працює з ChatGPT або Claude.",
  },
  {
    q: "Скільки часу на це закласти?",
    a: "Не обов’язково проходити все за один раз. Кожна частина — це окрема зосереджена робоча сесія, а повернутися можна будь-коли, щойно зміниться продукт, ринок чи позиціонування.",
  },
  {
    q: "ШІ дасть мені «правильну» стратегію?",
    a: "Ні — і справа не в цьому. Маркетинг-сет допомагає впорядкувати контекст, питання й аналіз, на яких тримаються сильніші рішення. ШІ лише швидше досліджує й пов’язує цю інформацію. Власне судження, експерименти й реальний відгук ринку нікуди не зникають.",
  },
  {
    q: "Маркетинг-сет — лише для особистих брендів?",
    a: "Ні. Він підходить експертам, послугам, продуктам, бізнесам і будь-яким проєктам, де треба зрозуміти цінність, аудиторію, ринок і позиціонування.",
  },
  {
    q: "Це просто збірка промптів?",
    a: "Ні. Сценарії йдуть пов’язаною послідовністю: кожен використовує контекст і висновки попередніх кроків. Ви будуєте один маркетинговий фундамент, а не збираєте окремі відповіді ШІ.",
  },
  {
    q: "Я вже працюю з маркетологом чи агенцією. Це мені знадобиться?",
    a: "Так. Маркетинг-сет стає стратегічною основою для брифів, тож усі працюють з одного розуміння продукту, аудиторії, ринку й позиціонування.",
  },
  {
    q: "Як швидко можна почати і як довго діє доступ?",
    a: "Одразу після оплати — і доступ назавжди. Жодних дедлайнів.",
  },
];

function MarketingSetPage() {
  return (
    <div className="ua-page min-h-screen bg-paper" lang="uk">
      <Header />
      <main>
        {/* ——— HERO ——— */}
        <section className="relative overflow-hidden bg-cream">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 pt-28 pb-16 md:grid-cols-12 md:px-10 md:pt-36 md:pb-24">
            <div className="md:col-span-6">
              <Reveal>
                <SectionLabel>Маркетинг-сет</SectionLabel>
                <h1 className="display-lg">
                  Спершу збудуйте маркетинг —
                  <br />
                  <span className="italic">потім масштабуйте.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-read mt-8">
                  Покрокова система зі штучним інтелектом, яка допомагає зрозуміти, у чому цінність вашого продукту, для кого він насправді, як його позиціонувати й що про нього говорити, — ще до того, як витрачати час і гроші на контент, рекламу чи агенції.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-9 flex flex-wrap gap-x-3 gap-y-2">
                  {[
                    "5 стратегічних сценаріїв зі ШІ",
                    "Особистий ШІ-асистент з маркетингу",
                    "45 схем воронок",
                    "Довічний доступ",
                  ].map((m) => (
                    <li key={m} className="label-xs bg-sage/60 px-3 py-2 !tracking-[0.14em] !text-charcoal">
                      {m}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-11 flex flex-wrap items-center gap-8">
                  <Cta />
                  <div>
                    <p className="font-serif-editorial text-3xl text-charcoal">589 грн</p>
                    <p className="label-xs mt-1 !tracking-[0.14em]">
                      Один платіж · доступ одразу
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-6">
              <ChamberSet
                nodes={["Відмінність", "Ринок", "Люди", "Ядро бренду", "ШІ-асистент"]}
                className="w-full"
              />
              <p className="label-xs mt-2 text-center !tracking-[0.16em]">
                П’ять камер · одна система, що росте
              </p>
            </div>
          </div>
        </section>

        {/* ——— THE PROBLEM ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>Перш ніж додавати маркетинг</SectionLabel>
                  <h2 className="display-md">
                    Більше маркетингу —
                    <br />
                    <span className="italic">не завжди відповідь.</span>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <img
                    src={layers}
                    alt="Шари паперу в м’якому денному світлі"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="mt-10 block w-full object-cover md:h-[300px]"
                  />
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={80}>
                  <p className="body-read">
                    Контент, реклама й ШІ можуть пришвидшити роботу. Але вони не вирішать за вас:
                  </p>
                  <ul className="mt-8 border-t border-line">
                    {[
                      "у чому справжня цінність продукту",
                      "кому він має бути важливим",
                      "чому його мають обрати",
                      "навколо чого будувати комунікацію",
                    ].map((l) => (
                      <li
                        key={l}
                        className="lead-serif border-b border-line py-4 text-charcoal"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                  <p className="body-read mt-8">
                    Поки цих відповідей немає, більше контенту, інструментів і каналів зазвичай дає більше метушні, а не ясності. Маркетинг-сет допомагає спершу закласти фундамент.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— RECOGNITION ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Reveal>
                  <SectionLabel>Це для мене?</SectionLabel>
                  <h2 className="display-md">
                    У вас уже щось є.
                    <br />
                    <span className="italic">Бракує структури навколо.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={120}>
                  <p className="body-read border-l-2 border-olive pl-6">
                    Чотири різні старти. І в кожному бракує того самого шару.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 grid gap-x-14 gap-y-0 md:mt-16 md:grid-cols-2">
              {audience.map((a, i) => (
                <Reveal key={a.t} delay={i * 80}>
                  <div className="flex h-full flex-col border-t border-line py-8 md:py-10">
                    <p className="label-xs !text-olive">
                      {a.n} / {a.t}
                    </p>
                    <p className="lead-serif mt-5 text-charcoal">
                      {a.d}
                    </p>
                    <p className="label-xs mt-auto pt-7 !tracking-[0.16em] !text-charcoal">
                      → {a.o.toUpperCase()}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— TRANSFORMATION ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>Від активності до структури</SectionLabel>
                  <h2 className="display-md">
                    Інша точка старту
                    <br />
                    <span className="italic">змінює все, що далі.</span>
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <figure className="mt-10 hidden md:block">
                    <img
                      src={ink.url}
                      alt="Шари оливкового чорнила складаються в одну прозору форму"
                      loading="lazy"
                      className="aspect-[4/5] w-full object-contain"
                    />
                    <figcaption className="label-xs mt-3 !tracking-[0.14em]">
                      Багато шарів · одна форма
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
              <div className="flex flex-col md:col-span-6 md:col-start-7 md:justify-between md:pt-10">
                <ul className="border-t border-line">
                  {shift.map(([a, b], i) => (
                    <Reveal key={a} delay={i * 70}>
                      <li className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-line py-5">
                        <span className="lead-serif text-charcoal/40 line-through decoration-taupe">
                          {a}
                        </span>
                        <span aria-hidden className="text-smoke">
                          →
                        </span>
                        <span className="quote-serif text-charcoal">
                          {b}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="quote-serif mt-10 border-l-2 border-olive bg-sage/40 px-7 py-8 text-charcoal md:mt-0">
                  Не більше маркетингу, а <span className="italic">міцніший фундамент</span> для всього, що далі.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ——— THE RESULT ——— */}
        <section className="teal-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="flex flex-col md:col-span-5">
                <Reveal>
                  <SectionLabel>Що ви збудуєте</SectionLabel>
                  <h2 className="display-md">
                    Не ще один документ,
                    <br />
                    <span className="italic">забутий у папці.</span>
                  </h2>
                  <p className="body-read mt-7">
                    Основа, якою можна користуватися — на сайті, у пропозиціях, контенті, кампаніях і кожному наступному рішенні.
                  </p>
                </Reveal>
                <Reveal delay={140} className="mt-10 hidden flex-1 md:block">
                  <img
                    src={desk}
                    alt="Блокнот зі стратегічними нотатками поруч із ноутбуком"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="h-full w-full object-cover md:min-h-[520px]"
                  />
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="border-t border-line">
                  {outcomes.map((o, i) => (
                    <Reveal key={o.t} delay={i * 70}>
                      <li className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-6">
                        <p className="label-xs !text-olive md:col-span-1">{o.n}</p>
                        <div className="md:col-span-11">
                          <h3 className="lead-serif text-charcoal">
                            {o.t}
                          </h3>
                          <p className="body-read mt-2 !max-w-none">{o.d}</p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="lead-serif mt-9 border-l-2 border-olive bg-charcoal/10 px-7 py-6 text-charcoal">
                  Результат — не п’ять окремих відповідей ШІ, а{" "}
                  <span className="italic">єдиний маркетинговий контекст</span>, з яким можна працювати й далі.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE METHOD ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Як це відбувається</SectionLabel>
                  <h2 className="display-md">
                    П’ять кроків.
                    <br />
                    <span className="italic">Кожен робить наступний розумнішим.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="body-read border-l-2 border-olive pl-6">
                    Кожен крок передає контекст далі. Ніщо не починається з порожнього промпту.
                  </p>
                </Reveal>
              </div>
            </div>

            <ol className="mt-14 grid gap-0 border-t border-line md:mt-20 md:grid-cols-5 md:border-t-0">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 80} className="h-full">
                  <li className="relative flex h-full flex-col border-b border-line py-8 md:border-b-0 md:border-t md:pr-8 md:pb-2">
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute -top-[0.72rem] right-1 hidden bg-background px-1 text-xs text-smoke md:block"
                      >
                        →
                      </span>
                    )}
                    <p className="quote-serif text-taupe">
                      {s.n}
                    </p>
                    <h3 className="label-xs mt-4 !tracking-[0.18em] !text-olive">{s.t}</h3>
                    <p className="lead-serif mt-5 text-charcoal">
                      {s.q}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— WHY NOT JUST CHATGPT ——— */}
        <section className="rule-thin bg-cream">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Reveal>
                  <SectionLabel>Чим це відрізняється</SectionLabel>
                  <h2 className="display-md">
                    ШІ можна запитати майже про все.
                    <br />
                    <span className="italic">Складніше — знати, про що варто питати.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={120}>
                  <p className="quote-serif border-l-2 border-olive pl-6 text-charcoal">
                    ШІ — лише інтерфейс.
                    <br />
                    <span className="italic">Цінність — у логіці.</span>
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-0">
              {notPrompts.map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <div className="border-t border-line pt-6 md:mr-8">
                    <h3 className="label-xs !text-charcoal">{p.t}</h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.9rem]">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="quote-serif mt-14 text-charcoal">
              Мета — не кращі промпти.{" "}
              <span className="italic">А кращі маркетингові рішення.</span>
            </p>
          </div>
        </section>

        {/* ——— HOW IT WORKS ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Почніть сьогодні</SectionLabel>
                  <h2 className="display-md">
                    Менше навчання.
                    <br />
                    <span className="italic">Більше роботи над власним бізнесом.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="label-xs !tracking-[0.16em] !text-charcoal">
                    ДИВИТЕСЯ → КОПІЮЄТЕ → ПРАЦЮЄТЕ З ШІ → ЗБЕРІГАЄТЕ → З’ЄДНУЄТЕ
                  </p>
                  <p className="body-read mt-5">
                    Без потоків, розкладу й дедлайнів. Більшість кроків можна пройти за одну зосереджену робочу сесію.
                  </p>
                </Reveal>
              </div>
            </div>
            <ol className="mt-12 grid gap-8 md:mt-16 md:grid-cols-5 md:gap-6">
              {how.map((h, i) => (
                <Reveal key={h.t} delay={i * 70}>
                  <li className="border-t border-line pt-6">
                    <p className="label-xs !text-olive">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="quote-serif mt-3 text-charcoal">{h.t}</h3>
                    <p className="body-read mt-2 !max-w-none !text-[0.9rem]">{h.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— EXECUTION LAYER ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>Також у комплекті</SectionLabel>
                  <h2 className="display-md">
                    Коли ясно, що говорити,
                    <br />
                    <span className="italic">потрібен шлях, що веде людей далі.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7 md:pt-4">
                <Reveal delay={90}>
                  <div className="flex items-baseline gap-5">
                    <span className="quote-serif text-charcoal">
                      45
                    </span>
                    <span className="quote-serif italic text-charcoal">
                      схем воронок
                    </span>
                  </div>
                  <p className="body-read mt-6">
                    Бібліотека одно- й багатоканальних шляхів клієнта, щоб перетворити маркетинговий фундамент на конкретні дії.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={140}>
              <ChannelLanes
                lanes={["Instagram", "TikTok", "YouTube", "Telegram", "Лендинг"]}
                className="mx-auto mt-12 w-full max-w-[900px] md:mt-16"
              />
            </Reveal>

            <p className="label-xs mx-auto mt-6 max-w-[36rem] text-center normal-case !tracking-[0.1em]">
              Воронки не замінюють стратегію. Вони допомагають її запустити.
            </p>
          </div>
        </section>

        {/* ——— WHAT YOU RECEIVE ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Доступ одразу</SectionLabel>
                  <h2 className="display-md">
                    Усе, що потрібно,
                    <br />
                    <span className="italic">щоб почати сьогодні.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="body-read border-l-2 border-olive pl-6">
                    Без підписки, регулярних платежів і дедлайнів. Працює з ChatGPT і Claude.
                  </p>
                </Reveal>
              </div>
            </div>
            <ul className="mt-12 grid gap-0 border-t border-line md:mt-16 md:grid-cols-5 md:border-t-0">
              {receive.map((r, i) => (
                <Reveal key={r.t} delay={i * 70}>
                  <li className="flex h-full flex-col border-b border-line py-6 md:border-b-0 md:border-t md:pr-6 md:pb-0">
                    <p className="label-xs !text-olive">{r.n}</p>
                    <h3 className="lead-serif mt-4 text-charcoal">
                      {r.t}
                    </h3>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ——— WHERE THIS BECOMES USEFUL ——— */}
        <section className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Reveal>
                  <SectionLabel>Де це допомагає</SectionLabel>
                  <h2 className="display-md">
                    Різні бізнеси.
                    <br />
                    <span className="italic">Та сама потреба в ясності.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={120}>
                  <p className="body-read border-l border-line pl-6">
                    Ці фрази я чую найчастіше — ще до початку роботи.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
              {useCases.map((u, i) => (
                <Reveal key={u.t} delay={i * 90}>
                  <figure className="flex h-full flex-col border-t border-line pt-7">
                    <p className="label-xs">{u.t}</p>
                    <blockquote className="quote-serif mt-6 text-charcoal">
                      «{u.q}»
                    </blockquote>
                    <figcaption className="label-xs mt-auto pt-8 normal-case !tracking-[0.1em] !text-charcoal">
                      → {u.o}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— BUILT FROM PRACTICE ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="flex flex-col md:col-span-4">
              <Reveal>
                <img
                  src={portrait.url}
                  alt="Віта Шаблій"
                  loading="lazy"
                  className="block aspect-[9/13] w-full object-cover"
                />

              </Reveal>
              <Reveal delay={140}>
                <dl className="mt-8 border-t border-line">
                  {proof.map((p) => (
                    <div
                      key={p.k}
                      className="flex items-baseline gap-5 border-b border-line py-4"
                    >
                      <dt className="quote-serif min-w-[4.5rem] text-charcoal">
                        {p.k}
                      </dt>
                      <dd className="label-xs normal-case !tracking-[0.08em]">{p.v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal delay={80}>
                <SectionLabel>Виросло з практики</SectionLabel>
                <h2 className="display-md">
                  Я створила Маркетинг-сет
                  <br />
                  <span className="italic">не для того, щоб учити маркетингу.</span>
                </h2>
                <p className="body-read mt-8">
                  Він з’явився після 13+ років у маркетингу, стратегії та продуктах — бо в дуже різних бізнесах я раз у раз бачила одне й те саме: роботу починають раніше, ніж знаходять відповіді на базові питання.
                </p>
                <ul className="mt-8 border-t border-line">
                  {[
                    "Контент запускають, поки позиціонування ще неясне.",
                    "Кампанії стартують, поки логіка клієнта ще не зрозуміла.",
                    "ШІ генерує дедалі більше, хоча ніхто ще не вирішив, на чому все це має триматися.",
                  ].map((l) => (
                    <li
                      key={l}
                      className="lead-serif border-b border-line py-4 text-charcoal"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
                <p className="body-read mt-8">
                  У 500+ проєктах і подіях, у різних галузях і на ринках Європи, США та Китаю контексти змінювалися — а ця проблема поверталася. А ще я збудувала з нуля 15+ брендів: від першої ідеї та логіки ринку — через позиціонування, комунікацію й запуск — до управління маркетингом.
                </p>
                <p className="body-read mt-5">
                  Маркетинг-сет перетворює цей досвід на структуру, яку ви проходите самостійно. Не мої відповіді для вашого бізнесу, а краща система, щоб знайти власні.
                </p>


                <Link to="/ua/about" className="link-editorial mt-7 inline-flex">
                  ПОЗНАЙОМИТИСЯ <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ——— THE OFFER ——— */}
        <section className="blue-room rule-thin relative">
          <div className="mx-auto max-w-[1440px] px-6 pt-20 md:px-10 md:pt-24">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Маркетинг-сет</SectionLabel>
                  <h2 className="display-md">
                    Спершу фундамент —
                    <br />
                    <span className="italic">потім більше маркетингу.</span>
                  </h2>
                  <p className="body-read mt-7">
                    Один продуманий маркетинговий фундамент — для контенту, запусків, кампаній і майбутніх рішень.
                  </p>
                </Reveal>
              </div>
              <div className="relative z-10 md:col-span-5 md:col-start-8 md:-mb-24">
                <Reveal delay={100}>
                  <div className="bg-slate-deep/70 p-8 backdrop-blur-sm md:p-10">
                    <p className="label-xs">У комплекті</p>
                    <ul className="mt-5 border-t border-line">
                      {included.map((i) => (
                        <li
                          key={i}
                          className="border-b border-line py-3 text-[0.95rem] text-charcoal"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                    <p className="display-sm mt-8 !text-[2.4rem] text-charcoal">589 грн</p>
                    <p className="label-xs mt-3 normal-case !tracking-[0.1em]">
                      Один платіж · доступ одразу · назавжди
                    </p>
                    <Cta invert className="mt-8 w-full justify-center" />
                    <p className="label-xs mt-5 normal-case !tracking-[0.08em]">
                      Працює з ChatGPT і Claude. Досвід у маркетингу не потрібен.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="relative -mt-16 md:-mt-56">
            <img
              src={ripple.url}
              alt="Кола на воді розходяться від однієї точки"
              loading="lazy"
              className="block h-[170px] w-full object-cover md:h-[300px]"
            />
          </div>
          <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-4 md:px-10 md:pb-28">
            <p className="label-xs !tracking-[0.14em]">
              Одна точка старту · і кожне коло після неї
            </p>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[30rem]">
                Перш ніж
                <br />
                <span className="italic">почати.</span>
              </h2>
            </Reveal>
            <dl className="mt-12 border-t border-line md:mt-16">
              {faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 50}>
                  <div className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-10">
                    <dt className="lead-serif text-charcoal md:col-span-5">
                      {f.q}
                    </dt>
                    <dd className="body-read md:col-span-7 md:!max-w-none">{f.a}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ——— FINAL CTA ——— */}
        <section className="olive-room rule-thin relative overflow-hidden">
          <ShellBackdrop />
          <div className="relative mx-auto max-w-[1440px] px-6 py-24 text-center md:px-10 md:py-36">
            <Reveal>
              <SectionLabel>Краща точка старту</SectionLabel>
              <h2 className="display-lg mx-auto max-w-[46rem]">
                Не просіть ШІ робити більше.
                <br />
                <span className="italic">Дайте йому міцну основу.</span>
              </h2>
              <p className="body-read mx-auto mt-8 text-center">
                Закладіть фундамент один раз — і вдосконалюйте його разом із продуктом і ринком.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mx-auto mt-6 flex max-w-[36rem] flex-col items-center gap-5">
                <p className="display-lg !text-[clamp(2.6rem,4.4vw,3.8rem)] text-charcoal">
                  589 грн
                </p>
                <p className="label-xs !tracking-[0.14em]">
                  5 стратегічних сценаріїв зі ШІ · особистий ШІ-асистент · 45 схем воронок · довічний доступ
                </p>
                <Cta fixed />
                <p className="label-xs mt-6 normal-case !tracking-[0.1em]">
                  Менше шуму. Більше контексту. Кращі маркетингові рішення.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
