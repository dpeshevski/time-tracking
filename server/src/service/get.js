import Errors from '../utils/errors';

async function GetMethod(param, response, model, associatedModel, type) {
  switch (type) {
    case 'method':
      if (param) {
        const responseData: Object = await model.findOne({ where: { id: param } });
        return response.send(responseData).status(200);
      } else {
        const responseData: Array = await model.findAll();
        return response.send(responseData).status(200);
      }
      break;
    case 'associatedMethod':
      const results = await model.findOne(
        { where: { id: param },
          include: [{
            model: associatedModel,
          }]
        }
      );
      return response.send(results).status(200);
      break;
    case 'function':
      const resData: Array = await model.findAll();
      return resData;
      break;
  }
  return type;
};

export default GetMethod;