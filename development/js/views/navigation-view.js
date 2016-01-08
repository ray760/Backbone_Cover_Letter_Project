/* BACKBONE MODEL VIEW */
var NavigationView = Backbone.View.extend({
  tagName: 'div',
  className: 'test',
  events: {
    'click li': 'grow'
    /*'mouseover li': 'grow',
    'mouseout li': 'shrink'*/
  }, 

  grow: function(e){
    e.stopPropagation();
    $('#sidebartoggler').prop('checked', false);
  },

  render: function(){console.log(this.el);
    var data = this.model.attributes;
    var navigation = RAYROB.templates.sidebar(data);
    this.$el.html(navigation);
    
    return this;
  },

  shrink: function(e){ 
    e.stopPropagation();
    $(e.target).animate({width: '50%', backgroundColor: '#0099cc', color: '#fff'}, 'fast', function(){});
  }
});