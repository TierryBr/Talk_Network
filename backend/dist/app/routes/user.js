"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_1 = __importDefault(require("../controllers/auth"));
const routes = express_1.Router();
routes.post('/api/login', auth_1.default.login);
routes.post('/api/usuarios', userController_1.default.inserirUsuario);
routes.use('/api/usuarios', auth_1.default.checar);
routes.get('/api/usuarios', userController_1.default.listarUsuarios);
routes.get('/api/usuarios/:id', userController_1.default.buscarUsuarioId);
routes.get('/api/usuarios/:id/posts', userController_1.default.obterPosts);
routes.delete('/api/usuarios/:id', userController_1.default.deletarUsuario);
exports.default = routes;
