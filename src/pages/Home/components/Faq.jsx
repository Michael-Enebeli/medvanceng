import React, { useState } from 'react';
import { faqData, handleToggle } from '../../../utils/FaqData';
import '../styles/Faq.css'; 

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="faq-container">
        <span>FAQs</span>
        <h2>Here Are Answers To Some of Your Questions</h2>
      <div>
        {faqData.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={faq.id}
          >
            <div
              className="faq-question"
              onClick={() => handleToggle(index, openIndex, setOpenIndex)}
            >
              <button type='button'>{faq.question}
              <i className="fa-solid fa-chevron-down"></i> </button>
            </div>
            <p className="faq-answer">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
