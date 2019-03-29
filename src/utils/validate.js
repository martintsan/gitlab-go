import * as _ from 'lodash'

let isEmpty = (obj) => {
  return _.isEmpty(obj);
}

let extend = (obj, exObj) => {
  return _.extend(obj, exObj);
}

export { isEmpty, extend }
