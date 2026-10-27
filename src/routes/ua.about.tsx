import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SpiralSteps, Spiral } from "@/components/site/LineArt";
import portrait from "@/assets/vita-portrait.jpg";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import ink from "@/assets/ink-layers.jpg.asset.json";
import chambers from "@/assets/about-chambers.jpg";
import mist from "@/assets/about-mist.jpg";
import leaves from "@/assets/about-leaves.jpg";
import light from "@/assets/about-light.jpg";

const title = "Людина за роботою — Віта Шаблій";
const description =
  "Віта Шаблій — стратегиня, маркетологиня й продуктова мислителька на перетині бізнесу, маркетингу, технологій і людської поведінки. Clarity before complexity.";

export const Route = createFileRoute("/ua/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function Kicker({ children }: { children: string }) {
  return <p className="label-xs mb-6">{children}</p>;
}

const markets = [
  {
    n: "01",
    t: "Різні ринки",
    meta: "Європа · США · Китай",
    body: [
      "Робота на різних ринках навчила мене: стратегію не можна просто перенести з одного контексту в інший.",
      "Змінюється культура. Змінюється конкуренція. Змінюються очікування клієнтів. Змінюється саме відчуття цінності.",
      "Я запускала продукти, вибудовувала позиціонування, ухвалювала рішення про вихід на ринок і адаптувала їх до дуже різних міжнародних умов.",
    ],
    qA: "Як повторити те, що вже спрацювало?",
    qB: "Що варто зберегти, а що — змінити?",
  },
  {
    n: "02",
    t: "Різні бізнес-моделі",
    meta: "Технології · IT · Консалтинг · E-commerce · Фінтех · Споживчі товари",
    body: [
      "У різних галузях — своя мова, свої канали й бізнес-моделі. Але під ними часто ховаються напрочуд схожі питання:",
      "Де створюється цінність? Чому людина обирає? Що робить економіку робочою? Де вузьке місце?",
      "Переходи між галузями навчили мене не починати з того, «як заведено в категорії».",
    ],
    qA: "Як заведено в цій категорії?",
    qB: "Яка справжня логіка цього бізнесу?",
  },
  {
    n: "03",
    t: "Побудова систем",
    meta: "Від розрізнених дій — до пов’язаних рішень",
    body: [
      "Значна частина мого досвіду — це бренди, маркетингові відділи, команди й процеси, збудовані з нуля.",
      "Це змінює погляд на маркетинг. Контент неможливо відокремити від позиціонування. Залучення — від економіки. Зростання — від продукту.",
      "Автоматизація не врятує процес, у якому немає сенсу.",
    ],
    qA: "Яку ще активність додати?",
    qB: "Яких рішень досі бракує?",
  },
];

const numbers = [
  {
    k: "13+ років",
    meta: "У маркетингу, стратегії, продуктах і трансформації бізнесу.",
    v: "Понад тринадцять років роботи не лише з виконанням, а й із рішеннями за ним — продукт, позиціонування, вихід на ринок, комерційна стратегія, команди й системи.",
  },
  {
    k: "500+ проєктів і подій",
    meta: "У різних галузях, на різних ринках і етапах бізнесу.",
    v: "Сотні контекстів — це сотні нагод побачити, що змінюється, а що повторюється знову й знову. Справжня цінність цього числа — вміння розпізнавати закономірності.",
  },
  {
    k: "15+ брендів з нуля",
    meta: "Від концепції до управління маркетингом.",
    v: "Бренди, вибудовані від первинної ідеї та логіки ринку — через позиціонування, айдентику, комунікацію й запуск — до щоденного управління маркетингом.",
  },
  {
    k: "Досвід на світових ринках",
    meta: "Європа · США · Китай",
    v: "Робота в дуже різних культурних, конкурентних і комерційних середовищах.",
  },
];

const cases = [
  {
    k: "3×",
    t: "Комерційне зростання",
    d: "Цінова й комерційна стратегія — і втричі більші продажі за пів року.",
  },
  {
    k: "2,000+",
    t: "Китай",
    d: "PR-кампанія та роудшоу в Гонконзі, Гуанчжоу й Пекіні.",
  },
  {
    k: "США",
    t: "З нуля на ринок",
    d: "Маркетингова стратегія для продукту, запущеного у США з чистого аркуша.",
  },
];

const model = [
  { t: "Спостерігати", d: "Що відбувається насправді?" },
  { t: "Сумніватися", d: "Які припущення ми сприймаємо як факти?" },
  { t: "Простежити", d: "Де насправді народжується результат?" },
  { t: "Прояснити", d: "Яку проблему ми розв’язуємо насправді?" },
  { t: "Знайти важіль", d: "Що здатне по-справжньому змінити систему?" },
  { t: "Вирішити", d: "Що важливо зараз, а що — ні?" },
  { t: "Збудувати", d: "Перетворити рішення на щось робоче." },
  { t: "Вчитися", d: "Дивитися, що відповідає реальність." },
  { t: "Повернутися", d: "Нова інформація змінює контекст." },
];

const beyond = [
  {
    n: "Історія 01",
    kicker: "Що я помічаю",
    t: "Простір між причиною і наслідком.",
    lead: "Я помічаю відсутню ланку між речами, які всі вважають пов’язаними самі собою.",
    items: [
      "Трафік і продажі.",
      "Виручка і прибуток.",
      "Продукт — і причина, чому його обирають.",
      "Активність — і реальний рух уперед.",
      "Рішення — і поведінка, яку воно породжує.",
    ],
    close:
      "Найцікавіше зазвичай десь посередині. Саме звідти я й починаю шукати.",
  },
  {
    n: "Історія 02",
    kicker: "Що я ціную",
    t: "Самостійне мислення без потреби завжди погоджуватися.",
    lead: "Я ціную людей, які мають власну думку — і водночас лишаються допитливими.",
    items: [
      "Тих, хто вміє не погоджуватися, не перетворюючи це на конфлікт.",
      "Тих, хто готовий змінити думку, коли реальність дає кращі дані.",
      "Тих, хто відповідає за свої рішення.",
    ],
    close:
      "Добра співпраця не вимагає постійної згоди. Їй потрібні чесність, цікавість і достатньо довіри, щоб ставити під сумнів думки одне одного.",
  },
  {
    n: "Історія 03",
    kicker: "Що мене захоплює",
    t: "Мить до того, як щось повністю розкриється.",
    lead: "Мене вабить момент, коли щось уже існує, але його логіка ще не проявилася до кінця.",
    items: [
      "У продукту є клієнти — але найсильніша його цінність може бути там, куди ніхто не дивиться.",
      "Бізнес росте — але очевидний важіль зростання може виявитися не тим.",
      "Ідея інтуїтивно здається правильною — але їй ще потрібна структура, яка витримає зустріч із ринком.",
    ],
    close:
      "Простір між «тут щось є» і «тепер я бачу, чим це може стати» — мабуть, найцікавіше для мене місце.",
  },
];

const principles = [
  "Ясність — раніше за складність.",
  "Контекст — раніше за тактику.",
  "Спершу зрозуміти проблему, потім обирати рішення.",
  "Структура — раніше за масштаб.",
  "Технології — там, де вони дають важіль.",
  "Факти, не втрачаючи інтуїції.",
  "Достатньо структури, щоб рухатися.",
  "Достатньо відкритості, щоб учитися.",
];

const useful = [
  "Продукт є — але його місце на ринку неясне.",
  "Бізнес рухається — але наступний крок для зростання не очевидний.",
  "Маркетинг працює — але ніхто до кінця не певен, навколо чого його будувати.",
  "Ринок змінився — і стара логіка вже не працює.",
  "Є ідея — але забагато припущень про те, чим вона має стати.",
  "Або ситуація просто не вміщується в жодну функцію чи фреймворк.",
];

const products = [
  {
    t: "Маркетинг-сет",
    meta: "Щоб закласти фундамент маркетингу",
    d: "Коли продукт, бізнес чи експертиза вже є, а маркетинг навколо них потребує структури. Покрокова система зі штучним інтелектом, що допомагає зрозуміти цінність, ринок, клієнтів, позиціонування й комунікацію.",
    cta: "Дивитися Маркетинг-сет",
    href: "/ua/marketing-set",
  },
  {
    t: "Synthesis",
    meta: "Щоб піти глибше",
    d: "Для питань, що вимагають ширшого погляду на продукт, ринок, позиціонування і систему довкола. Екосистема стратегічних фреймворків та інструментів зі ШІ, що росте, — щоб складне ставало пов’язаними рішеннями.",
    cta: "Дивитися Synthesis",
    href: "/ua#solutions",
  },
  {
    t: "Консалтинг",
    meta: "Для задач, що не вміщуються в рамки",
    d: "Для ситуацій, де відповідь неочевидна — або де під сумнів треба поставити саме питання. Ми разом дивимося на контекст і визначаємо, що справді заслуговує на увагу далі.",
    cta: "Працювати разом",
    href: "mailto:hello@vitashablii.com?subject=Consulting",
  },
];


function AboutPage() {
  return (
    <div className="ua-page bg-background text-foreground" lang="uk">
      <Header />
      <main>
        {/* ——— 01 HERO ——— */}
        <section className="relative overflow-hidden">
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[62%] top-[58%] h-[120%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.32] [filter:sepia(0.06)_saturate(0.3)_brightness(1.22)_contrast(0.85)] [mask-image:radial-gradient(closest-side,black_50%,transparent_100%)]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 pb-16 pt-28 md:grid-cols-12 md:px-10 md:pb-24 md:pt-36">
            <div className="md:col-span-7">
              <Reveal>
                <p className="label-xs !tracking-[0.3em]">Про мене / Віта Шаблій</p>
                <h1 className="display-lg mt-8">
                  Людина
                  <br />
                  за <span className="italic">роботою.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-10 space-y-6 md:mt-12">
                  <p className="body-read">
                    Віта Шаблій — стратегиня, маркетологиня й продуктова мислителька. Працює там, де перетинаються бізнес, маркетинг, технології та людська поведінка.
                  </p>
                  <p className="body-read">
                    Її робота починається ще до виконання — з розуміння того, що насправді відбувається під видимою задачею.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <ul className="mt-10 space-y-1 border-l border-olive/40 bg-sage/25 px-7 py-6 md:mt-12">
                  {[
                    "Що ми насправді намагаємося збудувати?",
                    "Звідки береться цінність?",
                    "Що заважає системі рухатися?",
                    "І яке рішення має стати ясним раніше за все інше?",
                  ].map((q) => (
                    <li key={q} className="quote-serif text-xl text-charcoal">
                      {q}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={340}>
                <p className="label-xs mt-10 !tracking-[0.28em]">
                  Стратегія × Маркетинг × Продукт × ШІ
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="grain relative aspect-[3/4] overflow-hidden bg-stone">
                <img
                  src={portrait}
                  alt="Портрет Віти Шаблій"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ——— 02 NOT A STRAIGHT LINE ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <Kicker>Не пряма лінія</Kicker>
                  <h2 className="display-md">
                    Я не будувала кар’єру навколо однієї галузі. Я йшла за задачами,{" "}
                    <span className="italic">які хотіла зрозуміти.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <div className="space-y-6">
                    <p className="body-read">
                      У маркетинг я прийшла майже випадково. А втримав мене не маркетинг як окрема дисципліна, а доступ, який він давав до всього бізнесу: продукту, клієнта, ринку, економіки, рішень — і людей, що за ними стоять.
                    </p>
                    <p className="body-read">
                      Ця цікавість провела мене через технології, IT, консалтинг, e-commerce, фінтех і споживчий бізнес — і через ринки Європи, США та Китаю.
                    </p>
                    <p className="body-read">
                      Я будувала бренди, продукти, маркетингові відділи й команди. Працювала пліч-о-пліч із розробниками. Виходила на незнайомі ринки. Запускала продукти з нуля.
                    </p>
                    <p className="body-read">
                      І щоразу опинялася всередині задач, які не вміщалися в маркетинговий бриф.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={80}>
              <div className="mt-16 flex flex-col items-start gap-6 border-t border-line/60 pt-10 md:flex-row md:items-baseline md:gap-16">
                <Spiral className="h-12 w-12 shrink-0 opacity-60" accent />
                <p className="quote-serif max-w-[26em]">
                  Контексти змінювали поверхню.{" "}
                  <span className="italic">
                    А питання під нею ставали дедалі знайомішими.
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  "Чому цей продукт працює?",
                  "Де насправді створюється цінність?",
                  "На що насправді реагують клієнти?",
                  "Що заважає зростанню?",
                  "І чи розв’язуємо ми справжню проблему — чи лише її найпомітніший симптом?",
                ].map((q) => (
                  <li
                    key={q}
                    className="border-t border-line/60 pt-5 font-serif-editorial text-lg leading-snug text-charcoal"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>
        </section>

        {/* ——— 03 EXPERIENCE IN CONTEXT ——— */}
        <section className="rule-thin teal-room">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[42rem] text-center">
                <Kicker>Досвід / не як хронологія</Kicker>
                <h2 className="display-md">
                  Різні контексти навчили мене шукати{" "}
                  <span className="italic">те, що лишається правдою.</span>
                </h2>
                <p className="body-read mx-auto mt-8">
                  Не тактики. Не канали. Логіку, що лежить під ними.
                </p>

              </div>
            </Reveal>

            <div className="mt-16 space-y-px md:mt-20">
              {markets.map((m, i) => (
                <Reveal key={m.n} delay={i * 100}>
                  <article className="grid gap-8 border-t border-line/60 py-12 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <p className="label-xs">
                        {m.n} / {m.t}
                      </p>
                      <p className="mt-4 font-serif-editorial text-2xl italic text-charcoal">
                        {m.meta}
                      </p>
                    </div>
                    <div className="space-y-5 md:col-span-5">
                      {m.body.map((p) => (
                        <p key={p} className="body-read">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="md:col-span-3">
                      <div className="border border-line/70 p-6">
                        <p className="label-xs">Рідко питання звучить так</p>
                        <p className="mt-2 text-sm text-charcoal/55 line-through">{m.qA}</p>
                        <p className="label-xs mt-6">Частіше — так</p>
                        <p className="mt-2 font-serif-editorial text-xl leading-snug text-charcoal">
                          {m.qB}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ——— 04 EXPERIENCE, QUANTIFIED ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12 md:items-stretch">
              <div className="flex flex-col md:col-span-5">
                <Reveal>
                  <Kicker>Вибраний досвід</Kicker>
                  <h2 className="display-md max-w-[18em]">
                    Досвід корисний лише тоді, коли{" "}
                    <span className="italic">змінює погляд.</span>
                  </h2>
                </Reveal>
                <div className="grain relative mt-10 min-h-[260px] flex-1 overflow-hidden bg-stone">
                  <img
                    src={mist}
                    alt="Туман над тихою водою"
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col md:col-span-6 md:col-start-7">
                <Reveal delay={100}>
                  <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    {numbers.map((n) => (
                      <div key={n.k} className="border-t border-slate-deep/30 pt-5">
                        <dt className="font-serif-editorial text-2xl leading-tight text-charcoal">
                          {n.k}
                        </dt>
                        <dd className="label-xs mt-3 !tracking-[0.16em]">{n.meta}</dd>
                        <dd className="mt-3 text-sm leading-relaxed text-charcoal/70">{n.v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
                <p className="label-xs mt-12">Вибрані результати</p>
                <ul className="mt-4 flex-1 divide-y divide-line/60 border-t border-line/60">
                  {cases.map((c) => (
                    <li key={c.t} className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-8">
                      <p className="label-xs !text-charcoal sm:w-40 sm:shrink-0">
                        {c.k} / {c.t}
                      </p>
                      <p className="text-sm leading-relaxed text-charcoal/70">{c.d}</p>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </section>

        {/* ——— 04b TRANSITION STATEMENT ——— */}
        <section className="olive-room rule-thin relative overflow-hidden">
          <ShellBackdrop />
          <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <div className="mx-auto max-w-[46rem] text-center">
                <Kicker>Що зрештою показав увесь цей досвід</Kicker>
                <p className="display-lg">
                  Зрештою маркетинг перестав бути категорією.{" "}
                  <span className="italic">Роботою стало розуміння системи.</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="mx-auto mt-14 max-w-[40rem] space-y-6 text-center">
                <p className="body-read mx-auto">
                  Після стількох продуктів, ринків і бізнес-моделей дивитися на маркетинг окремо вже складно.
                </p>
                <ul className="mx-auto space-y-2 font-serif-editorial text-xl leading-snug text-charcoal">
                  {[
                    "Маркетингове рішення змінює продукт.",
                    "Продуктове рішення змінює позиціонування.",
                    "Позиціонування змінює сприйняття.",
                    "Ціна змінює поведінку.",
                    "Технології змінюють процеси.",
                  ].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="body-read mx-auto italic">
                  Іноді проблема, яку всі називають маркетинговою, почалася зовсім деінде.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— 05 THE SHIFT ——— */}

        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[44rem] text-center">
                <Kicker>Що насправді змінив досвід</Kicker>
                <h2 className="display-md">
                  Досвід навчив мене не поспішати приймати питання —{" "}
                  <span className="italic">і швидше шукати систему за ним.</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="border border-line/70 bg-paper p-8">
                    <p className="label-xs">Хтось каже</p>
                    <p className="mt-3 font-serif-editorial text-3xl italic text-charcoal">
                      «Нам потрібно більше лідів».
                    </p>
                    <p className="label-xs mt-8">Можливо. А можливо, справжня проблема —</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {[
                        "конверсія",
                        "утримання",
                        "ціна",
                        "асортимент",
                        "позиціонування",
                        "маржа",
                        "щось, що варто переробити, перш ніж масштабувати",
                      ].map((x) => (
                        <li
                          key={x}
                          className="label-xs border border-olive/30 bg-sage/25 px-3 py-1.5 !tracking-[0.14em] !text-charcoal"
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={120}>
                  <div className="space-y-6">
                    <p className="body-read">
                      Перше формулювання проблеми часто лише найпомітніше. Тому мене дедалі більше цікавить те, що відбувається до рішення.
                    </p>
                    <ul className="space-y-4 border-t border-line/60 pt-6">
                      {[
                        ["Маркетингова проблема", "може бути продуктовою."],
                        ["Проблема зростання", "може бути проблемою позиціонування."],
                        ["Проблема комунікації", "може початися з рішення, яке ніхто ще не ухвалив."],
                      ].map(([a, b]) => (
                        <li key={a} className="flex flex-wrap items-baseline gap-2">
                          <span className="label-xs !text-charcoal">{a}</span>
                          <span className="text-sm text-charcoal/65">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="body-read">
                      Те, що видно першим, — рідко вся проблема.
                    </p>


                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={80}>
              <p className="display-md mt-16 max-w-[30em] border-t border-line/60 pt-10">
                Виконувати стає значно легше,{" "}
                <span className="italic">коли справжня проблема має назву.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ——— 06 HOW I THINK ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[40rem] text-center">
                <Kicker>Модель мислення</Kicker>
                <h2 className="display-md">
                  Я рідко мислю <span className="italic">прямими лініями.</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-14 md:mt-16 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <Reveal>
                  <div className="mx-auto max-w-[520px]">
                    <SpiralSteps
                      center="Контекст"
                      nodes={["Спостерігати", "Сумніватися", "Простежити", "Прояснити", "Вирішити"]}
                    />
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <ol className="divide-y divide-line/60 border-y border-line/60">
                    {model.map((m, i) => (
                      <li key={m.t} className="flex items-baseline gap-5 py-4">
                        <span className="label-xs shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="font-serif-editorial text-xl text-charcoal">{m.t}</span>{" "}
                          <span className="text-sm leading-relaxed text-charcoal/60">{m.d}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <div className="mx-auto mt-16 max-w-[46rem] space-y-6 text-center">
                <p className="body-read">
                  Продукти розвиваються. Ринки відповідають. Люди поводяться не так, як ми припускали. Рішення народжують нову інформацію. Тому стратегія для мене — не документ, написаний раз і назавжди, а жива система пов’язаних рішень, що стає яснішою в русі.
                </p>
                <p className="quote-serif text-2xl italic text-charcoal md:">
                  Ви рухаєтеся вперед. Вчитеся. Повертаєтеся до питання, знаючи більше, ніж раніше. І система росте.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— 07 THE SHELL ——— */}
        <section className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-deep/40">
                    <img
                      src={chambers}
                      alt="Камери мушлі наутілуса на світлі"
                      loading="lazy"
                      width={1200}
                      height={1504}
                      className="h-full w-full object-cover [filter:grayscale(0.55)_contrast(1.05)_brightness(1.02)]"
                    />
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={100}>
                  <Kicker>Форма, до якої я повертаюся</Kicker>
                  <h2 className="display-md">
                    Структуру не завжди <span className="italic">треба нав’язувати.</span>
                  </h2>
                  <div className="mt-10 space-y-6">
                    <p className="body-read">
                      Мушля не випадково з’являється в моїй роботі знову й знову. Її логіка мені близька.
                    </p>
                    <p className="body-read">
                      Мушлю не складають із випадкових частин і не втискають у форму. Її структура росте зсередини — шар за шаром, і кожна нова частина відповідає тому, що вже є.
                    </p>
                    <p className="body-read">
                      Порядок без жорсткості. Зростання без хаосу. Складність, яку тримає внутрішня логіка. Добрі продукти, бізнеси й бренди часто влаштовані так само.
                    </p>
                    <p className="body-read">
                      Їхня структура вже існує фрагментами: продукт, поведінка клієнтів, економіка, інтуїція засновника, відгук ринку.
                    </p>
                    <p className="mt-4 border-t border-line/60 pt-8 quote-serif text-2xl italic text-charcoal">
                      Робота не завжди в тому, щоб додати. Іноді — в тому, щоб побачити логіку, яка вже є, і допомогти їй набути форми.
                    </p>
                  </div>

                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 08 TECHNOLOGY & AI ——— */}
        <section className="teal-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <Kicker>Технології / ШІ</Kicker>
                  <h2 className="display-md">
                    Інструменти змінюються. <span className="italic">Питання — першим.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={100}>
                  <div className="space-y-6">
                    <p className="body-read">
                      Мене завжди цікавили технології, які прибирають зайву роботу, а не додають ще один її шар. Робота з IT-командами вивела мене за межі маркетингових брифів — глибше в процеси, автоматизацію й логіку цифрових продуктів.
                    </p>
                    <p className="body-read">
                      ШІ — продовження цього мислення. Він швидше аналізує, пов’язує інформацію, перевіряє припущення й знімає рутину. Але швидкість цінна лише тоді, коли є напрям.
                    </p>
                    <p className="body-read">
                      Більше результатів — не завжди краще мислення. Більше автоматизації — не завжди краща система.
                    </p>
                  </div>
                </Reveal>

              </div>
            </div>

            <Reveal delay={80}>
              <p className="display-md mt-16 max-w-[32em] border-t border-line/60 pt-10">
                Не заміна стратегії.{" "}
                <span className="italic">Шар усередині стратегії, яка вже має сенс.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ——— 09 BEYOND THE WORK ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <Kicker>Поза роботою</Kicker>
                  <h2 className="display-md">
                    Людина завжди <span className="italic">більша за професію.</span>
                  </h2>
                  <div className="mt-10 space-y-6">
                    <p className="body-read">
                      Те, як я працюю, важко відокремити від того, як я дивлюся на світ загалом. Я помічаю зв’язки. Суперечності. Відсутні ланки. Маленьке припущення десь посередині, яке всі вже прийняли й пішли далі.
                    </p>
                    <p className="body-read">
                      Мені важливо розуміти, чому щось працює, а не лише знати, що воно працює.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <div className="grain relative aspect-[4/3] overflow-hidden bg-stone">
                    <img
                      src={mist}
                      alt="Туман над тихою водою"
                      loading="lazy"
                      width={1408}
                      height={1056}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
              {beyond.map((b, i) => {
                const img = i === 0 ? light : i === 1 ? leaves : ink.url;
                const flip = i % 2 === 1;
                return (
                  <Reveal key={b.kicker} delay={60}>
                    <article className="grid gap-10 border-t border-line/60 pt-12 md:grid-cols-12 md:items-start">
                      <div
                        className={
                          flip
                            ? "md:col-span-5 md:col-start-8 md:row-start-1"
                            : "md:col-span-5"
                        }
                      >
                        <div className="grain relative aspect-[4/3] overflow-hidden bg-stone">
                          <img
                            src={img}
                            alt=""
                            aria-hidden
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          flip
                            ? "md:col-span-6 md:row-start-1"
                            : "md:col-span-6 md:col-start-7"
                        }
                      >
                        <p className="label-xs">
                          {b.n} / {b.kicker}
                        </p>
                        <h3 className="display-sm mt-4 max-w-[16em]">{b.t}</h3>
                        <p className="body-read mt-7">{b.lead}</p>
                        <ul className="mt-6 space-y-2">
                          {b.items.map((x) => (
                            <li key={x} className="body-read !text-base">
                              {x}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-7 max-w-[36em] text-sm italic leading-relaxed text-charcoal/65">
                          {b.close}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>


        {/* ——— 10 PRINCIPLES ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[42rem] text-center">
                <Kicker>Те, до чого я постійно повертаюся</Kicker>
              </div>
            </Reveal>
            <ol className="mx-auto mt-10 max-w-[52rem] divide-y divide-line/60 border-y border-line/60">
              {principles.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <li className="flex items-baseline gap-6 py-5">
                    <span className="label-xs shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="quote-serif text-2xl text-charcoal md:">
                      {p}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— 10b WHERE THINKING BECOMES WORK ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <Kicker>Де мислення стає роботою</Kicker>
                  <h2 className="display-md">
                    Зазвичай до мене приходять, коли щось{" "}
                    <span className="italic">не складається докупи.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <ul className="divide-y divide-line/60 border-y border-line/60">
                    {useful.map((u) => (
                      <li
                        key={u}
                        className="py-5 font-serif-editorial text-xl leading-snug text-charcoal"
                      >
                        {u}
                      </li>
                    ))}
                  </ul>
                  <p className="body-read mt-8">
                    Саме з такими задачами я люблю працювати.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 11 FROM THINKING TO PRODUCTS ——— */}

        <section id="products" className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[42rem] text-center">
                <Kicker>Досвід, що став інструментом</Kicker>
                <h2 className="display-md">
                  Частина мого мислення <span className="italic">зрештою стала продуктами.</span>
                </h2>
                <p className="body-read mx-auto mt-8 text-center">
                  Не тому, що будь-яку проблему можна загнати у фреймворк, — не можна. Але деякі питання виникають так часто, що добра структура допомагає продумати їх, не починаючи щоразу з нуля.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden border border-line/60 bg-line/40 md:mt-20 lg:grid-cols-3">
              {products.map((p, i) => (
                <Reveal key={p.t} delay={i * 100}>
                  <article className="flex h-full flex-col bg-slate-deep/40 px-7 py-10">
                    <p className="label-xs">{p.meta}</p>
                    <h3 className="display-sm mt-4">{p.t}</h3>
                    <p className="body-read mt-6 flex-1">{p.d}</p>
                    {p.href.startsWith("/") ? (
                      <Link to={p.href} className="link-editorial mt-8 self-start">
                        {p.cta} <span aria-hidden>→</span>
                      </Link>
                    ) : (
                      <a href={p.href} className="link-editorial mt-8 self-start">
                        {p.cta} <span aria-hidden>→</span>
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 12 FINAL ——— */}
        <section className="olive-room rule-thin relative overflow-hidden">
          <ShellBackdrop />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[44rem] text-center">
                <Kicker>Цікаво?</Kicker>
                <h2 className="display-lg">
                  Принесіть мені систему, <span className="italic">яку хочете зрозуміти.</span>
                </h2>
                <p className="body-read mx-auto mt-10">
                  Подивіться інструменти, які виросли з цього способу мислення, — або принесіть задачу, що не вміщується в жоден із них.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/ua#solutions"
                    className="label-xs group inline-flex items-center gap-3 border border-ivory bg-ivory px-8 py-4 !tracking-[0.2em] !text-ink transition-colors hover:bg-slate hover:border-slate hover:!text-ivory"
                  >
                    ДИВИТИСЯ ПРОДУКТИ
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="mailto:hello@vitashablii.com?subject=Work%20with%20Vita"
                    className="label-xs group inline-flex items-center gap-3 border border-ivory/45 px-8 py-4 !tracking-[0.2em] !text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
                  >
                    ПРАЦЮВАТИ РАЗОМ
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rule-thin mt-20 flex flex-col gap-6 pt-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                  <p className="label-xs !text-charcoal !tracking-[0.3em]">Vita Shablii</p>
                  <p className="label-xs mt-2 !tracking-[0.24em]">
                    Стратегія × Маркетинг × Продукт × ШІ
                  </p>
                </div>
                <p className="font-serif-editorial text-xl italic leading-relaxed text-charcoal">
                  Clarity before complexity. Контекст — раніше за тактику.
                  <br />
                  Кращі питання — раніше за більше дій.
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
