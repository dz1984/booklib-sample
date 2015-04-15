define(
    [   
        'jquery',
        'lib/backbone',
        'lib/underscore',
        'text!templates/bookTpl.html'
    ], function($, Backbone, _, bookTpl) {
    var BookView = Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template(bookTpl),
        events: {
            'click .delete': 'deleteBook'
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        deleteBook: function(e) {
            e.preventDefault();

            this.model.destroy();

            this.remove();
        }
    });
    return BookView;
});