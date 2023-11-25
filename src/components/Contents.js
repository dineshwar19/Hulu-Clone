import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../components/utils/requests";
import Thumbnail from "./Thumbnail";

function Contents() {
  const { genre } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`;
        console.log("API URL:", apiUrl);

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Data is not received");

        const data = await response.json();
        console.log("API Response:", data);

        setData(data.results);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [genre]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 mt-8">
      {data.map((data) => (
        <Thumbnail key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Contents;
