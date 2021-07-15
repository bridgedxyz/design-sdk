import { OAuth, configure } from "../lib";
import { config } from "dotenv";
config({
  path: ".env.defaults",
});

configure({
  client_id: process.env.FIGMA_APP_CLIENT_ID,
  client_secret: process.env.FIGMA_APP_CLIENT_SECRET,
  redirect_uri: "http://example.com/callback",
});

const oauthproc = OAuth.new({
  redirect_uri: "http://example.com/callback",
});

test("oauth.new auth url", () => {
  expect(oauthproc.authUrl).toBe(
    `https://www.figma.com/oauth?client_id=undefined&redirect_uri=http%3A%2F%2Fexample.com%2Fcallback&scope=file_read&state=${oauthproc.state}&response_type=code`
  );
});

// test("oauth.new token request", async () => {
//   expect(
//     await oauthproc.authenticate({
//       code: "code",
//     })
//   ).toMatchObject({});
// });
