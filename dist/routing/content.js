"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (_, res) => {
    try {
        res.status(200).render("index");
    }
    catch (error) {
        res.status(500).render("SOME ERROR OCCURED, SORRY!");
    }
});
router.get("/home", (_, res) => {
    try {
        res.redirect("/");
    }
    catch (error) {
        res.status(500).render("SOME ERROR OCCURED, SORRY!");
    }
});
router.use((_, res) => {
    res.status(404).render("404");
});
exports.default = router;
