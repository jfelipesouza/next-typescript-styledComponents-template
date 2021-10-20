const withImages = require('next-images')
module.exports = withImages({
  esModule:true,
})


// Exportação default de quando se cria o projeto com yarn create next-app
module.exports = {
  reactStrictMode: true,
}
