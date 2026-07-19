require("dotenv").config();

const app = require("./app");
const connectToDB = require("./config/db");

connectToDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
