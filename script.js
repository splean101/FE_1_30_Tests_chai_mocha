'use strict';

//--------------------1-----------------------------

//--------------------2-----------------------------

function validateEmail(email) {
  if (email === '') return false;
  if (typeof email !== 'string') return false;
  if (!email.includes('@') || email[0] === '@') return false;
  if(email.length <= 5) return false;
  return true;
}

//--------------------3-----------------------------

//--------------------4-----------------------------
