#browserIf
An angular one-time bound ng-if-like directive that shows an element based on the browser. It is one-time bound to make it as swift and lightweight as possible.

## "Installation"

First, install the component via bower like so:

`bower install browser-if`

or

`npm install browser-if`

Include in your file and add it as a dependency to your angular application, like so:

```
angular.module('myApp', [ 'browserIf' ]
```

## Usage

BrowserIf comes with a nifty directive which you can pass a list of browsers to and if the list contains the current browser, the transcluded content will show. BrowserIf sets a high priority for evaluation (600, same as `ngIf`) which means that appending any other directives to the element will not cause them to be evaluated until `browser-if` evaluates to true.

```
  <div
    browser-if="chrome, opera"
  >
    Content!
  </div>
```

## Matching Service

The directive uses a matching service that detects your current browser and matches a browser name against it. You can use this service in lieu of the directive.

```
angular.module('myApp', ['browserIf'])
  .controller('MyController', MyController)
;

MyController.$inject = ['matchBrowser'];

function MyController(matchBrowser) {
  var conditionalBrowsers = ['chrome', 'opera'];

  if(matchBrowser.evaluate(conditionalBrowsers)) {
    //do this
  }
}
```

## Available browsers

Since matching a browser is hard work (it's not as simple as doing a `navigator.browserName`!), there are only a handful of browsers currently available. If you'd like to add more, open a PR. We'll add more organically with time:

- Chrome
- Opera
- IE
- Firefox

## Roadmap

Where we want to head in the future!

1. expand the number of supported browsers, namely: iOS browser, Android browser, and Windows Phone browser.
2. allow matching aliases: MSIE (instead of IE), FF (instead of Firefox), WP (windows phone), etc.
3. allow matching underlying technology: webkit, chakra, Gecko, etc.
4. allow version matching like so: `<div browser-if="chrome > 34, IE > 8"></div>`
