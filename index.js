module.exports = {
  '*.{js,jsx,json,ts,tsx}': ['eslint --fix', 'git add'],
  '*.json': ['prettier --write', 'git add'],
  '*.html': ['prettier --write', 'git add'],
  '*.md': ['prettier --write', 'markdownlint', 'git add'],
};
