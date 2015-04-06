Raffler.Routers.Entries = Backbone.Router.extend({
    routes: {
        '': 'index',
        'entries/:id': 'show'
    },

    initialize: function() {
        this.collection = new Raffler.Collections.Entries();
        this.collection.reset($('#container').data('entries'));
    },

    index: function() {
        var view = new Raffler.Views.EntriesIndex({collection: this.collection});
        $('#container').html(view.render().el);
    },

    show: function(id) {
        alert("Entry " + id);
    }

});
