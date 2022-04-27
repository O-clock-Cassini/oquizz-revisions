const dotenv = require('dotenv');
dotenv.config();

const dataMapper = require('./app/dataMapper');

dataMapper.getAllLevels().then(data => {
    data.forEach(level => console.log(level, level.id));
});

dataMapper.getOneLevel(1).then(level => {
    console.log(level);
})