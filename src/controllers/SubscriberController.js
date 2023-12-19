const { Subscriber } = require("../db");

const findAllSubscribers = async () => {
  const subscribers = await Subscriber.findAll();
  return subscribers;
};

const createSubscriber = async (email) => {
  const newSubscriber = await Subscriber.create({
    email: email,
  });
  return newSubscriber;
};

module.exports = { findAllSubscribers, createSubscriber };
