/* eslint-disable */

const server = require('./server');

const ds = server.dataSources.db;
const tables = [
  'MyUser',
  'AccessToken',
  'ACL',
  'Note',
  'Content',
  'DocumentCategory',
  'EventType',
  'Notice',
  'RequestType',
  'Survey',
  'UserType',
  'Classified',
  'Comment',
  'Document',
  'Event',
  'Galery',
  'Item',
  'Link',
  'Request',
  'Suggestion',
  'UserDocumentType',
  'WorkCertificate'
];

ds.autoupdate(tables, (err) => {
  const name = ds.adapter.name;

  console.log(`working in ${name}`);

  if (err) throw err;

  console.log(`${name} updated`);

  ds.disconnect();

  process.exit();
});
