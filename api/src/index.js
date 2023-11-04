import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes"
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()   

dotenv.config()

const app = express()


app.use(
    cors({
        origin: ["http://localhost:5173","http://localhost:5174"],
        exposedHeaders: "Content-Range"
    })
)
app.get('/user', async (req, res) => {
    try {
      const user = await prisma.user.findMany();
      const totalUsers = user.length;
      const rangeStart = 0;
      const rangeEnd = totalUsers - 1;
  
      // Calcule o cabeçalho Content-Range com base nos dados obtidos
      const contentRange = `users ${rangeStart}-${rangeEnd}/${totalUsers}`;
  
      // Defina o cabeçalho Content-Range na resposta
      res.setHeader('Content-Range', contentRange);
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  })
app.get('/prof', async (req, res) => {
  try {
    const user = await prisma.prof.findMany();
    const totalUsers = user.length;
    const rangeStart = 0;
    const rangeEnd = totalUsers - 1;

    // Calcule o cabeçalho Content-Range com base nos dados obtidos
    const contentRange = `profs ${rangeStart}-${rangeEnd}/${totalUsers}`;

    // Defina o cabeçalho Content-Range na resposta
    res.setHeader('Content-Range', contentRange);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/grup', async (req, res) => {
  try {
    const user = await prisma.gruPesq.findMany();
    const totalUsers = user.length;
    const rangeStart = 0;
    const rangeEnd = totalUsers - 1;

    // Calcule o cabeçalho Content-Range com base nos dados obtidos
    const contentRange = `grups ${rangeStart}-${rangeEnd}/${totalUsers}`;

    // Defina o cabeçalho Content-Range na resposta
    res.setHeader('Content-Range', contentRange);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/dicente', async (req, res) => {
  try {
    const user = await prisma.dicente.findMany();
    const totalUsers = user.length;
    const rangeStart = 0;
    const rangeEnd = totalUsers - 1;

    // Calcule o cabeçalho Content-Range com base nos dados obtidos
    const contentRange = `dicentes ${rangeStart}-${rangeEnd}/${totalUsers}`;

    // Defina o cabeçalho Content-Range na resposta
    res.setHeader('Content-Range', contentRange);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.use(express.json())

routes(app)

app.listen(3002)
console.log("funfou")