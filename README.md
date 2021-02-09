# Demo Async JavaScript

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/demo-async-javascript)

## Event Loop Primer

tbd

## What is a Promise?

Definition: *A promise is an object that may produce a single value some time in the future*. A promise follows a well defined spec. For example it needs to implement a `then` method which returns a `resolved` and a `rejeced` funciton. A promise can either be in the state *resolved*, *rejected* or *pending*. It is setteled once it is not pending. Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect. The immutability of a settled promise is an important feature.

## Async/Await

tbd

## Sidenote: Async Loops

tbd
