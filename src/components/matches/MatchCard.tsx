import React from "react";
import { Link } from "react-router-dom";
import { Match } from "../../data";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Link to={`/matches/${match.id}`}>
      <div className="valorant-card group relative flex flex-col p-4 hover:bg-valorant-black transition-all duration-200">
        <div className="absolute top-0 right-0">
          <div className="bg-valorant-red px-2 py-1 text-xs font-semibold text-valorant-white">
            {match.tournament}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-3">
            <img 
              src={match.team1.logo} 
              alt={match.team1.name}
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold text-valorant-white text-lg">
              {match.team1.name}
            </span>
          </div>
          
          <div className="text-center">
            {match.completed ? (
              <div className="text-valorant-red font-bold text-2xl">
                {match.scoreline?.[0]} : {match.scoreline?.[1]}
              </div>
            ) : (
              <div className="text-valorant-lightgray text-sm">
                {formatDate(match.date)}
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3 justify-end">
            <span className="font-semibold text-valorant-white text-lg">
              {match.team2.name}
            </span>
            <img 
              src={match.team2.logo} 
              alt={match.team2.name}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
        
        {match.completed && match.maps.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {match.maps.map((map, index) => (
              <div key={index} className="text-xs text-center border border-valorant-red/10 bg-valorant-black/30 p-1">
                <div className="text-valorant-lightgray">{map.name}</div>
                <div className="font-medium mt-1">
                  <span className={map.winner === match.team1.id ? "text-valorant-red font-bold" : "text-valorant-lightgray"}>
                    {map.score1}
                  </span>
                  {" : "}
                  <span className={map.winner === match.team2.id ? "text-valorant-red font-bold" : "text-valorant-lightgray"}>
                    {map.score2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!match.completed && (
          <div className="mt-4 text-center">
            <span className="bg-valorant-black inline-block px-3 py-1 text-sm text-valorant-lightgray">
              Upcoming
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MatchCard;
