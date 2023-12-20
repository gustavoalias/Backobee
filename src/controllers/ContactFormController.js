const { ContactForm } = require("../db");

const findContactForm = async () => {
  const contact = await ContactForm.findAll();
  return contact;
};

const createContactForm = async ({ nombre, email, message, area = null }) => {
  const newContactForm = await ContactForm.create({
    nombre,
    email,
    message,
    area,
  });
  return newContactForm;
};

const findAllContactForms = async () => {};

module.exports = { findAllContactForms, createContactForm };
