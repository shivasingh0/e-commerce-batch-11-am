import React, { useState } from "react";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMail(e) {
    e.preventDefault();
    console.log(name);
    // let Email;

    window.Email.send({
      // Host: "smtp.elasticemail.com",
      // Username: "deadshotshiva@gmail.com",
      // Password: "166A953F46C909DF4D36F5F49E15AC582BC8",
      SecureToken: "065c6d54-cab7-4499-94ab-8595325a1b49",
      To: "deadshotshiva@gmail.com",
      From: "deadshotshiva@gmail.com",
      Subject: "This is the test mail!",
      Body: `Hii, This mail is only for testing purpose... <br> <hr> Name: ${name} <br> <hr> Email: ${userEmail} <br> <hr> Number: ${number} <br> <hr> Message: ${message}`,
    }).then((message) => alert(message));
  }

  return (
    <div className="p-10 ">
      <h1 className="font-bold text-center text-3xl">Contact Us</h1>
      <div className="flex gap-10">
        <div className="flex mt-8 rounded-2xl w-1/2 min-h-full bg-blue-950 text-white flex-col justify-center px-6 py-6 lg:px-8">
          <div className=" sm:mx-auto text-white sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold underline mb-5">
              Feel free to contact us
            </h2>
            <form onSubmit={sendMail}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 "
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full px-2 text-lg rounded-md border-0 text-gray-900 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-2 text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6"
                  >
                    Number
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="number"
                    name="number"
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    required
                    className="block w-full px-2 text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 "
                  >
                    Message
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full rounded-md border-0 px-2 text-lg py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    id=""
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md mt-10 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 w-1/2 bg-gray-200 p-5 rounded-lg">
          <h3 className="text-center text-xl font-bold">Contact details</h3>
          <div className="flex gap-3">
            <FaWhatsappSquare className="text-3xl" />{" "}
            <a
              href="https://web.whatsapp.com/send?phone=9174635861"
              className="font-semibold"
              target="_blank"
            >
              +91-9174635861
            </a>{" "}
          </div>
          <div className="flex gap-3 py-5">
            <FaEnvelope className="text-3xl" />
            <a
              href="mailto:shiva2003rajawat@gmail.com"
              className="font-semibold"
              target="_blank"
            >
              shiva2003rajawat@gmail.com
            </a>{" "}
          </div>
          <div className="flex gap-3 mb-3">
            <FaLocationDot className="text-3xl" />
            <span className="font-semibold" target="_blank">
              &nbsp; 206, Pearl Business Park, I Bus Stop, in front of Vishnu
              Puri Colony, Vishnu Puri Main, Bhanwar Kuwa, Indore, Madhya
              Pradesh 452014
            </span>{" "}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.046032770047!2d75.86134737429086!3d22.68933022868384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa41b7ab7105f188d%3A0x48d934044ff4840e!2sMind%20Coders%20-%20Web%20Development%20%26%20Digital%20Marketing%20Classes%20In%20Indore!5e0!3m2!1sen!2sin!4v1723098525147!5m2!1sen!2sin"
            width="600"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
