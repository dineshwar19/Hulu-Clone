import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../components/utils/requests";
import Thumbnail from "./Thumbnail";
import { quantum } from "ldrs";

function Contents() {
  const { genre } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  quantum.register();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(
            "Failed to fetch data. Please check your internet connection and try again."
          );
        }

        const result = await response.json();

        if (result.results.length === 0) {
          throw new Error("No movies found for the selected genre.");
        }

        setData(result.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [genre]);

  useEffect(() => {
    document.body.style.overflowY =
      isLoading || (error !== null && error !== undefined) ? "hidden" : "auto";
  }, [isLoading, error]);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <l-quantum size="70" speed="2.6" color="#32de84"></l-quantum>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-screen p-10">
          <p className="text-white text-2xl font-bold my-10">Error: {error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 mt-8">
          {data.map((item) => (
            <Thumbnail key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Contents;
