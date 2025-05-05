const users = [];

function registerUser(username, password) {
  if (users.find(u => u.username === username)) return false;
  users.push({ username, password });
  return true;
}

function authenticateUser(username, password) {
  return users.find(u => u.username === username && u.password === password);
}

module.exports = { users, registerUser, authenticateUser };
