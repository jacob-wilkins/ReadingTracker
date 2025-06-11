import { getItem, removeItem, setItem } from '@/lib/storage';

const TOKEN = 'auth_token';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export function removeToken() {
  removeItem(TOKEN);
}
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);
