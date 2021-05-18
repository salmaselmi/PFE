
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./../models/user');
const jwt = require('jsonwebtoken')
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Welcome to userControllers ");
})

app.post('/signup', async (req, res) => {
    try {
        let data = req.body;
        data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
        let user = new User
            ({
                nom: data.nom,
                prenom: data.prenom,
                email: data.email,
                password: data.password ,
                phone: data.phone,
                fonctionnalite: data.fonctionnalite 
            })

        let userFormDb = await user.save()
        res.status(201).send({ message: 'user registred successfully' })
        //.then((userFromDb) => { res.status(201).send({ message: 'user registred successfully' }) })
        //.catch(() => { res.status(400).send({ message: 'sign up failed!', error }) })


    } catch (error) {
        res.status(400).send({ message: 'sign up failed', error })
    }
})

app.post('/signin', async (req, res) => {
    try{
    let data = req.body;
    let userFormDb = await User.findOne({ email: data.email })
    if (!userFormDb) {

        res.status(404).send({ message: " user not found" })

    } else {
        let compare = bcrypt.compareSync(data.password, userFormDb.password)
        if (!compare) {
            res.status(404).send({ message: " user not found" })
        } else {
            let token = jwt.sign({ id: userFormDb.id, role: userFormDb.role }, "SECRET")
            res.status(200).send({ token })
        }
    } 
   }catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

app.post('/password', async (req, res) => {
    try{
    let data = req.body;
    let userFormDb = await User.findOne({ email: data.email })
    if (!userFormDb) { 
        res.status(404).send({ message: " user not found" })
    } 
    
   } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

app.get('/all', async (req, res) => {

    try {
        let users = await User.find()
       
        res.status(200).send(users)

    } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

app.post('/add', async (req, res) => {
    try {
        let data = req.body; 
        let user = new User
        ({
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            password: data.password ,
            phone: data.phone,
            fonctionnalite: data.fonctionnalite

        })

        let userFormDb = await user.save()
        res.status(201).send({ message: 'user added successfully' })


    } catch (error) {
        res.status(400).send({ message: 'add user failed', error })
    }
})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findOne({ _id: id })
        if (!user) {
            res.status(404).send({ message: "user not found" })
        }
        else
            res.status(200).send({ user })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/Update-info/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let updatedUser = await User.findOneAndUpdate({ _id: id }, data)
        if (!updatedUser) {
            res.status(404).send({ message: 'user not found' })
        } else { res.status(200).send({ message: 'user updated' }) }

    } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

app.delete('/remove/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let deletedUser = await User.findOneAndDelete({ _id: id });
        if (!deletedUser) {
            res.status(404).send({ message: 'user not found' })
        } else { res.status(200).send({ message: 'user deleted' }) }
    } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

app.get('/currentUser/:id', async (req, res) => {
    try {
        let data = req.params.id;
        let user = await User.findOne({ _id: data })
        if (!user) {
            res.status(404).send({ message: "user not found" })
        }
        else {
            res.status(200).send(user)
        }
    }
    catch (error) {
        res.status(400).send({ message: 'API failed:', error })
    }
})
module.exports = app;


