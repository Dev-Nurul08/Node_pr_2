🌌 Overview
Task Manager Pro is a high-performance web application designed for simplicity and style. Built with Node.js and Express, it utilizes an EJS templating engine to deliver a dynamic user experience. The interface features a modern Dark Gradient UI with glassmorphism effects, ensuring that managing your daily grind feels premium.
✨ Key Features
➕ Create: Quickly add tasks with specific due dates.
📋 Read: View all your tasks in a clean, organized, responsive table.
✏️ Update: Seamlessly edit task descriptions and dates via a dedicated edit view.
🗑️ Delete: Remove completed or unwanted tasks with a single click.
🎨 Premium UI: Dark-themed aesthetic using Bootstrap 5 and custom CSS gradients.
🛠️ Tech Stack
Layer	Technology
Backend	Node.js & Express
Frontend	EJS Templates & CSS3
Styling	Bootstrap 5.3
Logic	JavaScript (ES6+)
📂 Project Structure
bash
Task-Manager/
├── views/
│   ├── index.ejs    # The main dashboard (List & Add)
│   └── edit.ejs     # The task modification page
├── index.js         # Server logic & Route handling
├── package.json     # Project dependencies
└── node_modules/    # Installed packages
Use code with caution.

⚙️ How It Works (Deep Dive)
1. Data Management
The app currently uses an In-Memory Array (let tasks = []). This makes the app lightning-fast as it doesn't wait for database latency. Every task is assigned a unique Date.now() ID for precise targeting.
2. Routing Logic
GET /: Fetches the global tasks array and injects it into index.ejs.
POST /add: Captures form data using express.urlencoded and pushes a new object into the array.
GET /edit/task/:id: Finds the specific task by ID and passes that single object to the edit view.
POST /edit/task/:id: Uses the .map() function to find the matching task and update its properties while keeping the original ID intact.
3. Modern Styling
The UI uses a linear gradient background (#1e1e2f to #111119) and Bootstrap Cards with a slight backdrop-filter (blur) to create a "glass" effect on the dashboard.
🚀 Quick Start
Clone the project
Install Dependencies:
bash
npm install express ejs
Use code with caution.

Start the Server:
bash
node index.js
Use code with caution.

Access the App: Open your browser and go to http://localhost:8080
📝 Future Roadmap
Implement MongoDB for persistent data storage.
Add User Authentication (Login/Sign-up).
Include Drag-and-Drop task reordering.
Add Dark/Light Mode toggle.
Developed with ❤️ for clean code and better productivity.