import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Loading from "./pages/Loading/Loading";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading time
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      // Cleanup the timeout to avoid potential memory leaks
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Layout />
        </>
      )}
    </div>
  );
}

export default App;
