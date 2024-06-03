"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const content_1 = __importDefault(require("./routing/content"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", "pages");
// middleware & static files
app.use(express_1.default.static("public")); // other way express cannot see css files
app.use(express_1.default.json());
app.use("/", content_1.default);
app.listen(port, () => {
    console.log(`[server]: server running on port ${port}`);
});
