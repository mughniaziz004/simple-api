module.exports = {
  HOST: "ec2-54-158-247-97.compute-1.amazonaws.com",
  USER: "wyyrnnzjitakvx",
  PASSWORD: "12c4fac07ca36257811d914dc3d8fe2415a3b2a341a139aaf18d8ccf46495713523",
  DB: "d5jaq4q03m148v",
  PORT:"5432",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}