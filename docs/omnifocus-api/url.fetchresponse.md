# `URL.FetchResponse`

`URL.FetchResponse` represents the response from fetching a URL resource, providing additional information about the response such as the HTTP status code and headers along with the actual data for that response. This is a read-only object returned by performing a `URL.FetchRequest`; see that class for more details on actually performing the request.   
  


## Instance Properties

### `var bodyData` → `Data` or `null` _read-only_

Returns the raw HTTP body data from this response.   
  


### `var bodyString` → `String` or `null` _read-only_

This is a convenience wrapper which interprets the `bodyData` of this response as UTF-8 text. (Note: the current implementation assumes the text is encoded using UTF-8, but ideally it would honor the text encoding as reported by `textEncodingName`.)   
  


### `var headers` → Object _read-only_

Returns the HTTP header fields for this response.   
  


### `var mimeType` → `String` or `null` _read-only_

Returns the HTTP MIME type for this response (e.g. `text/plain`, `application/json`, etc.).   
  


### `var statusCode` → `Number` _read-only_

Returns the HTTP status code for this response (e.g. `200`, `404`, etc.).   
  


### `var textEncodingName` → `String` or `null` _read-only_

Returns the reported text encoding for this response. This name will be the actual string reported by the origin source, or `null` if no encoding was specified.   
  


### `var url` → `URL` or `null` _read-only_

Returns the URL for this response.   
  

