/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    role_dsc: {
      type: DataTypes.STRING(500),
      allowNull: false
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
    tableName: 'jd_role'
  });
};
