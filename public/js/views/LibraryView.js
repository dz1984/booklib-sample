define(
    [
        'jquery',
        'lib/backbone',
        'collections/Library',
        'views/BookView'
    ], function($, Backbone, Library, BookView) {
    var LibraryView = Backbone.View.extend({
        el: '#books',

        events: {
            'click #add': 'addBook'
        },

        initialize: function(initialBooks) {
            this.collection = new Library(initialBooks);
            this.collection.fetch({reset: true});
            this.render();

            this.listenTo(this.collection, 'add', this.renderBook);
            this.listenTo( this.collection, 'reset', this.render);
        },

        render: function() {
            this.collection.each(function(item){
                this.renderBook(item);
            }, this);
        },

        renderBook: function(item) {
            var book_view = new BookView({model:item});

            this.$el.append(book_view.render().el);

        },

        addBook: function(e) {
            e.preventDefault();

            var form_data = {
                coverImage: $('#coverImage')[0].files[0],
                title: $('#title').val(),
                author: $('#author').val(),
                releaseDate: $('#releaseDate').val(),
                keywords: $('#keywords').val()
            };

            this.collection.create(form_data, { wait: true });
        }
    });

    return LibraryView;
});