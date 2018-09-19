export default {
  save(key, value, expirationSec) {
    if (typeof Storage === 'undefined') {
      return false;
    }
    const expirationMS = expirationSec * 1000;
    const record = {
      value,
      timestamp: new Date().getTime() + expirationMS
    };
    localStorage.setItem(key, JSON.stringify(record));
    return value;
  },
  load(key) {
    if (typeof Storage === 'undefined') {
      return false;
    }
    try {
      const record = JSON.parse(localStorage.getItem(key));
      if (!record) {
        return false;
      }
      return new Date().getTime() < record.timestamp && record.value;
    } catch (e) {
      return false;
    }
  },
  remove(key) {
    if (typeof Storage === 'undefined') {
      return false;
    }
    return localStorage.removeItem(key);
  }
};
