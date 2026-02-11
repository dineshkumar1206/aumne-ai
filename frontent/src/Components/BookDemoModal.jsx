import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";


export default function BookDemoModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const countryCodes = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Netherlands", code: "+31" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Norway", code: "+47" },
  { name: "Denmark", code: "+45" },
  { name: "Ireland", code: "+353" },
  { name: "Singapore", code: "+65" },
  { name: "UAE", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Qatar", code: "+974" },
  { name: "South Africa", code: "+27" },
  { name: "Japan", code: "+81" },
  { name: "China", code: "+86" },
  { name: "South Korea", code: "+82" },
  { name: "Brazil", code: "+55" },
  { name: "Mexico", code: "+52" },
  { name: "Argentina", code: "+54" },
  { name: "Chile", code: "+56" },
  { name: "Colombia", code: "+57" },
  { name: "Indonesia", code: "+62" },
  { name: "Malaysia", code: "+60" },
  { name: "Thailand", code: "+66" },
  { name: "Philippines", code: "+63" },
  { name: "Vietnam", code: "+84" },
  { name: "New Zealand", code: "+64" },
];


  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    email: "",
    country: "India (IN)",
    phone: "",
    companyName: "",
    companySize: "Company Size",
  });

 const handleChange = (e) => {
  const { name, value } = e.target;

  let updatedValue = value;

  // Prevent special characters in fullName
  if (name === "fullName") {
    updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
  }

  // Allow only numbers and + in phone
  if (name === "phone") {
    updatedValue = value.replace(/[^0-9+]/g, "");
  }

  setFormData((prev) => ({
    ...prev,
    [name]: updatedValue,
  }));

  if (status.message) setStatus({ type: "", message: "" });
};

  // 4. Handle Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // API Call - Replace with your actual endpoint
      const response = await axios.post(
        "https://amigowebster.in/aumne_ai_backend/api/contact/book-demo",
        formData,
      );

      if (response.status === 200 || response.status === 201) {
        setStatus({
          type: "success",
          message: "Demo request sent successfully! ✅",
        });

        setFormData({
          fullName: "",
          designation: "",
          email: "",
          country: "India (IN)",
          phone: "",
          companyName: "",
          companySize: "",
        });

        setTimeout(() => {
          onClose();
          setStatus({ type: "", message: "" });
        }, 2500);
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setStatus({
        type: "error",
        message: "Failed to book demo. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl w-[380px] sm:w-[420px] p-6 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="fullName"
            required
            pattern="[A-Za-z\s]+"
            title="Only letters are allowed"
            placeholder="Full name*"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Business email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          {/* Country + Phone */}
          <div className="flex gap-2">
             <select
               name="country"
               value={formData.country}
               onChange={handleChange}
               className="w-1/2 px-3 py-2 rounded-lg bg-gray-100 outline-none text-black"
             >
               {countryCodes.map((item, index) => (
                 <option key={index} value={item.code}>
                   {item.name} ({item.code})
                 </option>
               ))}
             </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              pattern="^[0-9]{6,15}$"
              title="Enter valid phone number"
              className="w-1/2 px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
            
          </div>

          <input
            type="text"
            name="companyName"
            required
            placeholder="Company name*"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none text-black"
          >
            <option value="" disabled>
              Company Size
            </option>
            <option value="1-50">1-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>

          <p className="text-xs text-gray-500 mt-2">
            Your information is safe with us. By clicking submit, you
            acknowledge your data will be processed according to our Privacy
            Policy.
          </p>

          {status.message && (
            <div
              className={`flex items-center gap-2 p-2 rounded-lg text-[13px] animate-in fade-in duration-300 ${
                status.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 size={16} />
              ) : (
                <XCircle size={16} />
              )}
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition font-semibold text-black"
          >
            {loading ? (
              <>
                {/* <Loader2 className="h-4  w-4 animate-spin" /> */}
                Processing...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}