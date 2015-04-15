define(
    [   
        'lib/backbone',
    ],function(Backbone) {
    var Book = Backbone.Model.extend({
        defaults : {
            coverImage: 'img/placeholder.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            keywords: 'None'
        }
    });

    return Book;
});