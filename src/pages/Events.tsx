
import React from "react";
import Layout from "../components/layout/Layout";
import { events } from "../data/valorantData";
import { Link } from "react-router-dom";

const Events: React.FC = () => {
  return (
    <Layout>
      <div className="bg-valorant-black py-12">
        <div className="valorant-container">
          <h1 className="text-4xl font-bold text-valorant-white mb-8">
            <span className="text-valorant-red">VALORANT</span> EVENTS
          </h1>

          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="valorant-card p-6 hover:bg-valorant-black transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-valorant-white">
                      {event.name}
                    </h2>
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <span className="text-valorant-lightgray text-sm">
                        {event.startDate} - {event.endDate}
                      </span>
                      <span className="text-valorant-lightgray text-sm bg-valorant-black px-2 py-1">
                        {event.location}
                      </span>
                      <span className="font-semibold text-valorant-red">
                        Prize Pool: {event.prizePool}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <Link
                      to={`/events/${event.id}`}
                      className="valorant-button text-sm"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-valorant-white mb-3">
                    Participating Teams
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.teams.slice(0, 6).map((team) => (
                      <div
                        key={team.id}
                        className="bg-valorant-gray p-2 flex items-center space-x-2"
                      >
                        <img
                          src={team.logo}
                          alt={team.name}
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-valorant-lightgray text-sm">
                          {team.name}
                        </span>
                      </div>
                    ))}
                    {event.teams.length > 6 && (
                      <div className="bg-valorant-gray p-2">
                        <span className="text-valorant-lightgray text-sm">
                          +{event.teams.length - 6} more
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-valorant-white mb-3">
                    Matches
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {event.matches.slice(0, 3).map((match) => (
                      <Link
                        key={match.id}
                        to={`/matches/${match.id}`}
                        className="bg-valorant-gray hover:bg-valorant-black border border-valorant-red/10 p-3 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-valorant-white text-sm font-medium">
                            {match.team1.name}
                          </span>
                          <span className="text-valorant-red font-bold">
                            {match.completed
                              ? `${match.scoreline?.[0]} : ${match.scoreline?.[1]}`
                              : "vs"}
                          </span>
                          <span className="text-valorant-white text-sm font-medium">
                            {match.team2.name}
                          </span>
                        </div>
                        <div className="mt-2 text-center text-valorant-lightgray text-xs">
                          {new Date(match.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </div>
                      </Link>
                    ))}
                    {event.matches.length > 3 && (
                      <Link
                        to={`/events/${event.id}`}
                        className="bg-valorant-gray hover:bg-valorant-black border border-valorant-red/10 p-3 flex items-center justify-center text-valorant-red"
                      >
                        View {event.matches.length - 3} more matches
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
