/***
 * Enum for route endpoints
 * @readonly
 * @enum {{path: string}}
 */

const ProjectAPI = {
  GET: { path: "/projects" },
  GET_BY: { path: "/projects/:id" },
  POST: { path: "/projects" },
  PUT: { path: "/projects/:id" },
  DELETE: { path: "/projects/:id" }
};


/***
 * Enum for route endpoints
 * @readonly
 * @enum {{path: string}}
 */

const TimeAPI = {
  GET: { path: '/projects/:projectId/times' },
  POST: { path: '/projects/:projectId/times' },
  DELETE: { path: '/projects/:projectId/times/:id' }
}

export default {
  projectAPI: Object.freeze(ProjectAPI),
  timeAPI: Object.freeze(TimeAPI),
};
