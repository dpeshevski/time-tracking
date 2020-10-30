import models from '../models/index';

import Get from '../service/get.js';
import Post from '../service/post.js';
import Put from '../service/put.js';
import Delete from '../service/delete.js';

require('dotenv').config();

const { projects, times } = models;

async function list(req, res, next) {
  await Get(null, res, projects, null, 'method');
  await next;
};

async function get(req, res, next) {
  try {
    const { id }: { id: string } = req.params;
    await Get(id, res, projects, times, 'associatedMethod');;
  } catch (e) {
    next(e);
  }

  await next;
}

async function create(req, res, next) {
  try {
    const {
      name,
      description
    }: {
      name: string,
      description: string
    } = req.body;

    await Post(req.body, res, projects);
  } catch (e) {
    next(e);
  }

  await next;
};

async function update(req, res, next) {
  try {
    const { id }: { id: string } = req.params;
    const {
      name,
      description
    }: {
      name: ?string,
      description: ?string
    } = Object.assign({}, req.body);

    await Put(req.body, id, res, projects);
  } catch (e) {
    next(e);
  }

  await next;
};

async function del(req, res, next) {
  try {
    const { id }: { id: string } = req.params;
    await Delete(id, res, projects);
  } catch (e) {
    next(e);
  }

  await next;
};

export default {
  list,
  get,
  create,
  update,
  del
};
