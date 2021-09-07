"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderManyPost = exports.renderPost = void 0;
const userView_1 = require("../views/userView");
function renderPost(post) {
    return {
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        usuario: userView_1.renderUser(post.usuario)
    };
}
exports.renderPost = renderPost;
function renderManyPost(posts) {
    return posts.map(renderPost);
}
exports.renderManyPost = renderManyPost;
