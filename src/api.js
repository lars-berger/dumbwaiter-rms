import config from './config';

export default {
  request(method, uri, data = null) {
    if (!method) {
      console.error('You need a method argument');
      return;
    }

    if (!uri) {
      console.error('You need to specify an endpoint');
      return;
    }
    console.log('fdsafdsafdsa');
    const url = config.serverURI + uri;
    const encrypted = window.btoa(
      `${data.username}:${data.password}`
    );
    console.log(encrypted);
    return fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
        Authorization: `Basic ${encrypted}`,

        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
  },
};
