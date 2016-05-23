import Ember from 'ember';

export function sessionObjectFormatter(sessionObject) {
  debugger;
  return JSON.stringify(sessionObject)
}

export default Ember.Helper.helper(sessionObjectFormatter);
