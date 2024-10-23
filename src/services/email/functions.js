import emailjs from 'emailjs-com';
// TODO @dankbit add emailjs service id, template id and user id to .env
export const sendEmail = async (template_params) => {
  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      template_params,
      process.env.REACT_APP_EMAILJS_USER_ID
    );
    console.log('Email sent succesfully');
    // TODO @dankbit - Do whatever you want after email here
  } catch (error) {
    console.error('Error sending email', error);
  }
};
