'use strict'
/* BACKBONE MODEL */
var ConfigModel = Backbone.Model.extend({
  url: 'api-json-data/site-data.json',
  sync: function(model, response, options){
    return Backbone.sync(model, response, options);
  },
  parse: function(response, options){
    return response.coverLetter[0];
  }
});