clearSeenErrors = function(){
  Errors.update({seen:true}, {$set: {show:false}}, {multi:true});
}