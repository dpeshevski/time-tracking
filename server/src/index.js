import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import handleErrors from './middlewares/handleErrors';

import ApiConfig from './constants/api';
import indexRouter from './router/index';

const app = express();
const PORT: string = process.env.PORT || ApiConfig.PORT;

app.use(logger('dev'));
app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRouter);

app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`API is running on ${PORT} port`);
});
