"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../models/post"));
const comment_1 = __importDefault(require("../models/comment"));
const postView_1 = require("../views/postView");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    async inserirPost(req, res) {
        const posts = req.body;
        post_1.default.create(posts)
            .then(function (posts) {
            res.status(201).json(postView_1.renderPost(posts));
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Error ao cadastrar post' + error });
        });
    },
    async listarPosts(req, res) {
        post_1.default.find().populate('usuario').exec()
            .then(function (posts) {
            res.status(200).json(postView_1.renderManyPost(posts));
        })
            .catch(function (error) {
            res.status(500).json({ message: 'Erro ao listar posts' + error });
        });
    },
    async buscarPostId(req, res) {
        const id = req.params.id;
        post_1.default.findById(id).exec()
            .then(function (posts) {
            res.status(200).json(postView_1.renderPost(posts));
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Erro ao buscar post' + error });
        });
    },
    async deletarPost(req, res) {
        const id = req.params.id;
        const token = req.headers.token;
        const payload = jsonwebtoken_1.default.decode(token);
        post_1.default.findById(id).exec()
            .then(function (post) {
            if (post.usuario == payload.id) {
                post_1.default.findByIdAndDelete(id)
                    .then(function (posts) {
                    res.status(200).json(postView_1.renderPost(posts));
                })
                    .catch(function (error) {
                    res.status(404).json({ message: 'Erro ao deletar post' + error });
                });
            }
            else {
                res.status(404).json({ message: 'Não autorizado' });
            }
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Erro ao buscar post' + error });
        });
    },
    async obterComentarios(req, res) {
        const id = req.params.id;
        comment_1.default.find({ post: id })
            .then(function (comments) {
            res.status(200).json(postView_1.renderManyPost(comments));
        })
            .catch(function (error) {
            res.status(500).json({ message: 'Erro ao obter comentario' + error });
        });
    }
};
