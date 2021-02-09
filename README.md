# Demo: Async JavaScript

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/demo-async-javascript)

## Event Loop Primer

tbd

## What is a Promise?

Definition: *A promise is an object that may produce a single value some time in the future*. A promise follows a well defined spec. For example it needs to implement a `then` method which returns a `resolved` and a `rejected` funciton. A promise can either be in the state *resolved*, *rejected* or *pending*. It is setteled once it is not pending. Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect. The immutability of a settled promise is an important feature.

> *"I Promise a Result!"*

> "Producing code" is code that can take some time

> "Consuming code" is code that must wait for the result

> A Promise is a JavaScript object that links producing code and consuming code

```JavaScript
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
(borrowed from [w3schools](https://www.w3schools.com/js/js_promise.asp))

**Benefits**
- Improved errorhandling
- Way easier to read/write

**Drawbacks**

- Code still has to be written chained and nested

[Read](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Async/Await

**Benefits**

- Make asynchronous code look like it is syncronous
