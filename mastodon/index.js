module.exports = (Franz) => {
  class Mastodon extends Franz {
    validateServer(URL) {
      const api = `${URL}/manifest.json`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          if (typeof(resp) === 'object' && 'name' in resp && resp.name === 'Mastodon') {
            resolve();
          }else{
            reject();
          }
        }).fail(reject);
      });
    }
  }

  return Mastodon;
};
