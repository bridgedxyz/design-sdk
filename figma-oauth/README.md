# `Figma-OAuth` _(`@design-sdk/Figma-OAuth`)_

> Figma OAuth, ready to use.

## Installation

```sh
yarn add @design-sdk/figma-oauth

# or with npm
npm i @design-sdk/figma-oauth
```

## Usage

```ts
import { urls, request } from "@design-sdk/figma-oauth";

const oauthTokenRequestUrl = urls.oauth_token_request_url({
  client_id,
  client_secret,
  redirect_uri,
  code,
});

const oauthAuthenticationResult = request.authenticationoauth_token_request_url(
  {
    client_id,
    client_secret,
    redirect_uri,
    code,
  }
);
```

**Configure figma app**

1. using `configure` method

```ts
import { configure } from "@design-sdk/figma-oauth";

configure({
  client_id: "your-figma-app-client-id",
  client_secret: "your-figma-app-client-secret",
});
```

2. using `.env`
   This package will automatically reference env vars if correcly set.

```cfg
FIGMA_APP_CLIENT_ID=your-figma-app-client-id
FIGMA_APP_CLIENT_SECRET=your-figma-app-client-secret
```

## Usage with `OAuthState` for serverside apps

```ts
import { OAuth, OAuthState } from "@design-sdk/figma-oauth";

const authProc = OAuth.new();
const url = authProc.authUrl;
// user opens up with this url. this url shall be passed to frontend

// -------------------------------------------------

// on serverside api
// after webapp callback,
const { state, code } = req.body; // e.g.
// the same authproc from above.
const authProc = OAuth.get(state);
authProc.authenticate({ code: code }).then((r) => {
  // do what you have to do with below data.
  r.user_id;
  r.access_token;
  r.refresh_token;
  r.expires_in;

  // this cleans the memory. don't forget to resolve used process to keep things clean.
  OAuth.resolve(state);
  // or..
  authProc.resolve();
});
```

## Refreshing Auth token

```ts
import { request } from "@design-sdk/figma-oauth";

const oauthAuthenticationResult = request.tokenrefresh({
  client_id,
  client_secret,
  refresh_token,
});
```
