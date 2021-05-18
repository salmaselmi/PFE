const express = require('express')
const Gouvernorat = require('../models/gouvernorat')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to gouvernorats controller");
})
app.post('/add', async (req, res) => {
  try {
      let data = req.body 
      let gouvernorat = new Gouvernorat({

        Idgouv: data.Idgouv,
        NomGouvernoratFR:data.NomGouvernoratFR,
        NomGouvernoratAR:data.NomGouvernoratAR
       
      }) 
      let gouvernoratFormDb = await gouvernorat.save()
      res.status(200).send({ message: 'gouvernorat added succefuly' })

  } catch (error) {
      res.status(400).send({ message: 'gouvernorat not added', error })
  }

})
  /* app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let project = new Project({
            
            Id: data.Id,
            gouvernorat:data.gouvernorat,
            Commune:data.Commune,
            Nb_maisons:data.Nb_maisons,
            Nb_quartiers: data.Nb_quartiers,
            Nb_habitants: data.Nb_habitants,
            Voiries_qte: data.Voiries_qte 
             
        })

        let projectFormDb = await project.save()
        res.status(200).send({ message: 'project added succefuly' })

    } catch (error) {
        res.status(400).send({ message: ' add project failed ', error })
    }

}) */  

app.get('/all', async (req, res) => {
    try {
        let gouvernorats= await Gouvernorat.find() // traja3 tab d'objets
        res.status(200).send(gouvernorats)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let gouvernorat = await Gouvernorat.findOne({ _id: id })
        if (!gouvernorat) {
            res.status(404).send({ message: "gouvernorat not found" })
        }
        else
            res.status(200).send({ gouvernorat })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/Update-info/:id', async (req, res) => {
  try {
      let id = req.params.id;
      let data = req.body;
      let updatedGouvernorat = await Gouvernorat.findOneAndUpdate({ _id: id }, data)
      if (!updatedGouvernorat) {
          res.status(404).send({ message: 'gouvernorat not found' })
      } else { res.status(200).send({ message: 'gouvernorat updated' }) }

  } catch (error) { res.status(400).send({ message: 'API failed', error }) }
})

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedGouvernorat = await Gouvernorat.findOneAndDelete({ _id: id })
      if (!deletedGouvernorat) {
        res.status(404).send({ message: "gouvernorat not found" })
      }
      else {
        res.status(200).send({ message: "gouvernorat deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app