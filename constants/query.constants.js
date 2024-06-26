const CREATE_TABLE_USERS =
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT)";

const CREATE_TABLE_EXERCISES =
  "CREATE TABLE IF NOT EXISTS exercises (id INTEGER PRIMARY KEY, userId INTEGER, description TEXT, duration INTEGER, date TEXT, FOREIGN KEY(userId) REFERENCES users(id))";

const SELECT_ALL_USERS = "SELECT * FROM users";

const SELECT_USER_BY_ID = "SELECT * FROM users WHERE id = ?";

const SELECT_USER_BY_USERNAME = "SELECT * FROM users WHERE username = ?";

const COUNT_EXERCISES_BY_USER_ID =
  "SELECT COUNT(*) as count FROM exercises WHERE userId = ?";

const INSERT_INTO_USERS = "INSERT INTO users (username) VALUES (?)";

const INSERT_INTO_EXERCISES =
  "INSERT INTO exercises (userId, description, duration, date) VALUES (?, ?, ?, ?)";

const SELECT_EXERCISES_BY_USER_ID = "SELECT * FROM exercises WHERE userId = ?";

module.exports = {
  CREATE_TABLE_USERS,
  CREATE_TABLE_EXERCISES,
  SELECT_ALL_USERS,
  SELECT_USER_BY_ID,
  SELECT_USER_BY_USERNAME,
  COUNT_EXERCISES_BY_USER_ID,
  INSERT_INTO_EXERCISES,
  INSERT_INTO_USERS,
  SELECT_EXERCISES_BY_USER_ID,
};
