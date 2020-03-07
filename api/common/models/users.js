'use strict';
module.exports = function(Users) {
  Users.test = function(cb) {
    var date = new Date();
    console.log('the date is ' + date.toDateString());
    var response = date.toDateString();
    cb(null, response);
  };
  Users.getById = function(id, cb) {
    Users.findById(id, function(er, instance) {
      var response = 'The name of user is ' + instance.name;
      cb(null, response);
    });
  };
  Users.remoteMethod('test', {
    http: {
      path: '/test',
      verb: 'get',
    },
    returns: {
      arg: 'message',
      type: 'string',
    },
  });
  Users.remoteMethod('getById', {
    http: {
      path: '/getById',
      verb: 'get',
    },
    accepts: {
      arg: 'id', type: 'number', required: true, http: {source: 'query'},
    },
    returns: {
      arg: 'message',
      type: 'string',
    },

  });
};
