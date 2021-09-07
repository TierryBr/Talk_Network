"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../app/routes/user"));
const post_1 = __importDefault(require("../app/routes/post"));
const comment_1 = __importDefault(require("../app/routes/comment"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("../app/config/database"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(user_1.default);
app.use(post_1.default);
app.use(comment_1.default);
app.listen(3333);
database_1.default('mongodb://localhost/redesocial2');
