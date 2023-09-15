const Person = require("./model")

/**
 * This controller returns all Persons
 * 
 * @param {*} _ 
 * @param {Response} res 
 * @returns 
 */
const index = async (_, res) => {
    try {
        let persons = await Person.find({}, { _id: 0 })

        return res.status(200).json(persons)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

/**
 * This controller returns a single Person
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const show = async (req, res) => {
    try {
        const { user_id } = req.params
        const person = await Person.findById(user_id, { _id: 0 })
        if (!person) throw new Error()
        return res.status(200).json(person)
    } catch (e) {
        res.status(404).json({ message: 'User not found' })
    }
}

/**
 * This controller stores a Person
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const store = async (req, res) => {
    try {
        const body = req.body
        const person = new Person(body)
        person.save()
        return res.status(201).json({ id: person._id, name: person.name })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

/**
 * This controller edits a Person
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const update = async (req, res) => {
    try {
        const { user_id } = req.params
        const body = req.body
        if (!body.name) return res.status(204)

        const person = await Person.findById(user_id)
        person.name = body.name
        person.save()
        return res.status(200).json({ id: person._id, name: person.name })
    } catch (e) {
        res.status(404).json({ message: 'User not found' })
    }
}

/**
 * This controller destroys a Person
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const destroy = async (req, res) => {
    try {
        const { user_id } = req.params
        const person = await Person.findById(user_id)
        person.deleteOne()
        return res.status(204).json('')
    } catch (e) {
        res.status(404).json({ message: 'User not found' })
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}