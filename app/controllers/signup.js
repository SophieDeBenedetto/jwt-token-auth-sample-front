import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    save(user){
      user.save().then(()=>{
        debugger;
        var credentials = {identification: user.get('email'), password: user.get('password')},
          authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
          debugger;
          this.set('errorMessage', reason.error || reason);
          debugger;
        });
      }).catch((adapterError) => {
        debugger;
        let errors = adapterError.errors.map(function(er) {return er.detail.detail})
        this.set('errorMessage', errors)
      })
    }
  }
});
