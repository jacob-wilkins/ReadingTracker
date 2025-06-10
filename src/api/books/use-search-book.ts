import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import { type BookSearch } from './types';

type Response = BookSearch;
type Variables = void;

export const use = createQuery<Response, Variables, AxiosError>({
  queryKey: [''],
  fetcher: () => {
    return client.get(``).then((response) => response.data.posts);
  },
});
