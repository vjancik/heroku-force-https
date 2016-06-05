# Force HTTPS usage on Heroku

Just a simple Express Middleware function that will redirect an incoming request over HTTP to the HTTPS equivalent.

https://github.com/vjancik/heroku-force-https/blob/master/api.js#L7-L18

Additionally, you can use the [HSTS HTTP header](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) that all browsers should respect.
