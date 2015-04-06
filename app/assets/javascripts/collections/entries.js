Raffler.Collections.Entries = Backbone.Collection.extend({

  model: Raffler.Models.Entry,

  url: '/api/entries',

  // GET /entries
  // POST /entries
  // GET /entries/123
  // PUT /entries/123
  //DELETE /entries/234

  drawWinner: function() {
      winner = this.shuffle()[0];
      if (winner) {
          winner.win();
      }
  }


});
