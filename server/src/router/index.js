import { Router } from 'express';

import projectRouter from '../projects/index';
import timeRouter from '../times/indes';

const indexRouter = Router();

indexRouter.use(projectRouter.routes);
indexRouter.use(timeRouter.routes);

export default indexRouter;
