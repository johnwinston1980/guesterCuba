// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyABUaFp351cla3m5msYCFDOqb8LaJfUAi8',
    authDomain: 'guestercuba.firebaseapp.com',
    databaseURL: 'https://guestercuba.firebaseio.com',
    projectId: 'guestercuba',
    storageBucket: 'guestercuba.appspot.com',
    messagingSenderId: '794332023417'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
