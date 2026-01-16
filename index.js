import express from 'express';

const app = express();
const PORT = 8080;

let tasks = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.render('index', { tasks });
});


app.post('/add', (req, res) => {
    const task = {
        id: Date.now(),
        text: req.body.text,
        dueDate: req.body.dueDateTime ? new Date(req.body.dueDateTime) : new Date()
    };
    tasks.push(task);
    res.redirect('/');
});

app.get('/delete/task', (req, res) => {
    const { id } = req.query;
    tasks = tasks.filter((task) => task.id != id);
    res.redirect('/');
});

app.get('/edit/task/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.redirect('/');
    res.render('edit', { task });
});

app.post('/edit/task/:id', (req, res) => {
    const id = req.params.id;
    tasks = tasks.map((task) => {
        if (task.id == id) {
            return { 
                ...task, 
                text: req.body.text, 
                dueDate: req.body.dueDateTime ? new Date(req.body.dueDateTime) : task.dueDate 
            };
        }
        return task;
    });
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});