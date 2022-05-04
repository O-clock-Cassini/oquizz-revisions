const {Quiz} = require('../models')

const quizzController = {
    async oneQuizz(req, res) {
        // Récupérer l'id qui se trouve dans l'url
        const id = req.params.id;
        const quiz = await Quiz.findByPk(id, { 
            include: [
                {
                    // association = nom de la relation
                    association: 'questions',
                    include: [
                        'level',
                        'answers'
                    ]
                },
                'user',
            ]
        });

        res.json(quiz);
    }
}

module.exports = quizzController;