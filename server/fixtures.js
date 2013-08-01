if (Entries.find().count() === 0) {
  Entries.insert({
    date: '04/23/13',
    author: 'Matthew',
    entry: 'Grateful'
  });

  Entries.insert({
    date: '02/21/13',
    author: 'Luke',
    entry: 'thankful'
  });

  Entries.insert({
    date: '02/21/13',
    author: 'Mark',
    entry: 'Praise him'
  });
}