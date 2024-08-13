const Contact = require('../model/user');

const addContact = async (req, res) => {
  const { username, email, message } = req.body;

  const contact = new Contact({
    username,
    email,
    message,
  });

  try {
    await Contact.save();
    res.status(201).json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to save contact information' });
  }
};

module.exports = { addContact };
