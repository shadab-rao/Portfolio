require("dotenv").config();

console.log(process.cwd());
console.log(process.env);

const app = require("./app");
const connectToDB = require("./config/db");

connectToDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
