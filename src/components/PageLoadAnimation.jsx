import { useEffect, useState } from "react";

export default function PageLoad({ children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`page-transition ${loaded ? "entered" : ""}`}>
      {children}
    </div>
  );
}