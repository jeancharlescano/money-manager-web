import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher } from "../../utilities/fetcher.js";

export const Detail = () => {
  const { id } = useParams();

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}tx/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (data) {
    console.log("🚀 ~ file: Detail.js:17 ~ Detail ~ data", data);

    return (
      <>
        <div>{data[0].id}</div>
        <div>{data[0].amount}</div>
        <div>{data[0].is_earning ? "true" : "false"}</div>
        <div>{data[0].date}</div>
        <div>{data[0].payment_type}</div>
        <div>{data[0].description}</div>
      </>
    );
  }
};
