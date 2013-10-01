Testimonies = new Meteor.Collection('testimonies');

Testimonies.allow({
  remove: ownsDocument
});

Meteor.methods({
  testimony: function(testimonyAttributes) {
    var user = Meteor.user();
    var firstname = user.profile.name.firstname;
    var entry = Entries.findOne(testimonyAttributes.entryId);
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to add a testimony");
    if (!testimonyAttributes.body)
      throw new Meteor.Error(422, "You haven't entered anything yet, please write your testimony.");
    if (!testimonyAttributes.entryId)
      throw new Meteor.Error(422, 'You must comment on a post');
    testimony = _.extend(_.pick(testimonyAttributes, 'entryId', 'body'), {
      userId: user._id,
      author: firstname,
      submitted: new Date().getTime()
    });
   // update the post with the number of comments
	Entries.update(testimony.entryId, {$inc: {testimonyCount: 1}});
    return Testimonies.insert(testimony);
  }

});