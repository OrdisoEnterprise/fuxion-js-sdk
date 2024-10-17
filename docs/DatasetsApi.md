# FuxionServer.DatasetsApi

All URIs are relative to *https://www.embeddedsource.es/fuxion-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restCreateTransactionDatasetsPost**](DatasetsApi.md#restCreateTransactionDatasetsPost) | **POST** /datasets/ | Update datasets
[**restReadItemsDatasetsGet**](DatasetsApi.md#restReadItemsDatasetsGet) | **GET** /datasets/ | List datasets



## restCreateTransactionDatasetsPost

> String restCreateTransactionDatasetsPost(dataset)

Update datasets

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.DatasetsApi();
let dataset = "dataset_example"; // String | 
apiInstance.restCreateTransactionDatasetsPost(dataset, (error, data, response) => {
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
 **dataset** | **String**|  | 

### Return type

**String**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restReadItemsDatasetsGet

> String restReadItemsDatasetsGet()

List datasets

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.DatasetsApi();
apiInstance.restReadItemsDatasetsGet((error, data, response) => {
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

**String**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

