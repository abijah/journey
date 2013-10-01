/*if (Entries.find().count() === 0) {
  var now = new Date().getTime();

  var danielId = Meteor.users.insert({
    profile: {name: 'Daniel Den'}
  });
  var daniel = Meteor.users.findOne(danielId);
  var davidId = Meteor.users.insert({
    profile: {name: 'David Stone'}
  });
  var david = Meteor.users.findOne(davidId);

  var journalId = Entries.insert({
    userId: david._id, 
    author: david.profile.name, 
    submitted: now - 7 * 3600 * 1000,
    message: 'please pray for my health',
    commentsCount: 2
  });

  Comments.insert({
    entryId: journalId,
    userId: danielId,
    author: daniel.profile.name,
    submitted: now - 5 * 3600 *1000,
    body: 'yes, I have prayed for your health David'    
  });

  Comments.insert({
    entryId: journalId,
    userId: david._Id, 
    author: david.profile.name, 
    submitted: now - 3 * 3600 *1000,
    body: 'thank you Daniel'
  });

  Entries.insert({
    userId: david._id, 
    author: david.profile.name, 
    submitted: now - 10 * 3600 * 1000,
     message: 'need employment, please pray',
     commentsCount: 0
  });

  Entries.insert({
    userId: david._id, 
    author: david.profile.name, 
    submitted: now - 12 * 3600 * 1000,
     message: 'thankful',
     commentsCount: 0
  });

}
*/