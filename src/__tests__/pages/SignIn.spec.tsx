import React, { Children } from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SigIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});