import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "What is Pustak Ghar?",
    answer: "Pustak Ghar is a platform where students can share and access study materials, notes, and resources."
  },
  {
    question: "How can I contribute resources?",
    answer: "You can contribute by going to the Upload section, filling in the details, and uploading your file or link."
  },
  {
    question: "Is there any cost to use the resources?",
    answer: "No, all resources are completely free for students."
  },
  {
    question: "What type of files can I upload?",
    answer: "You can upload PDFs, DOCs, PPTs, or share Google Drive/YouTube links."
  },
  {
    question: "Who can access the resources?",
    answer: "Anyone with the link to Pustak Ghar can access and download freely."
  },
  {
    question: "Do I need to create an account?",
    answer: "No, you can browse resources without an account, but contributing might require login."
  },
  {
    question: "Can I request specific study materials?",
    answer: "Yes! You can post requests in the community section, and others may share them."
  },
  {
    question: "Is my uploaded content moderated?",
    answer: "Yes, all uploads are reviewed to ensure quality and relevance before being shared."
  }
];

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Frequently Asked Questions (FAQ)
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem 
            value={`item-${index}`} 
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 py-2"
          >
            <AccordionTrigger className="text-left font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300 pt-2 pb-4 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;