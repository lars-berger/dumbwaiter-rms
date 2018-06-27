import config from './config'

export default {
  request(method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return;
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return;
    }

    const url = config.serverURI + uri;

    return fetch(url,
      {
        method: method,
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
      }
    ).then(res => res.json())
  }
}