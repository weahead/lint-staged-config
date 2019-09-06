#!/bin/sh

if [ ! -f "${INIT_CWD}/lint-staged.config.js" ]; then
  echo "module.exports = require('@weahead/lint-staged-config');" > "${INIT_CWD}/lint-staged.config.js"
fi
