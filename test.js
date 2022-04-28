const dotenv = require('dotenv');
dotenv.config();


const Level = require('./app/models/level');
const User = require('./app/models/user');

// const dataMapper = require('./app/dataMapper');

// dataMapper.getAllLevels().then(data => {
//     data.forEach(level => console.log(level, level.id));
// });

// dataMapper.getOneLevel(1).then(level => {
//     console.log(level);
// });

Level.findAll().then(levels => {
    console.log(levels);
})

Level.findById(1).then(level => { 
    console.log(level);

});

const maFonction = async () => {
    const l = new Level({ name: "Level Test" });
    await l.insert();

    l.name = "Level Test updated!";
    await l.update();

    await l.delete();

}

maFonction();

// const l = new Level({ name: "Nightmare !" });
// l.insert();

// l.name = "Hurt me plenty !";
// l.update();



// l.delete();



