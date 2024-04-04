const User = require('../../Database/Entities/users');
module.exports = {
    insertNewUser: async (name,transaction) => {
        try {
            const jane = await User.create({ realName: name },transaction);
            console.log(jane.toJSON());
            console.log(JSON.stringify(jane, null, 4));
            return jane;
        } catch (error) {
            throw error;
        }
    }

}