const Tasks = require('../model/Task');

const home = async (req, res) => {
    try {
        res.render('index');
    } catch (err) {

    }
}

const CreateOneTask = async (req, res) {
    try {

    } catch (err) {

    }
}   

module.exports = {
    home,
    CreateOneTask

}