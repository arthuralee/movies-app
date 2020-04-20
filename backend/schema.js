const fs = require("fs");
module.exports = fs.readFileSync(__dirname + "/schema.graphql", "utf8");
