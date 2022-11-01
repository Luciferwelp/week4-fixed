const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getFortune } = require("../server/controller");

const { getCompliment, getAcnh, getMovies, postMovies } = require('./controller');

const { postAcnh } = require("./controller");

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/acnh", getAcnh);

app.get("/api/movies", getMovies);

app.post("/api/movies", postMovies);

app.post("/api/acnh", postAcnh);



app.listen(4000, () => console.log("Server running on 4000"));
