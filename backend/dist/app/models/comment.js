"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongodb_1 = __importDefault(require("mongodb"));
const CommentSchema = new mongoose_1.Schema({
    texto: {
        type: String,
        required: true
    },
    post: {
        type: mongodb_1.default.ObjectId,
        ref: 'Posts'
    },
    usuario: {
        type: mongodb_1.default.ObjectId,
        ref: 'Usuario'
    }
});
exports.default = mongoose_1.model('Comentarios', CommentSchema);
