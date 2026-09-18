const express = require('express');
const path = require('path');
const app = express();

// Temporary in-memory storage
const registrations = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// GET - render form
app.get('/', (req, res) => {
  res.render('index', { errors: [] });
});

// POST - validate and store
app.post('/submit', (req, res) => {
  const { name, email, phone, course, password, confirmPassword, gender } = req.body;
  const errors = [];

  if (!name || name.trim() === '') errors.push('Name is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
  if (!phone || !/^\d{10}$/.test(phone)) errors.push('Phone must be 10 digits.');
  if (!course) errors.push('Please select a course.');
  if (!gender) errors.push('Please select a gender.');
  if (!password || password.length < 6) errors.push('Password must be at least 6 characters.');
  if (password !== confirmPassword) errors.push('Passwords do not match.');

  if (errors.length > 0) {
    return res.render('index', { errors });
  }

  const entry = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    course,
    gender,
    submittedAt: new Date().toLocaleString()
  };

  registrations.push(entry);

  res.render('result', { ...entry, total: registrations.length });
});

// Optional - view all stored registrations
app.get('/registrations', (req, res) => {
  res.render('registrations', { registrations });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
