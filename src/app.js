import express from "express";
import {
  exceptionHandler,
  hsts,
  httpsRedirection,
  staticFiles,
  routing,
  cors,
  authentication,
  authorization,
} from "./middleware/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(exceptionHandler);
app.use(hsts);
app.use(httpsRedirection);
app.use(staticFiles);
app.use(routing);
app.use(cors);

// there can be use cases where you want to apply authentication and authorization
app.use(authentication);
app.use(authorization);

app.get("/", (req, res) => {
  console.log("🎯 Reached endpoint handler");
  res.json({ message: "Success!", user: req.user });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
