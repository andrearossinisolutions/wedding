"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const sections = useMemo(
    () => [
      {
        id: "evento",
        endHold: 1,
        background:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80",
        slides: [
          {
            kicker: "Save The Date",
            title: "Il Nostro Matrimonio",
            description:
              "Con grande gioia ti invitiamo a condividere con noi una giornata speciale di festa, affetto e felicita.",
            details: ["Data: 06 giugno 2026", "Programma completo in arrivo"],
          },
          {
            kicker: "Un Giorno Speciale",
            timelineOnly: true,
            timelineVisibleCount: 1,
            timeline: [
              { time: "Da definire", label: "Celebrazione civile al Comune di Cervignano d'Adda" },
              { time: "Subito dopo", label: /* "Trasferimento verso Agriturismo Isolone" */"Trasferimento verso luogo da confermare" },
              { time: "Pranzo", label: "Ricevimento e festeggiamenti" },
              { time: "Pomeriggio", label: "Torta, brindisi e saluti finali" },
            ],
          },
          {
            kicker: "Un Giorno Speciale",
            timelineOnly: true,
            timelineVisibleCount: 2,
            timeline: [
              { time: "Da definire", label: "Celebrazione civile al Comune di Cervignano d'Adda" },
              { time: "Subito dopo", label: /* "Trasferimento verso Agriturismo Isolone" */"Trasferimento verso luogo da confermare" },
              { time: "Pranzo", label: "Ricevimento e festeggiamenti" },
              { time: "Pomeriggio", label: "Torta, brindisi e saluti finali" },
            ],
          },
          {
            kicker: "Un Giorno Speciale",
            timelineOnly: true,
            timelineVisibleCount: 3,
            timeline: [
              { time: "Da definire", label: "Celebrazione civile al Comune di Cervignano d'Adda" },
              { time: "Subito dopo", label: /* "Trasferimento verso Agriturismo Isolone" */"Trasferimento verso luogo da confermare" },
              { time: "Pranzo", label: "Ricevimento e festeggiamenti" },
              { time: "Pomeriggio", label: "Torta, brindisi e saluti finali" },
            ],
          },
          {
            kicker: "Un Giorno Speciale",
            timelineOnly: true,
            timelineVisibleCount: 4,
            timeline: [
              { time: "Da definire", label: "Celebrazione civile al Comune di Cervignano d'Adda" },
              { time: "Subito dopo", label: /* "Trasferimento verso Agriturismo Isolone" */"Trasferimento verso luogo da confermare" },
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
              "La celebrazione civile si svolgerà presso il Comune di Cervignano d'Adda. Sala da definire.",
            details: [
              "Indirizzo: Piazza del Municipio, 1, 26832 Cervignano d'Adda (LO)",
              "In mattinata, orario da definire",
            ],
          },
          {
            kicker: "Dettagli",
            title: "Informazioni Utili",
            description:
              "Nei prossimi aggiornamenti condivideremo l'orario definitivo, i riferimenti per il parcheggio e le eventuali indicazioni per l'arrivo.",
            details: [
              "Invitiamo a presentarsi con un po' di anticipo",
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
            // title: "Agriturismo Isolone",
            title: "Da confermare",
            description:
              // "Dopo la celebrazione ci sposteremo all'Agriturismo Isolone per il pranzo e i festeggiamenti.",
              "Dopo la celebrazione ci sposteremo per il pranzo e i festeggiamenti.",
            details: [
              "Accoglienza subito dopo la cerimonia",
              // "Ampio parcheggio, e lunga pista di atterragio",
            ],
          },
          {
            kicker: "Atmosfera",
            title: "Convivialita e Festa",
            description:
              // "Ci aspetta un pranzo in un ambiente rustico ed affascinante, con tempi rilassati per brindare, stare insieme e goderci la giornata.",
              "Ci aspetta un pranzo con tempi rilassati per brindare, stare insieme e goderci la giornata.",
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
              "Dopo il pranzo continueremo i festeggiamenti con torta e brindisi.",
            details: [
              "Menu da confermare",
              // "Ampio parcheggio disponibile",
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
            ],
            tel: ["347 2181 696", "392 178 2426"],
          },
        ],
      },
      {
        id: "final-story",
        // videoId: "ejVEg8Xoqyc",
        // videoStart: 584,
        // background: "/isolone-3.jpg",
        background: "/isolone-1.jpg",
        hold: 1.8,
        slides: [
          {
            kicker: "Finale",
            title: "Ti Aspettiamo",
            description:
              "Grazie per condividere con noi questo giorno speciale. Non vediamo l'ora di arrivare e festeggiare insieme a te.",
            details: [
              "Dettagli finali in aggiornamento",
              "A presto, con affetto, Andrea e Veronica",
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
  const [videoBootstrapped, setVideoBootstrapped] = useState({});
  const [videoFallbackHidden, setVideoFallbackHidden] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
        const baseUnits = section.slides.length * (section.hold ?? 1);
        const activeSpan = Math.max(window.innerHeight * baseUnits, 1);
        const rawProgress = Math.min(
          Math.max((viewportCenter - rect.top) / activeSpan, 0),
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
      setShowBackToTop(currentScrollY > 320);
      const currentSection = sections.find((section) => section.id === bestSectionId);
      if (currentSection?.videoId) {
        setVideoBootstrapped((prev) => {
          if (prev[currentSection.id]) return prev;
          return { ...prev, [currentSection.id]: true };
        });
      }
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
      {showBackToTop ? (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Torna in alto"
        >
          ↑
        </button>
      ) : null}
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
        const isSectionActive = activeSectionId === section.id;
        const isVideoBootstrapped = Boolean(videoBootstrapped[section.id]);
        const isFallbackHidden = Boolean(videoFallbackHidden[section.id]);
        const baseUnits = section.slides.length * (section.hold ?? 1);
        const totalUnits = baseUnits + (section.endHold ?? 0);
        return (
          <section
            key={section.id}
            id={section.id}
            className="story-section"
            style={{ height: `${totalUnits * 100}vh` }}
          >
            <div
              className={`story-sticky ${section.videoId ? "has-video has-video-iframe" : ""} ${isSectionActive ? "is-active-story" : ""}`}
              style={
                section.background
                  ? { backgroundImage: `url("${section.background}")` }
                  : undefined
              }
            >
              {section.videoId ? (
                <div className="story-video-layer" aria-hidden="true">
                  {!isFallbackHidden ? (
                    <div
                      className="story-video-fallback"
                      style={{ backgroundImage: `url("${section.background}")` }}
                    />
                  ) : null}
                  {isVideoBootstrapped ? (
                    <iframe
                      className="story-video-bg-frame"
                      src={`https://www.youtube-nocookie.com/embed/${section.videoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&playlist=${section.videoId}&start=${section.videoStart}`}
                      title="Wedding Story Background Video"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      tabIndex={-1}
                      onLoad={() =>
                        (() => {
                          window.setTimeout(() => {
                            setVideoFallbackHidden((prev) => ({
                              ...prev,
                              [section.id]: true,
                            }));
                          }, 500);
                        })()
                      }
                    />
                  ) : null}
                </div>
              ) : null}
              <div className="parallax-overlay">
                {section.slides.map((slide, index) => (
                  <article
                    key={`${section.id}-${slide.title ?? slide.kicker ?? "slide"}-${index}`}
                    className={`content-shell one-slide ${index === activeIndex ? "is-active" : ""}`}
                  >
                    {!slide.timelineOnly ? (
                      <>
                        <p className="kicker">{slide.kicker}</p>
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        <ul>
                          {slide.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                          {slide.tel?.length ? (
                            <li>
                              Contatti organizzativi:{" "}
                              {slide.tel.map((phone, phoneIndex) => (
                                <span key={phone}>
                                  <a
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="font-semibold underline underline-offset-2"
                                  >
                                    {phone}
                                  </a>
                                  {phoneIndex < slide.tel.length - 1 ? " / " : ""}
                                </span>
                              ))}
                            </li>
                          ) : null}
                        </ul>
                      </>
                    ) : (
                      <p className="kicker">{slide.kicker}</p>
                    )}
                    {slide.timeline ? (
                      <div className="story-timeline-wrap">
                        <div className="story-timeline">
                          {slide.timeline
                            .slice(0, slide.timelineVisibleCount ?? slide.timeline.length)
                            .map((step, stepIndex) => (
                            <div
                              key={`${step.time}-${step.label}`}
                              className="story-timeline-step"
                              style={{ "--step-index": stepIndex }}
                            >
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
                {/* <iframe
                  className="h-56 w-full border-0"
                  src="https://www.google.com/maps?q=Agriturismo+Isolone&z=12&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Agriturismo Isolone"
                /> */}
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-medium">{/* Agriturismo Isolone */}Ricevimento</h3>
                  <p className="mb-3 text-base sm:text-lg">
                    {/* Cascina San Benedetto, 26865 San Rocco al Porto (LO) */}Da confermare, indicazioni dettagliate in arrivo
                  </p>
                  {/* <a
                    className="font-semibold text-[#594534] underline-offset-2 hover:underline"
                    href="https://www.google.com/maps/search/?api=1&query=Agriturismo%20Isolone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apri su Google Maps
                  </a> */}
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="mx-auto mt-14 w-full max-w-3xl text-center">
          <p className="text-base sm:text-lg">
            Per informazioni sui servizi e i pacchetti disponibili, non esitare a contattarci.<br />
            Andrea: <a href="tel:347 2181 696" className="font-semibold text-[#594534] underline-offset-2 hover:underline">
              347 2181 696
            </a> / Veronica: <a href="tel:392 178 2426" className="font-semibold text-[#594534] underline-offset-2 hover:underline">
              392 178 2426
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
