const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password:'2315',
    host:'localhost',
    port:5432,
    database:'meet_and_go'
})

module.exports = pool