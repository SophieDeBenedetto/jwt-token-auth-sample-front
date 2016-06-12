import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  beforeModel: function(){
    let controller = this.controllerFor(this.routeName);
    controller.set('errorMessage', null)
  }

});