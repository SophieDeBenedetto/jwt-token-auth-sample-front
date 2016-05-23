import Ember from 'ember';

export function formatRegistrationErrors(error) {
  if (error[0].includes("_")) {
    return error[0].replace("_", " ").toLocaleLowerCase();
  } else {
    return error[0].toLocaleLowerCase()
  }
}

export default Ember.Helper.helper(formatRegistrationErrors);
