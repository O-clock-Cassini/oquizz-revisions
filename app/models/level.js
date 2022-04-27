const client = require('../database');
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

    // static : c'est une méthode qui se trouve SUR la classe 
    // à la différence d'une methode normale qui se trouve sur l'INSTANCE d'une classe (un objet)
    // cf. Schema https://www.figma.com/file/Px0cY4zySfaZZj0dSOnvSj/Untitled?node-id=0%3A1
    static async findAll() {
        try {
            const result = await client.query(`SELECT * FROM "level"`);

            // Je récupère les lignes, je convertis le tableau d'objet en tableau de level

            // // Je crée un tableau vide
            // const levels = [];

            // // Pour chaque "ligne" de bdd je convertis en Level
            // for(let obj of result.rows ) {
            //     const l = new Level(obj);
            //     levels.push(l);
            // }

            // // je retourne mon nouveau tableau
            // return levels;

            // .map -> convertir un tableau de type A vers un nouveau tableau de type B 
            // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            // return result.rows.map(obj => new Level(obj));
            return result.rows.map(obj => new Level(obj));

        } catch(err) {
            console.error(err);
            return null;
        }
    }

    // findById

    static async findById(id) {
        try {
            // même code que l'on metterait dans le datamapper
            const result = await client.query(`SELECT * FROM "level" WHERE id=$1`,[id]);

            const level = new Level(result.rows[0]);
    
            return level;
        } catch(err) {
            console.error(err);
            return null;
        }
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