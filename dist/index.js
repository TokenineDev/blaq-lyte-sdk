
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./blaq-lyte-sdk.cjs.production.min.js')
} else {
  module.exports = require('./blaq-lyte-sdk.cjs.development.js')
}
