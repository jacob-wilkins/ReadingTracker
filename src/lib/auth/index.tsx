import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import { getToken, removeToken, setToken } from './utils';

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
  register: (data: {
    email: string;
    password: string;
    name?: string;
  }) => Promise<void>;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token) => {
    setToken(token);
    set({ status: 'signIn', token });
  },
  signOut: () => {
    removeToken();
    set({ status: 'signOut', token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
  register: async ({ email, password, name }) => {
    // Replace this with your real registration API call
    // Example:
    // const response = await api.register({ email, password, name });
    // const token = response.token;
    // For demo, we'll just create a fake token:
    const token = {
      access: 'fake-access-token',
      refresh: 'fake-refresh-token',
      email,
      name,
    };
    setToken(token);
    set({ status: 'signIn', token });
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType) => _useAuth.getState().signIn(token);
export const hydrateAuth = () => _useAuth.getState().hydrate();
export const register = (data: {
  email: string;
  password: string;
  name?: string;
}) => _useAuth.getState().register(data);
