import { ChevronDown } from "lucide-react";
import Map from "../Components/Map1";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const countries = [
   "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Switzerland",
  "Norway",
  "Denmark",
  "Ireland",
  "Singapore",
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "South Africa",
  "Japan",
  "China",
  "South Korea",
  "Brazil",
  "Mexico",
  "Argentina",
  "Chile",
  "Colombia",
  "Indonesia",
  "Malaysia",
  "Thailand",
  "Philippines",
  "Vietnam",
  "New Zealand",
];

const industries = [
  "Financial Services",
  "Banking",
  "Insurance",
  "Business Services",
  "Healthcare",
  "Hi-Tech",
  "Travel & Transportation",
  "Manufacturing",
  "Telecom / Media / Entertainment",
  "CPG",
  "Retail",
  "Restaurants",
  "Energy & Utilities",
  "Government",
  "Education",
  "Other",
];

const reachOptions = [
  "Sales - Demo, Commercials",
  "Partner Inquiry - I'm interested in becoming a partner",
  "Marketing - Analysts, Events, Media & PR",
  "Corporate - Investors & Legal",
];

const Contact = () => {

   const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <>
    
    <div className="w-full min-h-screen flex justify-center items-start bg-transparent py-8">
      <div className="w-full max-w-4xl px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-5">
          Contact us
        </h1>

        {/* Form Card */}
        <div className="border border-gray-200 rounded-xl p-10">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                required
                placeholder="First name*"
                className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
              />
              <input
                type="text"
                required
                placeholder="Last name*"
                className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
              />
            </div>

            {/* Job Title */}
            <input
              type="text"
              required
              placeholder="Job title*"
              className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
            />

            {/* Country */}
            <div className="relative">
              <select required className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white">
                <option value="">Country*</option>
                {countries.map((country, i) => (
                  <option key={i}>{country}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            {/* Email */}
            <input
              type="email"
              required
              placeholder="Business email address*"
              className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
            />

            {/* Industry */}
            <div className="relative">
              <select required className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white">
                <option value="">Industry*</option>
                {industries.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            {/* Reach */}
            <div className="relative">
              <select required className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white">
                <option value="">I am trying to reach...*</option>
                {reachOptions.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            {/* Product */}
            <div className="relative">
              <select required className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white">
                <option value="">Product of interest*</option>
                <option>General Inquiry</option>
                <option>AI for Work - Improving workPlace productivity</option>
                <option>AI for Process -Automating business workflows/ops</option>
                <option>AI of Service - Elevating CX / EX with AI solutions</option>
                {/* <option>Voice AI</option> */}
              </select>
              <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            {/* Message */}
            <textarea
              required
              placeholder="Anything else you would like to tell us?*"
              rows={3}
              className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm resize-none"
            />

            {/* Consent */}
            <div className="flex items-start gap-3 text-ms text-white/80">
              <input type="checkbox" required className="mt-1" />
              <p>
                By submitting, I consent to receive relevant email
                communication from Aumne.ai in accordance with the Privacy
                Policy and understand I can opt out at any time.*
              </p>
            </div>

            {/* Submit */}
            
            <button
              type="submit"
              required
              className="bg-[#0D7EB6] text-white text-ms font-semibold px-6 py-2 rounded-sm hover:bg-[#09699a] transition cursor-pointer"
            >
              SUBMIT
            </button>
            
          </form>
        </div>
      </div>
    </div>

    <div>
      <Map/>
    </div>

    </>
  );
};


export default Contact;