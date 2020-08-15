"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapPageElement = void 0;
var react_1 = require("react");
var Layout_1 = require("@Components/structure/Layout");
exports.wrapPageElement = function (_a) {
    var element = _a.element, props = _a.props;
    return <Layout_1.Layout {...props}>{element}</Layout_1.Layout>;
};
