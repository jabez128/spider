"use strict";
(function () {
    var Node = require("./Node").Node;
    function Property(key, value, shorthand) {
        Node.call(this);
        this.type = "Property";
        this.kind = "init";
        this.method = false;
        this.shorthand = shorthand;
        this.computed = false;
        this.key = key;
        this.key.parent = this;
        this.value = value;
        this.value.parent = this;
    }
    Property.prototype = Object.create(Node);
    Property.prototype.codegen = function () {
        if (!Node.prototype.codegen.call(this)) {
            return;
        }
        this.key = this.key.codegen(false);
        this.value = this.value.codegen(this.parent.type !== "ObjectPattern");
        return this;
    };
    Property.prototype.hasCallExpression = function () {
        return this.value.hasCallExpression();
    };
    exports.Property = Property;
}());

//# sourceMappingURL=lib/ast/Property.map