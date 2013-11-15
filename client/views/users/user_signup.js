Template.userSignup.events = {
    'click input[type=submit]': function(event){
      event.preventDefault();
      var username = $('#username').val();
      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();
      var email = $('#email').val();
      var password = $('#password').val();
      if(!firstname || !lastname || !email || !password){
        throwError('Please fill in all fields');
        return false;
      }

      Accounts.createUser({
        profile: {name: {
          firstname: firstname,
          lastname: lastname
        }        },
        email: email,  
        password: password,
      }, function(err){
        if(err){
          console.log(err);
        }else{
          Meteor.Router.to('/');
        }  
      });
  },

  'click #signin': function(){
      Meteor.Router.to('/signin');
  }
};