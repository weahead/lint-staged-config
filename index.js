module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '*.{json,html}': ['prettier --write', 'git add'],
  '*.md': ['prettier --write', 'markdownlint', 'git add'],
};
