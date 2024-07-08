"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("./file");
const filedefault_1 = __importDefault(require("./filedefault")); // for default keyword there is no need to put braces{} in 
// function name
(0, file_1.myFun)();
(0, filedefault_1.default)();
