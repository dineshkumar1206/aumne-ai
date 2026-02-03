import React from "react";

export default function BookDemoModal({ open, onClose }) {
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
        <form className="space-y-3">

          <input
            type="text"
            placeholder="Full name*"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          <input
            type="text"
            placeholder="Designation"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          <input
            type="email"
            placeholder="Business email*"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          {/* Country + Phone */}
          <div className="flex gap-2">
            <select className="w-1/2 px-3 py-2 rounded-lg bg-gray-100 outline-none text-black">
              <option>India (IN)</option>
              <option>USA (US)</option>
              <option>UK (GB)</option>
            </select>

            <input
              type="tel"
              placeholder="+91"
              className="w-1/2 px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
          </div>

          <input
            type="text"
            placeholder="Company name*"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />

          <select className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none text-black">
            <option>Company Size</option>
            <option>1-50</option>
            <option>51-200</option>
            <option>201-500</option>
            <option>500+</option>
          </select>

          <p className="text-xs text-gray-500 mt-2">
            Your information is safe with us. By clicking submit, you acknowledge your data will be processed according to our Privacy Policy.
          </p>

          <button
            type="submit"
            className="w-full mt-3 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition font-semibold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
