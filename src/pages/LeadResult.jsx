import React, { useEffect, useState } from "react";
import BusinessCard from "../components/BusinessCard";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const LeadResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location");
  const niche = searchParams.get("niche");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);

        const res = await axios.post(
          "http://localhost:5000/api/leads/get-leads",
          {
            location,
            niche
          }
        );

        setResults(res.data.leads || []);
      } catch (error) {
        console.error("Error fetching leads", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (location && niche) {
      fetchLeads();
    }
  }, [location, niche]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        AI-Generated Business Leads
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Fetching verified leads...</p>
      ) : results.length === 0 ? (
        <p className="text-center text-gray-500">
          No leads found for this location & niche.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {results.map((business, index) => (
            <BusinessCard key={index} business={business} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadResult;
