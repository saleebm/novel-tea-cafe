"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRootElement = void 0;
var react_1 = require("react");
var mouse_position_provider_1 = require("@Components/context/MousePosition/mouse-position-provider");
var dark_mode_context_1 = require("@Components/context/DarkMode/dark-mode-context");
exports.wrapRootElement = function (_a) {
    var element = _a.element;
    return (<mouse_position_provider_1.MousePositionProvider>
    <dark_mode_context_1.DarkModeContextProvider>{element}</dark_mode_context_1.DarkModeContextProvider>
  </mouse_position_provider_1.MousePositionProvider>);
};
