import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Magic UI?",
      answer: "Magic UI is a UI library designed for design engineers."
    },
    {
      question: "How do I install Magic UI?",
      answer: "You can install Magic UI via npm or yarn. Check our documentation for more details."
    },
    {
      question: "Is Magic UI free to use?",
      answer: "Yes, Magic UI is free to use for personal and commercial projects."
    },
    {
      question: "Where can I find the documentation?",
      answer: "The documentation is available on our official website."
    },
    {
      question: "How can I contribute to Magic UI?",
      answer: "You can contribute by submitting issues or pull requests on our GitHub repository."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="py-10">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      </header>
      <main className="w-full max-w-4xl px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold">{faq.question}</h2>
            <p className="mt-2 text-lg">{faq.answer}</p>
          </div>
        ))}
      </main>
      <footer className="mt-auto py-10">
        <p>Copyright © 2024 Magic UI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FAQ;

// The URL for this page would be: /faq