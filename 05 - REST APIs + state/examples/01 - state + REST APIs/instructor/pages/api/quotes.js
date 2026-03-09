const BASE_URL = 'https://zenquotes.io/api'

export const getRandomQuote = () => {
    /* The traceback I get in by browser JS console is:
        Access to fetch at 'https://zenquotes.io/api/random' from origin 'http://localhost:3000'
        has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on 
        the requested resource.

      You can read a bit more about CORS if you're already unfamiliar, but it's basically a
      security feature in most modern *browsers* to prevent potentially malicious request interception.

      If you're on host A (like https://localhost:3000), and the clientside JS is trying to fetch from
      a *different* URL, (e.g. https://zenquotes.io/api), that's going to trigger CORS security.
      Extended explanation here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

      Like the error traceback says, CORS is an HTTP header, but it's something that's set *server-side*.
      In other words, we can't fix the problem on our end — even if we appropriately configured this fetch
      to send a header for 'Access-Control-Allow-Origin': '*' (or better, 'http://localhost:3000'),
      we still wouldn't be able to get it working.

      It's *likely* this is because we're going from HTTPS to HTTP, and the zenquotes API isn't set up
      to allow that, but CORS errors never provide much info about what happened server-side (that would be
      an obvious security risk), so our only option is to try another quotes API :)
    */

  fetch(`${BASE_URL}/random`)
    .then((response) => {
      console.log(response.json())
    })


}