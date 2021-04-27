import { request } from "https";
import React, { useState, useEffect } from "react";
import { DEFAULT_MIN_VERSION } from "tls";
import axios from "./../axios";
import { requests } from "./../request";
// import "./Banner.scss";

type Props = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
}

export const Banner = () => {
  const [movie, setMovie] = useState<Props>({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.result);

      //apiからランダムで値を取得している
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
}