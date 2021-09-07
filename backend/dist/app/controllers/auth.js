"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    login(req, res) {
        function logar(user) {
            if (!bcrypt_1.default.compareSync(req.body.senha, user.senha)) {
                falhar();
            }
            else {
                const token = jsonwebtoken_1.default.sign({ id: user.id }, 'secret');
                res.status(200).json({
                    message: 'Logado',
                    token: token,
                    userId: user.id,
                    email: user.email
                });
            }
        }
        function falhar() {
            res.status(401).send('Invalid login');
        }
        user_1.default.findOne({ email: req.body.email }).exec().then(logar, falhar).catch(falhar);
    },
    checar(req, res, next) {
        jsonwebtoken_1.default.verify(req.headers.token, 'secret', function (error, decoded) {
            if (error) {
                return res.status(401).json({
                    title: 'Not Authenticated',
                    error: error
                });
            }
            next();
        });
    }
};
