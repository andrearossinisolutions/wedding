"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function VideoBackground({ videoId, start, end }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let player;
    let loopTimer;
    let canceled = false;

    const setupPlayer = () => {
      if (canceled || !containerRef.current || !window.YT?.Player) return;

      player = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          mute: 1,
          playsinline: 1,
          rel: 0,
          start,
          end,
          playlist: videoId,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();

            loopTimer = window.setInterval(() => {
              const current = event.target.getCurrentTime?.();
              if (typeof current === "number" && current >= end - 0.15) {
                event.target.seekTo(start, true);
                event.target.playVideo();
              }
            }, 200);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(start, true);
              event.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      setupPlayer();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        setupPlayer();
      };

      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      canceled = true;
      if (loopTimer) window.clearInterval(loopTimer);
      if (player?.destroy) player.destroy();
    };
  }, [videoId, start, end]);

  return <div className="story-video-bg" ref={containerRef} aria-hidden="true" />;
}

export default function Home() {
  const sections = useMemo(
    () => [
      {
        id: "evento",
        background:
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80",
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
        videoEnd: 600,
        slides: [
          {
            kicker: "Finale",
            title: "Ti Aspettiamo",
            description:
              "Grazie per condividere con noi questo giorno speciale. Non vediamo l'ora di arrivare insieme a te.",
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

  useEffect(() => {
    const handleScroll = () => {
      const nextActive = {};

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          nextActive[section.id] = 0;
          return;
        }

        const rect = element.getBoundingClientRect();
        const transitions = Math.max(section.slides.length - 1, 1);
        const stickyScrollSpan = window.innerHeight * transitions;
        const sectionTop = rect.top;
        const rawProgress = Math.min(Math.max(-sectionTop / stickyScrollSpan, 0), 0.9999);
        nextActive[section.id] = Math.floor(rawProgress * section.slides.length);
      });

      setActiveSlides(nextActive);
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
      {sections.map((section) => {
        const activeIndex = activeSlides[section.id] ?? 0;
        return (
          <section
            key={section.id}
            id={section.id}
            className="story-section"
            style={{ height: `${section.slides.length * 100}vh` }}
          >
            <div
              className={`story-sticky ${section.videoId ? "has-video" : ""}`}
              style={
                section.background
                  ? { backgroundImage: `url("${section.background}")` }
                  : undefined
              }
            >
              {section.videoId ? (
                <div className="story-video-layer" aria-hidden="true">
                  <VideoBackground
                    videoId={section.videoId}
                    start={section.videoStart}
                    end={section.videoEnd}
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
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
