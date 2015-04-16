define(
    [   
        'lib/backbone',
    ],function(Backbone) {
    var Book = Backbone.Model.extend({
        urlRoot: '/books',
        defaults : {
            coverImage: 'img/placeholder.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: '1900-01-01',
            keywords: 'None'
        },
        sync: function(method, model, options) {
            var opts = {
                url: this.url(),
                success: function(data) {
                    if (options.success) 
                        options.success(data);
                }
            }
            console.log('entry sync method of the Book model');
            console.log('Method', method);

            switch(method) {
                case 'create':
                    opts.type = 'POST';
                    opts.data = new FormData();
                    opts.data.append('coverImage', model.get('coverImage'));
                    opts.data.append('title', model.get('title'));
                    opts.data.append('author', model.get('author'));
                    opts.data.append('releaseDate', model.get('releaseDate'));
                    opts.data.append('keywords', model.get('keywords'));
                    opts.processData = false;
                    opts.contentType = false;
                    break;
                default: 
                    opts.type = 'GET';
            }
            return $.ajax(opts);
        }
    });

    return Book;
});