let localAppId = '';
try {
  localAppId = require('./appID').default;
  console.log('appID', localAppId);
} catch (error) {
  console.warn(error);
}

const config = {
  // Get your own App ID at https://dashboard.agora.io/
  appId: 'f3b9026ccc2047a4b33fded8beb2845d',
  // Please refer to https://docs.agora.io/en/Agora%20Platform/token
  token: '',
  channelId: 'testdcg',
  uid: 0,
  logFilePath: '',
};

export default config;
