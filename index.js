import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  // Determine the screen size on the server-side
  let screenSize;

  if (req.headers["user-agent"].includes("Mobile")) {
    screenSize = "small";
  } else if (req.headers["user-agent"].includes("Tablet")) {
    screenSize = "medium";
  } else {
    screenSize = "large";
  }

  res.render(__dirname + "/views/index.ejs", {
    screenSize: screenSize,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
