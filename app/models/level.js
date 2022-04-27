const CoreModel = require("./coreModel");

class Level extends CoreModel {
    name;


    constructor(obj) {
        super(obj);

        if(typeof obj.name !== 'string') {
            throw Error("Level name must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }
        
        this.name = obj.name;
    }
}

module.exports = Level;