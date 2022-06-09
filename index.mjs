import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/models", express.static("./views/js/examples/models"));
app.use("/js", express.static("./views/js/examples/js"));

app.get("/", (_, res) => {
  res.render("index", { title: "Tree-Demo", version: "v1.0.0" });
});

app.listen(port, () => {
  console.log(`tree-demo app listening on port ${port}`);
});
