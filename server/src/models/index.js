import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import sequelize from '../database/sequelize';
import sequelizeUtils from '../utils/sequelize';

const db = {};

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes); 
    db[model.name] = model;
  })

sequelizeUtils.associations(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
