import Bluebird from 'bluebird';

import getService from '../service/get';

async function IdsValidation() {
  await Bluebird.coroutine(
    function* IdsValidation(id: number, model, response) {
      const results: Array = yield getService.getMethod(model, 'function', response, id);
      const ids: Array = results.map(item => item.id);

      return ids.includes(id);
    }
  )
};

export default IdsValidation;
