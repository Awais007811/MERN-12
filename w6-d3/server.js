const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const router = express.Router();

app.use(cors());
app.use(router);

const PORT = 5000;
async function connectDatabase() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/todo_app');
    await mongoose.connect('mongodb+srv://kaleem:kaleem@todoapi.9ihweva.mongodb.net/suggest-movie');
}

connectDatabase().then((result) => console.log(result)).catch(err => console.log(err));

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please Enter your name"
    },
    age: {
        type: Number,
        min: [3, "You're under age sorry"]

    },
    city: { type: String }
});

const moviesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please Enter Movie Name"
    },
    minAge: {
        type: Number,
        min: [3, "You're under age sorry"]
    },
    maxAge: { type: String },
    category: { type: String }
})

const PersonModel = mongoose.model('person', personSchema);
const MoviesModel = mongoose.model('movies', moviesSchema);

router.post('/person', (req, res) => {
    const { name, age, city } = req.body; // json 
    const personCreated = new PersonModel({ name: name, age: age, city: city })
    personCreated.save();
    res.json({
        success: true,
        personCreated
    })
});

router.post('/movies', (req, res) => {
    const { name, minAge, maxAge, category } = req.body;
    const moviesCreated = new MoviesModel({ name: name, minAge: minAge, maxAge: maxAge, category: category })
    moviesCreated.save();
    res.json({
        success: true,
        moviesCreated
    })
})

router.get('/person', async(req, res) => {
    const persons = await PersonModel.find({}, { __v: 0 }); // returns all the tasks
    res.json({
        success: true,
        persons
    })
})

router.post('/check', async(req, res) => {
    const age = req.body;
    const persons = await PersonModel.find({ age: { $gte: age } }, { __v: 0 }); // returns all the tasks
    res.json({
        success: true,
        persons
    })
})

router.get('/movies', async(req, res) => {
    const movies = await MoviesModel.find({}, { __V: 0 });
    res.json({
        success: true,
        movies
    })
})

// router.get('/movies', async(req, res) => {
//     const movies = await MoviesModel.find({}, { __V: 0 });
//     res.json({
//         success: true,
//         movies
//     })
// })

router.delete('/delete-person', async(req, res) => {
    const { id } = req.query;
    const deletedData = await PersonModel.findByIdAndDelete(id); // deletes whose id is given with ?id=abc
    res.json({
        success: true,
        deletedData
    })
});

router.delete('/delete-movie/:id', async(req, res) => {
        const { id } = req.params;
        const deletedData = await MoviesModel.findByIdAndDelete(id);
        res.json({
            success: true,
            deletedData
        })
    })
    //status completed
router.get('/completed', async(req, res) => {
    const tasks = await TodoModel.find({ taskStatus: true })
    res.json(tasks)
})

//whose status is incomplete
router.get('/InComplete', async(req, res) => {
    const tasks = await TodoModel.find({ taskStatus: false })
    res.json(tasks)
})
router.patch('/update', async(req, res) => {
    const { id, taskText, taskStatus } = req.body; //JSON BODY
    const findTask = await TodoModel.findById(id);
    if (findTask) {
        findTask.taskText = taskText;
        findTask.taskStatus = taskStatus;
        findTask.save();
        res.json({ success: true, findTask })
    } else {
        res.status(404).json({
            success: false,
            message: "Task Not found"
        })
    }

})



router.delete('/delete', async(req, res) => {
    const { id } = req.query;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with ?id=abc
    res.json({
        success: true,
        deletedData
    })
})

router.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with delete/abc
    res.json({
        success: true,
        deletedData
    })
})




router.delete('/delete/', async(req, res) => {
    const { id } = req.body;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given 
    res.json({
        success: true,
        deletedData
    })
})

app.listen(PORT, () => {
    console.log(`server is working ${PORT}`);
})