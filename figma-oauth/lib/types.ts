export interface FigmaOAuthUrlParam {
  client_id: string;

  redirect_uri: string;

  /**
   * Currently this value can only be file_read signifying
   * read-only access to the user's files.
   */
  scope?: "file_read";

  /**
   * This is a value that you should randomly generate and store.
   * When we call back to your callback endpoint,
   * you should check that the state value we pass back to you matches the state value that you initially used in your request.
   */
  state: string;

  /**
   * Currently we only support the authorization code flow for OAuth 2,
   * so the only valid value here is code.
   * We may support other values in the future.
   */
  response_type?: "code";
}

export interface FigmaOAuthTokenRequestParam {
  client_id: string;
  client_secret: string;
  grant_type?: string;
  redirect_uri: string;
  code: string;
}

export interface FigmaOAuthTokenRefreshParam {
  client_id: string;
  client_secret: string;
  refresh_token: string;
}

/**
 * [Authenticate users](https://www.figma.com/developers/api#auth-oauth2)
 */
export interface FigmaOAuthTokenResponse {
  user_id: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

/**
 * [Refreshing OAuth tokens](https://www.figma.com/developers/api#refresh-oauth2)
 */
export interface FigmaOAuthTokenRefreshResponse {
  access_token: string;
  expires_in: number;
}

export type OAuthStage =
  | "started"
  //
  | "authorize"
  | "token";
