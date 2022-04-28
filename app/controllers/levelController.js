const Level = require("../models/level");

const levelController = {
    all: async (req, res) => {
        // Récupérer tous les niveaux
        const levels = await Level.findAll();
            
        res.send(levels);

        // res.render('levels', { levels })

    },
    get: async (req, res) => {
        // Récupérer un niveau
        const id = Number(req.params.id);

        // Si id différent de NaN
        if(!isNaN(id)) {
            const level = await Level.findByPk(id);
            res.send(level);
            return;
        } 

        res.status(404);
        res.send("Not found");
    },
    create: async (req, res) => {
        // Créer un niveau

        // Je récupère les valeurs du formulaire (on fait semblant car on a pas encore de form)
        const formData = { // le req.body (après verif d'integrité des données)
            name: "Nightmare !"
        }

        const level = await Level.create(formData);

        res.send(level);



    }, 
    update: async(req, res) => {
        // Mettre à jour un niveau
        
    },
    delete: async(req, res) => {
        // Supprimer un niveau
          const id = Number(req.params.id);

          // Si id différent de NaN
          if(!isNaN(id)) {
              const level = await Level.findByPk(id);
              level.destroy();
              res.send("He's gone");
              return;
          } 
  
          res.status(404);
          res.send("Not found");

    }
}

module.exports = levelController;