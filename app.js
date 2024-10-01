const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let getDateAft100Days = addDays(new Date(), 100);
  response.send(
    `${getDateAft100Days.getDate()}/${
      getDateAft100Days.getMonth() + 1
    }/${getDateAft100Days.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
