/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_area_info', {
    AreaID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ParentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AreaName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    AreaLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    AreaName2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'jd_area_info'
  });
};
