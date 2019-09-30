const express = require("express");
const app = express();
const port = 3001;
const mc = require("./controllers/messages_controller");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const messageApi = "/api/messages";
app.post(messageApi, mc.create);
app.get(messageApi, mc.read);
app.put(`${messageApi}/:id`, mc.update);
app.delete(`${messageApi}/:id`, mc.delete);

app.listen(port, () => console.log(`server is up and running ${port}`));
