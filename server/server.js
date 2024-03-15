import app from "../app.js";

const port = 5678;

app.listen(port, () => {
  try {
    logger.info(`Servidor rodando na porta ${port}`)
  } catch (error) {
    logger.error(error)
  }
})