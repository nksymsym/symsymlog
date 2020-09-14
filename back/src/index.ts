import express from 'express';

const app: express.Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router: express.Router = express.Router();
router.get('/api/test', (req: express.Request, res: express.Response) => {
  res.send(req.query);
});
app.use(router);

app.listen(3000);
