/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_module', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    father_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    menu_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_url: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'jd_module'
  });
};
