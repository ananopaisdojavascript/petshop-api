import Sequelize from "sequelize"

const sequelize = new Sequelize(
  "postgres://btsnmdlr:bB8hhkUa_dOGLXD3D7gwH-fg6gfxDsjs@drona.db.elephantsql.com/btsnmdlr",
  {
    dialect: "postegres",
    define: {
      timestamps: false
    }
  }
)

export default sequelize