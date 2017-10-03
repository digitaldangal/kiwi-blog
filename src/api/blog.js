import { articles, dashboard } from './data.js'

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

  createArticle: (article, success, failure) => {
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
  },

  updateArticle: (article, success, failure) => {
    setTimeout(() => success(), TIMEOUT)
  },

  deleteArticle: (key, success, failure) => {
    setTimeout(() => success(), TIMEOUT)
  },

  rating: (key, rate, success, failure) => {
    /*
    fetch('').then(response => response.json())
      .then(json => {
        if (json.success) {
          success()
        } else {
          failure()
        }
      }).catch(e => failure)*/
      setTimeout(() => success(), TIMEOUT)
  },

  fetchDashboard: (cb) => {
    setTimeout(() => cb(dashboard), TIMEOUT)
  }
}