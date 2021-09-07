"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderManyComment = exports.renderComment = void 0;
const userView_1 = require("../views/userView");
function renderComment(comment) {
    return {
        id: comment._id,
        texto: comment.texto,
        post: comment.post,
        usuario: userView_1.renderUser(comment.usuario)
    };
}
exports.renderComment = renderComment;
function renderManyComment(comments) {
    return comments.map(renderComment);
}
exports.renderManyComment = renderManyComment;
