"use client";

import { Disclosure } from "@headlessui/react";

const ContactUs: React.FC = () => {
  const faqs = [
    {
      question: "What are the darshan timings at Baidyanath Dham?",
      answer:
        "The temple is open for darshan from 5:00 AM to 9:00 PM daily. Timings may vary on special occasions or festivals.",
    },
    {
      question: "How can I book a specific puja?",
      answer:
        "You can book pujas directly through our website by navigating to the 'Puja Services' section and selecting your desired puja.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations can be made up to 24 hours before the puja date. A small cancellation fee may apply.",
    },
    {
      question: "Can I reschedule my booking?",
      answer:
        "Yes, you can reschedule your booking by contacting our support team at least 24 hours in advance.",
    },
  ];

  return (
    <div id="contact" className="min-h-screen bg-gray-50 py-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 text-center mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  aria-label="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  aria-label="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Details
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                {/* Phone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92V21a2 2 0 01-2.18 2 19.85 19.85 0 01-8.63-3.11 19.62 19.62 0 01-6-6 19.85 19.85 0 01-3.11-8.63A2 2 0 013 2h4.07a2 2 0 011.94 1.52 12.35 12.35 0 00.7 2.16 2 2 0 01-.45 2.11L7.1 8.7a16 16 0 006 6l.91-.91a2 2 0 012.11-.45 12.35 12.35 0 002.16.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="ml-4 text-gray-700">+91 12345 67890</span>
              </li>
              <li className="flex items-center">
                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 12l6-6m-6 6l-6-6m6 6L6 6m6 6v6m-6-6h12" />
                </svg>
                <span className="ml-4 text-gray-700">
                  support@baidyanathdham.com
                </span>
              </li>
              <li className="flex items-center">
                {/* Location Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 6.63 7 13 7 13s7-6.37 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="ml-4 text-gray-700">
                  Baidyanath Dham, Deoghar, Jharkhand, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
                      aria-label={`Toggle FAQ ${index + 1}`}
                    >
                      <span>{faq.question}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-orange-500 ${
                          open ? "rotate-180 transform" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.292 7.292a1 1 0 011.416 0L10 10.585l3.292-3.293a1 1 0 111.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
