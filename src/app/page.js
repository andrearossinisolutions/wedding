"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const sections = useMemo(
    () => [
      {
        id: "evento",
        background:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80",
        slides: [
          {
            kicker: "Save The Date",
            title: "Il Nostro Matrimonio",
            description:
              "Con grande gioia ti invitiamo a condividere con noi una giornata speciale di festa, affetto e felicita.",
            details: ["Data in aggiornamento", "Programma completo in arrivo"],
          },
          {
            kicker: "Un Giorno Speciale",
            title: "La Nostra Promessa",
            description:
              "Sarà una giornata pensata per stare insieme alle persone che amiamo di piu', tra emozioni sincere e momenti da ricordare.",
            details: [
              "Cerimonia e pranzo nella stessa giornata",
              "Aggiorneremo presto gli orari e i dettagli logistici",
            ],
            timeline: [
              { time: "TBD", label: "Celebrazione civile al Comune di Cervignano d'Adda" },
              { time: "Subito dopo", label: "Trasferimento verso Agriturismo Isolone" },
              { time: "Pranzo", label: "Ricevimento e festeggiamenti" },
              { time: "Pomeriggio", label: "Torta, brindisi e saluti finali" },
            ],
          },
        ],
      },
      {
        id: "celebrazione",
        background: "/comune.jpg",
        slides: [
          {
            kicker: "Celebrazione",
            title: "Comune di Cervignano d'Adda",
            description:
              "La celebrazione civile si svolgerà presso il Comune di Cervignano d'Adda, in un momento intimo e significativo.",
            details: [
              "Indirizzo: Piazza del Municipio, 1, 26832 Cervignano d'Adda (LO)",
              "In mattinata, orario ancora da definire",
            ],
          },
          {
            kicker: "Dettagli",
            title: "Informazioni Utili",
            description:
              "Nei prossimi aggiornamenti condivideremo l'orario definitivo, i riferimenti per il parcheggio e le eventuali indicazioni per l'arrivo.",
            details: [
              "Invito a presentarsi con un po' di anticipo",
              "Contatti rapidi disponibili nella sezione finale",
            ],
          },
        ],
      },
      {
        id: "pranzo",
        background: "/isolone-1.jpg",
        slides: [
          {
            kicker: "Pranzo",
            title: "Agriturismo Isolone",
            description:
              "Dopo la celebrazione ci sposteremo all'Agriturismo Isolone per il pranzo e i festeggiamenti.",
            details: [
              "Accoglienza subito dopo la cerimonia",
              "Dettagli logistici in aggiornamento",
            ],
          },
          {
            kicker: "Atmosfera",
            title: "Convivialita e Festa",
            description:
              "Ci aspetta un pranzo in un ambiente rustico ed affascinante, con tempi rilassati per brindare, stare insieme e goderci la giornata.",
            details: [
              "Spazi interni ed esterni a disposizione",
              "Momenti dedicati a foto e saluti",
            ],
          },
        ],
      },
      {
        id: "ricevimento-info",
        background: "/isolone-2.jpg",
        slides: [
          {
            kicker: "Info Ricevimento",
            title: "Un Pomeriggio Insieme",
            description:
              "Dopo il pranzo continueremo i festeggiamenti con torta, brindisi e musica in agriturismo.",
            details: [
              "Menu con opzioni anche vegetariane",
              "Ampio parcheggio disponibile",
            ],
          },
          {
            kicker: "Dettagli Ospiti",
            title: "Indicazioni Ospiti",
            description:
              "Questa sezione verra rifinita con le ultime informazioni utili: eventuali intolleranze, dettagli sugli spostamenti e orario previsto di conclusione.",
            details: [
              "Conferma presenza (RSVP) il prima possibile",
              "Segnalateci qualsiasi esigenza alimentare",
              "Contatti organizzativi: 347 2181 696 / 392 178 2426",
            ],
          },
        ],
      },
      {
        id: "final-story",
        videoId: "ejVEg8Xoqyc",
        videoStart: 584,
        hold: 1.8,
        slides: [
          {
            kicker: "Finale",
            title: "Ti Aspettiamo",
            description:
              "Grazie per condividere con noi questo giorno speciale. Non vediamo l'ora di arrivare e festeggiare insieme a te.",
            details: [
              "RSVP e dettagli finali in aggiornamento",
              "A presto, con affetto",
            ],
          },
        ],
      },
    ],
    [],
  );

  const [activeSlides, setActiveSlides] = useState(() =>
    Object.fromEntries(sections.map((section) => [section.id, 0])),
  );
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const nextActive = {};
      let bestSectionId = sections[0]?.id ?? "";
      let bestVisibility = -1;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          nextActive[section.id] = 0;
          return;
        }

        const rect = element.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.5;
        const rawProgress = Math.min(
          Math.max((viewportCenter - rect.top) / Math.max(rect.height, 1), 0),
          0.9999,
        );
        nextActive[section.id] = Math.floor(rawProgress * section.slides.length);

        const visiblePx =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibility = Math.max(visiblePx, 0);
        if (visibility > bestVisibility) {
          bestVisibility = visibility;
          bestSectionId = section.id;
        }
      });

      setActiveSlides(nextActive);
      setActiveSectionId(bestSectionId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  return (
    <main>
      <nav className="story-progress" aria-label="Progressione invito">
        {sections.map((section) => (
          <a
            key={`progress-${section.id}`}
            href={`#${section.id}`}
            className={`story-progress-dot ${activeSectionId === section.id ? "is-active" : ""}`}
            aria-label={`Vai a ${section.id}`}
          />
        ))}
      </nav>
      {sections.map((section) => {
        const activeIndex = activeSlides[section.id] ?? 0;
        return (
          <section
            key={section.id}
            id={section.id}
            className="story-section"
            style={{ height: `${section.slides.length * 100 * (section.hold ?? 1)}svh` }}
          >
            <div
              className={`story-sticky ${section.videoId ? "has-video has-video-iframe" : ""}`}
              style={
                section.background
                  ? { backgroundImage: `url("${section.background}")` }
                  : undefined
              }
            >
              {section.videoId ? (
                <div className="story-video-layer" aria-hidden="true">
                  <iframe
                    className="story-video-bg-frame"
                    src={`https://www.youtube-nocookie.com/embed/${section.videoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&playlist=${section.videoId}&start=${section.videoStart}`}
                    title="Wedding Story Background Video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    tabIndex={-1}
                  />
                </div>
              ) : null}
              <div className="parallax-overlay">
                {section.slides.map((slide, index) => (
                  <article
                    key={`${section.id}-${slide.title}`}
                    className={`content-shell one-slide ${index === activeIndex ? "is-active" : ""}`}
                  >
                    <p className="kicker">{slide.kicker}</p>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <ul>
                      {slide.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {slide.timeline ? (
                      <div className="story-timeline-wrap">
                        <div className="story-timeline">
                          {slide.timeline.map((step) => (
                            <div key={`${step.time}-${step.label}`} className="story-timeline-step">
                              <span className="story-time-pill">{step.time}</span>
                              <p>{step.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section
        className="bg-[#f7f0e6] text-[#2d2219] px-6 py-18 sm:px-8"
        id="dettagli-evento"
      >
        <div className="mx-auto w-full max-w-6xl">
          <article>
            <p className="mb-3 inline-block border-b border-[#5f4f4073] text-xs tracking-[0.08em] uppercase text-[#5f4f40]">
              Luoghi
            </p>
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">Mappe e Indicazioni</h2>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-[#59453426] bg-white/85 shadow-[0_10px_30px_rgba(89,69,52,0.08)]">
                <iframe
                  className="h-56 w-full border-0"
                  src="https://www.google.com/maps?q=Comune+di+Cervignano+d%27Adda&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Comune di Cervignano d'Adda"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-medium">Comune di Cervignano d&apos;Adda</h3>
                  <p className="mb-3 text-base sm:text-lg">
                    Piazza del Municipio, 1, 26832 Cervignano d&apos;Adda (LO)
                  </p>
                  <a
                    className="font-semibold text-[#594534] underline-offset-2 hover:underline"
                    href="https://www.google.com/maps/search/?api=1&query=Comune%20di%20Cervignano%20d%27Adda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apri su Google Maps
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#59453426] bg-white/85 shadow-[0_10px_30px_rgba(89,69,52,0.08)]">
                <iframe
                  className="h-56 w-full border-0"
                  src="https://www.google.com/maps?q=Agriturismo+Isolone&z=12&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Agriturismo Isolone"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-medium">Agriturismo Isolone</h3>
                  <p className="mb-3 text-base sm:text-lg">
                    Cascina San Benedetto, 26865 San Rocco al Porto (LO)
                  </p>
                  <a
                    className="font-semibold text-[#594534] underline-offset-2 hover:underline"
                    href="https://www.google.com/maps/search/?api=1&query=Agriturismo%20Isolone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apri su Google Maps
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="mx-auto mt-14 w-full max-w-3xl text-center">
          <p className="text-base sm:text-lg">
            Per informazioni sui servizi e i pacchetti disponibili, non esitare a contattarci.<br />
            347 2181 696 / 392 178 2426
          </p>
        </div>
      </section>
    </main>
  );
}
