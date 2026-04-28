export default function Home() {
  const sections = [
    {
      id: "evento",
      kicker: "Save The Date",
      title: "Chiara & Luca",
      description:
        "Siamo felici di invitarti al nostro matrimonio. Una giornata speciale da vivere insieme tra emozioni, sorrisi e festa.",
      details: ["Sabato 12 Settembre 2026", "Arrivo ospiti dalle ore 10:30"],
      background:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "celebrazione",
      kicker: "Celebrazione",
      title: "Abbazia di San Michele",
      description:
        "La cerimonia si terrà in una cornice storica immersa nel verde, con inizio alle ore 11:00.",
      details: ["Via dell'Abbazia 15, Verona", "Parcheggio disponibile in loco"],
      background:
        "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "pranzo",
      kicker: "Ricevimento",
      title: "Villa Le Rose",
      description:
        "Dopo la celebrazione ti aspettiamo per il pranzo nuziale e i festeggiamenti in villa.",
      details: ["Inizio ricevimento ore 13:30", "Via delle Rose 8, Verona"],
      background:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80",
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
