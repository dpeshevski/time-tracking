import hat from 'hat';

export default (sequelize, DataTypes) => {
  const Time = sequelize.define('times', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: hat()
    },
    description: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.INTEGER
    },
    projectId: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'times'
  });

  return Time;
};
