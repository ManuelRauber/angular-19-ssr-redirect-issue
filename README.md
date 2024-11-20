# redirectTo Issue

`redirectTo` seems to be broken with Angular v19 SSR.

## Setup

1. run `npm install` in the root of this repository.
2. run `npm start` in the root of this repository.

Five projects will be compiled and started, find them here:

* v18: `http://localhost:7000` (works as expected)
* v18ssr: `http://localhost:7001` (works as expected)
* v19: `http://localhost:7002` (works as expected)
* v19ssr: `http://localhost:7003` (does not work)
* v19ssrServerRouting: `http://localhost:7004` (does not work)

If you go to the working examples, you can see, that you get redirected to `/some/thing` with a nice greeting of the example component.
The two non-working examples end up in a `ERR_TOO_MANY_REDIRECTS` because they are redirecting to `/thing`, which ends in a redirect loop.

Please see the `app.routes.ts` for the routing setup. 
They are the same in each example. 
