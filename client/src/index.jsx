import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

ReactDOM.render(<App />, document.getElementById('root'));

// QUERY component cache-only doesn't work until first req finishes, look at currentUser on page load
// APP IS NOT RESPONSIVE - REDUCE BROWSER HEIGHT, ISSUES DONT SCROLL
// TODO: UPDATE FORMIK TO FIX SETFIELDVALUE TO EMPTY ARRAY ISSUE https://github.com/jaredpalmer/formik/pull/2144
// REFACTOR HTML TO USE SEMANTIC ELEMENTS
// MOVE SOME UTILS LIKE API TO SERVICES FOLDER
// RENAME ISSUE DETAILS "USERS" TO ASSIGNEESREPORTER
