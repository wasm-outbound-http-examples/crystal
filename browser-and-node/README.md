# Use lbguilherme/crystal-js lib to send HTTP(s) requests from inside WASM

This example features [lbguilherme/crystal-js](https://github.com/lbguilherme/crystal-js) library to perform JS interop.

## Instructions for this devcontainer

### Preparation

1. Open this repo in devcontainer, e.g. using Github Codespaces.
   Type or copy/paste following commands to devcontainer's terminal.

2. `cd` into this example's folder:

```sh
cd browser-and-node
```

3. Install project dependencies by using `shards`:

```sh
shards install
```

4. If you plan to test `release` browser builds or test against Node.js, install Node:

```sh
curl -sL https://deb.nodesource.com/setup_18.x | bash && apt install -y nodejs
```

### Building

* Compile the example:

```sh
lib/js/scripts/build.sh src/httpget.cr
``` 

* Optionally, if you need non-debug build, compile with `--release` parameter 
(`.wasm module` will be about 10 times smaller):

```sh
apt install binaryen uglifyjs

lib/js/scripts/build.sh --release src/httpget.cr
``` 

Compiler will produce both `httpget.wasm` and `httpget.js`.

### Test with browser

1. Run simple HTTP server to temporarily publish project to Web:

```sh
python3 -m http.server
```

Codespace will show you "Open in Browser" button. Just click that button or
obtain web address from "Forwarded Ports" tab.

2. As `index.html` loaded into browser, refer to browser developer console
   to see the results.

### Test with Node.js

**Warning** This method is a dirty hack around `XMLHttpRequest` in sync mode on Node.js side, 
do NOT use it in production.
It is added only to demonstrate the possibility to run the example in Node.js.

1. Apply the patch to create `httpget-node.js`:

```sh
patch -o httpget-node.js httpget.js patch-for-nodejs.patch
```

2. Install XHR "polyfill" for Node.js:

```sh
npm install xmlhttprequest2
```

3. Perform the test:

```sh
node httpget-node.js
```

### Finish

Perform your own experiments if desired.

