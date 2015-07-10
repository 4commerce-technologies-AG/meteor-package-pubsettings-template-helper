Package.describe({
  name: '4commerce:pubsettings-template-helper',
  version: '1.0.0',
  summary: 'Enables access to Meteor.settings.public within your templates.',
  git: 'https://github.com/4commerce-technologies-AG/meteor-package-pubsettings-template-helper',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.use('templating', 'client');
  api.addFiles('pubsettings-template-helper.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('4commerce:pubsettings-template-helper');
});
