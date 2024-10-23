import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from './firebase';

export const loginWithEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    console.log('Succesfully logged in');
    // TODO @dankbit - Do whatever you want with the user
    return user;
  } catch (error) {
    console.error('Error logging in', error);
    return null;
  }
};

export const registerWithEmailPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    console.log('Succesfully registered');
    // TODO @dankbit - Do whatever you want with the user
    return user;
  } catch (error) {
    console.error('Error registering', error);
    return null;
  }
};

export const sendForgotPasswordEmail = async (email) => {
  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    console.log('Forgot password email sent');
    // TODO @dankbit - Do whatever you want here
  } catch (error) {
    console.error('Error sending forgot password email', error);
  }
};
