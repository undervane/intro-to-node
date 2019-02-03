import express from 'express'
import bodyParser from 'body-parser';
import { PetController } from './pets/pets.controller';

const app = express();

app.use(bodyParser.json())
app.use('/pets', PetController)

const port = 3000

app.listen(port, () => console.info(`Server is ready on http://localhost:${port}`))