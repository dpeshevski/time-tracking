import Bluebird from 'bluebird';

import Get from '../service/get';

async function IdsValidation() {
  await Bluebird.coroutine(
    function* IdsValidation(id: number, model, response) {
      const results: Array = yield Get(id, response, model, null, 'function');
      const ids: Array = results.map(item => item.id);

      return ids.includes(id);
    }
  )
};

export default IdsValidation;
