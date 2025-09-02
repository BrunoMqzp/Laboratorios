import { useFetch } from "./useFetch";
import { LoadingMessage } from "../Components/Loading";
import { NasaCard } from "../Components/Card";
import { useCounter } from "./useCounter";
import { useState } from "react";

export const ApiHook = () => {
  const { counter, decrement, increment } = useCounter(1);
  const date = new Date()
  date.setDate((date.getDate()) - counter);
  const dateString = date.toISOString().split("T")[0];
  const { data, hasError, isLoading } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=YYYY-MM-DD`
  );

  return (
    <>
      <h1>APOD NASA</h1>
      <hr />
      <h2>{data?.title}</h2>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <NasaCard 
          id={counter} 
          name={data.title} 
          image={data.media_type == "image" ? data.url : null} 
        />
      )}
      <button className="btn btn-primary" onClick={() => decrement()}>
        Anterior
      </button>
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
