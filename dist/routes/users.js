"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_1 = require("../controller/request");
const router = express_1.default.Router();
router.get("getevolution", request_1.getEvolutionChain);
exports.default = router;
