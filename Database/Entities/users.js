// // const { Sequelize } = require('sequelize');
// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../../mysql')

// class User extends Model {}

// User.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
// }, {
//   sequelize,
//   modelName: 'User',
//   tableName: 'users'
// });
// module.exports = User;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../mysql');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  provider: {
    type: DataTypes.STRING,
  },
  accountName: {
    type: DataTypes.STRING(50),
    // allowNull: false
  },
  realName: {
    type: DataTypes.STRING(50),
    // allowNull: false
  },
  avatar: {
    type: DataTypes.STRING(255)
  },
  backgroundImage: {
    type: DataTypes.STRING(255)
  },
  birthday: {
    type: DataTypes.DATE
  },
  gender: {
    type: DataTypes.INTEGER
  },
  phone: {
    type: DataTypes.STRING(50)
  },
  lifeRole: {
    type: DataTypes.STRING(255)
  },
  selfIntro: {
    type: DataTypes.STRING(255)
  },
  fbLink: {
    type: DataTypes.STRING(255)
  },
  igLink: {
    type: DataTypes.STRING(255)
  },
  linkedInLink: {
    type: DataTypes.STRING(255)
  },
  isActive: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Users'
});

module.exports = User;
