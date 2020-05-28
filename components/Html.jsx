import React from "react";

const Html = ({ title, description, children }) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title || ""}</title>
      <meta name="description" content={description || ""} />
      <meta name="viewport" content="width=device-width, inital-scale=1" />
      <script src="client.js" />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __hmtl: children }} />
    </body>
  </html>
);
export default Html;
