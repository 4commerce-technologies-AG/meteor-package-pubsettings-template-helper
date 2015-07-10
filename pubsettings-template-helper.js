// This helper allows to access values from Meteor.settings.public 
// within your templates
Template.registerHelper('pubSettings', function(elem) {
  // If no parameter were given, just return the public object
  // This allows object notation like pubSettings.application.name
  if (_.isUndefined(elem)) {
    return Meteor.settings.public
  } 
  else {
    // Take given parameter as string value in dotted notation
    // beginning relative from public hierachy
    var elem_ = String(elem).trim();
    // Split the dotted notation and try to localize the
    // public settings object
    return (elem_ === "") ? "" : elem_.split('.').reduce(function(obj, index) { return obj[index] }, Meteor.settings.public);
  }
});
