"use client"


import React from "react";
import { motion } from "framer-motion"

const FAQ = () => {
  const faqs = [
    {
      question: "1. How can I sell my bike on this platform?",
      answer:
        "To sell your bike, simply create an account, go to the 'Sell Bike' section, fill in your bike details, upload clear photos, and post your ad. Once approved, your listing will be live.",
    },
    {
      question: "2. Is it free to post a bike for sale?",
      answer:
        "Yes, posting a basic ad is completely free. However, we also offer premium ad placements for more visibility.",
    },
    {
      question: "3. How do I buy a bike listed on the website?",
      answer:
        "Browse bikes under the 'Buy Bikes' section. Use filters to narrow your search. Once you find a bike you like, you can contact the seller directly via chat or call.",
    },
    {
      question: "4. How can I be sure the bike is in good condition?",
      answer:
        "We recommend meeting the seller in person, inspecting the bike, and taking a test ride. Also, ask for service history and registration papers before making any payment.",
    },
    {
      question: "5. What documents do I need to sell my bike?",
      answer:
        "You will need your bike's registration certificate (RC), a copy of your citizenship, and a bill of sale or transfer form during the transaction.",
    },
    {
      question: "6. Is it safe to meet buyers or sellers in person?",
      answer:
        "Always meet in public places, preferably during daytime. Avoid sharing sensitive information and take a friend along when possible.",
    },
    {
      question: "7. Can I edit or delete my listing after posting?",
      answer:
        "Yes, go to your dashboard, select the listing you want to edit or remove, and update or delete it anytime.",
    },
    {
      question: "8. What if I face a scam or fake listing?",
      answer:
        "Please report the listing or user immediately. We take user safety seriously and will investigate and take action against any fraud.",
    },
    {
      question: "9. Do you verify the bikes listed on the website?",
      answer:
        "We do not physically verify each listing, but we have strong moderation and reporting systems to ensure trust and transparency.",
    },
    {
      question: "10. How can I promote my bike ad?",
      answer:
        "You can choose a premium listing plan to boost visibility. Your ad will appear at the top of search results and reach more buyers.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl ubuntu-bold mb-8 text-center text-white ">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            animate= {{opacity:1 , y:0}}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white/90 p-3 rounded-md">
              <h2 className="font-semibold text-lg">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
