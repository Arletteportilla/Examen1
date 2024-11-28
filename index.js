const express = require('express');
const app = express();

// Configuración
app.set('port', 4000);

// Rutas
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Servidor Express</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #89f7fe, #66a6ff);
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    text-align: center;
                    background: #fff;
                    padding: 20px 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                h1 {
                    color: #007bff;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1.2em;
                }
                a {
                    text-decoration: none;
                    color: #fff;
                    background: #007bff;
                    padding: 10px 15px;
                    border-radius: 5px;
                    transition: background 0.3s ease;
                }
                a:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>¡Hola, Express!</h1>
                <p>Bienvenido a una página más estilizada y moderna.</p>
                <a href="https://expressjs.com" target="_blank">Aprende más sobre Express</a>
            </div>
        </body>
        </html>
    `);
});

// Servidor escuchando
app.listen(app.get('port'), () => {
    console.log(`Aplicación corriendo en el puerto ${app.get('port')}`);
});
