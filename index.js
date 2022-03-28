const express = require("express");
const cors = require("cors");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const config = require("./config");

const emailRoutes = require("./routes/email");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// For testing templates
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");

// API Docs endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/email", emailRoutes);

app.get("/ejs/proj", (req, res) => {
    res.render("confirmEmail", {
        name: "Alex",
        link: "https://user.com/register",
        description: "web app to",
    });
});

const PORT = process.env.PORT || 9006;
app.listen(PORT, console.log(`App running on port ${PORT}`));
