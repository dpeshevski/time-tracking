import { Router } from 'express';

import endpoints from '../constants/endpoints';
import actions from './actions';

const router = Router();
const { list, get, create, update, del } = actions;

const {
  GET: { path: getPath }, 
  GET_BY: { path: getByPath }, 
  POST: { path: postPath }, 
  PUT: { path: putPath },
  DELETE: { path: deletePath }
} = endpoints.projectAPI;

router.get(getPath, list);
router.get(getByPath, get);
router.post(postPath, create);
router.put(putPath, update);
router.delete(deletePath, del);

export default router;
