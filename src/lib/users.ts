import { isAxiosError } from 'axios';
import { log } from "./logger";
import { API, authInterceptor } from '../utilities';

export const fetchUsers = async () => {
  try {
    API.interceptors.request.use(authInterceptor);
    const { data, status } = await API.get('/Characters');
    log({ message: '>>>RECEIVED RESPONSE', data: status });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      log({ message: 'Error message: ', data: error.message });
    } else {
      log({ message: 'Unexpected error: ', data: error });
    }
    throw error;
  }
};