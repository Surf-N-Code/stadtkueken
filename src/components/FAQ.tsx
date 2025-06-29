
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie läuft die Eingewöhnung ab?",
    answer: "Sanft in drei Phasen nach Berliner Modell; Dauer individuell (Ø 4 Wochen). Ein Elternteil begleitet das Kind zunächst und verkürzt die Anwesenheitszeit allmählich, bis sich das Kind sicher und wohl fühlt."
  },
  {
    question: "Was kostet die Betreuung?",
    answer: "5 h täglich kostenfrei; darüber Elternanteil je nach Einkommen (max. 204 €/Monat für 12 h). Der Hamburger Kita-Gutschein kann online beantragt werden. Zusätzlich erheben wir einen Qualitätsbeitrag von 25–45 € (einrichtungsabhängig)."
  },
  {
    question: "Gibt es Sommerbetreuung?",
    answer: "Ja – eigene Pädagog·innen betreuen während der Kita-Sommerferien. Diese ist optional und kann separat gebucht werden. So können berufstätige Eltern auch in den Ferien auf unsere zuverlässige Betreuung zählen."
  },
  {
    question: "Wie sieht das Essen aus?",
    answer: "DGE-konformes Menü, > 70 % Bio, vegetarische & allergenfreie Optionen. Frisch, regional und saisonal von der Porschke Menümanufaktur – Frühstück + Mittag + Snack."
  },
  {
    question: "Welche Öffnungszeiten haben Sie?",
    answer: "Mo–Fr 07:00–17:00 Uhr mit flexiblen Modulen (5/6/8/10/12 h). Je nach Standort können die Zeiten leicht variieren. Wir bieten flexible Betreuungszeiten an, die sich an den Bedürfnissen berufstätiger Eltern orientieren."
  },
  {
    question: "Kann ich die Kita besichtigen?",
    answer: "Ja – jetzt Termin über unser Online-Tool sichern. Gerne zeigen wir Ihnen unseren Wunsch-Standort und Sie können sich von unserem Konzept überzeugen. Rufen Sie uns einfach an oder nutzen Sie unser Kontaktformular."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Häufige Fragen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen rund um unsere Kita
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-stadtkueken-beige rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-stadtkueken-brown hover:text-stadtkueken-orange transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen?
          </p>
          <a 
            href="tel:04032890120"
            className="inline-flex items-center space-x-2 bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>Rufen Sie uns an: 040 / 3289 012-0</span>
          </a>
        </div>
      </div>
    </section>
  );
};
