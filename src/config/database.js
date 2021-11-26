require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? "sqlnode_test": "sqlnode",
  define: {
      timestamps: true,
      underscored: true,
  }
}