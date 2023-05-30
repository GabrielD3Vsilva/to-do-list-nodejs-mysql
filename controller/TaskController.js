
const Tasks = require('../model/Task');

const home = async (req, res) => {
    try {
        // const taskList = await Tasks.findAll();
        res.render('index');
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const CreateOneTask = async (req, res) => {
    try {
        const taskList = await Tasks.findAll();
        const name = req.body;
        Tasks.create({
            name: name
        });

        res.render('index', {taskList});

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}   

module.exports = {
    home,
    CreateOneTask

}