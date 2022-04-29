const Level = require('./level');
const Question = require('./question');
const Answer = require('./answer');

// https://www.figma.com/file/8WMgiFoYLs0uxSDKxXByoJ/Untitled?node-id=0%3A1

// One To Many 

// Une question à un niveau 
Question.belongsTo(Level, {
    foreignKey: "level_id",
    as: "level",
});

// Un niveau a plein de question
// On fait appele au champ level_id de Question pour pouvoir réaliser la relation dans le sens inverse
Level.hasMany(Question, {
    foreignKey: "level_id",
    as: "questions"
});

// Question Réponse <-> One To Many + One To One

// Question à plusieurs réponses 
Question.hasMany(Answer, {
    foreignKey: "question_id",
    as: "answers"
});

// Réciproque : Une réponse appartient une question
Answer.belongsTo(Question, {
    foreignKey: "question_id",
    as: "question"
});

// Liaison valides sur le MCD
// ATTETION Cas particulier : QUESTION ET REPONSE SONT LIEES DE DEUX FACON ! 
// Une question à UNE bonne réponse
Question.belongsTo(Answer, {
    foreignKey : "answer_id",
    as: "good_answer"
});


// Question Quiz <-> One To Many // quiz_id sur Question

// Un Quiz possède PLUSIEURS Questions

// Réciproque : UNE question appartient à UN quiz


// User Quiz <-> One To Many // user_id sur Quiz

// UN Quiz appartient à UN User 

// Réciproque : UN User possède PLUSIEURS Quiz




// -------------------------------------------------------
// UN Quiz possède PLUSIEURS tags

// Un Tag possède PLUSIEURS Quiz ... la réciproque




// Question q = new Question(); // Lui vient de la bdd
// q.level.name

// [ Question
//    - id
//    - question : string
//    - anectode : string
//    - level : [Level
//         - id
//         - name
//     ]
// ]


module.exports = { Level, Question, Answer }