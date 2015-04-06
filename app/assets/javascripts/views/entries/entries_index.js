Raffler.Views.EntriesIndex = Backbone.View.extend({

    template: JST['entries/index'],

    events: {
        'submit #new_entry': 'createEntry',
        'click #draw': 'drawWinner'
    },

    initialize: function () {
        this.collection.on('reset', this.render, this);
        this.collection.on('add', this.appendEntry, this);
    },

    render: function () {
        $(this.el).html(this.template({entries: this.collection}));
        this.collection.each(this.appendEntry, this);
        return this;
    },

    appendEntry: function(entry) {
        view = new Raffler.Views.Entry({model: entry});
        this.$('#entries').append(view.render().el);
    },

    createEntry: function(event) {
        event.preventDefault();
        attributes = {
            name: $('#new_entry_name').val()
        }
        this.collection.create(attributes, {
            wait: true,
            success: function() {
                $('#new_entry')[0].reset();
            },
            error: this.handleError
        });
    },

    drawWinner: function(event) {
        event.preventDefault();
        this.collection.drawWinner();
    },

    handleError: function(entry, response) {
        if (response.status == 422) {
            errors = $.parseJSON(response.responseText).errors;
            for (var attribute in errors) {
                for (var message in errors[attribute]) {
                    alert(attribute + ' ' + message);
                }
            }
        }
    }
});