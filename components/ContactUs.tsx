"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Frequently asked questions (FAQs)
  const faqs = [
    {
      question: "बाबा धाम में दर्शन के समय क्या हैं?",
      answer:
        "मंदिर प्रतिदिन सुबह 5:00 बजे से रात 9:00 बजे तक दर्शन के लिए खुला रहता है। विशेष अवसरों या त्योहारों पर समय में बदलाव हो सकता है।",
    },
    {
      question: "मैं विशिष्ट पूजा कैसे बुक कर सकता हूँ?",
      answer:
        "आप हमारी वेबसाइट पर 'पूजा सेवाएं' सेक्शन में जाकर अपनी पसंदीदा पूजा का चयन करके सीधे पूजा बुक कर सकते हैं।",
    },
    {
      question: "कैसीनस से संबंधित नीति क्या है?",
      answer:
        "पूजा की तारीख से 24 घंटे पहले तक रद्दीकरण किया जा सकता है। एक छोटी रद्दीकरण शुल्क लागू हो सकती है।",
    },
    {
      question: "क्या मैं अपनी बुकिंग को पुनः निर्धारित कर सकता हूँ?",
      answer:
        "हां, आप हमारी सहायता टीम से 24 घंटे पहले संपर्क करके अपनी बुकिंग को पुनः निर्धारित कर सकते हैं।",
    },
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name && phone && message) {
      const formData = { name, phone };
      setLoading(true);

      try {
        const response = await fetch("/api/send-sms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          alert("धन्यवाद! आपका संदेश भेजा गया है और मालिक को सूचित किया गया है.");
          setName("");
          setPhone("");
          setMessage("");
        } else {
          alert(result.error || "कुछ गलती हो गई। कृपया पुनः प्रयास करें।");
        }
      } catch (error) {
        alert("संदेश भेजने में त्रुटि।");
      } finally {
        setLoading(false);
      }
    } else {
      alert("कृपया सभी फ़ील्ड भरें।");
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-50 py-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 text-center mb-12">
          संपर्क करें
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              संदेश भेजें
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  नाम
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="आपका नाम"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  फोन नंबर
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="आपका फोन नंबर"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  संदेश
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="आपका संदेश"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
                disabled={loading}
              >
                {loading ? "संदेश भेजा जा रहा है..." : "संदेश भेजें"}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              संपर्क विवरण
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
              <div className="mt-12 bg-white shadow-lg rounded-lg p-8">
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107586.67156610918!2d86.5394708!3d24.4556345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1162b1519c019%3A0xdb8ce9bf0b62d036!2sShree+Baba+Baidyanath+Jyotirlinga+Mandir+Deoghar!5e0!3m2!1sen!2sus!4v1630624963833"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
            </ul>
          </div>
        </div>

        {/* Google Map Embed */}


        {/* FAQ Section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            अक्सर पूछे जाने वाले प्रश्न
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
