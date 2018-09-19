import storage from './storage';

const authClient = (loginApiUrl, noAccessPage = '/login') => (type, params) => {
  if (type === 'AUTH_LOGIN') {
    const { username, password } = params;
    const request = new Request(loginApiUrl, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ ttl, ...data }) => {
        storage.save('lbtoken', data, ttl);
      });
  }
  if (type === 'AUTH_LOGOUT') {
    storage.remove('lbtoken');
    return Promise.resolve();
  }
  if (type === 'AUTH_ERROR') {
    const { message } = params;
    const { status } = message;
    if (status === 401 || status === 403) {
      storage.remove('lbtoken');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === 'AUTH_CHECK') {
    const token = storage.load('lbtoken');
    if (token && token.id) {
      return Promise.resolve();
    }
    storage.remove('lbtoken');
    return Promise.reject(new Error('something bad happened'), {
      redirectTo: noAccessPage
    });
  }
  return Promise.reject(new Error('something bad happened'));
};

export default authClient;
