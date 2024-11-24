"use client"

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const PujaServices: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPuja, setSelectedPuja] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const pujaList = [
    {
      name: "Rudrabhishek Pooja",
      description:
        "A powerful ritual to invoke Lord Shiva's blessings for prosperity and removal of obstacles.",
      price: "₹3,000",
      image: "/r.webp",
    },
    {
      name: "Mahamrityunjaya Pooja",
      description:
        "A sacred chant to protect against negative energies and ensure long life and good health.",
      price: "₹5,500",
      image: "/m.webp",
    },
    {
      name: "Kalasarpa Dosha Pooja",
      description:
        "Perform this puja to overcome the effects of Kalasarpa Dosha and bring balance to your life.",
      price: "₹7,000",
      image: "/s.webp",
    },
    {
      name: "Navagraha Shanti Pooja",
      description:
        "A ritual dedicated to the nine celestial bodies to nullify their negative effects on your horoscope.",
      price: "₹4,500",
      image: "/n.webp",
    },
  ];

  const timeSlots = [
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM",
  ];

  const openDialog = (puja: any) => {
    setSelectedPuja(puja);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedDate(new Date());
    setSelectedTime("");
    setSelectedPuja(null);
  };

  const handleBooking = () => {
    if (selectedTime) {
      alert(
        `Booked ${selectedPuja.name} for ${selectedDate.toDateString()} at ${selectedTime}`
      );
      closeDialog();
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 text-center mb-12">
  Puja Services
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pujaList.map((puja, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={puja.image}
                alt={puja.name}
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
                  Book Now
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
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Book {selectedPuja.name}
                      </Dialog.Title>
                      <div className="mt-4">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select Date
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
                          Select Time Slot
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
                      <div className="mt-6 flex justify-end space-x-4">
                        <button
                          onClick={closeDialog}
                          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleBooking}
                          disabled={!selectedTime}
                          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          Book Now
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
