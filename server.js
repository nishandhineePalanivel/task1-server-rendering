const express = require("express");
const path = require("path");

const app = express();

// Configure View Engine (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing URL-encoded body data from form submission
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public folder (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// GET / - Display the registration form
app.get("/", (req, res) => {
  res.render("index", { error: null, formData: {} });
});

// POST /submit - Process submitted form data
app.post("/submit", (req, res) => {
  const { name, email, age, course } = req.body;

  // Server-side validation: Check that all required fields exist and are not empty
  if (!name || !email || !age || !course || name.trim() === "" || email.trim() === "") {
    return res.status(400).render("index", {
      error: "All fields are required. Please provide valid input for all fields.",
      formData: { name, email, age, course }
    });
  }

  // Render the result view with dynamically injected variables
  res.render("result", {
    name: name.trim(),
    email: email.trim(),
    age: age.trim(),
    course: course.trim()
  });
});

// Port configuration for local development and Render deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
