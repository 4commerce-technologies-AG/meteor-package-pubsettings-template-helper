# 4commerce:pubsettings-template-helper

This [meteorjs](https://www.meteor.com) package allows you to get access to the objects and values you have stored at Meteor.settings.public within your templates.

So you do not need a number of template helpers by yourself anymore.

### Usecase

You want to show the information given by your settings at your client app.

````
$ export METEOR_SETTINGS="{ public: { about_info: 'Hello World App', version: '1.0' } }"
$ meteor
````

Alternative you may use --settings option

````
$ meteor --settings mysettings.json
````

### Before

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{about_info}}</span>
  <span>{{version}}</span>
</template>
````

*mytemplate.js*:

````
Template.mytemplate.helpers({
  about_info: function() {
    return Meteor.settings.public.about_info;
  },
  version: function() {
    return Meteor.settings.public.version;
  }
});
````

### With this package

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{pubSettings.about_info}}</span>
  <span>{{pubSettings.version}}</span>
</template>
````

That's it

<p></p>

### Installation

You can add this package to your meteor app like any other package from atmosphere

````
$ meteor add 4commerce:pubsettings-template-helper
````

### Usage

You may address your public settings directly within your templates by just using the relative path from starting at the Meteor.settings.public element.

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{pubSettings.about_info}}</span>
  <span>{{pubSettings.version}}</span>
</template>
````

You also may address the config values by a dotted string argument. So the next example shows equal options

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{pubSettings.about_info}}</span>
  <span>{{pubSettings 'about_info'}}</span>
</template>
````

### Extended usage

For a more sophiticated usage, you even may pass another expression to get the name of the config value to show.

The following example will return either the about_info or the version whatever the bool expression of _foo_ is:

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{pubSettings what_to_show}}</span>
</template>
````

````
Template.mytemplate.helpers({
  what_to_show: function() {
    return (foo) ? "version" : "about_info"
  }
});
````

### Additional Packages

If you are looking for an easy and highly flexible configuration management based on the NODE_ENV environment, you should have a look at the `4commerce:env-settings` pakage.

See: https://github.com/4commerce-technologies-AG/meteor-package-env-settings

### Issues & help

In case of support or error please report your issue request. The issue tracker is available at: https://github.com/4commerce-technologies-AG/meteor-package-pubsettings-template-helper/issues

### Author & Credits

Author: [Tom Freudenberg, 4commerce technologies AG](http://about.me/tom.freudenberg)

Copyright (c) 2015 [Tom Freudenberg](http://www.4commerce.de/), [4commerce technologies AG](http://www.4commerce.de/), released under the MIT license
