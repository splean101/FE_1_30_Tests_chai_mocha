'use strict';

//--------------------1-----------------------------

//--------------------2-----------------------------

function validateEmail(email) {
  if (email === '') return false;
  if (typeof email !== 'string') return false;
  if (!email.includes('@') || email[0] === '@') return false;
  if (email.length <= 5) return false;
  //--------------------3-----------------------------
  if (email.indexOf('@') !== email.lastIndexOf('@')) return false;
  //--------------------4-----------------------------
  if (email.lastIndexOf('.') < email.indexOf('@')) return false;
  if (email[email.indexOf('@') - 1] === '.') return false;
  return true;
}

