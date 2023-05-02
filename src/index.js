import app from "./app.js";


app.listen(8080 || app.get("PORT"), () => {
    console.log('Listening on port http://localhost:8080/');
    }
);

