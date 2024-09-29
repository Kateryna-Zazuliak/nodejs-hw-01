import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let index = 0; index < number; index += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
