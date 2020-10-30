import Sequelize from 'sequelize';

import dbConfigs from '../../config/sqliteDb.json';

import sequelizeUtils from '../utils/sequelize';

const dbConfig: Object = dbConfigs[process.env.NODE_ENV || 'dev'];
const sequelize = new Sequelize(dbConfig);

sequelizeUtils.authenticate(sequelize);

sequelize.sync({ force: false });

export default sequelize;