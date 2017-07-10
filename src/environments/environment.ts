// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backendUrl: 'http://localhost:8080/',
  firebase: {
    apiKey: "AIzaSyAn8mo_s8l6jqM5wtqff_Qvf0FTVlHHBC4",
    authDomain: "pimba-backend.firebaseapp.com",
    databaseURL: "https://pimba-backend.firebaseio.com",
    storageBucket: "pimba-backend.appspot.com",
    messagingSenderId: "957533617066"
  }
};
