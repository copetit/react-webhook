import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";
import "./styles.css";

export default function App() {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  return (
    <div className="App">
      <h1>{data && data.status}</h1><h1>{loading && "Loading"}</h1>
      <button onClick={refetch}> refetch </button>
    </div>
  );
}
