# `Credentials`

The `Credentials` class allows storage of private username and password pairs, `URL.Bookmark` instances, and possibly other sensitive information in the future. Instances are tied to a single plug-in and single application, and may only be created in plug-ins when they are being loaded.

For example, when a `PlugIn.Action` is being created, you could use the following pattern:
    
    
     (() => {
         let credentials = new Credentials();
    
         var action = new PlugIn.Action(function(selection) {
             // ... use the captured credentials ...
         });
    
         return action;
     })();
    

Attempts to create `Credential` instances elsewhere will throw an error. Care should be taken to store instances in anonymous closures as above, and not pass them to or store them on other objects.

Credentials are keyed off a service identifier, which your plug-in can define however it likes.   
  


## Constructors

### `new Credentials()` → `Credentials`

Creates a new `Credentials` instance for the currently loading plug-in. Throws an error if called outside of plug-in loading.   
  


## Instance Functions

### `function read(service: `String`)` → Object or `null`

Looks up the current credentials for a given service identifier. If credentials have previously been stored, an object will be returned containing `"user"` an `"password"` properties.   
  


### `function write(service: `String`, username: `String`, password: `String`)`

Creates or updates an existing credential, storing the username and password for this service securely in the Keychain.   
  


### `function remove(service: `String`)`

Deletes any currently stored credentials for the specified service, either a username and password or a URL bookmark.   
  


### `function readBookmark(service: `String`)` → `URL.Bookmark` or `null`

Reads the entry for the given service identifier and attempts to return it as a `URL.Bookmark`, or `null` if no such entry exists.   
  


### `function writeBookmark(service: `String`, bookmark: `URL.Bookmark`)`

Stores the `URL.Bookmark` persistently for later access.   
  

