 Basic Server Interaction


## Objective

The objective of this project is to introduce fundamental web application concepts including HTML structure, basic server-side rendering (SSR), HTTP POST form processing, and hosting deployment. It demonstrates how a client-side HTML form submits user input to a Node.js and Express backend server, which then processes the input and dynamically renders an HTML page using the EJS templating engine.

---
Live Links
Live Demo (Render): https://task1-server-rendering.onrender.com/

## Technologies Used
- **HTML5**: Form controls and structured layout
- **CSS3**: Custom modern, clean, and responsive design (no external frameworks)
- **JavaScript (Node.js)**: Server-side JavaScript runtime environment
- **Express.js**: Fast and minimal web framework for Node.js
- **EJS (Embedded JavaScript)**: Server-side templating engine for rendering dynamic HTML
- **Git & GitHub**: Version control system and repository hosting
- **Render**: Cloud platform for web service deployment

---

## Features
- **HTML Registration Form**: Form containing input fields for Full Name, Email, Age, and Course selection.
- **HTTP POST Submission**: Form submits user inputs securely via POST request to `/submit`.
- **Express Server Architecture**: Clean route handling for GET (`/`) and POST (`/submit`).
- **Server-Side Rendering (SSR)**: Dynamic generation of output HTML pages using EJS templates.
- **Dynamic Result Page**: Immediately displays personalized confirmation and registration summary upon submission.
- **Input Validation**: Client-side HTML validation and server-side safety checks preventing empty or invalid inputs from crashing the server.
- **Responsive Modern Design**: Styled using custom CSS, optimized for mobile devices, tablets, and desktops.

---

## Project Structure

```
task1-server-rendering/
│
├── server.js          # Express server configuration, middleware, and route handlers
├── package.json       # Project metadata, dependencies (express, ejs), and start script
├── .gitignore         # File specifying untracked files (e.g., node_modules) to ignore in Git
├── README.md          # Comprehensive documentation for the project
│
├── views/
│   ├── index.ejs      # HTML form template rendered on GET /
│   └── result.ejs     # Dynamic success result page rendered on POST /submit
│
└── public/
    └── style.css      # Custom styling for form, buttons, card layout, and result views
```

### Important Files Explained:
- **`server.js`**: Initializes Express, sets up EJS as the view engine, parses URL-encoded body data (`express.urlencoded`), serves static CSS files from `public/`, and routes GET and POST requests. Listens on `process.env.PORT || 3000`.
- **`package.json`**: Contains `"start": "node server.js"` script for local startup and Render deployment.
- **`views/index.ejs`**: Serves the user registration interface using standard form controls with proper `name` attributes.
- **`views/result.ejs`**: Extracts submitted data passed from `req.body` and renders variables (`<%= name %>`, `<%= email %>`, `<%= age %>`, `<%= course %>`).
- **`public/style.css`**: Provides layout cards, flexbox alignment, soft shadows, hover transitions, and mobile responsiveness.

---

## Installation & Local Execution

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd task1-server-rendering
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```

### 4. Access the Application
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

## Deployment on Render

This application is configured for seamless deployment on **Render**.

1. Push your code to a public or private repository on GitHub.
2. Log into [Render](https://render.com) and click **New +** -> **Web Service**.
3. Connect your GitHub account and select your repository `task1-server-rendering`.
4. Configure the Web Service:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Create Web Service**. Render automatically assigns `process.env.PORT` dynamically and launches the app.

---

## Live Project Links

- **Live Demo**: `YOUR_RENDER_URL` *(Replace with your deployed Render URL after deployment, e.g., https://task1-server-rendering.onrender.com)*
- **GitHub Repository**: `YOUR_GITHUB_URL` *(Replace with your GitHub repository link)*

---

## Deployment Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Port Error / App crashes on launch** | Server hardcodes port 3000 | Ensure `server.js` uses `const PORT = process.env.PORT \|\| 3000;` |
| **Cannot find module 'express' or 'ejs'** | Dependencies missing in `package.json` or not installed | Ensure `package.json` lists `express` and `ejs`, and Build Command is `npm install` |
| **Cannot find views directory / EJS error** | Incorrect view path resolution | Ensure views folder is named `views` and set with `path.join(__dirname, "views")` |
| **Page shows "Not Found"** | Missing GET route for `/` | Verify `app.get("/", ...)` is defined in `server.js` |
| **CSS is not loading** | Static middleware missing or wrong path | Ensure `app.use(express.static(path.join(__dirname, "public")))` is set and link uses `href="/style.css"` |
| **Build Failed** | Syntax error in JavaScript or corrupted `package.json` | Test `npm start` locally before pushing to GitHub |
