const monk = require("monk");
const db = monk("localhost/auth_for_noobs");

module.exports = db;