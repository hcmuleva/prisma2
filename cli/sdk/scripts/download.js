const { download } = require('@prisma/fetch-engine')

// Until https://github.com/zeit/ncc/issues/390 is resolved we have to do this 🙈
const runtimePath = eval(`require('path').join(__dirname, '../')`)

download({
  binaries: {
    'query-engine': runtimePath,
    'introspection-engine': runtimePath,
  },
  showProgress: true,
})
