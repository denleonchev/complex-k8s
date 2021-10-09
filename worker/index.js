const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const redisSubscription = redisClient.duplicate();

function getFibNumberByIndex(index) {
  if (index < 2) {
    return 1;
  }

  return getFibNumberByIndex(index - 1) + getFibNumberByIndex(index - 2);
}

redisSubscription.on('message', (channel, message) => {
  console.log('got message', message)
  console.log('calculated', getFibNumberByIndex(parseInt(message)));
  redisClient.hset('values', message, getFibNumberByIndex(parseInt(message)));
});

redisSubscription.subscribe('insert');
