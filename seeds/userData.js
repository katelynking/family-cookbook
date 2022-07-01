const { User } = require("../models");

const userdata = [
  {
    username: "StokesCookbook",
    email: "user1@email.com",
    password: "password",
  },
  {
    username: "cookbook2",
    email: "user2@email.com",
    password: "password",
  },
  {
    username: "cookbook3",
    email: "user3@email.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
