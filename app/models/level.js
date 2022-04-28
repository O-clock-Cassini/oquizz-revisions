const client = require('../database');
const CoreModel = require("./coreModel");

class Level extends CoreModel {
    name;


    //surcharge
    static tableName = "level";

    constructor(obj) {
        super(obj);

        if(typeof obj.name !== 'string') {
            throw Error("Level name must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }

        this.name = obj.name;
    }


    async insert() {
        const query = {
            text:`
                INSERT INTO "level"
                ("name")
                VALUES ($1)
                RETURNING "id" 
                `, // RETURNING permet de préciser les champs que nous renvoit la requete après execution de la requete
            values: [this.name]
        };

        try {
            const result = await client.query(query);

            this.id = result.rows[0].id;

        } catch(err) {
            console.log(err);
        }



    }

    async update() {
        const query = {
            text:`
                UPDATE "level" SET
                "name" = $1
                WHERE "id" = $2
                `, // RETURNING permet de préciser les champs que nous renvoit la requete après execution de la requete
            values: [this.name, this.id]
        };

        try {
            await client.query(query);

        } catch(err) {
            console.log(err);
        }
    }

    async delete() {
        const query = {
            text:`
               DELETE FROM "level" WHERE id=$1;
                `,
            values: [this.id]
        };

        try {
            await client.query(query);

        } catch(err) {
            console.log(err);
        }
    }

}

module.exports = Level;