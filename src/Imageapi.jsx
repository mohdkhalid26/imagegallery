import { React, useEffect, useState } from "react";
import "./Imageapi.css";

export default function Imageapi() {
  function getdatafromstorage() {
    const data1 = localStorage.getItem("imageApi");
    if (data1) {
      return JSON.parse(data1);
    } else {
      return [];
    }
  }

  const [data, setData] = useState(getdatafromstorage);
  const [noimg, setNoimg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUxjH6k4-lM7Kjo8G-2GcoAWAUsoWEWg68w&usqp=CAU"
  );

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((res) => localStorage.setItem("imageApi", JSON.stringify(res)));
  }, data);

  return (
    <div className="maindiv">
      {data.map((data, index) => {
        return (
          <div key={index} className="datadiv">
            <img width="140px" src={data.Poster ? data.Poster : noimg} alt="" />
            <h3 className="title">
              Title: <u>{data.Title}</u>
            </h3>
            <h5>{`( Year: ${data.Year} ) ( Runtime: ${data.Runtime} )`}</h5>
          </div>
        );
      })}
    </div>
  );
}
