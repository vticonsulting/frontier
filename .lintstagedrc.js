module.exports = {
  '*.+(js|ts|tsx)': ['eslint'],
  '*.+(js|json|ts|tsx)': ['prettier --write'],
  '**/*.+(js|json|css|html|md)': ['jest --findRelatedTests'],
}
