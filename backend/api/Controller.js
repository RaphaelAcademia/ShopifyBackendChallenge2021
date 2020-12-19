'use strict';

const mongoose = require('mongoose');
const Image = mongoose.model('Images');
const fs = require('fs');

exports.addImage = async (request, response) => {
    try{
        var image = new Image(request.body);
        var result = await image.save();
        response.json(result);
    }
    catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
};

exports.getAllImages = async (request, response) => {
    try{
        var result = await Image.find();

        if (result.length){
            response.json(result);
        }
        else{
            response.sendStatus(200);
        }
    }
    catch (error){
        console.log(error);
        response.status(500).send(error);
    }
};

exports.updateImage = async (request, response) => {
    try{
        var imageToUpdate = await Image.findById(request.params.id).exec();
        imageToUpdate.set(request.body);
        var result =  await imageToUpdate.save();
        response.json(result);
    }
    catch (error){
        console.log(error);
        response.status(500).send(error);
    }
};

exports.getImageForViewing = async (request, response) => {
    try{
        var image = await Image.findById(request.params.id).exec();
        fs.readFile('./images/' + image.Filepath, (error, data) => {
            if (error){
                throw error;
            }
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.end(data);
        });
    }
    catch(error){
        console.log(error);
        response.status(500).send(error);
    }
};