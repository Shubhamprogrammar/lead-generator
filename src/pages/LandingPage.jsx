import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ✅ DROPDOWN DATA */
const locations = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Lucknow",
  "Varanasi",
];

const niches = [
  "Dentist",
  "Gym",
  "Real Estate",
  "Restaurant",
  "Coaching Center",
  "Salon",
];

const LandingPage = () => {
  const [formData, setFormData] = useState({
    location: "",
    niche: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  /* ✅ VALIDATION */
  const validate = () => {
    let temp = {};

    if (!formData.location) {
      temp.location = "Location is required";
    }

    if (!formData.niche) {
      temp.niche = "Niche is required";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined,
      });
    }
  };

  /* ✅ GENERATE LEADS */
  const handleGenerate = (e) => {
    e.preventDefault();
    if (!validate()) return;

    navigate(
      `/results?location=${formData.location}&niche=${formData.niche}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">LeadAI</h1>
        <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            AI-Powered Business{" "}
            <span className="text-green-600">Lead Generator</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Stop wasting hours searching for business leads. Our AI instantly
            generates verified leads based on location and niche.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-gray-700">Location-based lead discovery</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-gray-700">Niche-specific targeting</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-gray-700">AI-ranked & verified businesses</p>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800">
            Generate Leads Instantly
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Powered by AI & LLM-based ranking
          </p>

          {/* LOCATION DROPDOWN */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">
              Location
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="text-sm text-red-500 mt-1">{errors.location}</p>
            )}
          </div>

          {/* NICHE DROPDOWN */}
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Business Niche
            </label>
            <select
              name="niche"
              value={formData.niche}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select niche</option>
              {niches.map((n) => (
                <option key={n} value={n}>
                  {n.charAt(0).toUpperCase() + n.slice(1)}
                </option>
              ))}
            </select>
            {errors.niche && (
              <p className="text-sm text-red-500 mt-1">{errors.niche}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleGenerate}
            className="mt-6 w-full py-3 rounded-lg bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition cursor-pointer"
          >
            Generate Leads
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-400 py-6">
        © 2026 LeadAI Built by Apurv & Shubham
      </footer>
    </div>
  );
};

export default LandingPage;
