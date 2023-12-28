import { useState } from "react";
import result, { getWeather } from "../../services/apiConnection";

export default function Search({ setData }) {
  const [value, setValue] = useState("");

  function submitFunction(e) {
    e.preventDefault();
    getWeather(value).then(setData);
  }

  return (
    <form className="d-flex" role="search" onSubmit={submitFunction}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
