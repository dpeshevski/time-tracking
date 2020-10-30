function associations(models) {
  console.log('models', models);
  const { projects, times } = models;

  projects.hasMany(times);
  times.belongsTo(projects);
};

async function authenticate(sequelize) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

export default {
  associations,
  authenticate
};
