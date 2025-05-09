
import React from "react";
import Layout from "../components/layout/Layout";
import MatchCard from "../components/matches/MatchCard";
import TeamCard from "../components/teams/TeamCard";
import { getRecentMatches, getTopTeams, getUpcomingMatches } from "../data/valorantData";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  const recentMatches = getRecentMatches().slice(0, 3);
  const upcomingMatches = getUpcomingMatches().slice(0, 3);
  const topTeams = getTopTeams(4);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-valorant-black to-valorant-gray py-16">
        <div className="valorant-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-valorant-white leading-tight">
                <span className="text-valorant-red">VALORANT</span> PRO MATCH DATA
              </h1>
              <p className="mt-6 text-lg text-valorant-lightgray/80">
                Your definitive source for professional Valorant esports statistics, match results, and team rankings.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/matches" className="valorant-button">
                  VIEW MATCHES
                </Link>
                <Link to="/teams" className="bg-transparent border border-valorant-red text-valorant-red hover:bg-valorant-red hover:text-white font-bold py-2 px-4 transition-colors duration-200 uppercase tracking-wider">
                  EXPLORE TEAMS
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-valorant-red/20 blur-xl rounded-full animate-pulse-red"></div>
                <img
                  src="https://i.imgur.com/7WVa87c.png"
                  alt="Valorant Pro Players"
                  className="relative z-10 max-w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Results */}
      <section className="py-16 bg-valorant-gray">
        <div className="valorant-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-valorant-white">
              <span className="text-valorant-red">LATEST</span> RESULTS
            </h2>
            <Link to="/matches" className="text-valorant-red hover:text-valorant-white text-sm font-bold uppercase tracking-wider">
              View All Results →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {recentMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16 bg-valorant-black">
        <div className="valorant-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-valorant-white">
              <span className="text-valorant-red">UPCOMING</span> MATCHES
            </h2>
            <Link to="/matches" className="text-valorant-red hover:text-valorant-white text-sm font-bold uppercase tracking-wider">
              View Schedule →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Teams */}
      <section className="py-16 bg-valorant-gray">
        <div className="valorant-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-valorant-white">
              <span className="text-valorant-red">TOP</span> TEAMS
            </h2>
            <Link to="/teams" className="text-valorant-red hover:text-valorant-white text-sm font-bold uppercase tracking-wider">
              View All Teams →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-valorant-red to-valorant-darkred">
        <div className="valorant-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            STAY UPDATED WITH VALORANT ESPORTS
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest match schedules, results, and team statistics for all your favorite professional Valorant teams.
          </p>
          <Link to="/matches" className="bg-white hover:bg-valorant-lightgray text-valorant-red font-bold py-3 px-6 uppercase tracking-wider transition-colors duration-200">
            EXPLORE MATCHES
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
