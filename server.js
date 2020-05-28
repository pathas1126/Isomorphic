import path from "path";
import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import App from "./components/App";
import Html from "./components/Html";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, "public")));

server.get("*", (req, res) => {
  const body = ReactDOM.renderToString(<App />);
  const html = ReactDOM.renderToString(
    <Html
      title="My app"
      description="Isomorphic web application sample"
      body={body}
    />
  );
  res.send(`<!doctype html>
  ${html}`);
});

server.listen(port, () => {
  console.log(`Node.js server is listening at http://localhost:${port}`);
});
