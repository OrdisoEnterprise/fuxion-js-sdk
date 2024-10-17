# FuxionServer.ReportsApi

All URIs are relative to *https://www.embeddedsource.es/fuxion-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadFileApiReportsParsePost**](ReportsApi.md#uploadFileApiReportsParsePost) | **POST** /api/reports/parse | Parse a report file



## uploadFileApiReportsParsePost

> ReportReturnSchema uploadFileApiReportsParsePost(accountId, parserId, file)

Parse a report file

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.ReportsApi();
let accountId = "accountId_example"; // String | 
let parserId = "parserId_example"; // String | 
let file = "/path/to/file"; // File | 
apiInstance.uploadFileApiReportsParsePost(accountId, parserId, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **parserId** | **String**|  | 
 **file** | **File**|  | 

### Return type

[**ReportReturnSchema**](ReportReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

