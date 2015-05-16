require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'lib/underscore': 'lib/underscore-min',
    'lib/backbone': 'lib/backbone-min',
    'text': 'lib/require/text'
  },
  shim: {
    "lib/underscore": {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

require(['jquery','views/LibraryView'],
  function($, LibraryView) {
    $(function(){
      new LibraryView();
    });
  }
);
