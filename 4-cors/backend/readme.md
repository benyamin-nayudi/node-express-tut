### cors
> the problem we are facing is that we are not allowed to make requests from the origins excepts the origin that we are coming from. in this case we are running our client (with live-server) on port 5500 and our backend port is 4000. so we are facing this error 
```css
Access to fetch at 'http://localhost:4000/homepage' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```
so this error is the `'Access-Control-Allow-Origin'` and is coming from this subject.

to solve this problem we install the cors npm and use it like this in our server:

```js
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))
```
> we place our origin in there (it may be different)

we can also define which methods are allowed to come to our server :
```js
app.use(cors({
    origin: 'http://127.0.0.1:5500 , 
    methods: ['GET' , 'POST']
}))
```
