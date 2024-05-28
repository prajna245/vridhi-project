
const User = require("../../backend/db/user");

async function addUser(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUser
};
