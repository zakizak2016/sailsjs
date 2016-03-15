https://www.npmjs.com/package/sails-hook-autoreload
npm install sails-hook-autoreload --save-dev


// npm install sails-hook-autoreload --save-dev
// [your-sails-app]/config/autoreload.js 
module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "config/locales"
  ],
  ignored: [
    // Ignore all files with .ts extension 
    "**.ts"
  ]
};
