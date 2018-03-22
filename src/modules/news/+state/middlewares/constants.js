const endpoints = {
  getNews: 'https://us-central1-omnitrack-2a0f7.cloudfunctions.net/getNews'
};

const ttlForCache = {
  getNews : 1000 * 60 * 5
};

export {
  endpoints,
  ttlForCache
}