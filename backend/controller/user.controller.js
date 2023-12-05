
const e = require('express');
const db = require('../db')
const bcrypt = require('bcrypt')
class UserController {
    async createUser(req, res) {
        const {name, email, password} = await req.body;
        const tryToFindPerson = await db.query('SELECT * FROM person where name = $1 and email=$2', [name, email])
        const allCoincidence = tryToFindPerson.rows;

        if (allCoincidence.length > 0) {
            for (const person of allCoincidence) {
                const passwordToCheck = person.password;
                if (await bcrypt.compare(password, passwordToCheck)) {
                    res.json('login')
                }
            }
        }
        else {
            const salt = await bcrypt.genSalt()
            const hashPassword = await bcrypt.hash(password, salt)
            const newPerson = await db.query('INSERT INTO person (name, email, password) values ($1, $2, $3) RETURNING *', [name, email, hashPassword])
            res.json('success')
        }
    }

}

module.exports = new UserController()

