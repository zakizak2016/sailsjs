http://stackoverflow.com/questions/21291111/sails-js-accessing-local-js-environment-settings-in-controllers

What I didn't realize was that the module.exports.thing makes the thing object available through sails.config.thing. Good to know.



1) I created a new file at config/aws.js with the contents

module.exports.aws = {
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET
}


3) Now, to access in the controller:

var aws_config = sails.config.aws;

AWS.config.update({
  accessKeyId: aws_config.key,
  secretAccessKey: aws_config.secret
});
