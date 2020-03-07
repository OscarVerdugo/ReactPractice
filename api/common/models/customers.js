'use strict';
const Utils = require("../utils.js");
const mysql = require('mysql2');

module.exports = function(Customers) {

  Customers.getActives = async function(cb) {
    var res = Utils.responseModel();
    let db = await Utils.connectToDB();
    try {
      await db.beginTransaction();
     
     
      var customers = await db.query(
        "SELECT `id`,`name` FROM customers WHERE `status`= TRUE;");
      res.data = customers;
      if(!res.data.length || res.data.length < 0){
          res.bError = true;
          res.cMessage = "There is no customers in the data base"
      }
      await db.commit();
    } catch (err) {
      res.bError = true;
      res.cMessage = err;
      await db.rollback();
    } finally {
      await db.close();
    }
    cb(null, res);
  };

  Customers.remoteMethod("getActives", {
    http: {
      path: "/getActives",
      verb: "get"
    },
    returns: {
      arg: "response",
      type: "string"
    }
  });
};
