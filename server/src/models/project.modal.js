import hat from 'hat';

export default (sequelize, DataTypes) => {
  const Project = sequelize.define('projects', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: hat()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'projects'
  });

  return Project;
};
