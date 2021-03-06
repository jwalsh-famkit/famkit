/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN ContactApiGenerated.js PLEASE EDIT ../ContactApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ContactApiGenerated {

  static contextUrl = properties.endpoint + "/contact";

  // CRUD METHODS

  /**
  * ContactService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteContact(id) {
    return axios.delete(ContactApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ContactService.get
  *   @description CRUD ACTION get
  *   @returns Contact
  *
  */
  static getOneContact(id) {
    return axios.get(ContactApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ContactService.list
  *   @description CRUD ACTION list
  *   @param String userId user contacts belong to
  *   @returns ARRAY OF Contact
  *
  */
  static getContactList() {
    return axios.get(ContactApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ContactApiGenerated;
