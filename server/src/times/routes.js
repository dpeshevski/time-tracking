import { Router } from 'express';

import endpoints from '../constants/endpoints';
import actions from './actions';

const router = Router();
const { list, create, del } = actions;

const {
  GET: { path: getPath },
  POST: { path: postPath },
  DELETE: { path: deletePath }
} = endpoints.timeAPI;

router.get(getPath, list);
router.post(postPath, create);
router.delete(deletePath, del);

export default router;
