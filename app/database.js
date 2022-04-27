// SoC : La connexion à la BDD

// on require le module pour se connecter
// et onistancie un Client qui reprenste notre connexion à la base de donnée

const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;