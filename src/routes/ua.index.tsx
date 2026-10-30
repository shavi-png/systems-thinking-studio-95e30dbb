import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SpiralSystem, Spiral } from "@/components/site/LineArt";
import { Solutions } from "@/components/site/Solutions";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import portrait from "@/assets/vita-warm-portrait.png.asset.json";
import personalPortrait from "@/assets/vita-black-white-portrait.png.asset.json";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import hands from "@/assets/hands-notebook.jpg";
import ripple from "@/assets/ripple.jpg.asset.json";
import shell from "@/assets/shell.jpg.asset.json";
import seeds from "@/assets/seeds.jpg.asset.json";

const title = "Віта Шаблій — стратегиня · засновниця · візіонерка";
const description =
  "Clarity before complexity. Стратегія, маркетинг, продуктове мислення та ШІ — щоб ідея стала структурою, системою і рішенням.";

export const Route = createFileRoute("/ua/")({
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
  component: Index,
});

const proof = [
  { k: "13 років", v: "у маркетингу та стратегії" },
  { k: "500+", v: "проєктів і подій" },
  { k: "Ринки", v: "США · Європа · Китай" },
  { k: "Досвід", v: "Apple · Samsung · Microsoft · Huawei · Cisco" },
  { k: "ШІ", v: "у маркетингових процесах із 2020 року" },
];

function Index() {
  return (
    <div id="top" className="ua-page bg-background text-foreground" lang="uk">
      <Header />
      <main>
        {/* ——— HERO — quiet ——— */}
        <section className="relative overflow-hidden">
          {/* faint nautilus silhouette behind everything — kept very soft so the white page stays clean */}
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[78%] h-[115%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.40] [filter:sepia(0.06)_saturate(0.3)_brightness(1.22)_contrast(0.85)] [mask-image:radial-gradient(closest-side,black_55%,transparent_100%)] md:left-[38%] md:top-[72%] md:h-[128%] md:opacity-[0.34]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-16 pt-24 md:grid-cols-12 md:px-10 md:pb-24 md:pt-32">
            <div className="flex flex-col md:col-span-6">
              <Reveal>
                <p className="label-xs !text-charcoal !tracking-[0.3em]">Vita Shablii</p>
                <p className="label-xs mt-2">Стратегиня · Засновниця · Візіонерка</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="display-lg mt-10 md:mt-12">
                  Ідеям не потрібна
                  <br />
                  складність.
                  <br />
                  <span className="italic">Їм потрібна структура.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="body-read mt-10 md:mt-12">
                  Від ідеї — до продукту. Від продукту — до ринку. Від хаотичного маркетингу — до системи.
                </p>
              </Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 md:mt-auto md:pt-14">
                <a
                  href="#solutions"
                  className="label-xs group inline-flex items-center gap-3 border border-charcoal/25 bg-paper/60 px-7 py-4 !tracking-[0.2em] !text-charcoal backdrop-blur-[2px] transition-colors hover:border-olive hover:bg-olive/10"
                >
                  ЗНАЙТИ СВОЮ ТОЧКУ ВХОДУ
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a href="/ua/about" className="link-editorial">
                  Познайомитися ближче <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="relative md:col-span-6 md:col-start-7 md:flex md:items-stretch md:gap-6">
              <p className="label-xs hidden shrink-0 self-stretch !tracking-[0.28em] md:block md:[writing-mode:vertical-rl] md:rotate-180">
                Стратегія × Маркетинг × Продуктове мислення × ШІ
              </p>
              <div className="grain relative aspect-[3/4] w-full overflow-hidden bg-stone">
                <img
                  src={portrait.url}
                  alt="Портрет Віти Шаблій"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-[60%_center]"
                />
              </div>
              <p className="label-xs mt-6 md:hidden">
                Стратегія × Маркетинг × Продуктове мислення × ШІ
              </p>
            </div>
          </div>
        </section>

        {/* ——— EXPERTISE + POINT OF VIEW — dense ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-20 md:px-10 md:pb-20 md:pt-28">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-7">
                <Reveal>
                  <p className="section-num mb-6">01 / Погляд</p>
                  <h2 className="display-md">
                    Працюю на перетині стратегії × маркетингу ×{" "}
                    <span className="italic">продуктового мислення.</span>
                  </h2>
                </Reveal>
                <div className="mt-12 space-y-6">
                  <p className="body-read">
                    Запустити продукт — лише частина справи. Набагато важливіше зрозуміти,
                    чому одні ідеї знаходять своє місце на ринку, а інші — ні.
                  </p>
                  <p className="body-read">
                    Відповідь зазвичай там, де перетинаються три речі: що хоче створити автор,
                    що справді потрібно людям і що здатне працювати як бізнес.
                  </p>
                  <p className="body-read">
                    Саме тут інтуїція, продуктове мислення, стратегія й технології сходяться —
                    і складаються в одну цілісну систему.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <div className="grain relative aspect-[4/5] overflow-hidden bg-stone">
                  <img
                    src={hands}
                    alt="Руки на розгорнутому блокноті"
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover opacity-95"
                  />
                </div>
              </div>
            </div>

            {/* proof ribbon — restrained cream band, sage only as an accent rule */}
            <div className="mt-14 md:mt-20">
              <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
                {proof.map((p) => (
                  <div
                    key={p.k}
                    className="border-b border-line py-6 pr-6 lg:border-b-0 lg:border-l lg:border-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
                  >
                    <dt className="quote-serif text-charcoal">
                      {p.k}
                    </dt>
                    <dd className="label-xs mt-3 !tracking-[0.14em] normal-case">{p.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ——— TRANSITION — the first olive room ——— */}
        <section className="olive-room relative overflow-hidden">
          <ShellBackdrop />
          <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
            <Reveal>
              <p className="section-num mb-8">02 / Ідея стає системою</p>
              <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
                {/* the single biggest voice in this room */}
                <div className="lg:col-span-7">
                  <h2 className="display-xl">
                    Маркетинг —
                    <br />
                    <span className="italic">не початок.</span>
                  </h2>
                </div>

                {/* restrained supporting text, strictly aligned to the grid */}
                <div className="lg:col-span-4 lg:col-start-9">
                  <p className="body-read !max-w-none">
                    Більшість проблем з’являється ще до запуску. Коли немає ясності, що ми
                    створюємо, для кого, яку проблему розв’язуємо, чому обирати варто саме нас,
                    як про це говорити і як виходити на ринок, — реклама, контент і ШІ ясності
                    не додадуть. Вони просто швидше масштабують те, що вже є.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* the shell motif, larger and cleaner, owning its own band */}
            <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
              <div className="mx-auto max-w-[54rem]">
                <SpiralSystem
                  center="Контекст"
                  nodes={["Ясність", "Структура", "Рішення", "Дія"]}
                />
              </div>
            </div>
          </div>

          {/* full-bleed image moment — the visual event, not decoration */}
          <div className="relative h-[52vh] w-full overflow-hidden md:h-[76vh]">
            <img
              src={ripple.url}
              alt="Кола на тихій воді, що розходяться спіраллю"
              loading="lazy"
              className="h-full w-full object-cover [filter:grayscale(0.8)_sepia(0.2)_brightness(0.86)_contrast(1.04)]"
            />
            <Spiral className="pointer-events-none absolute inset-0 m-auto h-[62%] w-[62%] text-ivory opacity-40" />
            <p className="label-xs absolute bottom-6 left-6 !text-ivory md:bottom-10 md:left-10">
              Одна структура, що розгортається
            </p>

          </div>
        </section>

        {/* ——— PRODUCT DISCOVERY — dense + interactive ——— */}
        <Solutions />

        {/* ——— METHOD STATEMENT — one image owns the section ——— */}
        <section id="method" className="rule-thin bg-cream">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="section-num mb-8">04 / Метод</p>
              <h2 className="display-md max-w-[46rem]">
                Не кожна задача потребує нового інструмента.
                <br />
                <span className="italic">Іноді треба побачити всю систему.</span>
              </h2>
            </Reveal>

            {/* one large, quiet image — the counterweight to the type */}
            <figure className="mt-14 md:mt-20">
              <div className="grain relative aspect-[16/9] overflow-hidden bg-stone md:aspect-[21/9]">
                <img
                  src={seeds.url}
                  alt="Насіння кульбаби в м’якому світлі"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="label-xs mt-4">Багато інструментів — одна структура</figcaption>
            </figure>

            <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <p className="quote-serif italic text-charcoal">
                  Менше інструментів.
                  <br />
                  Одна структура.
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="body-read !max-w-none">
                  Маркетингових інструментів щороку більшає, а ШІ зробив їх ще доступнішими.
                  Та цінність дедалі менше в тому, скільки інструментів ви знаєте, —
                </p>
                <p className="body-read mt-6 !max-w-none">
                  і дедалі більше в тому, чи розумієте ви, що насправді потрібно вашому продукту,
                  навіщо, в який момент і як це пов’язано з усім іншим. Саме навколо цього я будую
                  свою роботу, продукти й системи.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE THINKING BEHIND THE WORK — human ——— */}
        <section id="about" className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          {/* eyebrow + headline */}
          <Reveal>
            <div className="max-w-4xl">
              <p className="section-num mb-6">05 / Мислення за роботою</p>
              <h2 className="display-md">
                У кожному продукті
                <br />
                я спершу шукаю <span className="italic">логіку</span>.
              </h2>
            </div>
          </Reveal>

          {/* ——— SELECTED EXPERIENCE — editorial proof ——— */}
          <div className="mt-12 md:mt-16">
            <p className="label-xs">Вибраний досвід</p>
            <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-0">
              {[
                {
                  n: "01 / ВИХІД НА РИНКИ",
                  t: "Китай → Європа → США",
                  d: "Запуск і позиціонування продуктів у Європі, США та Китаї — зі стратегією та виходом на ринок, адаптованими до кожного контексту.",
                },
                {
                  n: "02 / ПРОДУКТ І БРЕНД",
                  t: "РІЗНІ ГАЛУЗІ",
                  d: "Стратегія, продуктовий маркетинг і робота з життєвим циклом клієнта — у консалтингу, IT, e-commerce, фінтеху та цифрових бізнесах, що живуть даними.",
                },
                {
                  n: "03 / СИСТЕМИ І ТРАНСФОРМАЦІЯ",
                  t: "Маркетингові системи",
                  d: "Будувала маркетингові відділи, команди й процеси з нуля — перетворюючи розрізнені дії на зрозумілі системи, що здатні рости.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 90}>
                  <div className="md:border-l md:border-line md:px-5 md:first:border-l-0 md:first:pl-0">
                    <p className="label-xs">{item.n}</p>
                    <h3 className="display-sm mt-3">
                      {item.t}
                    </h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.9rem]">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* portrait + philosophy */}
          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <div className="grain relative md:col-span-5 md:col-start-1">
              <div className="aspect-[4/5] overflow-hidden bg-stone">
                <img
                  src={personalPortrait.url}
                  alt="Портрет Віти Шаблій"
                  loading="lazy"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-10">
              <div className="space-y-6">
                <p className="body-read">
                  Тринадцять років у маркетингу, продуктах і на різних ринках раз у раз
                  підтверджують: те, що відбувається до реалізації, часто визначає все,
                  що буде після.
                </p>
                <p className="body-read">
                  Що це за продукт насправді?
                  <br />
                  Для кого він?
                  <br />
                  Звідки береться його цінність?
                  <br />
                  Що ми лише припускаємо, а що знаємо напевно?
                </p>
                <p className="body-read">
                  Перше питання рідко звучить як «Що запускаємо?»
                  <br />
                  Частіше — «Що треба зрозуміти, перш ніж запускати?»
                </p>
                <p className="body-read">
                  Від того, наскільки глибоко ми розібралися на старті, залежить якість усього, що далі.
                </p>
              </div>
              <a href="#solutions" className="link-editorial mt-10">
                ДАЛІ — ДО РІШЕНЬ <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ——— FAQ — open questions ——— */}
        <section id="faq" className="teal-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="section-num mb-6">06 / Відкриті питання</p>
              <h2 className="display-md">А якщо…?</h2>
            </Reveal>

            <div className="mt-12 space-y-0 md:mt-16">
              {[
                {
                  q: "А якщо в мене вже є маркетингова команда?",
                  a: "Я працюю з командами й засновниками, щоб прояснити логіку роботи, а не замінити людей, які її виконують.",
                },
                {
                  q: "А якщо мій продукт ще не до кінця сформований?",
                  a: "Часто це найкращий момент. Що раніше стратегія стає частиною продукту, то менше дорогих розворотів потім.",
                },
                {
                  q: "А якщо мені потрібна допомога з інструментами ШІ?",
                  a: "Ми вбудовуємо ШІ туди, де він справді допомагає ухвалювати рішення, а не додає шуму.",
                },
                {
                  q: "А якщо я не знаю, з якого ринку почати?",
                  a: "Ми розкладаємо продукт, аудиторію й обмеження, щоб знайти правильну точку входу — ще до того, як ви почнете витрачати гроші на канали.",
                },
                {
                  q: "А якщо мені потрібна ясність лише щодо одного рішення?",
                  a: "Саме для цього й існує точкова робота. Ясність в одному правильному місці зазвичай зрушує все інше.",
                },
              ].map((item, i) => (
                <Reveal key={item.q} delay={i * 80}>
                  <div className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
                    <h3 className="font-serif-editorial text-xl text-charcoal md:col-span-5">
                      {item.q}
                    </h3>
                    <p className="body-read md:col-span-7">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— FINAL — the closing olive room ——— */}
        <section id="final" className="olive-room relative overflow-hidden">
          <ShellBackdrop />


          <div className="relative mx-auto grid min-h-[58vh] max-w-[1440px] content-center gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-7">
              <Reveal>
                <p className="section-num mb-8">07 / Принцип, на якому все тримається</p>
                <p className="display-xl">
                  Clarity before <span className="italic">complexity.</span>
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="body-read !max-w-none">
                Кожен продукт, систему чи рішення я починаю з одного питання: чи є в цьому сенс?
                Коли думка ясна, решта вибудовується сама.
              </p>
              <div className="mt-10 flex flex-col items-start gap-5">
                <a href="#solutions" className="link-editorial">
                  Обрати рішення <span aria-hidden>↑</span>
                </a>
                <a href="mailto:hello@vitashablii.com" className="link-editorial">
                  Написати мені <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
