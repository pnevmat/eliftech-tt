const User = require('../schemas/users');

const listUser = async userId => {
  const user = await User.find({ _id: userId });
  return user;
};

const removeUser = async shopId => {
  try {
    const user = await User.findByIdAndRemove({
      _id: shopId,
    });
    return user;
  } catch {
    return null;
  }
};

const addUser = async body => {
  try {
    const response = await User.create({ ...body });
    return response;
  } catch {
    return {};
  }
};

module.exports = {
  listUser,
  removeUser,
  addUser,
};
