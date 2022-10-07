import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seasons from "./Seasons";

const LeagueDetails = () => {
  const [data, setData] = useState({});
  const [seasons, setSeasons] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const url = "https://api-football-standings.azharimm.dev/leagues";
  useEffect(() => {
    getData();
    getSeasons();
  }, [params]);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/${params.id}/standings`);
    const result = await response.json();
    setData(result.data);
    setIsLoading(false);
  };

  const getSeasons = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/${params.id}/seasons`);
    const result = await response.json();
    setSeasons(result.data.seasons);
    setIsLoading(false);
  };
  console.log(seasons);
  return (
    <div className="container-fluid cards">
      {isLoading ? (
        <div className="text-center mt-3">
          <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {Object.keys(data).length > 0 && (
            <>
              <button
                className="btn btn-warning btn-md"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>

              <Seasons season={seasons} />

              <h4 className="text-center mb-2">{data.name}</h4>
              <h4 className="text-center mb-2">{data.seasonDisplay}</h4>

              <table className="table ">
                <thead>
                  <tr className="p-2">
                    <th scope="col">Team</th>
                    <th scope="col">GP</th>
                    <th scope="col">Losses</th>
                    <th scope="col">Points</th>
                    <th scope="col">GA</th>
                    <th scope="col">GF</th>
                    <th scope="col">Draws</th>
                    <th scope="col">Wins</th>
                    <th scope="col">RC</th>
                    <th scope="col">GD</th>
                    <th scope="col">PD</th>
                    <th scope="col">Rank</th>
                    <th scope="col">PPG</th>
                  </tr>
                </thead>
                {data.standings.map((info) => (
                  <tbody className="p-4">
                    <tr>
                      <td>
                        {" "}
                        {info.team.logos.map((logo) => (
                          <span>
                            <img className="logo" src={logo.href} alt="" />
                          </span>
                        ))}{" "}
                        {info.team.name}
                      </td>
                      {info.stats.map((stat) => (
                        <>
                          <td>{stat.value}</td>
                        </>
                      ))}
                    </tr>
                  </tbody>
                ))}
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LeagueDetails;
