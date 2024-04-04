const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../mysql')

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'Users',
        key: 'id'
    }
  },
  context: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Post',
  tableName: 'Posts'
});

module.exports = Post;