import { writeFile } from 'node:fs/promises';

const refreshedAt = new Date().toISOString();
const payload = {
  refreshedAt,
  mode: 'static-snapshot',
  note: 'The page is redeployed daily. New market intelligence requires a configured data source or research job.'
};

await writeFile('data-refresh.json', `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Recorded daily publication refresh at ${refreshedAt}`);