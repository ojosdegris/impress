'use strict';

var application = {};
global.application = application;
impress.mixinApplication(application);

impress.test({
  'impress.applicationDirs': [ [ [], function(value) { return Array.isArray(value) && value.length === 10; } ] ],
  'impress.applicationPlaces': [ [ [], function(value) { return Array.isArray(value) && value.length === 5; } ] ],
  'application.config': [ [ [], {} ] ],
  'application.tasks': [ [ [], {} ] ],
  'application.model': [ [ [], {} ] ],
  'application.users': [ [ [], {} ] ],
  'application.ips': [ [ [], {} ] ],
  'application.sessions': [ [ [], {} ] ],
  'application.workers': [ [ [], {} ] ],
  'application.longWorkers': [ [ [], {} ] ],
  'application.isInitialized': [ [ [], false ] ],

  // Test stub

});
