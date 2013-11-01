Template.userSignin.events = {
    'click input[type=submit]': function(event){
      event.preventDefault();
      var email = $('#email').val();
      var password = $('#password').val();
      Meteor.loginWithPassword(email, password, function(err){
        if(err){
          console.log(err);
          throwError(err.reason);
        }else{
          Meteor.Router.to('/');
        };

      });

  },

  'click #signup': function(){
      // Session.set('state', 'signup');
      Meteor.Router.to('/signup');
  },

};