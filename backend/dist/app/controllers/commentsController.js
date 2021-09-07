"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("../models/comment"));
const commentView_1 = require("../views/commentView");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    async inserirComentario(req, res) {
        const token = req.headers.token;
        const payload = jsonwebtoken_1.default.decode(token);
        const comment = new comment_1.default({
            post: req.body.post,
            texto: req.body.texto,
            usuario: payload.id
        });
        comment_1.default.create(comment)
            .then(function (comments) {
            res.status(201).json(commentView_1.renderComment(comments));
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Error ao inserir comentario' + error });
        });
    },
    async listarComentarios(req, res) {
        comment_1.default.find().populate('usuario').exec()
            .then(function (comments) {
            res.status(200).json(commentView_1.renderManyComment(comments));
        })
            .catch(function (error) {
            res.status(500).json({ message: 'Erro ao listar comentarios' + error });
        });
    },
    async buscarComentarioId(req, res) {
        const id = req.params.id;
        comment_1.default.findById(id).exec()
            .then(function (comments) {
            res.status(200).json(commentView_1.renderComment(comments));
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Erro ao buscar comentario' + error });
        });
    },
    async deletarComentario(req, res) {
        const id = req.params.id;
        const token = req.headers.token;
        const payload = jsonwebtoken_1.default.decode(token);
        comment_1.default.findById(id).exec()
            .then(function (comment) {
            if (comment.usuario == payload.id) {
                comment_1.default.findByIdAndDelete(id)
                    .then(function (comments) {
                    res.status(200).json(commentView_1.renderComment(comments));
                })
                    .catch(function (error) {
                    res.status(404).json({ message: 'Erro ao deletar comentario' + error });
                });
            }
            else {
                res.status(404).json({ message: 'Não autorizado' });
            }
        })
            .catch(function (error) {
            res.status(400).json({ message: 'Erro ao buscar comentario' + error });
        });
    }
};
