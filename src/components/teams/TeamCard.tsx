
import React from "react";
import { Link } from "react-router-dom";
import { Team } from "../../data/valorantData";

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Link to={`/teams/${team.id}`}>
      <div className="valorant-card group h-full flex flex-col items-center p-6 hover:bg-valorant-black transition-all duration-200">
        <div className="relative">
          <img
            src={team.logo}
            alt={team.name}
            className="w-24 h-24 object-contain mb-4"
          />
          <div className="absolute -top-2 -right-2 bg-valorant-red text-white text-xs font-bold px-2 py-1 rounded-full">
            #{team.rank}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-valorant-white mb-2">
          {team.name}
        </h3>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="bg-valorant-gray px-2 py-1 text-xs font-semibold text-valorant-lightgray rounded">
            {team.region}
          </span>
        </div>
        
        <div className="mt-auto w-full">
          {team.players.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-1">
              {team.players.slice(0, 3).map((player) => (
                <div 
                  key={player.id} 
                  className="bg-valorant-gray text-xs px-2 py-1 text-valorant-lightgray"
                >
                  {player.name}
                </div>
              ))}
              {team.players.length > 3 && (
                <div className="bg-valorant-gray text-xs px-2 py-1 text-valorant-lightgray">
                  +{team.players.length - 3}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-valorant-lightgray/60 text-sm">
              Roster information unavailable
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
