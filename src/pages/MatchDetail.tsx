
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { matches } from "../data"; // Updated import path
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const MatchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const match = matches.find((m) => m.id === id);

  if (!match) {
    return <Navigate to="/matches" />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Layout>
      <div className="bg-valorant-black py-12">
        <div className="valorant-container">
          <div className="mb-8">
            <div className="text-sm text-valorant-lightgray mb-2">
              {match.tournament}
            </div>
            <h1 className="text-3xl font-bold text-valorant-white mb-2">
              {match.team1.name} <span className="text-valorant-red">vs</span> {match.team2.name}
            </h1>
            <div className="text-valorant-lightgray mb-6">
              {formatDate(match.date)}
            </div>
          </div>

          <div className="bg-valorant-gray border border-valorant-red/20 p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <img 
                  src={match.team1.logo} 
                  alt={match.team1.name} 
                  className="w-24 h-24 object-contain mb-4" 
                />
                <h3 className="text-xl font-bold text-valorant-white">
                  {match.team1.name}
                </h3>
                <div className="bg-valorant-darkred px-2 py-1 text-xs mt-2">
                  {match.team1.region}
                </div>
              </div>

              <div className="text-center mb-6 md:mb-0">
                {match.completed ? (
                  <div className="text-5xl font-bold">
                    <span className={match.scoreline && match.scoreline[0] > match.scoreline[1] ? "text-valorant-red" : "text-valorant-white"}>
                      {match.scoreline?.[0]}
                    </span>
                    <span className="text-valorant-lightgray mx-2">:</span>
                    <span className={match.scoreline && match.scoreline[1] > match.scoreline[0] ? "text-valorant-red" : "text-valorant-white"}>
                      {match.scoreline?.[1]}
                    </span>
                  </div>
                ) : (
                  <div className="bg-valorant-red text-white px-4 py-2 uppercase font-bold">
                    Upcoming
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center">
                <img 
                  src={match.team2.logo} 
                  alt={match.team2.name} 
                  className="w-24 h-24 object-contain mb-4" 
                />
                <h3 className="text-xl font-bold text-valorant-white">
                  {match.team2.name}
                </h3>
                <div className="bg-valorant-darkred px-2 py-1 text-xs mt-2">
                  {match.team2.region}
                </div>
              </div>
            </div>
          </div>

          {match.completed && match.maps.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-valorant-white mb-4">Map Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {match.maps.map((map, index) => (
                  <div key={index} className="bg-valorant-gray border border-valorant-red/20 p-4">
                    <div className="text-xl font-medium text-valorant-white mb-2">{map.name}</div>
                    <div className="flex items-center justify-center">
                      <span className={map.winner === match.team1.id ? "text-valorant-red font-bold text-2xl" : "text-valorant-lightgray text-2xl"}>
                        {map.score1}
                      </span>
                      <span className="text-valorant-lightgray mx-3 text-lg">:</span>
                      <span className={map.winner === match.team2.id ? "text-valorant-red font-bold text-2xl" : "text-valorant-lightgray text-2xl"}>
                        {map.score2}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-center text-valorant-lightgray">
                      Winner: {map.winner === match.team1.id ? match.team1.name : match.team2.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {match.completed && match.mvp && (
            <div className="bg-valorant-gray border border-valorant-red/20 p-6">
              <h2 className="text-2xl font-bold text-valorant-white mb-4">Match MVP</h2>
              <div className="flex items-center">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src={match.mvp.avatar} alt={match.mvp.name} />
                  <AvatarFallback className="bg-valorant-red text-white">
                    {match.mvp.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-valorant-white">{match.mvp.name}</h3>
                  <div className="flex space-x-3 mt-1">
                    <span className="text-sm text-valorant-lightgray">{match.mvp.role}</span>
                    <span className="text-sm text-valorant-lightgray">{match.mvp.agent}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MatchDetail;
