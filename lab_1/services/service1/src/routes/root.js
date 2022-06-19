"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return "Congratulations. You reach service 1";
  });
};
