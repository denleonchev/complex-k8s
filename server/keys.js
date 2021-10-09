const { env: envVars } = process;

module.exports = {
  redisHost: envVars.REDIS_HOST,
  redisPort: envVars.REDIS_PORT,
  pgUser: envVars.POSTGRES_USER,
  pgHost: envVars.POSTGRES_HOST,
  pgDatabase: envVars.POSTGRES_DB,
  pgPassword: envVars.POSTGRES_PASSWORD,
  pgPort: envVars.POSTGRES_PORT,
};
