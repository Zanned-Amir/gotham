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
const declareRoute = require('./routes/declarationRoute')
app.use("/user", userRoute);
app.use("/stolen", stolenRoute);
app.use("/declare",declareRoute)

app.listen(3000, () => {
  console.log("server work");
});
