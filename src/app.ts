import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.route';
const app: Application = express();
// const port = 3000

//Parser
app.use(express.json());
app.use(cors());

//Application
app.use('/api/v1/students', StudentRoute);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

export default app;
