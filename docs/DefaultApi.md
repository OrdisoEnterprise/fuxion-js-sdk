# FuxionServer.DefaultApi

All URIs are relative to *https://www.embeddedsource.es/fuxion-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**welcomeGet**](DefaultApi.md#welcomeGet) | **GET** / | Welcome
[**welcomeWelcomeHtmlGet**](DefaultApi.md#welcomeWelcomeHtmlGet) | **GET** /welcome.html | Welcome



## welcomeGet

> Object welcomeGet()

Welcome

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.DefaultApi();
apiInstance.welcomeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## welcomeWelcomeHtmlGet

> Object welcomeWelcomeHtmlGet()

Welcome

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.DefaultApi();
apiInstance.welcomeWelcomeHtmlGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

