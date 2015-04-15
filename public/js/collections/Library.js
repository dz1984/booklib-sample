define(
    [   
        'lib/backbone',
        'models/Book'
    ], function(Backbone, Book) {
    var Library = Backbone.Collection.extend({
        model: Book,
        url: 'books'
    });
    
    return Library;

});