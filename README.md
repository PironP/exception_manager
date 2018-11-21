Exception Manager
========

An error manager, it send a json with details about the error, the computer and the actual page to a server

## Installation

Installation with [npm](http://npmjs.org). 

```bash
npm install --save exception_manager
```

## Usage

```js
let exception_manager 	= require('exception_manager');

exception_manager.handleException(error, 'Application Name', 'fileName.js', 10, window, 'serverAddress');

exports.handleException = (error, appName, fileName, lineNumber, window, server)

```

## API

### handleException(error, appName, fileName, lineNumber, window, server)

Send a json to a server
