export const facebook = {
  clientID: process.env.facebookId,
  clientSecret: process.env.facebookSecret,
  callbackURL: 'https://geo-chat-server.herokuapp.com/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'emails', 'languages'],
};

export const google = {
  clientID: process.env.googleId,
  clientSecret: process.env.googleSecret,
  callbackURL: 'https://geo-chat-server.herokuapp.com/auth/google/callback',
};

export const googleSettings = {
	scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
};

export const facebookSettings = {
	scope : ['email']
};

export const database = {
	server: "mysql5019.smarterasp.net",
	userName: process.env.dbUserName,
	password: process.env.dbPassword
};