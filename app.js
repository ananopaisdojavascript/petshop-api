import express from "express"
import cors from "cors"
import winston from "winston"
// import ProprietarioRouter from "./routes/proprietario.router.js"
// import AnimalRouter from "./routes/animal.router.js"
// import ServicoRouter from "./routes/servico.router.js"

const app = express()

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} : ${message}`
})

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "petshop-api.log" })
  ],
  format: combine(
    label({ label: "petshop-api" }),
    timestamp(),
    myFormat
  )
})

app.use(express.json())
app.use(cors())

// app.use("/proprietario", ProprietarioRouter)
// app.use("/animal", AnimalRouter)
// app.use("/servico", ServicoRouter)

app.use((error, request, response, _next) => {
  logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  response.status(400).send({
    error: error.message,
  });
});

const port = 3000

app.listen(port, () => {
  try {
    logger.info(`Servidor rodando na porta ${port}`)
  } catch (error) {
    logger.error(error)
  }
})