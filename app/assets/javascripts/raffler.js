window.Raffler = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Raffler.Routers.Entries();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  Raffler.initialize();
});
