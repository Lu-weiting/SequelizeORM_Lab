const express = require('express');
const models = require('./Database/models');
const User = require('./Database/Entities/users')
const app = express();
const PORT = process.env.PORT || 3000;
const service = require('./Infrastructure/Service/userService');
async function test() {
    const jane = await User.create({ name: "Jane" });
    console.log(jane.toJSON());
    console.log(JSON.stringify(jane, null, 4));
    const select = await User.findOne({
        where: {
            name: "Jane"
        }
    });
    console.log("select",select.name); 
}

models.initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  service.clsSignUp("Tim");
//   test();
}).catch(err => console.error('Failed to init DB:', err));