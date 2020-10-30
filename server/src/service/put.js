async function UpdateMethod(request, param, response, model) {
  await model.update(request, { where: { id: param } });
  return response.status(204).send('OK');
};

export default UpdateMethod;
