import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do I find the right project partner?",
      answer: "Browse through posted projects by skills, technology stack, and team size. Use our advanced filters to match your expertise with project requirements. Each project includes detailed descriptions and required skills."
    },
    {
      question: "Is ProjectCollab free to use?",
      answer: "Yes! ProjectCollab is completely free for all campus developers. We believe in fostering collaboration without barriers. Simply create your profile and start connecting with fellow developers."
    },
    {
      question: "How does the matching system work?",
      answer: "Our smart matching algorithm considers your skills, experience level, preferred technologies, and project requirements. You'll get personalized recommendations for projects that best match your profile."
    },
    {
      question: "Can I post my own projects?",
      answer: "Absolutely! Once you create an account, you can post your projects, specify required skills, team size, and project details. You'll receive applications from interested developers."
    },
    {
      question: "Is my data safe and private?",
      answer: "We take privacy seriously. Your personal information is encrypted and secure. We only share necessary details with potential collaborators, and you control what information is visible on your profile."
    },
    {
      question: "What if I need help with my project?",
      answer: "ProjectCollab is perfect for finding help! Post your project with clear requirements, and skilled developers will reach out. You can also join existing projects that need your expertise."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold theme-text mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="theme-text-secondary mb-6 md:mb-8 text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about getting started with ProjectCollab
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors "
              >
                <h3 className="theme-text font-medium text-sm md:text-base pr-4 ">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="flex-shrink-0 theme-text-secondary" size={20} />
                ) : (
                  <ChevronDown className="flex-shrink-0 theme-text-secondary" size={20} />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="theme-text-secondary text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
