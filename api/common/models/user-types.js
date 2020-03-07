'use strict';

const Utils = require('../utils.js');

module.exports = function(Usertypes) {

    Usertypes.getUserTypes = async function(data, cb) {
        let response = responseModel();
        
        let db = await Utils.connectToDB();
        try {
          await db.beginTransaction();
          await db.query('SELECT * FROM user_types');
          await db.commit();
          
        } catch (err) {
          console.log(err);
          response.bError = true;
          response.cMessage = err;
          await db.rollback();
        }
    
        await db.close();
        if (response.deleted) {
          return response;
        }
        else {
          throw error;
        }
      }
};
