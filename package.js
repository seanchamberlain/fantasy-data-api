Package.describe({
  name: 'seanchambo:fantasy-data-api',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Fantasy Data API written for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/seanchamberlain/fantasy-data-api.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fantasy-data-api.js', ['server']);
  api.export("FanData", ['server']);
  api.use('http', ['server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('khamoud:slack-api');
//   api.addFiles('slack-api-tests.js', ['server']);
// });