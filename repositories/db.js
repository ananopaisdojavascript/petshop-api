import Sequelize from "sequelize"

const sequelize = new Sequelize(
  "postgres://nhuyniux:9SzYcqGt8HKQVWjjo9tmQTIjkjSItcH0@drona.db.elephantsql.com/nhuyniux",
  {
    dialect: "postegres",
    define: {
      timestamps: false
    }
  }
)

export default sequelize