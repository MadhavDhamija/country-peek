import { useState } from "react";
import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!search) {
      setCountries([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    const timer = setTimeout(() => {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => {
          if (!res.ok) throw new Error("No countries found");
          return res.json();
        })
        .then((data) => {
          setCountries(data);
          setLoading(false);
        })
        .catch(() => {
          setCountries([]);
          setError("No countries match your search.");
          setLoading(false);
        });
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <h1>Search Countries</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type a country..."
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid">
        {countries.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </div>
  );
}
