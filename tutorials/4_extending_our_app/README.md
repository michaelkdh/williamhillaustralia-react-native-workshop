# 4. Extending our first application

In our simple application, we'll be building the following:

1. Up next list
1. Display runners list

We'd also like to access live data from William Hill Australia, and it would be a good time to start using open source packages.

## Installing open source packages

As React Native uses modern JavaScript tooling, we can install open source packages that do not require the DOM.

[axios](https://www.npmjs.com/package/axios), [moment](https://www.npmjs.com/package/moment) and [lodash](https://www.npmjs.com/package/lodash) are packages we frequently use which include a large amount of useful utility functions.

Let's go ahead and install these packages by running in our terminals:

```
# if you haven't got yarn installed
npm install --save axios moment lodash

# if you have yarn installed
yarn add axios moment lodash
```

This will include the packages as a dependency to our project (package.json).

[Continue >>](../5_upNext)
