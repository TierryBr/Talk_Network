"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsController_1 = __importDefault(require("../controllers/postsController"));
const auth_1 = __importDefault(require("../controllers/auth"));
const routes = express_1.Router();
routes.use('/api/posts', auth_1.default.checar);
routes.post('/api/posts', postsController_1.default.inserirPost);
routes.get('/api/posts', postsController_1.default.listarPosts);
routes.get('/api/posts/:id', postsController_1.default.buscarPostId);
routes.get('/api/posts/:id/comentarios', postsController_1.default.obterComentarios);
routes.delete('/api/posts/:id', postsController_1.default.deletarPost);
exports.default = routes;
