"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const post_1 = __importDefault(require("../models/post"));
const userView_1 = require("../views/userView");
const postView_1 = require("../views/postView");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    async inserirUsuario(req, res) {
        const users = {
            nome: req.body.nome,
            email: req.body.email,
            senha: bcrypt_1.default.hashSync(req.body.senha, 10)
        };
        user_1.default.create(users)
            .then(function (users) {
            res.status(201).json(userView_1.renderUser(users));
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Error ao cadastrar usuário' + error });
        });
    },
    async listarUsuarios(req, res) {
        user_1.default.find().populate('post').exec()
            .then(function (users) {
            res.status(200).json(userView_1.renderManyUser(users));
        })
            .catch(function (error) {
            res.status(500).json({ message: 'Erro ao listar usuários' + error });
        });
    },
    async buscarUsuarioId(req, res) {
        const id = req.params.id;
        user_1.default.findById(id).exec()
            .then(function (users) {
            res.status(200).json(userView_1.renderUser(users));
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Erro ao buscar usuário' + error });
        });
    },
    async deletarUsuario(req, res) {
        const id = req.params.id;
        const token = req.headers.token;
        const payload = jsonwebtoken_1.default.decode(token);
        if (req.params.id === payload.id) {
            user_1.default.findByIdAndDelete(id)
                .then(function (users) {
                res.status(200).json(userView_1.renderUser(users));
            })
                .catch(function (error) {
                res.status(404).json({ message: 'Erro ao deletar usuário' + error });
            });
        }
        else {
            res.status(404).json({ message: 'Não autorização' });
        }
    },
    async obterPosts(req, res) {
        const id = req.params.id;
        post_1.default.find({ usuario: id })
            .then(function (posts) {
            res.status(200).json(postView_1.renderManyPost(posts));
        })
            .catch(function (error) {
            res.status(500).json({ message: 'Erro ao obter post' + error });
        });
    }
};
