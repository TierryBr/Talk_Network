"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function default_1(uri) {
    mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose_1.default.connection.on('connection', () => {
        console.log('Conectado em ' + uri);
    });
    mongoose_1.default.connection.on('disconnected', () => {
        console.log('Desconectado de ' + uri);
    });
    mongoose_1.default.connection.on('error', () => {
        console.log('Erro na conexão ' + uri);
    });
    mongoose_1.default.set('debug', true);
}
exports.default = default_1;
