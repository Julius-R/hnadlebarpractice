const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");

const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/about", aboutRouter);

app.listen(3000, () => {
  console.log(`Server is Listening on 3000`);
});
