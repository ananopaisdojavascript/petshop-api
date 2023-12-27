import pg from "pg"

const connect = async () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: "postgres://tsvgcrtp:ZKzun_IKpw-h6jnYGpcvd_9qfTdcmj1w@drona.db.elephantsql.com/tsvgcrtp"
  })
  global.connection = pool
  return pool.connect()
}

export default connect