const { Sequelize } = require('sequelize');

// 引入cls-hooked创建命名空间
const { createNamespace } = require('cls-hooked');
const namespace = createNamespace('my-sequelize-namespace');

// 让Sequelize知道使用哪个命名空间来存储事务
Sequelize.useCLS(namespace);

const sequelize = new Sequelize("ormLab", "root", "Howard0415", {
    host: "localhost",
    dialect: 'mysql',
    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        acquire: 30000, // 获取连接的最大尝试时间（毫秒）
        idle: 10000 // 一个连接在被释放前可以空闲的最长时间（毫秒）
    }
});


module.exports = sequelize;
// module.exports = pool;