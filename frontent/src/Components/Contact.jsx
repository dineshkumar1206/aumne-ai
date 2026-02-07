import { ChevronDown } from "lucide-react";
import Map from "../Components/Map1";
// import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    country: "",
    email: "",
    industry: "",
    reach: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "https://amigowebster.in/aumne_ai_backend/api/contact/send-mail",
        formData,
      );

      if (response.status === 200 || response.status === 201) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        // Form-ai clear panna
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          country: "",
          email: "",
          industry: "",
          reach: "",
          product: "",
          message: "",
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message ❌. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name*"
                  className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
                />
              </div>

              {/* Job Title */}
              <input
                type="text"
                name="jobTitle"
                required
                placeholder="Job title*"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
              />

              {/* Country */}
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white"
                >
                  <option value="" className="text-gray-500">
                    Country*
                  </option>
                  {countries.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                required
                placeholder="Business email address*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
              />

              {/* Industry */}
              <div className="relative">
                <select
                  required
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white"
                >
                  <option value="">Industry*</option>
                  {industries.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
              </div>

              {/* Reach */}
              <div className="relative">
                <select
                  name="reach"
                  required
                  value={formData.reach}
                  onChange={handleChange}
                  className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white"
                >
                  <option value="">I am trying to reach...*</option>
                  {reachOptions.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
              </div>

              {/* Product */}
              <div className="relative">
                <select
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full appearance-none border-b border-gray-400 bg-transparent text-white focus:outline-none py-2  pl-2 text-sm [&>option]:bg-black [&>option]:text-white"
                >
                  <option value="">Product of interest*</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="AI for Work">
                    Transform CX / EX with AI 
                  </option>
                  <option value="AI for Process">
                   Automating business workflows
                  </option>
                  {/* <option value="AI for Service">
                    AI for Service - Elevating CX / EX with AI solutions
                  </option> */}
                  {/* <option>Voice AI</option> */}
                </select>
                <ChevronDown className="absolute right-0 top-2.5 h-4 w-4 text-gray-500" />
              </div>

              {/* Message */}
              <textarea
                name="message"
                required
                placeholder="Anything else you would like to tell us?*"
                value={formData.message}
                onChange={handleChange}
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
                disabled={loading}
                required
                className="bg-[#0D7EB6] text-white text-ms font-semibold px-6 py-2 rounded-sm hover:bg-[#09699a] transition cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  "SUBMIT"
                )}
              </button>
              {status.message && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-red-500/20 text-red-400 border border-red-500/50"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0" />
                  )}
                  <p className="font-medium">{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div>
        <Map />
      </div>
    </>
  );
};

export default Contact;
