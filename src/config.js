const config = {
  s3: {
    REGION: "us-west-1",
    BUCKET: "growl-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-west-1",
    URL: "https://2dz8wumued.execute-api.us-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-1",
    USER_POOL_ID: "us-west-1_tdAhhTtTh",
    APP_CLIENT_ID: "44jsb9q9u8a81cl5c7ms6vjs58",
    IDENTITY_POOL_ID: "us-west-1:17fcbb79-477f-447d-af35-1a2013fbce58",
  },
};

export default config;