//Importaciones
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//Configuracion de rutas
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");

//Middlewares terceros
app.use(morgan());
app.use(helmet());

//Middlewares nativos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.get("/", () => { });


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})