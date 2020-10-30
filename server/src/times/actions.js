import Get from '../service/get';
import Post from '../service/post';
import Delete from '../service/delete';

import models from '../models/index';

const { times, projects } = models;

async function list(req, res, next) {
  await Get(null, res, times, projects, 'associatedMethod');;
  await next;
}


async function create(req, res, next) {
  try {
    const {
      description,
      amount
    }: {
      description: string,
      amount: number
    } = req.body;

    const { projectId }: { projectId: string } = req.params;

    await Post(Object.assign({}, req.body, { projectId }), res, times);
  } catch (e) {
    next(e);
  }

  await next;
}

async function del(req, res, next) {
  try {
    const { id }: { id: string } = req.params;
    await Delete(id, res, times);
  } catch (e) {
    next(e);
  }

  await next;
}

export default {
  list,
  create,
  del
};
