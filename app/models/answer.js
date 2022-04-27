const CoreModel = require("./coreModel");

class Answer extends CoreModel {

    description;
    question_id;

    constructor(obj) {
        super(obj);

        if(typeof obj.description !== 'string') {
            throw Error("Answer description must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }

        this.description = obj.description;
        this.question_id = obj.question_id;
    }
}

module.exports = Answer;