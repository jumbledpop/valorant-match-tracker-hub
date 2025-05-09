
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import MatchCard from "../components/matches/MatchCard";
import { matches } from "../data/valorantData";
import { Search } from "lucide-react";

const Matches: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredMatches = matches.filter((match) => {
    const matchesSearch = (
      match.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.team2.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.tournament.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const matchesStatus = 
      statusFilter === "All" || 
      (statusFilter === "Upcoming" && !match.completed) ||
      (statusFilter === "Completed" && match.completed);
    
    return matchesSearch && matchesStatus;
  });

  // Sort matches by date, with upcoming matches first
  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (!a.completed && b.completed) return -1;
    if (a.completed && !b.completed) return 1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <Layout>
      <div className="bg-valorant-black py-12">
        <div className="valorant-container">
          <h1 className="text-4xl font-bold text-valorant-white mb-8">
            <span className="text-valorant-red">VALORANT</span> MATCHES
          </h1>

          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search matches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-valorant-gray border border-valorant-red/20 text-valorant-lightgray rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-valorant-red"
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-valorant-lightgray" />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-valorant-lightgray">Status:</span>
              <div className="flex space-x-1">
                {["All", "Upcoming", "Completed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1 text-sm font-medium ${
                      statusFilter === status
                        ? "bg-valorant-red text-white"
                        : "bg-valorant-gray text-valorant-lightgray hover:bg-valorant-gray/80"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {sortedMatches.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sortedMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-valorant-white mb-2">No matches found</h3>
              <p className="text-valorant-lightgray">
                Try changing your search query or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Matches;
