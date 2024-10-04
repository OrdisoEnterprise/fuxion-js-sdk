# FuxionServer.AccountsApi

All URIs are relative to *http://192.168.0.31:1524/fuxion-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restCreateItemApiAccountsPost**](AccountsApi.md#restCreateItemApiAccountsPost) | **POST** /api/accounts/ | Create a new account
[**restDeleteItemApiAccountsAccountIdDelete**](AccountsApi.md#restDeleteItemApiAccountsAccountIdDelete) | **DELETE** /api/accounts/{account_id} | Delete a account
[**restReadItemApiAccountsAccountIdGet**](AccountsApi.md#restReadItemApiAccountsAccountIdGet) | **GET** /api/accounts/{account_id} | Retrieve a account
[**restReadItemsApiAccountsGet**](AccountsApi.md#restReadItemsApiAccountsGet) | **GET** /api/accounts/ | List accounts
[**restUpdateItemApiAccountsAccountIdPut**](AccountsApi.md#restUpdateItemApiAccountsAccountIdPut) | **PUT** /api/accounts/{account_id} | Update a account



## restCreateItemApiAccountsPost

> AccountReturnSchema restCreateItemApiAccountsPost(accountCreateSchema)

Create a new account

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AccountsApi();
let accountCreateSchema = new FuxionServer.AccountCreateSchema(); // AccountCreateSchema | 
apiInstance.restCreateItemApiAccountsPost(accountCreateSchema, (error, data, response) => {
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
 **accountCreateSchema** | [**AccountCreateSchema**](AccountCreateSchema.md)|  | 

### Return type

[**AccountReturnSchema**](AccountReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restDeleteItemApiAccountsAccountIdDelete

> AccountReturnSchema restDeleteItemApiAccountsAccountIdDelete(accountId)

Delete a account

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AccountsApi();
let accountId = "accountId_example"; // String | 
apiInstance.restDeleteItemApiAccountsAccountIdDelete(accountId, (error, data, response) => {
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

### Return type

[**AccountReturnSchema**](AccountReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restReadItemApiAccountsAccountIdGet

> AccountReturnSchema restReadItemApiAccountsAccountIdGet(accountId)

Retrieve a account

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AccountsApi();
let accountId = "accountId_example"; // String | 
apiInstance.restReadItemApiAccountsAccountIdGet(accountId, (error, data, response) => {
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

### Return type

[**AccountReturnSchema**](AccountReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restReadItemsApiAccountsGet

> [AccountReturnSchema] restReadItemsApiAccountsGet(opts)

List accounts

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AccountsApi();
let opts = {
  'skip': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.restReadItemsApiAccountsGet(opts, (error, data, response) => {
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
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[AccountReturnSchema]**](AccountReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restUpdateItemApiAccountsAccountIdPut

> AccountReturnSchema restUpdateItemApiAccountsAccountIdPut(accountId, accountUpdateSchema)

Update a account

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AccountsApi();
let accountId = "accountId_example"; // String | 
let accountUpdateSchema = new FuxionServer.AccountUpdateSchema(); // AccountUpdateSchema | 
apiInstance.restUpdateItemApiAccountsAccountIdPut(accountId, accountUpdateSchema, (error, data, response) => {
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
 **accountUpdateSchema** | [**AccountUpdateSchema**](AccountUpdateSchema.md)|  | 

### Return type

[**AccountReturnSchema**](AccountReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

