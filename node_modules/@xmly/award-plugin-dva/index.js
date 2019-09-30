const setAbc = () => {
  console.log('该方法来自lib-b库');
};

module.exports.default = {
  setAbc,
};

exports.setAbc = setAbc;
