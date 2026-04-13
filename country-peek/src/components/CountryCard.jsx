export default function CountryCard({ country }) {
  return (
    <div className="card">
      <img src={country.flags?.png} alt={country.name?.common} />
      <h2>{country.name?.common}</h2>
      <p>Population: {country.population?.toLocaleString() ?? "N/A"}</p>
      <p>Region: {country.region ?? "N/A"}</p>
      <p>Capital: {country.capital?.[0] ?? "N/A"}</p>
    </div>
  );
}
