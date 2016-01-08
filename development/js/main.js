/**
* This is the main JavaScript file
**/
// (function(window){
  'use strict'
  
  //var mainContainer = document.getElementById('mainContainer');  
  var views = [];
  function createView(){
    var navigationView = new NavigationView({
      el: '#mainContainer',
      model: configModel
    });

    var introView = new IntroView({
      model: configModel
    });
    views.push(navigationView, introView);
    navigationView.render();console.log(views);
    $('#mainContainer').append(views[1].render());
  }

  var configModel = new ConfigModel();
  configModel.fetch({
    success: function(model, response, options){
     createView();
    },
    error: function(model, response, options){
      console.log('ERROR LOADING');
    },
    timeout: 5000
  });
// }(window));