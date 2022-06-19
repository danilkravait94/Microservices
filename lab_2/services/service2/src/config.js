const config = {
  user: process.env["POSTGRES_USER"],
  host: process.env["POSTGRES_SERVICE_HOST"],
  database: process.env["POSTGRES_DB"],
  password: process.env["POSTGRES_PASSWORD"],
  port: process.env["POSTGRES_SERVICE_PORT"],
};

// const config = {
//   user: "cG9zdGdyZXM=",
//   database: "usersData",
//   password: "U3Ryb25nUGFzc3dvcmQxcTJ3M2U0cg==",
// };
console.log(config)
export { config };
