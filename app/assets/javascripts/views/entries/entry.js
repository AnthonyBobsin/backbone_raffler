Raffler.Views.Entry = Backbone.View.extend({

    template: JST['entries/entry'],

    events: {
        'click .delete_entry': 'deleteEntry'
    },

    tagName: 'li',

    initialize: function() {
        this.model.on('change', this.render, this);
        this.model.on('highlight', this.highlightWinner, this);
    },

    highlightWinner: function() {
        $('.winner').css("color", "black");
        this.$('.winner').css("color", "red");
    },

    render: function() {
        $(this.el).html(this.template({entry: this.model}));
        return this;
    },

    deleteEntry: function() {
        this.model.stopListening();
        this.model.destroy();
        this.remove();
    }

});
