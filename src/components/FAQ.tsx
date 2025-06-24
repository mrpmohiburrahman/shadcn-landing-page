import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What monday.com plans are required?",
    answer: "Pixellog apps work on Pro and Enterprise monday.com accounts.",
    value: "item-1",
  },
  {
    question: "Can I customize the app’s fields?",
    answer:
      "Yes—you can add, rename, or remove any column to match your workflow.",
    value: "item-2",
  },
  {
    question:
      "Is there a trial period?",
    answer:
      "All plans include a 14-day Pro trial with full feature access.",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Frequently Asked{" "}
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 font-medium">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="transition-all text-primary border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
