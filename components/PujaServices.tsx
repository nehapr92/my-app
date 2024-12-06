"use client";

import { useState, Fragment } from "react";
import { Dialog, DialogTitle, Transition } from "@headlessui/react";
import Image from "next/image";

interface Puja {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface SendSmsResponse {
  success: boolean;
  messageSid?: string;
  error?: string;
}

export const PujaServices: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPuja, setSelectedPuja] = useState<Puja | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // User phone number
  const [name, setName] = useState<string>(""); // User name

  // Puja list with all content in Hindi
  const pujaList: Puja[] = [
    {
      name: "रुद्राभिषेक पूजा",
      description: "यह एक शक्तिशाली अनुष्ठान है जो भगवान शिव की कृपा प्राप्त करने के लिए किया जाता है, जिससे समृद्धि और बाधाओं का निवारण होता है।",
      price: "₹3,000",
      image: "/r.webp",
    },
    {
      name: "महामृत्युञ्जय पूजा",
      description: "एक पवित्र मंत्र है, जो नकारात्मक ऊर्जा से रक्षा करने और लंबी उम्र और अच्छे स्वास्थ्य की सुनिश्चितता करता है।",
      price: "₹5,500",
      image: "/m.webp",
    },
    {
      name: "कालसर्प दोष पूजा",
      description: "यह पूजा कालसर्प दोष के प्रभावों को दूर करने और आपके जीवन में संतुलन लाने के लिए की जाती है।",
      price: "₹7,000",
      image: "/s.webp",
    },
    {
      name: "नवग्रह शांति पूजा",
      description: "यह अनुष्ठान नौ ग्रहों को समर्पित है ताकि उनके नकारात्मक प्रभावों को आपके कुंडली पर समाप्त किया जा सके।",
      price: "₹4,500",
      image: "/n.webp",
    },
  ];

  const timeSlots: string[] = [
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM",
  ];

  const openDialog = (puja: Puja) => {
    setSelectedPuja(puja);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedDate(new Date());
    setSelectedTime("");
    setPhoneNumber(""); // Reset phone number
    setName(""); // Reset name
    setSelectedPuja(null);
  };

  const handleBooking = async () => {
    if (selectedTime && selectedPuja && phoneNumber && name) {
      const message = `आपने ${selectedPuja.name} पूजा को ${selectedDate.toDateString()} को ${selectedTime} बजे बुक किया है। संपर्क विवरण: ${phoneNumber}`;

      try {
        const response = await fetch("api/send-sms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        });

        const result: SendSmsResponse = await response.json();

        if (response.ok) {
          alert("बुकिंग कन्फ़र्म की गई और आपकी फोन पर नोटिफिकेशन भेजी गई!");
          closeDialog();
        } else {
          alert(result.error || "नोटिफिकेशन भेजने में विफल। कृपया फिर से प्रयास करें।");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("कृपया सभी फ़ील्ड भरें।");
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 text-center mb-12">
          पूजा सेवाएँ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pujaList.map((puja, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={puja.image}
                alt={puja.name}
                width={500}
                height={400}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{puja.name}</h3>
                <p className="text-gray-600 mt-4">{puja.description}</p>
                <p className="text-orange-500 text-lg font-semibold mt-4">
                  {puja.price}
                </p>
                <button
                  onClick={() => openDialog(puja)}
                  className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
                >
                  बुक करें
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  {selectedPuja && (
                    <>
                      <DialogTitle
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {`बुक ${selectedPuja.name}`}
                      </DialogTitle>
                      <div className="mt-4">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          तारीख़ चुनें
                        </label>
                        <input
                          type="date"
                          id="date"
                          value={selectedDate.toISOString().split("T")[0]}
                          onChange={(e) =>
                            setSelectedDate(new Date(e.target.value))
                          }
                          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-gray-700"
                        >
                          समय स्लॉट चुनें
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {timeSlots.map((slot, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedTime(slot)}
                              className={`px-4 py-2 border rounded-lg ${
                                selectedTime === slot
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-100 hover:bg-gray-200"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name Field */}
                      <div className="mt-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          आपका नाम
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="आपका नाम दर्ज करें"
                          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="mt-4">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          फोन नंबर
                        </label>
                        <input
                          type="text"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="आपका फोन नंबर दर्ज करें"
                          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>

                      <div className="mt-6 flex justify-end space-x-4">
                        <button
                          onClick={closeDialog}
                          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                          रद्द करें
                        </button>
                        <button
                          onClick={handleBooking}
                          disabled={!selectedTime || !phoneNumber || !name}
                          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          बुकिंग कन्फ़र्म करें
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};
