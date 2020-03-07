"use strict";
const Utils = require("../utils.js");
module.exports = function(Menuoptions) {
  Menuoptions.getMenuOptions = async function(userId, cb) {
    console.log(Utils);
    var res = Utils.responseModel();
    let db = await Utils.connectToDB();
    try {
      await db.beginTransaction();
      var userTypeId;
      var consUserType = await db.query(
        "SELECT (user_type_id) FROM users WHERE id = ?",
        [Number(userId)]
      );
      if (consUserType[0].user_type_id) {
        userTypeId = consUserType[0].user_type_id;
      } else {
        throw "User doesn't exist";
      }
      var lstMenuOptions = await db.query(
        "SELECT inside_text,label_text,image_route,route FROM menu_options WHERE general = TRUE OR user_type_id = ? AND status = TRUE",
        [userTypeId]
      );
      res.data = lstMenuOptions;
      await db.commit();
    } catch (err) {
      res.bError = true;
      res.cMessage = err;
      await db.rollback();
    } finally {
      await db.close();
    }
    cb(null, res);
    // if (response.deleted) {
    //   return response;
    // }
    // else {
    //   throw error;
    // }
  };

  Menuoptions.remoteMethod("getMenuOptions", {
    http: {
      path: "/getMenuOptions",
      verb: "get"
    },
    accepts: [
      {
        arg: "user_id",
        type: "number",
        required: true,
        http: { source: "query" }
      }
    ],
    returns: {
      arg: "response",
      type: "string"
    }
  });
};
