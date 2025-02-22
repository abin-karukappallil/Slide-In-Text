"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideInText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var SlideInText = function (_a) {
    var text = _a.text, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.duration, duration = _d === void 0 ? 0.5 : _d, _e = _a.children, children = _e === void 0 ? 0.1 : _e;
    var letters = Array.from(text);
    var container = {
        hidden: { opacity: 0 },
        visible: function (i) {
            if (i === void 0) { i = 1; }
            return ({
                opacity: 1,
                transition: { staggerChildren: children, delayChildren: i * delay },
            });
        },
    };
    var child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: "-100vw",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };
    return ((0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "flex overflow-hidden ".concat(className), variants: container, initial: "hidden", animate: "visible", children: letters.map(function (letter, index) { return ((0, jsx_runtime_1.jsx)(react_1.motion.span, { variants: child, transition: { duration: duration }, children: letter === " " ? "\u00A0" : letter }, index)); }) }));
};
exports.SlideInText = SlideInText;
exports.default = exports.SlideInText;
