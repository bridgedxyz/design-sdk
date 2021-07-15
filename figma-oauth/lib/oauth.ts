import { OAuthStage } from "./types";
import { request } from "./request";
import { urls } from "./urls";
import {
  __cfg_get_client_id,
  __cfg_get_client_secret,
  __cfg_get_redirect_uri,
} from "./configure";

export class OAuth {
  static readonly _authprocs = new Map<string, OAuthState>();
  static new({
    state,
    redirect_uri,
  }: {
    state?: string;
    redirect_uri?: string;
  }): OAuthState {
    const oauth = new OAuthState({ state, redirect_uri });
    this._authprocs.set(oauth.state, oauth);
    return oauth;
  }

  static get(state: string): OAuthState {
    return this._authprocs.get(state);
  }

  static resolve(state: string) {
    this._authprocs.delete(state);
  }
}

export class OAuthState {
  private _stage: OAuthStage;
  readonly _app_id: string;
  readonly _app_secret: string;
  readonly redirect_uri: string;
  get stage(): OAuthStage {
    return this._stage;
  }
  readonly state: string;

  constructor({
    state = _stateid(),
    redirect_uri = __cfg_get_redirect_uri(),
  }: {
    state?: string;
    redirect_uri?: string;
  }) {
    this.state = state;

    this._app_id = __cfg_get_client_id();
    this._app_secret = __cfg_get_client_secret();
    if (!redirect_uri) {
      throw "redirect_uri must be provided by configuration. use `.env` or `configure()`.";
    }
    this.redirect_uri = redirect_uri;
  }

  get authUrl(): string {
    return urls.oauth_browser_url({
      client_id: this._app_id,
      redirect_uri: this.redirect_uri,
      state: this.state,
    });
  }

  async authenticate({ code }: { code: string }) {
    return await request.authentication({
      client_id: this._app_id,
      client_secret: this._app_secret,
      grant_type: "authorization_code",
      redirect_uri: this.redirect_uri,
      code: code,
    });
  }

  resolve() {
    try {
      OAuth.resolve(this.state);
    } catch (_) {
      throw new Error(
        "Unable to resolve OAuth state: This OAuthState was not initialized by `OAuth.new()`"
      );
    }
  }
}

function _stateid(): string {
  // random string gen - ref: https://stackoverflow.com/a/8084248/5463235
  return Math.random().toString(36).substring(7);
}
