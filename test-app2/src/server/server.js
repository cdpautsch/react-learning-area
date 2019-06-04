const express = require('express');
const path = require('path');
// const https = require("https");
// const fs = require("fs");

const app = express();

const DIST_DIR = path.resolve('./dist');

// Root Path
app.use(express.static(DIST_DIR));

// Wildcard path for everything else (covers for React-Router)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, './index.html'));
});

// Standard server
const server = app.listen(3000, () => {
    const host = server.address().address;
    const { port } = server.address();
    // eslint-disable-next-line no-console
    console.log(`Test-App2 Server listening at http://${host}:${port}`);
});

// HTTPS SERVER (in progress)
// Generate SSL cert
// openssl req -nodes -new -x509 -keyout server.key -out server.cert

// const options = {
//     key: fs.readFileSync("./certs/server.key"),
//     cert: fs.readFileSync("./certs/server.cert")
// };

// const server = https
//     .createServer(options, app)
//     .listen(3000, "127.0.0.1", () => {
//         const host = server.address().address;
//         const { port } = server.address();
//    // eslint-disable-next-line no-console
//         console.log(`Test-App2 Server listening at https://${host}:${port}`);
//     });
