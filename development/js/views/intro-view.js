/* BACKBONE MODEL VIEW */
var IntroView = Backbone.View.extend({
  tagName: 'section',
  className: 'row',
  id: 'intro',
  events: {
    /*'mouseover li': 'grow',
    'mouseout li': 'shrink'*/
  }, 

  grow: function(e){
    e.stopPropagation();
    $(e.target).filter(':not(:animated)').animate({width: '100%', backgroundColor: '#f1f4f9', color: '#414a51'}, 750, function(){});
  },

  render: function(){
    var data = this.model.attributes;
    var intro = RAYROB.templates.intro(data);
    this.$el.html(intro);
    //this.$el.append(intro);
    
    return this.el;
  },

  shrink: function(e){ 
    e.stopPropagation();
    $(e.target).animate({width: '50%', backgroundColor: '#0099cc', color: '#fff'}, 'fast', function(){});
  }
});