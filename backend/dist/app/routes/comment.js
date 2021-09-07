"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsController_1 = __importDefault(require("../controllers/commentsController"));
const auth_1 = __importDefault(require("../controllers/auth"));
const routes = express_1.Router();
routes.use('/api/comentarios', auth_1.default.checar);
routes.post('/api/comentarios', commentsController_1.default.inserirComentario);
routes.get('/api/comentarios', commentsController_1.default.listarComentarios);
routes.get('/api/comentarios/:id', commentsController_1.default.buscarComentarioId);
routes.delete('/api/comentarios/:id', commentsController_1.default.deletarComentario);
exports.default = routes;
