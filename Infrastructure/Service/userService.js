
const sequelize = require('../../mysql');
const userRepo = require('../Repository/userRepo');
const userCredentialRepo = require('../Repository/userCredentialRepo')
const UserCredential = require('../../Database/Entities/userCredentials');
const User = require('../../Database/Entities/users');
module.exports = {
    signUp: async (name) => {
        const transaction = await sequelize.transaction();
        try {
            //transaction //解構才行 / 要在同個異步上下文才會發揮CLS公用
            const insertResult = await userRepo.insertNewUser(name, { transaction });
            console.log("userId:", insertResult.id)
            const userCredential = await userCredentialRepo.insertNewUser(insertResult.id, { transaction })

            // const janes = await User.create({ realName: name });
            // console.log("userId:", janes.id)
            // const jane = await UserCredential.create({ userId: "jnadsl" });
            
            await transaction.commit();

            return insertResult;

        } catch (error) {
            await transaction.rollback();
            console.error(error);
        } finally {
            console.log('connection release');
        }
    },
    clsSignUp: async (name) => {

        try {
            //這種寫法跟CLS的相容度比較高 用上面的寫法儘管直接在service裡call create還是需要手動加入事務參數才會正確rollback
            const result = await sequelize.transaction(async (t) => {
                const insertResult = await userRepo.insertNewUser(name);
                console.log("userId:", insertResult.id)
                const userCredential = await userCredentialRepo.insertNewUser(insertResult.id)

                return insertResult;

            });
            console.log("res:", result.realName)

        } catch (error) {
            console.error(error);
        } finally {
            console.log('connection release');
        }
    }

}