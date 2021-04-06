function init() {
  //Put Raven config.
}

function log(error) {
  //Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
