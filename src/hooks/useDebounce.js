import React, { useEffect, useState } from "react";

function useDebounce(value) {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const timeoutId = setTimeout(() => {
      setData(value);
      setLoad(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return { data, load };
}

export default useDebounce;
