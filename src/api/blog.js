import articles from './data.js'

const TIMEOUT = 1000

export default {
  getArticles: (cb) => {
    /* supposed to be:
    fetch(`https://whatever.com`)
      .then(response => response.json())
      .then(json => cb(json))
    */
    setTimeout(() => cb(articles.data), TIMEOUT)
  },

  saveArticle: (article, success, failure) => {
    /*
    fetch('')
      .then(response => response.json())
      .then(json => {
        if(json.success) {
          success()
        } else {
          failure()
        }
      })
      .catch(e => failure())
    */
    setTimeout(() => success(), TIMEOUT)
  }
}