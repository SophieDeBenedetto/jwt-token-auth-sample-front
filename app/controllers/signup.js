import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    save(user){
      let newUser = user;
      debugger;
      newUser.save().catch((reason) => {
        debugger;
        this.set('errorMessage', reason.errors[0].detail)
      }).then(()=>{
        debugger;
        var credentials = {identification: newUser.get('email'), password: newUser.get('password')},
          authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
          debugger;
          this.set('errorMessage', reason.error || reason);
          debugger;
        });
      })
    }
  }
});
