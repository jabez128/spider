System.register("DoWhileStatement", [], function() {
  "use strict";
  var __moduleName = "DoWhileStatement";
  function require(path) {
    return $traceurRuntime.require("DoWhileStatement", path);
  }
  "use strict";
  (function() {
    var Node = module.require("../Node").Node;
    function DoWhileStatement(test, body) {
      Node.call(this);
      this.type = "DoWhileStatement";
      this.test = test;
      this.test.parent = this;
      this.body = body;
      this.body.parent = this;
    }
    DoWhileStatement.prototype = Object.create(Node);
    DoWhileStatement.prototype.codegen = function() {
      if (!Node.prototype.codegen.call(this)) {
        return;
      }
      this.test = this.test.codegen();
      this.body = this.body.blockWrap().codegen();
      return this;
    };
    exports.DoWhileStatement = DoWhileStatement;
  }());
  return {};
});
System.get("DoWhileStatement" + '');
