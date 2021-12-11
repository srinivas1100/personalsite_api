const express = require('express');
const Project = require('../models/project');

const router = express.Router();

router.post('/post', async(req, res) => {
    const project = new Project(req.body);
    try {
        const saveProject = await project.save();
        res.status(200).send(saveProject);
    } catch (e) {
        res.status(400).send(`somthing wrong ${e}`);
    }
})

router.get('/post', async(req, res) => {
    try {
        const project = await Project.find();
        res.status(200).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put('/post/:id', async(req, res) => {

    try {
        const project = await Project.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).send(project)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete('/post/:id', async(req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).send(`project deleted`)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router;