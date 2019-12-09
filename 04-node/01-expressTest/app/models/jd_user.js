/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    real_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reg_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    creator: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'jd_user'
  });
};
