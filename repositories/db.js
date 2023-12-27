import Sequelize from "sequelize"

const sequelize = new Sequelize(
  "postgres://tsvgcrtp:ZKzun_IKpw-h6jnYGpcvd_9qfTdcmj1w@drona.db.elephantsql.com/tsvgcrtp",
  {
    dialect: "postegres",
    define: {
      timestamps: false
    }
  }
)

export default sequelize