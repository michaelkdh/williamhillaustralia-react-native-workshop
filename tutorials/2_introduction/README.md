# 2. Introduction to React Native

React Native is a framework created by Facebook, based off the React.js JavaScript library.

The React paradigm brings forth the concept of *"learn once, write anywhere"*, as opposed to the popular *"write once, run anywhere"*. 

This is enabled with the separation of the React library from each renderer such as react-dom, react-native, react-vr.

## React Native vs Native Development

Native mobile development is still widely preferred in the mobile space. 

By using **Native iOS and Android** we have:

### Pros
- Truly native experience
- Full API access
- Third party libraries / large ecosystem
- Support

### Cons
- Develop for iOS (Objective-C/Swift) and Android (Java)
- Separate codebases for each platform
- Separate resources for each platform

However, with **React Native** we receive:

### Pros
- Native experience
- Single common skillset and shared resources (JavaScript)
- Cross platform library knowledge (React.js)
- Single repository
- React.js/JavaScript third party libraries / large ecosystem (excluding DOM libraries)
- Developer experience (hot reload, inspector, debugging)
- (Advanced) Over the air updates (compile vs build)

### Cons
- Not suitable for applications requiring low level API access

## Why React Native over alternatives?

With the rise of mobile applications in the recent years, there has been a plethora of mobile technologies competing in the space to streamline mobile development in order to bridge the skill requirements for both iOS and Android applications.

Popular frameworks such as:

- Cordova/PhoneGap (Apache)
    - HTML, CSS, JS (WORA)
    - Web wrapper
    - DOM elements
    
- Xamarin (Microsoft)
    - C# (WORA)
    - Compiled to native components during build time
    
- NativeScript (Telerik)
    - HTML, CSS, JS, Ionic/Angular.js (WORA)
    - Compiled to native on runtime
    - 100% native API access

Each of these technologies including React Native run the same risk of no longer being supported by its supporters.

[Continue >>](../3_first_app)
