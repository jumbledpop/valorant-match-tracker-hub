
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import TeamCard from "../components/teams/TeamCard";
import { teams } from "../data/valorantData";
import { Search } from "lucide-react";

const Teams: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("All");

  const regions = ["All", ...new Set(teams.map((team) => team.region))];

  const filteredTeams = teams.filter((team) => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter === "All" || team.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <Layout>
      <div className="bg-valorant-black py-12">
        <div className="valorant-container">
          <h1 className="text-4xl font-bold text-valorant-white mb-8">
            <span className="text-valorant-red">VALORANT</span> TEAMS
          </h1>

          <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-valorant-gray border border-valorant-red/20 text-valorant-lightgray rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-valorant-red"
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-valorant-lightgray" />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-valorant-lightgray">Region:</span>
              <div className="flex space-x-1">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setRegionFilter(region)}
                    className={`px-3 py-1 text-sm font-medium ${
                      regionFilter === region
                        ? "bg-valorant-red text-white"
                        : "bg-valorant-gray text-valorant-lightgray hover:bg-valorant-gray/80"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-valorant-white mb-2">No teams found</h3>
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

export default Teams;
