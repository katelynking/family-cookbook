const { User } = require("../models");

const userdata = [
  {
    username: "Stokes Family",
    email: "stokes@email.com",
    password: "password",
  },
  {
    username: "Hill Family",
    email: "ian@ianahill.com",
    password: "password",
  },
  {
    username: "King Family",
    email: "katelynking112@gmail.com",
    password: "password",
  },
  {
    username: "Rosario Family",
    email: "rosariok314@gmail.com",
    password: "password",
  },
  {
    username: "Jackson Family",
    email: "jackson@gmail.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
