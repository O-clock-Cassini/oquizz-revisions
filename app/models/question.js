const CoreModel = require("./coreModel");

class Question extends CoreModel{
    question;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;

    constructor(obj) {
        super(obj);

        if(typeof obj.question !== 'string') {
            throw Error("Question question must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }

        if(typeof obj.anecdote !== 'string') {
            throw Error("Question anecdote must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }

        if(typeof obj.wiki !== 'string') {
            throw Error("Question wiki must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }

        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }
}

module.exports = Question;