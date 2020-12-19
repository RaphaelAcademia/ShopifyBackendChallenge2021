module.exports = (app) => {
    const controller = require('./Controller.js');
   
    app.route('/image')
       .get(controller.getAllImages)    
       .post(controller.addImage);

    app.route('/image/:id')
       .get(controller.getImageForViewing)
       .put(controller.updateImage);
       
  };