const client = require('../database');
const CoreModel = require("./coreModel");

class User extends CoreModel {

    firstname;
    lastname;
    email;
    password;

    constructor(obj) {
        super(obj);

        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.email = obj.email;
        this.password = obj.password;
    }


    async insert() {


        // Je fabrique la requete pour la base de donnée à l'aide des valeurs de celui-ci
        const query = {
            text:`
                INSERT INTO "user"
                ("firstname", "lastname", "email", "password")
                VALUES ($1, $2, $3, $4)
                RETURNING "id" 
                `, // RETURNING permet de préciser les champs que nous renvoit la requete après execution de la requete
            values: [this.firstname, this.lastname, this.email, this.password]  // Je prends mon objet de type souhaité
        };

        try {
            // J'execute la requete d'insertion
            const result = await client.query(query);

            // Je mets à jour l'identifiant de mon objet pris au préalable
            this.id = result.rows[0].id;

        } catch(err) {
            console.log(err);
        }



    }

    async update() {
        // Je prends mon objet de type souhaité
        // Je fabrique la requete pour la base de donnée à l'aide des valeurs de celui-ci
        // J'execute la requete de mise à jour
        // FIN

        const query = {
            text:`
                UPDATE "user" SET
                "email" = $1,
                "password" = $2,
                "firstname" = $3,
                "lastname" = $4
                WHERE "id" = $5
                `, // RETURNING permet de préciser les champs que nous renvoit la requete après execution de la requete
            values: [this.email, this.password, this.firstname, this.lastname, this.id]
        };


        try {
            await client.query(query);

        } catch(err) {
            console.log(err);
        }
    }

    async delete() {

        // Je prends mon objet de type souhaité
        // Je fabrique la requete pour la base de donnée à l'aide des valeurs de celui-ci
        // J'execute la requete de suppression

        const query = {
            text:`
               DELETE FROM "user" WHERE id=$1;
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

module.exports = User;