import Ember from 'ember';

export function sessionObjectFormatter(sessionObject) {
  return JSON.stringify(sessionObject);
}

export default Ember.Helper.helper(sessionObjectFormatter);
