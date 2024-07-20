import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loadercom = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // The duration of the loader animation in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <div className="loader">
        <p className="loader-text">{"{Vishal.Dev}"}</p>
      </div>}
    </div>
  );
};

export default Loadercom;
