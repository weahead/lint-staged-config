module.exports = {
  '*.{js,jsx,json,ts,tsx,html}': ['prettier --write', 'git add'],
  '*.md': ['prettier --write', 'markdownlint', 'git add'],
};
