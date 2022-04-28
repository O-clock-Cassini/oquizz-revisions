class CoreModel {
    #id;

    static tableName = null;

    created_at;
    updated_at;

    constructor(obj) {
        this.#id = obj.id;

        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    static async findAll() {
        try {
            const result = await client.query(`SELECT * FROM "${this.tableName}"`);

            return result.rows.map(obj => new this(obj));

        } catch(err) {
            console.error(err);
            return null;
        }
    }

    static async findById(id) {
        try {
            // même code que l'on metterait dans le datamapper
            const result = await client.query(`SELECT * FROM "${this.tableName}" WHERE id=$1`,[id]);

            const elm = new this(result.rows[0]);
    
            return elm;
        } catch(err) {
            console.error(err);
            return null;
        }
    }

    update() {

        // CODE NON TESTE POUR VOUS MONTRER LE GENRE DE CODE A FAIRE !!!!

        let bddUser = await client.query(`SELECT * FROM "${this.tableName}" WHERE id=${this.id}`);
        bddUser = new User(bdd_user);
 
        const updateData = {};
 
        Object.keys(bddUser).forEach(key => {
            if(bddUser[key] != this[key])
                updateData[key] = this[key];
        });
 
        const query = `UPDATE "${this.tableName}" SET `;
 
        let i = 1;
        for(let d of Object.entries(updateData)) 
        {
            query += `"${d.key}" = ${d.value}`
            i++;
        }
 
        query += `WHERE "id" = ${i}`;
    }

    
}

module.exports = CoreModel;