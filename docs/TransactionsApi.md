# FuxionServer.TransactionsApi

All URIs are relative to *http://192.168.0.31:1524/fuxion-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restCreateTransactionApiTransactionsPost**](TransactionsApi.md#restCreateTransactionApiTransactionsPost) | **POST** /api/transactions/ | Create a new transaction
[**restReadItemsApiTransactionsGet**](TransactionsApi.md#restReadItemsApiTransactionsGet) | **GET** /api/transactions/ | List transactions
[**restReadNeedApiTransactionsTransactionIdGet**](TransactionsApi.md#restReadNeedApiTransactionsTransactionIdGet) | **GET** /api/transactions/{transaction_id} | Retrieve a transaction



## restCreateTransactionApiTransactionsPost

> TransactionReturnSchema restCreateTransactionApiTransactionsPost(transactionCreateSchema)

Create a new transaction

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.TransactionsApi();
let transactionCreateSchema = new FuxionServer.TransactionCreateSchema(); // TransactionCreateSchema | 
apiInstance.restCreateTransactionApiTransactionsPost(transactionCreateSchema, (error, data, response) => {
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
 **transactionCreateSchema** | [**TransactionCreateSchema**](TransactionCreateSchema.md)|  | 

### Return type

[**TransactionReturnSchema**](TransactionReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restReadItemsApiTransactionsGet

> [TransactionReturnSchema] restReadItemsApiTransactionsGet(opts)

List transactions

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.TransactionsApi();
let opts = {
  'skip': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.restReadItemsApiTransactionsGet(opts, (error, data, response) => {
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

[**[TransactionReturnSchema]**](TransactionReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restReadNeedApiTransactionsTransactionIdGet

> TransactionReturnSchema restReadNeedApiTransactionsTransactionIdGet(transactionId)

Retrieve a transaction

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.TransactionsApi();
let transactionId = "transactionId_example"; // String | 
apiInstance.restReadNeedApiTransactionsTransactionIdGet(transactionId, (error, data, response) => {
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
 **transactionId** | **String**|  | 

### Return type

[**TransactionReturnSchema**](TransactionReturnSchema.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
