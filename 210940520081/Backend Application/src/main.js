const express = require("express");
const app = express();
app.use(express.json());
const port = 5001;
const cors = require("cors");
const { addUser, selectAllUser } = require("./user");
app.use(cors());

app.get("/users", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

app.post("/addUser", async (req, res) => {
  const user = req.body;
  await addUser(user1);
  res.json({ message: "user added successfully" });
});

app.listen(port, () => {
  console.log(`Example App listening at http://localhost:${port}/`);
});
