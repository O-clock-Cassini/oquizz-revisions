const {Quiz} = require('../models')

const mainController = {

    async homePage(req, res) {
        // On utilise le model sequelize Quizz, pour trouver tous les quizz
        // en base de donnée
        // include: 'user'
        // Précisera à sequelize qu'il doit inclure les utilisateurs associés à chaque quizz
        // la relation est définie dans models/index.js: ligne 67
        const quizzes = await Quiz.findAll({ 
            include: 'user'
        });

        // res.json(quizzes);
        res.render('home', {quizzes});
    }

}

module.exports = mainController;