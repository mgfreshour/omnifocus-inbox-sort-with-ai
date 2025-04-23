# `URL.FetchRequest`

`URL.FetchRequest` represents a request for a URL resource, providing additional controls for the request (such as the HTTP method, headers, and cache controls) and uses a Promise-based API for actually performing the request and receiving a detailed response (which includes the HTTP status code and headers along with the body of the result—see `URL.FetchResponse` for more detail).   
  


## Class Functions

### `function fromString(string: `String`)` → `URL.FetchRequest` or `null`

Parses the string as a `URL` if possible and returns a new instance, or `null` otherwise.   
  


## Constructors

### `new URL.FetchRequest()` → `URL.FetchRequest`

Creates a new instance.   
  


## Instance Functions

### `function fetch()` → `Promise` of `URL.FetchResponse`

Perform the request, returning a `Promise`. On success, the promise will resolve to a `URL.FetchResponse`.   
  


## Instance Properties

### `var allowsConstrainedNetworkAccess` → `Boolean`

Whether connections may use the network when the user has specified Low Data Mode.   
  


### `var allowsExpensiveNetworkAccess` → `Boolean`

Whether connections may use a network interface that the system considers expensive.   
  


### `var bodyData` → `Data` or `null`

The body of the request, typically used in an HTTP `POST` or `PUT` request. This API is suitable for uploading binary data, or for text which needs to be encoded in a form other than UTF-8\. If UTF-8 text is suitable, `bodyString` is likely to be a better choice.   
  


### `var bodyString` → `String` or `null`

The body of the request, typically used in an HTTP `POST` or `PUT` request. The provided string will be transmitted using the UTF-8 encoding.   
  


### `var cache` → `String` or `null`

The cache policy for the request: `default`, `no-store`, `reload`, `no-cache`, `force-cache`, or `only-if-cached`.   
  


### `var headers` → Object

Custom HTTP headers to be sent with this request.   
  


### `var httpShouldHandleCookies` → `Boolean`

Whether to automatically handle cookies.   
  


### `var httpShouldUsePipelining` → `Boolean`

Whether to transmit data before receiving a response from an earlier request.   
  


### `var method` → `String` or `null`

The HTTP request method of the request: `GET`, `POST`, `PUT`, `DELETE`, etc.   
  


### `var url` → `URL` or `null`

The URL for this fetch request. Much of the additional functionality provided by the fetch request API will only work with `http` and `https` URLs. (For example, the `method` and `cache` and `headers` don't have any effect in the context of a `file` or `omnifocus` URL.)   
  

