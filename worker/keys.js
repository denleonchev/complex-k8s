const { env: envVars } = process;
module.exports = {
  redisHost: envVars.REDIS_HOST,
  redisPort: envVars.REDIS_PORT,
};
