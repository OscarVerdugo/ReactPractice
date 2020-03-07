/* eslint-disable max-len */
/* eslint-disable strict */
// 'use strict';
const mysql = require('mysql2');
const datasource = require('../server/datasources.json');
const util = require('util');

function connectToDB(credentials = {host: datasource.db.host, port: datasource.db.port, user: datasource.db.user, password: datasource.db.password, database: datasource.db.database}) {
  const connection = mysql.createConnection({
    host: credentials.host,
    port: credentials.port,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database,
  });
  return {
    beginTransaction() {
      return util.promisify(connection.beginTransaction).call(connection);
    },
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args);
    },
    commit() {
      return util.promisify(connection.commit).call(connection);
    },
    rollback() {
      return util.promisify(connection.rollback).call(connection);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
};
const responseModel = function() {
  return {
    bError: false,
    cMessage: '',
  };
};

module.exports = ({connectToDB, responseModel});
