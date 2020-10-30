async function CreateMethod(request, response, model) {
  await model.create(request);
  return response.status(201).send(`Successfully created.`);
};

export default CreateMethod;