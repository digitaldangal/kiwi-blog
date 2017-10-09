import * as types from '../constants/ActionTypes'
import blog from '../api/blog'

export const requestArticles = () => ({
  type: types.REQUEST_ARTICLES
})

export const receiveArticles = json => ({
  type: types.RECEIVE_ARTICLES,
  //articles: json.data.children.map(child => child.data)
  data: json
})

// Asyn fetch articles from sever.
// Most of time, we call fetchArticlesIfNeeded instead of this action
// since we don't need to fetch data each time user make a request.
// Call this action only if we modify(add/delete/edit) articles
export const fetchArticles = () => dispatch => {
  dispatch(requestArticles())
  return blog.getArticles((json) => dispatch(receiveArticles(json)))
}

// Fetch data from server only if state.data is empty.
const shouldFetchArticles = state => {
  return state.articles.data.length === 0
}

export const fetchArticlesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchArticles(getState())) {
    return dispatch(fetchArticles())
  }
}

const createArticleRequest = article => ({
  type: types.CREATE_ARTICLE_REQUEST,
  article
})

const createArticleSuccess = article => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  article
})

const createArticleFailure = () => ({
  type: types.CREATE_ARTICLE_FAILURE
})

// asyn create article
export const createArticleAsyn = article => dispatch => {
  dispatch(createArticleRequest(article))
  return blog.createArticle(
    article,
    () => dispatch(createArticleSuccess(article)),
    () => dispatch(createArticleFailure()))
}

export const updateArticle = key => ({
  type: types.UPDATE_ARTICLE,
  key
})

const updateArticleRequest = article => ({
  type: types.UPDATE_ARTICLE_REQUEST,
  article
})

const updateArticleSuccess = article => ({
  type: types.UPDATE_ARTICLE_SUCCESS,
  article
})

const updateArticleFailure = () => ({
  type: types.UPDATE_ARTICLE_FAILURE
})

// asyn update article
export const updateArticleAsyn = article => dispatch => {
  dispatch(updateArticleRequest(article))
  return blog.updateArticle(
    article,
    () => dispatch(updateArticleSuccess(article)),
    () => dispatch(updateArticleFailure()))
}

const deleteArticleRequest = key => ({
  type: types.DELETE_ARTICLE_REQUEST,
  key
})

const deleteArticleSuccess = key => ({
  type: types.DELETE_ARTICLE_SUCCESS,
  key
})

const deleteArticleFailure = key => ({
  type: types.DELETE_ARTICLE_FAILURE,
  key
})

// asyn delete article
export const deleteArticleAsyn = key => dispatch => {
  dispatch(deleteArticleRequest(key))
  return blog.deleteArticle(
    key,
    () => dispatch(deleteArticleSuccess(key)),
    () => dispatch(deleteArticleFailure(key)))
}

export const search = keywords => ({
  type: types.SEARCH,
  keywords
})

export const searchTag = tag => ({
  type: types.SEARCH_TAG,
  tag
})

// return true if and only if content contains all keywords
const match = (content, keywords) => {
  const jsonStr = JSON.stringify(content)
  const lowerCaseContent = jsonStr.toLowerCase()
  return keywords.every(keyword => lowerCaseContent.includes(keyword.toLowerCase()))
}

const matchTag = (tags, tag) => {
  return tag === '' || tag === undefined || tags.some(t => t === tag)
}

// TODO: parse content and concate all 'text' to a string
export const filterArticles = (articles, keywords, tag) => {
  return articles.filter(article => 
    matchTag(article.tags, tag) && (
    match(article.title, keywords) ||
    match(article.content, keywords) ||
    match(article.author, keywords))
  )
}

export const readArticle = key => ({
  type: types.READ_ARTICLE,
  key
})

const ratingRequest = key => ({
  type: types.RATING_REQUEST,
  key
})

const ratingSuccess = (key, rate) => ({
  type: types.RATING_SUCCESS,
  key,
  rate
})

const ratingFailure = key => ({
  type: types.RATING_FAILURE,
  key
})

export const rating = (key, rate) => dispatch => {
  dispatch(ratingRequest(key, rate))
  return blog.rating(key,
    rate,
    () => dispatch(ratingSuccess(key, rate)),
    () => dispatch(ratingFailure(key)))
}
