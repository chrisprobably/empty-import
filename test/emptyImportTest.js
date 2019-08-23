const t = require("tap");
const emptyImport = require("../index");

t.test(
  "It's an empty object",
  function(t) {
    t.same(emptyImport, {});
    t.end();
  }
);

