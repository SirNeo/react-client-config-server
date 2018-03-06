# Client for Spring Cloud Config Server

#### Install
```
npm install cloud-config-client --save
```

### Usage
```javascript
const client = require("cloud-config-client");
client.load({
    application: "invoices"
}).then((config) => {
    // Look for a key
    const value1 = config.get("this.is.a.key");

    // Using a prefix, this is equivalent to .get("this.is.another.key");
    const value2 = config.get("this.is", "another.key");
});
```

### Parameters

* options - Object, mandatory:
..* endpoint string, optional, default=http://localhost:8888: Config server URL.
..* rejectUnauthorized - boolean, optional, default = true: if false accepts self-signed certificates
..* application - string, deprecated, use name: Load configuration for this application.
..* name - string, mandatory: Load the configuration with this name.
..* profiles string[], optional, default=["default"]: Load profiles.
..* label - string, optional: Load environment.
..* auth - Object, optional: Basic Authentication for access config server (e.g.: { user: "username", pass: "password"}). endpoint accepts also basic auth (e.g. http://user:pass@localhost:8888).
..* user - string, mandatory
..* pass - string, mandatory
* callback - function(error: Error, config: Config), optional: node style callback. If missing, the method will return a promise.