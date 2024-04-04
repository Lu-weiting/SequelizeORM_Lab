const sequelizes = require('../mysql');
const User = require('./Entities/users');
const Post = require('./Entities/posts');
const UserCredential = require('./Entities/userCredentials');

User.hasOne(UserCredential,{foreignKey: 'userId'});
UserCredential.belongsTo(User,{foreignKey: 'userId'})

User.hasMany(Post,{ foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    initDb: async()=>{
        try {
            await sequelizes.sync();
            console.log('All models were synchronized successfully.');
          } catch (error) {
            console.error('Failed to synchronize models:', error);
          }
    }
}