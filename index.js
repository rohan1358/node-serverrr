const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const BASE_URL = "https://news-restaurant-api-production.azure-api.net/api";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  const headers = {};

  if (req.headers.token) {
    headers.token = req.headers.token;
  }

  axios
    .get(BASE_URL + req.url, {
      headers,
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(error.response.status).json(error.response.data);
    });
});

app.post("*", (req, res) => {
  const headers = {};

  if (req.headers.token) {
    headers.token = req.headers.token;
  }

  axios
    .post(BASE_URL + req.url, req.body, {
      headers,
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(error.response.status).json(error.response.data);
    });
});

app.patch("*", (req, res) => {
  const headers = {};

  if (req.headers.token) {
    headers.token = req.headers.token;
  }

  axios
    .patch(BASE_URL + req.url, req.body, {
      headers,
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(error.response.status).json(error.response.data);
    });
});

app.delete("*", (req, res) => {
  const headers = {};

  if (req.headers.token) {
    headers.token = req.headers.token;
  }

  axios
    .delete(BASE_URL + req.url, {
      headers,
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(error.response.status).json(error.response.data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
