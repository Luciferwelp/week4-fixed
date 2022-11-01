const baseURL = `http://localhost:4000/api/`;

const complimentBtn = document.getElementById("complimentButton");
const getCompliment = () => {
  axios.get(`${baseURL}compliment/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
complimentBtn.addEventListener("click", getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");
const getFortune = () => {
  axios.get(`${baseURL}fortune/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
fortuneBtn.addEventListener("click", getFortune);

const movieBtn = document.getElementById("movie");
const getMovie = () => {
  axios.get(`${baseURL}movie/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
movieBtn.addEventListener("click", getMovie);

const postMovie = (body) =>
  axios
    .post(`${baseURL}movie`, body)
    .then((req, res) => {
      console.log("body", body);
      console.log(req.data);
    })
    .catch((err) => console.log(err));

function submitHandler(e) {
  e.preventDefault();
  let movie = document.querySelector("#movieText");
  let bodyObj = {
    movie: movie.value,
  };
  postMovie(bodyObj);
  movie.value = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", submitHandler);

const acnhBtn = document.getElementById("ACNH");
const getAcnh = () => {
  axios.get("http://localhost:4000/api/acnh/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
acnhBtn.addEventListener("click", getAcnh);

const postAcnh = (body) =>
  axios
    .post(`${baseURL}acnh`, body)
    .then((req, res) => {
      console.log("body", body);
      console.log(req.data);
    })
    .catch((err) => console.log(err));

function onClickHandler(e) {
  e.preventDefault();
  let acnh = document.querySelector("#acnhText");
  let bodyObj = {
    acnh: acnh.value,
  };
  postAcnh(bodyObj);
  acnh.value = "";
}
const form2 = document.querySelector("#acnhForm");
form2.addEventListener("click", onClickHandler);
