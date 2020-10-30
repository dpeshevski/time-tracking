async function DeleteMethod(id, response, model) {
  await model.destroy({ where: { id }});
  return response.status(202).send(`Removed item with ${id}`);
}

export default DeleteMethod;
