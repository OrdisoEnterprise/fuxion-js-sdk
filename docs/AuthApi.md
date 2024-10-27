# FuxionServer.AuthApi

All URIs are relative to *https://www.embeddedsource.es/fuxion-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authJwtLoginAuthJwtLoginPost**](AuthApi.md#authJwtLoginAuthJwtLoginPost) | **POST** /auth/jwt/login | Auth:Jwt.Login
[**authJwtLogoutAuthJwtLogoutPost**](AuthApi.md#authJwtLogoutAuthJwtLogoutPost) | **POST** /auth/jwt/logout | Auth:Jwt.Logout
[**oauthAssociateGoogleAuthorizeAuthAssociateGoogleAuthorizeGet**](AuthApi.md#oauthAssociateGoogleAuthorizeAuthAssociateGoogleAuthorizeGet) | **GET** /auth/associate/google/authorize | Oauth-Associate:Google.Authorize
[**oauthAssociateGoogleCallbackAuthAssociateGoogleCallbackGet**](AuthApi.md#oauthAssociateGoogleCallbackAuthAssociateGoogleCallbackGet) | **GET** /auth/associate/google/callback | Oauth-Associate:Google.Callback
[**oauthGoogleJwtAuthorizeAuthGoogleAuthorizeGet**](AuthApi.md#oauthGoogleJwtAuthorizeAuthGoogleAuthorizeGet) | **GET** /auth/google/authorize | Oauth:Google.Jwt.Authorize
[**oauthGoogleJwtCallbackAuthGoogleCallbackGet**](AuthApi.md#oauthGoogleJwtCallbackAuthGoogleCallbackGet) | **GET** /auth/google/callback | Oauth:Google.Jwt.Callback
[**oauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost**](AuthApi.md#oauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost) | **POST** /auth/google/token-login | Oauth:Google.Jwt.Token-Login
[**registerRegisterAuthRegisterPost**](AuthApi.md#registerRegisterAuthRegisterPost) | **POST** /auth/register | Register:Register
[**resetForgotPasswordAuthForgotPasswordPost**](AuthApi.md#resetForgotPasswordAuthForgotPasswordPost) | **POST** /auth/forgot-password | Reset:Forgot Password
[**resetResetPasswordAuthResetPasswordPost**](AuthApi.md#resetResetPasswordAuthResetPasswordPost) | **POST** /auth/reset-password | Reset:Reset Password
[**verifyRequestTokenAuthRequestVerifyTokenPost**](AuthApi.md#verifyRequestTokenAuthRequestVerifyTokenPost) | **POST** /auth/request-verify-token | Verify:Request-Token
[**verifyVerifyAuthVerifyPost**](AuthApi.md#verifyVerifyAuthVerifyPost) | **POST** /auth/verify | Verify:Verify



## authJwtLoginAuthJwtLoginPost

> BearerResponse authJwtLoginAuthJwtLoginPost(username, password, opts)

Auth:Jwt.Login

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let opts = {
  'grantType': "grantType_example", // String | 
  'scope': "''", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example" // String | 
};
apiInstance.authJwtLoginAuthJwtLoginPost(username, password, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **password** | **String**|  | 
 **grantType** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] [default to &#39;&#39;]
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 

### Return type

[**BearerResponse**](BearerResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## authJwtLogoutAuthJwtLogoutPost

> Object authJwtLogoutAuthJwtLogoutPost()

Auth:Jwt.Logout

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AuthApi();
apiInstance.authJwtLogoutAuthJwtLogoutPost((error, data, response) => {
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

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthAssociateGoogleAuthorizeAuthAssociateGoogleAuthorizeGet

> OAuth2AuthorizeResponse oauthAssociateGoogleAuthorizeAuthAssociateGoogleAuthorizeGet(opts)

Oauth-Associate:Google.Authorize

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AuthApi();
let opts = {
  'scopes': ["null"] // [String] | 
};
apiInstance.oauthAssociateGoogleAuthorizeAuthAssociateGoogleAuthorizeGet(opts, (error, data, response) => {
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
 **scopes** | [**[String]**](String.md)|  | [optional] 

### Return type

[**OAuth2AuthorizeResponse**](OAuth2AuthorizeResponse.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthAssociateGoogleCallbackAuthAssociateGoogleCallbackGet

> UserRead oauthAssociateGoogleCallbackAuthAssociateGoogleCallbackGet(opts)

Oauth-Associate:Google.Callback

The response varies based on the authentication backend used.

### Example

```javascript
import FuxionServer from 'fuxion_server';
let defaultClient = FuxionServer.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FuxionServer.AuthApi();
let opts = {
  'code': "code_example", // String | 
  'codeVerifier': "codeVerifier_example", // String | 
  'state': "state_example", // String | 
  'error': "error_example" // String | 
};
apiInstance.oauthAssociateGoogleCallbackAuthAssociateGoogleCallbackGet(opts, (error, data, response) => {
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
 **code** | **String**|  | [optional] 
 **codeVerifier** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **error** | **String**|  | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthGoogleJwtAuthorizeAuthGoogleAuthorizeGet

> OAuth2AuthorizeResponse oauthGoogleJwtAuthorizeAuthGoogleAuthorizeGet(opts)

Oauth:Google.Jwt.Authorize

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let opts = {
  'scopes': ["null"] // [String] | 
};
apiInstance.oauthGoogleJwtAuthorizeAuthGoogleAuthorizeGet(opts, (error, data, response) => {
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
 **scopes** | [**[String]**](String.md)|  | [optional] 

### Return type

[**OAuth2AuthorizeResponse**](OAuth2AuthorizeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthGoogleJwtCallbackAuthGoogleCallbackGet

> Object oauthGoogleJwtCallbackAuthGoogleCallbackGet(opts)

Oauth:Google.Jwt.Callback

The response varies based on the authentication backend used.

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let opts = {
  'code': "code_example", // String | 
  'codeVerifier': "codeVerifier_example", // String | 
  'state': "state_example", // String | 
  'error': "error_example" // String | 
};
apiInstance.oauthGoogleJwtCallbackAuthGoogleCallbackGet(opts, (error, data, response) => {
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
 **code** | **String**|  | [optional] 
 **codeVerifier** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **error** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost

> Object oauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost(bodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost)

Oauth:Google.Jwt.Token-Login

Login a user with an id_token shared from the frontend.

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let bodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost = new FuxionServer.BodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost(); // BodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost | 
apiInstance.oauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost(bodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost, (error, data, response) => {
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
 **bodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost** | [**BodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost**](BodyOauthGoogleJwtTokenLoginAuthGoogleTokenLoginPost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerRegisterAuthRegisterPost

> UserRead registerRegisterAuthRegisterPost(userCreate)

Register:Register

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let userCreate = new FuxionServer.UserCreate(); // UserCreate | 
apiInstance.registerRegisterAuthRegisterPost(userCreate, (error, data, response) => {
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
 **userCreate** | [**UserCreate**](UserCreate.md)|  | 

### Return type

[**UserRead**](UserRead.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetForgotPasswordAuthForgotPasswordPost

> Object resetForgotPasswordAuthForgotPasswordPost(bodyResetForgotPasswordAuthForgotPasswordPost)

Reset:Forgot Password

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let bodyResetForgotPasswordAuthForgotPasswordPost = new FuxionServer.BodyResetForgotPasswordAuthForgotPasswordPost(); // BodyResetForgotPasswordAuthForgotPasswordPost | 
apiInstance.resetForgotPasswordAuthForgotPasswordPost(bodyResetForgotPasswordAuthForgotPasswordPost, (error, data, response) => {
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
 **bodyResetForgotPasswordAuthForgotPasswordPost** | [**BodyResetForgotPasswordAuthForgotPasswordPost**](BodyResetForgotPasswordAuthForgotPasswordPost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetResetPasswordAuthResetPasswordPost

> Object resetResetPasswordAuthResetPasswordPost(bodyResetResetPasswordAuthResetPasswordPost)

Reset:Reset Password

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let bodyResetResetPasswordAuthResetPasswordPost = new FuxionServer.BodyResetResetPasswordAuthResetPasswordPost(); // BodyResetResetPasswordAuthResetPasswordPost | 
apiInstance.resetResetPasswordAuthResetPasswordPost(bodyResetResetPasswordAuthResetPasswordPost, (error, data, response) => {
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
 **bodyResetResetPasswordAuthResetPasswordPost** | [**BodyResetResetPasswordAuthResetPasswordPost**](BodyResetResetPasswordAuthResetPasswordPost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyRequestTokenAuthRequestVerifyTokenPost

> Object verifyRequestTokenAuthRequestVerifyTokenPost(bodyVerifyRequestTokenAuthRequestVerifyTokenPost)

Verify:Request-Token

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let bodyVerifyRequestTokenAuthRequestVerifyTokenPost = new FuxionServer.BodyVerifyRequestTokenAuthRequestVerifyTokenPost(); // BodyVerifyRequestTokenAuthRequestVerifyTokenPost | 
apiInstance.verifyRequestTokenAuthRequestVerifyTokenPost(bodyVerifyRequestTokenAuthRequestVerifyTokenPost, (error, data, response) => {
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
 **bodyVerifyRequestTokenAuthRequestVerifyTokenPost** | [**BodyVerifyRequestTokenAuthRequestVerifyTokenPost**](BodyVerifyRequestTokenAuthRequestVerifyTokenPost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyVerifyAuthVerifyPost

> UserRead verifyVerifyAuthVerifyPost(bodyVerifyVerifyAuthVerifyPost)

Verify:Verify

### Example

```javascript
import FuxionServer from 'fuxion_server';

let apiInstance = new FuxionServer.AuthApi();
let bodyVerifyVerifyAuthVerifyPost = new FuxionServer.BodyVerifyVerifyAuthVerifyPost(); // BodyVerifyVerifyAuthVerifyPost | 
apiInstance.verifyVerifyAuthVerifyPost(bodyVerifyVerifyAuthVerifyPost, (error, data, response) => {
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
 **bodyVerifyVerifyAuthVerifyPost** | [**BodyVerifyVerifyAuthVerifyPost**](BodyVerifyVerifyAuthVerifyPost.md)|  | 

### Return type

[**UserRead**](UserRead.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

