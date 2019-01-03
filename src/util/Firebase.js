const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

  constructor() {

    this._config = {
        apiKey: "AIzaSyCngg36S776M7B0mMZpBlm_aqQI14LGClo",
        authDomain: "whatsapp-clone-ceaff.firebaseapp.com",
        databaseURL: "https://whatsapp-clone-ceaff.firebaseio.com",
        projectId: "whatsapp-clone-ceaff",
        storageBucket: "whatsapp-clone-ceaff.appspot.com",
        messagingSenderId: "996878560033"
    }

    this.init();

  }

  init(){

    if (!this._initialized) {

      firebase.initializeApp(this._config);

      firebase.firestore().settings({
        timestampsInSnapshots: true
      });

      this._initialized = true;

    }

  }

  static db(){

    return firebase.firestore();

  }

  static hd(){

    return firebase.storage();

  }

}