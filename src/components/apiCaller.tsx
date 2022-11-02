import React from "react";

const wheatherCaller = function () {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=28.36&longitude=65.55&hourly=dewpoint_1000hPa&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    });
};

export default wheatherCaller;
