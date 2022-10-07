import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const Leagues = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://api-football-standings.azharimm.dev/leagues";
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}`);
    const result = await response.json();
    setData(result.data);
    setIsLoading(false);
  };
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div className="text-center mt-3">
          <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h5
            className="font-medium leading-tight text-xl mt-0 mb-2 "
            style={{ paddingLeft: "10px", fontWeight: "bold" }}
            onClick={() => navigate("/")}
          >
            <SportsSoccerIcon className="icon" />
            <span style={{ paddingLeft: "10px", marginBottom: "15px" }}>
              Standings
            </span>
          </h5>
          {data.map((data) => (
            <div onClick={() => navigate(`/league/${data.id}`)}>
              <p className="display-8">
                {" "}
                <span>
                  {" "}
                  <img className="logo" src={data.logos.light} alt="" />{" "}
                </span>{" "}
                {data.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Leagues;
