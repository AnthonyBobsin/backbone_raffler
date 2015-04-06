Raffler.Models.Entry = Backbone.Model.extend({
    win: function() {
        this.set({winner: true});
        this.save();
        this.trigger('highlight');
    }
});
