SELECT FIELDS
http://stackoverflow.com/questions/18347634/is-there-a-way-for-sails-js-to-select-fields-in-sql-queries
 User.find({username: req.body.username},  {select: ['username']})
                .exec(function(e, d) {
                    cb(e, d);
                })
