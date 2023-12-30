const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function isAvailable() {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const hour = currentDate.getHours();
  return day >= 1 && day <= 5 && hour >= 9 && hour <= 17;
}

app.use((req, res, next) => {
  if (isAvailable()) {
    next();
  } else {
    res.status(503).send("Server is currently unavailable");
  }
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/our-services", (req, res) => {
  res.send("Our Services page");
});

app.get("/contact-us", (req, res) => {
  res.send("Contact us page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
