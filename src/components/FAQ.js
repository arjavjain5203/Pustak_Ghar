import React, { useState } from "react";
import "./FAQ.css";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>

      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <h4>
            {index + 1}. {item.question}
          </h4>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
