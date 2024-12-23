# Middleware Order & Explanation

1. **𝐔𝐬𝐞𝐄𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐇𝐚𝐧𝐝𝐥𝐞𝐫** - Global exception handling. Catches unhandled exceptions during request processing and generates appropriate error responses.

2. **𝐔𝐬𝐞𝐇𝐬𝐭𝐬** - Enforces HTTPS by adding HTTP Strict Transport Security (HSTS) header to the response, instructing clients to always use HTTPS.

3. **𝐔𝐬𝐞𝐇𝐭𝐭𝐩𝐬𝐑𝐞𝐝𝐢𝐫𝐞𝐜𝐭𝐢𝐨𝐧** - Automatically redirects HTTP URLs to HTTPS, forcing secure connections.

4. **𝐔𝐬𝐞𝐒𝐭𝐚𝐭𝐢𝐜𝐅𝐢𝐥𝐞𝐬** - Serves static files from the wwwroot folder.

5. **𝐔𝐬𝐞𝐑𝐨𝐮𝐭𝐢𝐧𝐠** - Enables routing, examining incoming requests and mapping them to appropriate endpoint handlers.

6. **𝐔𝐬𝐞𝐂𝐨𝐫𝐬** - Enables cross-origin resource sharing (CORS), allowing cross-domain browser requests.

7. **𝐔𝐬𝐞𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧** - Authenticates users making requests.

8. **𝐔𝐬𝐞𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐚𝐭𝐢𝐨𝐧** - Checks if authenticated requests are authorized to access requested resources.

9. **𝐔𝐬𝐞𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐞𝐂𝐨𝐦𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧** - Compresses response body using Gzip/Deflate to reduce network transfer time.

10. **𝐔𝐬𝐞𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬** - Maps HTTP requests to endpoint handlers, configuring routing for controller actions.
