const mysql = require("mysql");
const promise = require("bluebird");
const { add } = require("nodemon/lib/rules");
promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connected");
  await connection.endAsync();
}
connectionCheck();
async function selectAllUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from user`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  return list;
}

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from user(username,message) values(?,?)`;
  await connection.queryAsync(sql, [user.username, user.message]);
  await connection.endAsync();
  return list;
}

const user = { username: "Sagar", message: "Hello" };

addUser(user);
selectAllUser();

module.exports = { addUser, selectAllUser };
