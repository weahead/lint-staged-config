const fs = require('fs');
const path = require('path');

const lintStagedConfigPath = path.join(
  process.env.INIT_CWD,
  'lint-staged.config.js'
);

if (!fs.existsSync(lintStagedConfigPath)) {
  fs.writeFileSync(
    lintStagedConfigPath,
    "module.exports = require('@weahead/lint-staged-config');"
  );
}
