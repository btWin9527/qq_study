/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_loan_approve_end', {
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
    approve: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    result: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'jd_loan_approve_end'
  });
};
