export default function Home() {
  const sections = [
    {
      id: "evento",
      kicker: "Save The Date",
      title: "Il Nostro Matrimonio",
      description:
        "Con grande gioia ti invitiamo a condividere con noi una giornata speciale di festa, affetto e felicita.",
      details: ["Data in aggiornamento", "Programma completo in arrivo"],
      background:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "celebrazione",
      kicker: "Celebrazione",
      title: "Comune di Cervignano d'Adda",
      description:
        "La celebrazione civile si svolgera presso il Comune di Cervignano d'Adda.",
      details: ["Orario ancora da definire", "Seguiranno indicazioni operative"],
      background: "/comune.jpg",
    },
    {
      id: "pranzo",
      kicker: "Pranzo",
      title: "Agriturismo Isolone",
      description:
        "Dopo la celebrazione ci sposteremo all'Agriturismo Isolone per il pranzo e i festeggiamenti.",
      details: ["Accoglienza subito dopo la cerimonia", "Dettagli logistici in aggiornamento"],
      background: "/isolone-1.jpg",
    },
    {
      id: "ricevimento-info",
      kicker: "Info Ricevimento",
      title: "Un Pomeriggio Insieme",
      description:
        "Dopo il pranzo continueremo i festeggiamenti con torta, brindisi e musica in agriturismo.",
      details: [
        "Menu con opzioni anche vegetariane",
        "Ampio parcheggio disponibile",
        "Dress code: elegante informale",
      ],
      background: "/isolone-2.jpg",
    },
  ];

  return (
    <main>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="parallax-section"
          style={{ backgroundImage: `url("${section.background}")` }}
        >
          <div className="parallax-overlay">
            <article className="content-shell">
              <p className="kicker">{section.kicker}</p>
              <h1>{section.title}</h1>
              <p>{section.description}</p>
              <ul>
                {section.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ))}
    </main>
  );
}
