const dotenv = require('dotenv');
dotenv.config();


const Level = require('./app/models/level');


(async () => { 

    // Je récupère tout les niveau depuis la base de donnée
    let levels = await Level.findAll();
    // Je les affiche dans la console
    levels.forEach(level => console.log(`${level.id} - ${level.name}`));

    // Je récupère le niveau avec l'id 14
    const level = await Level.findByPk(14);
    // Je l'affiche dans la console
    console.log("Found one " + level.name);

    // Je crée un niveau
    // const nightmare = await Level.create({ name: "Nightmare !"});
    // console.log(nightmare.id + " - " + nightmare.name);

    // Je mets à jour un element
    level.name = "Hurt me pleny";
    level.save();

    // Je récupère tout les niveau depuis la base de donnée
    levels = await Level.findAll();
    // Je les affiche dans la console
    levels.forEach(level => console.log(`${level.id} - ${level.name}`));


})();

// const User = require('./app/models/user');

// const dataMapper = require('./app/dataMapper');

// dataMapper.getAllLevels().then(data => {
//     data.forEach(level => console.log(level, level.id));
// });

// dataMapper.getOneLevel(1).then(level => {
//     console.log(level);
// });

// Level.findAll().then(levels => {
//     console.log(levels);
// })

// Level.findById(1).then(level => { 
//     console.log(level);

// });

// const maFonction = async () => {
//     const l = new Level({ name: "Level Test" });
//     await l.insert();

//     l.name = "Level Test updated!";
//     await l.update();

//     await l.delete();

// }

// maFonction();

// const l = new Level({ name: "Nightmare !" });
// l.insert();

// l.name = "Hurt me plenty !";
// l.update();



// l.delete();
