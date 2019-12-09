/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_contract', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    loan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    loan_card: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    file_path: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    approve: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'jd_contract'
  });
};
