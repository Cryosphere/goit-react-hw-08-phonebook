import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';

import style from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleNumber = e => {
    const { value } = e.target;
    setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const lowerCase = name.toLowerCase();
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === lowerCase
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, phone };
    dispatch(addContact(newContact));

    setName('');
    setPhone('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        className={style.input}
        id={nameId}
        onChange={handleName}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <label htmlFor={numberId}>Phone</label>
      <input
        className={style.input}
        id={numberId}
        type="tel"
        name="phone"
        value={phone}
        onChange={handleNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
