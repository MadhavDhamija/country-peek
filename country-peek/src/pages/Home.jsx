import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search countries..."
      />
    </div>
  );
}
