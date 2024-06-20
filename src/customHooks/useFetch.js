import React, { useState, useEffect } from "react";

function useFetch() {
  const [data, setData] = useState();

  useEffect(
    (url) => {
      const fetchData = async (url) => {
        const response = await fetch(url);
        const data = response.json();
        return { data };
      };

      fetchData();
    },
    [url]
  );
}

export default useFetch;
