import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProcessOrbit } from "@/components/site/LineArt";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import advisoryImg from "@/assets/sp-advisory.jpg";
import strategyImg from "@/assets/sp-strategy.jpg";
import cmoImg from "@/assets/sp-cmo.jpg";
import portraitImg from "@/assets/vita-black-white-portrait.png.asset.json";
import workPortrait from "@/assets/vita-at-work.png.asset.json";

const title = "Стратегічне партнерство — Віта Шаблій";
const description =
  "Досвідчена стратегічна підтримка для засновників, керівників і команд: консультації, розробка стратегії та роль фракційного CMO — продукт, ринок, позиціонування, зростання.";

export const Route = createFileRoute("/ua/strategic-partnership")({
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
  component: StrategicPartnership,
});

const fields = [
  ["Продукт", "Що ми насправді створюємо — і навіщо йому існувати?"],
  ["Ринок", "Де він може викликати справжній попит і створити цінність?"],
  ["Позиціонування", "Чому саме цей продукт, для цих людей, а не альтернативи?"],
  ["Маркетинг", "Яка система стабільно поєднає продукт із його ринком?"],
  ["Зростання", "Що варто масштабувати, а що — спершу полагодити?"],
  ["Організація", "Які люди, процеси й рішення мають це підтримувати?"],
] as const;

type Service = {
  id: string;
  n: string;
  name: string;
  tagline: string;
  best: string;
  img: string;
  lede: string[];
  listLabel: string;
  list: string[];
  outcomeLabel: string;
  outcome: string;
  cta: string;
};

const services: Service[] = [
  {
    id: "advisory",
    n: "01",
    name: "Стратегічна консультація",
    tagline: "Подивитися на ситуацію з іншого боку.",
    best: "Одне рішення · точкова робота",
    img: advisoryImg,
    lede: [
      "Для конкретного рішення, складної задачі чи моменту невизначеності. Ви приносите контекст — продукт, запуск, ринок, питання позиціонування чи зростання, — а ми разом розбираємося, що насправді відбувається під поверхнею.",
      "Замість того, щоб одразу хапатися за рішення, ми прояснюємо ситуацію, визначаємо, які рішення справді важливі, і знаходимо найкорисніший шлях далі.",
    ],
    listLabel: "Підійде, якщо",
    list: [
      "Ви вирішуєте, як позиціонувати чи перепозиціонувати продукт.",
      "Ви готуєтеся до запуску чи виходу на ринок.",
      "Зростання сповільнилося, і причина неочевидна.",
      "Маркетинг розсипався на окремі шматки.",
      "Ви думаєте про серйозну зміну курсу.",
    ],
    outcomeLabel: "З чим ви підете",
    outcome:
      "Ясніше розуміння ситуації, важливих рішень і того, що робити далі.",
    cta: "Обговорити вашу ситуацію",
  },
  {
    id: "strategy",
    n: "02",
    name: "Розробка стратегії",
    tagline: "Коли ясність має стати стратегією.",
    best: "Проєкт · створюємо разом",
    img: strategyImg,
    lede: [
      "Деякі ситуації не розв’язати за одну розмову. Тут треба глибше зануритися в продукт, клієнта, ринок, конкурентів, позиціонування й наявну маркетингову систему — і перетворити побачене на цілісний напрям.",
      "У таких проєктах я не просто раджу щодо стратегії. Я розробляю її разом із вами.",
    ],
    listLabel: "Робота може охоплювати",
    list: [
      "Логіку бізнесу, продукту й ринку",
      "Позиціонування та ціннісну пропозицію",
      "Стратегію виходу на ринок",
      "Архітектуру маркетингу",
      "Шлях і життєвий цикл клієнта",
      "Канали, пріоритети й вимірювання",
      "Можливості ШІ та автоматизації",
    ],
    outcomeLabel: "Результат",
    outcome:
      "Робоча стратегічна система, з якою керівництво й команди визначають пріоритети, оцінюють можливості й ухвалюють кращі рішення.",
    cta: "Обговорити стратегічний проєкт",
  },
  {
    id: "fractional",
    n: "03",
    name: "Фракційний CMO",
    tagline: "Досвідчене керівництво маркетингом — без ще одного штатного найму.",
    best: "Постійно · партнер усередині команди",
    img: cmoImg,
    lede: [
      "Для бізнесів, яким замало стратегічних порад, — потрібна людина, яка допоможе стратегії запрацювати всередині компанії.",
      "Ця роль — між стратегією та виконанням: задати напрям, розставити пріоритети, пов’язати маркетинг із продуктовими й комерційними рішеннями, посилити команду і збудувати системи, без яких маркетинг не працює злагоджено.",
    ],
    listLabel: "Що я беру на себе",
    list: [
      "Стратегічний напрям і пріоритети",
      "Архітектуру маркетингу",
      "Структуру й силу команди",
      "Лідерство й ухвалення рішень",
      "Нагляд за виконанням",
      "Технології, ШІ та автоматизацію",
    ],
    outcomeLabel: "Моя роль",
    outcome:
      "Не маркетинговий відділ на аутсорсі, а напрям, структура й середовище для рішень, у якому ваші люди працюють краще.",
    cta: "Обговорити формат CMO",
  },
];





function ServiceDetail({ s, i }: { s: Service; i: number }) {
  return (
    <div id={s.id} className={i > 0 ? "rule-thin" : ""}>
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        {/* header always leads: number, name, tagline */}
        <Reveal>
          <div>
            <p className="label-xs !tracking-[0.26em] text-olive">
              {s.n} — {s.best}
            </p>
            <h2 className="display-md mt-5">{s.name}</h2>
            <p className="mt-5 lead-serif italic text-charcoal">
              {s.tagline}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden bg-stone">
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              {s.lede.map((p, k) => (
                <p key={p} className={k === 0 ? "body-read" : "body-read mt-5"}>
                  {p}
                </p>
              ))}

              <p className="label-xs mt-10">{s.listLabel}</p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {s.list.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 py-1.5 text-[0.9rem] leading-relaxed text-charcoal/75"
                  >
                    <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-olive" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-l-2 border-olive bg-sage/35 px-7 py-6">
                <p className="label-xs !tracking-[0.2em]">{s.outcomeLabel}</p>
                <p className="mt-3 lead-serif text-charcoal">
                  {s.outcome}
                </p>
              </div>

              <a href="#start" className="link-editorial mt-8">
                {s.cta} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}



const worksWhen = [
  "Вам потрібна людина, яка поставить бриф під сумнів, а не просто виконає його.",
  "Ви готові дивитися ширше за маркетинг, якщо справжня проблема деінде.",
  "Вам потрібне зріле мислення без зайвої корпоративної складності.",
  "Для вас ясність і незалежний погляд важливіші за ще один шар активності.",
  "Ви хочете стратегію, яку бізнес справді здатен втілити.",
];

const notFit = [
  "Вам потрібні лише руки для заздалегідь визначеної задачі.",
  "Ви шукаєте агенцію, що вироблятиме багато контенту чи кампаній.",
  "Стратегію вже визначено, і потрібне лише операційне виконання.",
  "Ви хочете універсальну формулу зростання без заглиблення в контекст.",
];

const moments = [
  "запускає щось нове",
  "виходить на новий ринок",
  "перепозиціонує продукт чи бренд",
  "переходить на наступний етап зростання",
  "будує або перебудовує маркетинг",
  "змінює бізнес-модель",
  "вбудовує ШІ в наявні процеси",
  "або просто намагається зрозуміти, що робити далі",
];

const process = [
  { n: "01", label: "Контекст", note: "Зрозуміти реальну ситуацію." },
  { n: "02", label: "Ясність", note: "Визначити, що справді важливо." },
  { n: "03", label: "Структура", note: "Створити систему, що має сенс." },
  { n: "04", label: "Рішення", note: "Впевнено обрати напрям." },
  { n: "05", label: "Дія", note: "Розставити пріоритети й рухатися." },
  { n: "06", label: "Навчання", note: "Виміряти, зробити висновки, вдосконалити наступне коло." },
];

const formats = [
  ["Мені треба продумати одне рішення.", "Стратегічна консультація", "#advisory"],
  ["Мені потрібні напрям і стратегія.", "Розробка стратегії", "#strategy"],
  ["Мені потрібне постійне досвідчене керівництво маркетингом.", "Фракційний CMO", "#fractional"],
  ["Я ще не знаю, що мені потрібно.", "І це абсолютно нормально.", "#start"],
] as const;

function StrategicPartnership() {
  return (
    <div className="ua-page bg-background text-foreground" lang="uk">
      <Header />
      <main>
        {/* ——— 01 HERO ——— */}
        <section className="relative overflow-hidden bg-cream">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[18%] top-[58%] h-[20rem] w-[20rem] rounded-full bg-sage/50 blur-3xl"
          />
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[-22%] bottom-[-30%] h-[95%] w-auto max-w-none select-none opacity-[0.22] [filter:sepia(0.05)_saturate(0.3)_brightness(1.28)_contrast(0.82)] [mask-image:radial-gradient(closest-side,black_50%,transparent_100%)]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-12 px-6 pb-20 pt-24 md:grid-cols-12 md:gap-10 md:px-10 md:pb-28 md:pt-32">
            <div className="flex flex-col md:col-span-7">
              <Reveal>
                <p className="label-xs !tracking-[0.3em]">Стратегічне партнерство</p>
                <h1 className="display-lg mt-7">
                  Іноді потрібен
                  <br />
                  не ще один фреймворк,
                  <br />
                  <span className="italic">а людина,</span>
                  <br />
                  що думає разом із вами.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead-serif mt-9 max-w-[32rem] text-charcoal">
                  Досвідчена стратегічна підтримка для засновників, керівників і команд, які працюють із продуктом, маркетингом, зростанням і змінами.
                </p>
                <p className="body-read mt-7 max-w-[30rem]">
                  Я працюю пліч-о-пліч із бізнесом, коли задача виходить за межі окремого маркетингового питання — коли продукт, ринок, позиціонування, зростання й виконання треба розглядати як одну систему.
                </p>
                <p className="body-read mt-5 max-w-[30rem]">
                  Формат може бути точковим або постійним: одне стратегічне рішення, сама стратегія — або роль фракційного CMO.
                </p>
              </Reveal>
              <Reveal delay={200} className="mt-10 md:mt-auto md:pt-10">
                <a href="#involvement" className="link-editorial">
                  Як ми можемо працювати <span aria-hidden>↓</span>
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <Reveal delay={220}>
                <div className="ml-auto max-w-[26rem] md:max-w-none">
                  <img
                    src={portraitImg.url}
                    alt="Віта Шаблій"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

        </section>





        {/* ——— 02 WHY ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="label-xs">Коли відповідь — не ще одна тактика</p>
              <h2 className="display-md mt-6 max-w-[46rem]">
                Видима проблема — не завжди та, яку{" "}
                <span className="italic">треба розв’язати.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Маркетингова проблема може починатися з продукту.",
                "Проблема зростання може корінитися в позиціонуванні.",
                "Проблема запуску насправді може бути питанням готовності ринку.",
                "А буває, команда постійно щось робить, тоді як рішення, що мали б цим керувати, досі не ухвалені.",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 80}>
                  <div className="rule-thin h-full pt-6">
                    <p className="label-xs !tracking-[0.24em] text-olive">0{i + 1}</p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/75">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>



            <Reveal delay={160}>
              <div className="mt-12 max-w-[38rem]">
                <p className="body-read">Саме тут я зазвичай найкорисніша.</p>
                <p className="lead-serif mt-3 italic text-charcoal">
                  Я дивлюся на всю систему, перш ніж вирішити, де втручатися.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— 03 WHERE I WORK ——— */}
        <section className="rule-thin relative overflow-hidden">
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[-14%] top-1/2 h-[130%] w-auto max-w-none -translate-y-1/2 select-none opacity-[0.18] [filter:sepia(0.05)_saturate(0.3)_brightness(1.3)_contrast(0.8)] [mask-image:radial-gradient(closest-side,black_45%,transparent_100%)]"
          />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[36rem]">
                Я працюю там, де <span className="italic">сходяться рішення.</span>
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
              {fields.map(([k, v], i) => (
                <Reveal key={k} delay={i * 70}>
                  <div
                    className="group flex gap-6"
                    style={{ marginLeft: `${i % 2 === 1 ? 2 : 0}rem` }}
                  >
                    <span
                      aria-hidden
                      className={`mt-[0.7rem] h-3 w-3 shrink-0 rounded-full ${
                        ["bg-olive/70", "bg-slate", "bg-sage", "bg-olive/50", "bg-taupe", "bg-slate-deep/60"][
                          i % 6
                        ]
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="label-xs !text-charcoal !tracking-[0.26em]">{k}</p>
                      <p className="lead-serif mt-4 max-w-[24rem] text-charcoal">
                        {v}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>


            <p className="lead-serif mt-14 max-w-[34rem] italic text-charcoal/80">
              Робота рідко вміщується в одну клітинку. У цьому й суть.
            </p>
          </div>
        </section>


        {/* ——— 04 LEVEL OF INVOLVEMENT + THE THREE SERVICES ——— */}
        <section id="involvement" className="rule-thin blue-room">
          <div className="mx-auto max-w-[1440px] px-6 pt-20 md:px-10 md:pt-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <p className="label-xs">Рівень залученості</p>
                  <h2 className="display-md mt-6">
                    Три способи <span className="italic">працювати разом.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8 md:pt-4">
                <Reveal delay={120}>
                  <p className="body-read">
                    Те саме мислення — на трьох рівнях близькості. Одним рішенням потрібен досвідчений погляд збоку. Іншим — глибше дослідження й розробка стратегії. А деяким бізнесам на певний час потрібне досвідчене керівництво маркетингом усередині компанії.
                  </p>
                  <p className="quote-serif mt-6 italic text-charcoal">
                    Я працюю в усіх трьох.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {services.map((s, i) => (
            <ServiceDetail key={s.id} s={s} i={i} />
          ))}
        </section>



        {/* ——— 07 HOW I WORK ——— */}
        <section className="teal-room rule-thin relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-ivory/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="label-xs">Робочий принцип</p>
                  <h2 className="display-md mt-5">
                    Спершу <span className="italic">контекст.</span>
                    <br />
                    Потім <span className="italic">формат.</span>
                  </h2>
                  <p className="body-read mt-8">
                    Я не починаю з готової методології й не втискаю кожну компанію в один фреймворк. Я починаю з розуміння бізнесу: що вже є, що змінилося, де напруга і які рішення зараз даються найважче.
                  </p>
                  <p className="lead-serif mt-7 max-w-[24rem] italic text-charcoal">
                    Стратегія — не пряма лінія: нова інформація змінює наступні рішення.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <ProcessOrbit steps={process} />
              </div>
            </div>
          </div>
        </section>


        {/* ——— 08 IS / ISN’T ——— */}
        <section className="teal-room relative overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
              {/* fit */}
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="label-xs !text-charcoal">Це працює, коли —</p>
                </Reveal>
                <div className="mt-10 space-y-9">
                  {worksWhen.map((t, i) => (
                    <Reveal key={t} delay={i * 70}>
                      <div
                        className="flex gap-6"
                        style={{ marginLeft: `${[0, 2.5, 1.2, 3.4, 0.8][i % 5]}rem` }}
                      >
                        <span
                          aria-hidden
                          className="lead-serif mt-2 shrink-0 tabular-nums text-olive"
                        >
                          0{i + 1}
                        </span>
                        <p className="lead-serif min-w-0 max-w-[26rem] text-charcoal">
                          {t}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* not fit */}
              <div className="lg:col-span-4 lg:col-start-9 lg:pt-16">
                <Reveal delay={120}>
                  <p className="label-xs">Найімовірніше, не підійде, коли —</p>
                  <ul className="mt-9 space-y-7">
                    {notFit.map((t) => (
                      <li key={t} className="flex gap-4">
                        <span aria-hidden className="mt-[0.3rem] shrink-0 text-[0.8rem] text-ivory/60">
                          ×
                        </span>
                        <p className="text-[0.9rem] leading-relaxed text-charcoal/50">{t}</p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <p className="lead-serif mt-20 max-w-[44rem] italic text-charcoal">
                Добра стратегічна робота вимагає відкритості — щоб помітити, що початкове питання могло бути не тим.
              </p>
            </Reveal>
          </div>
        </section>


        {/* ——— 09 WHO ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <h2 className="display-md">
                    Зазвичай уже є щось справжнє,{" "}
                    <span className="italic">з чим можна працювати.</span>
                  </h2>
                  <p className="body-read mt-10">
                    Найкраще мені працюється із засновниками, керівними командами й сталими бізнесами, у яких уже є продукт, експертиза, клієнти чи знання ринку, — але які підходять до моменту, коли звичного погляду на маркетинг уже замало.
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal delay={100}>
                  <p className="label-xs">Наприклад, коли компанія</p>
                </Reveal>
                <div className="mt-9 grid gap-x-12 gap-y-5 sm:grid-cols-2">
                  {moments.map((m, i) => (
                    <Reveal key={m} delay={100 + i * 50}>
                      <div className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-olive/60"
                        />
                        <span className="lead-serif text-charcoal">
                          {m}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* ——— 10 EXPERIENCE ——— */}
        <section className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-5">
                <Reveal>
                  <img
                    src={workPortrait.url}
                    alt="Віта Шаблій"
                    className="aspect-[9/13] w-full object-cover"
                    loading="lazy"
                  />
                </Reveal>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <Reveal>
                  <p className="label-xs">Досвід за роботою</p>
                  <h2 className="display-md mt-6">
                    Стратегія від людини, яка{" "}
                    <span className="italic">сама будувала.</span>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="body-read mt-8">
                    Мій шлях пройшов через маркетинг, стратегію й продукт: відділи й команди з нуля, запуски продуктів, вихід на нові ринки, позиціонування й стратегії виходу на ринок, робота пліч-о-пліч із технічними та продуктовими командами.
                  </p>
                  <p className="body-read mt-5">
                    Незмінним у кожному контексті лишається одне: спершу зрозуміти, що насправді відбувається під поверхнею, а вже потім вирішувати, що робити.
                  </p>
                  <div className="mt-10 grid grid-cols-3 gap-6 border-y border-line/60 py-7 md:gap-8">
                    {[
                      ["13+", "років у маркетингу й стратегії"],
                      ["3", "континенти досвіду"],
                      ["5+", "галузей у кейсах"],
                    ].map(([n, l]) => (
                      <div key={l}>
                        <span className="quote-serif text-charcoal">
                          {n}
                        </span>
                        <p className="label-xs mt-2 !leading-tight">{l}</p>
                      </div>
                    ))}
                  </div>
                  <p className="lead-serif mt-10 border-l border-line pl-7 italic text-charcoal">
                    Цінність цього досвіду — не в кількості зробленого, а в умінні розпізнати, з якою саме проблемою я маю справу.
                  </p>
                  <a href="/ua/about" className="link-editorial mt-9">
                    Людина за роботою <span aria-hidden>→</span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 11 CHOOSING THE FORMAT ——— */}
        <section className="blue-room rule-thin relative overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-x-12">
              {/* Left column: heading, intro, questions */}
              <div className="md:col-span-7">
                <Reveal>
                  <h2 className="display-md">
                    Не знаєте, <span className="italic">який формат обрати?</span>
                  </h2>
                  <p className="body-read mt-6">
                    Почніть із речення, яке найбільше схоже на вашу ситуацію.
                  </p>
                </Reveal>

                <div className="mt-14 space-y-10">
                  {formats.map(([q, a, href], i) => (
                    <Reveal key={q} delay={i * 80}>
                      <div className="flex gap-6 md:gap-8">
                        <span
                          aria-hidden
                          className="lead-serif mt-[0.55rem] shrink-0 tabular-nums text-olive"
                        >
                          0{i + 1}
                        </span>
                        <p className="quote-serif text-charcoal">
                          {q}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Right column: leads-to index */}
              <div className="md:col-span-4 md:col-start-9">
                <Reveal>
                  <div className="border-l border-line pl-8">
                    <p className="label-xs">Веде до —</p>
                    <div className="mt-5 space-y-5">
                      {formats.map(([q, a, href]) => (
                        <a
                          key={q}
                          href={href}
                          className="group flex items-baseline gap-1"
                        >
                          <span className="lead-serif italic text-charcoal transition-colors group-hover:text-ivory/90">
                            {a}
                          </span>
                          <span
                            aria-hidden
                            className="shrink-0 text-ivory transition-transform duration-500 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>



        {/* ——— 12 FINAL CTA ——— */}
        <section id="start" className="olive-room rule-thin relative overflow-hidden">
          <ShellBackdrop />
          <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 py-24 text-center md:px-10 md:py-32">
            <Reveal>
              <p className="label-xs">Почніть тут</p>
              <h2 className="display-lg mx-auto mt-7 max-w-[36rem]">
                Формат знати не обов’язково. Почнімо з{" "}
                <span className="italic">контексту.</span>
              </h2>
            </Reveal>
            <p className="body-read mx-auto mt-10 max-w-[36rem]">
              Розкажіть, що ви будуєте, де ви зараз і куди хочете прийти. А далі разом зрозуміємо, чи можу я бути корисною, який рівень залученості має сенс і яким має бути наступний крок.
            </p>
            <a
              href="mailto:hello@vitashablii.com"
              className="label-xs mt-12 inline-flex items-center gap-3 bg-ivory px-9 py-5 !tracking-[0.2em] !text-ink transition-colors hover:bg-slate hover:!text-ivory"
            >
              Обговорити співпрацю <span aria-hidden>→</span>
            </a>
            <p className="label-xs mt-8 !tracking-[0.18em]">
              Стратегічна консультація · Розробка стратегії · Фракційний CMO
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
