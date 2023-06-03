
const Tasks = require('../model/Task');

const home = async (req, res) => {
    try {
        // const Delete = Tasks.DeleteOne({id_: req.params.id});
        const taskList = await Tasks.findAll();
        res.render('index', {taskList});
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const CreateOneTask = async (req, res) => {
    try {
        const task = req.body;
        await Tasks.create(task);
        
        res.redirect('/home');

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}   

const DeleteOneTask = async (req, res) => {
    try {
        const id = req.params.id
        const busca = await Tasks.destroy({
            where: {
                id
            }
        });

        res.redirect('/home');

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    home,
    CreateOneTask,
    DeleteOneTask
}