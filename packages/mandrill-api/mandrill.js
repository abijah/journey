var mandrill = Npm.require('mandrill-api');
var Future = Npm.require('fibers/future');

MandrillAPI = new mandrill.Mandrill('DtOA4d8kdG5JnNMMk9I5rQ');


/*
MailChimpAPI.prototype.listSubscribe = function(options) {
  var future = new Future();
  this.asyncAPI.listSubscribe(options, function(err, res) {
    if (err) {
      future.throw(err);
    } else {
      future.return(res);
    }
  });
  
  return future.wait();
}
*/