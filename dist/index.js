"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const data = {
        name: 'inventory api',
        description: 'still in progress'
    };
    res.json(data);
});
app.use(express_1.default.json());
app.post('/add-item', (req, res) => {
    const newItem = req.body;
    res.json({ response: newItem });
});
app.listen(port, () => {
    console.log(`server running at port ${port}`);
});
