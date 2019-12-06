/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_loan', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    identity_card: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    marriage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    education: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    income: {
      type: "DOUBLE(9,2)",
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    contact_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    contact2_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact2_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact2_dep: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact2_pos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
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
    tableName: 'jd_loan'
  });
};
