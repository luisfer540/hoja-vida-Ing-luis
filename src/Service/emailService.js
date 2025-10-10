import emailjs from '@emailjs/browser';

export const sendContactEmail = async (formRef) => {
  try {
    await emailjs.sendForm(
      'service_01j526m',       // Reemplaza con tu Service ID
      'template_2fkpkq8',       // Reemplaza con tu Template ID
      formRef.current,
      'uwAb_s7rg8LjI-YZL'        // Reemplaza con tu Public Key
    );
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
