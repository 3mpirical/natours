const express    = require("express"),
      app        = express(),
      hbs        = require("hbs"),
      path       = require("path"),
      bodyParser = require("body-parser");

// CONFIGURATION ===============
const PORT = process.env.PORT || 3000;
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES ===============

app.get("/", (req, res) => {
  res.status(200)
    .render("natours");
});




app.get("*", (req, res) => {
  res.status(404)
    .json({
      isSuccessful: false,
      responseText: "Page Not Found",
    });
});




// SERVER START ===============
app.listen(PORT, () => {
  console.log(`Server has started on PORT: ${PORT}`);
});
