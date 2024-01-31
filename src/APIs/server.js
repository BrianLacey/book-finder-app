const express = require("express");
const app = express();
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");
const router = require("./Routes/routes");

const PORT = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "http://localhost:8080",
  issuerBaseURL: "https://dev-aynpp75r5ohgzmpr.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("withCredentials", false);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Cookie, x-access-token"
  );
  next();
});

app.use(jwtCheck);
app.use(router);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
