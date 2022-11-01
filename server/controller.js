const fortunes = [
  "Your mentality is alert, practical, and analytical.",
  "Your mind is creative, original and alert.",
  "Your success will astonish everyone.",
  "Your talents will be recognized and suitably rewarded.",
  "Your life will get more and more exciting.",
];
const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];
const acnh = [
  "If you are sleepy then go to sleep, its that simple. Remember, my advice may be taken or ignored but never refunded.",
  "Don't believe everything you read. Except for this of course. Remember, my advice may be taken or ignored but never refunded.",
  "To improve your mood try baking cookies, I mean obviously. Remember, my advice may be taken or ignored but never refunded.",
  "A secret skill of yours could save a life. Remember, my advice may be taken or ignored but never refunded.",
  "It's OK to be frank with people or josh with them but try not to rob or sue them. Remember, my advice may be taken or ignored but never refunded.",
];
const movies = [
  "Thor: Love and Thunder",
  "Minions: The Rise of Gru",
  "Nope",
  "The Gray Man",
  "DC League of Super-Pets",
  "Bodies Bodies Bodies",
  "Bullet Train",
];

const randomIndex = (length) => Math.floor(Math.random() * length);

module.exports = {
  getCompliment: (req, res) => {
    let randomCompliment = compliments[randomIndex(compliments.length)];
    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    let randomFortunes = fortunes[randomIndex(fortunes.length)];
    res.status(200).send(randomFortunes);
  },
  getAcnh: (req, res) => {
    let randomAcnh = acnh[randomIndex(acnh.length)];
    res.status(200).send(randomAcnh);
  },
  getMovie: (req, res) => {
    let randommovies = movies[randomIndex(movies.length)];
    console.log('test')
    res.status(200).send(randommovies);
  },
  postMovie: (req, res) => {
    let newmovies = req.body.movies
    console.log('controller', newmovies)
    movies.push(newmovies)
    res.status(200).send(movies)
  },
  postAcnh: (req, res) => {
    let newAcnh = req.body.acnh;
    console.log('acnh controller', newAcnh)
    acnh.push(newAcnh)
    res.status(200).send(acnh)
  }

};
