"use strict";

import { CRUD } from "./crud.js";
import { Connection } from "./connection.js";
import { config } from "./config.js";
import express from "express";
import bodyParser from "body-parser";

let connect = new Connection();
let crud = new CRUD(connect, config);

const port = "8080";
const host = "0.0.0.0";

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());

router.get("/", (request, response) => {
  response.send("Congratulations. You reach service 2");
});

router.post("/users/get", async (request, response) => {
  try {
    let result = await crud.select(request.body.id);
    response.send({ status: "OK", data: result });
  } catch (error) {
    console.error(error);
    response.send({ status: "error", error: error });
  }
});

router.post("/users/insert", async (request, response) => {
  try {
    await crud.insert(request.body.id, request.body.name);
    response.send({ status: "OK" });
  } catch (error) {
    console.error(error);
    response.send({ status: "error", error: error });
  }
});

router.post("/users/delete", async (request, response) => {
  try {
    await crud.delete(request.body.id);
    response.send({ status: "OK" });
  } catch (error) {
    console.error(error);
    response.send({ status: "error", error: error });
  }
});

router.post("/users/update", async (request, response) => {
  try {
    await crud.update(request.body.id, request.body.name);
    response.send({ status: "OK" });
  } catch (error) {
    console.error(error);
    response.send({ status: "error", error: error });
  }
});

app.listen(port, host);
app.use("/", router);
console.log(`Hello from http://${host}:${port}`);
