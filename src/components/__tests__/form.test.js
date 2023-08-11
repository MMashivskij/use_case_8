import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import UserForm from '../form';
import store from '../../store/store.js';
import { addUserData } from '../../store/actions.js';

// Mocking the store.dispatch function
jest.mock('../../store/store.js', () => ({
    dispatch: jest.fn()
}));

describe('UserForm', () => {

  beforeEach(() => {
    render(<UserForm />);
  });

  test('renders form elements correctly', () => {
      expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('validates form fields on submit', async () => {
      await act(async () => {
          userEvent.click(screen.getByRole('button', { name: /submit/i }));
      });

      expect(await screen.findByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

    test('dispatches the form data when all fields are valid', async () => {
        await userEvent.type(screen.getByPlaceholderText('First Name'), 'John');
        await userEvent.type(screen.getByPlaceholderText('Last Name'), 'Doe');
        await userEvent.type(screen.getByPlaceholderText('Email'), 'john.doe@example.com');
        await userEvent.type(screen.getByPlaceholderText('Message'), 'Hello there!');

        userEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(store.dispatch).toHaveBeenCalledWith(addUserData({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            message: 'Hello there!'
        }));
    });

});
