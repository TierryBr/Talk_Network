"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderManyUser = exports.renderUser = void 0;
function renderUser(user) {
    return {
        id: user._id,
        nome: user.nome,
        email: user.email
    };
}
exports.renderUser = renderUser;
function renderManyUser(users) {
    return users.map(renderUser);
}
exports.renderManyUser = renderManyUser;
