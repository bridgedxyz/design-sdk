/**
 * configure figma app in a global scope.
 * if you've already loaded env variables, without explicitely calling this method,
 * still the package will work with referenced variable **`FIGMA_APP_CLIENT_ID`** and **`FIGMA_APP_CLIENT_SECRET`**
 */
export function configure({
  client_id,
  client_secret,
  redirect_uri,
}: {
  client_id?: string;
  client_secret?: string;
  redirect_uri?: string;
}) {
  __client_id = client_id;
  __client_secret = client_secret;
  __redirect_uri = redirect_uri;
}

let __client_id: string = process.env.FIGMA_APP_CLIENT_ID;
let __client_secret: string = process.env.FIGMA_APP_CLIENT_SECRET;
let __redirect_uri: string = process.env.FIGMA_OAUTH_CALLBACL_URI;
export function __cfg_get_client_id(): string {
  return __client_id;
}
export function __cfg_get_client_secret(): string {
  return __client_secret;
}
export function __cfg_get_redirect_uri(): string {
  return __redirect_uri;
}
