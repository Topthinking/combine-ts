const plugins = ['libb'];

const setAward = () => {
  console.log('该方法来自lib-a库');
};

const _default = {
  setAward,
};

plugins.forEach((plugin) => {
  try {
    const lib = require(plugin);
    const info = lib.default || lib;
    Object.assign(_default, info);
  } catch (error) {}
});

module.exports.default = _default;

exports.setAward = setAward;
