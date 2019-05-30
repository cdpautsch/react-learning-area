const express = require("express");
// const https = require("https");
// const fs = require("fs");

const app = express();

// Root Path
app.use(express.static("./dist"));

// Wildcard path for everything else (covers for React-Router)
app.get("*", (req, res) => {
    res.sendFile("./dist/index.html");
});

// Standard server
const server = app.listen(3000, "127.0.0.1", () => {
    const host = server.address().address;
    const { port } = server.address();
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
//         console.log(`Test-App2 Server listening at https://${host}:${port}`);
//     });
