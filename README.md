# JWT Auth Sample App

This project demonstrates one implementation of JWT authorization by customizing the [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth) add-on. To learn more, check out my blog post on this project. You can also check out the [deployed version of this project on heroku](ehh?iforgettheurlgoodjobsophie). 

#### Custom Authenticator

The custom authenticator is defined in `app/authenticators/jwt.js`. It extends ESA's base authenticator and hits an enpoint of a [Rails API](https://github.com/SophieDeBenedetto/jwt-token-auth-sample-api) that uses Knock to implement JWT authentication. 


#### Custom Authorizer

The custom authorizer is defined in `app/authorizers/custom.js`. It sets the Authentication header of outgoing requests to `Bearer <jwt token>`, the format expected by Knock on the backend. 