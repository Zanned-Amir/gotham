const express = require("express");
require("./config/connect");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
const userRoute = require("./routes/userRoute");
const stolenRoute = require("./routes/stolenRoute");

app.use("/user", userRoute);
app.use("/stolen", stolenRoute);

app.listen(3000, () => {
  console.log("server work");
});
