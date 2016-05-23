import Ember from 'ember';

export function formatRegistrationErrors(errors) {
  return errors[0].join("\n")
}

export default Ember.Helper.helper(formatRegistrationErrors);
