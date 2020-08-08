const {
  PHASE_DEVELOPMENT_SERVER,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const env = {
    apollo: (() =>
    // if (isDev) return 'http://localhost:1337/graphql';

      'https://mascotapack-core.herokuapp.com/graphql'
    )(),
    api: (() =>
      // if (isDev) return 'http://localhost:1337/';
      'https://mascotapack-core.herokuapp.com'
    )(),
  };
  return {
    env,
  };
};
