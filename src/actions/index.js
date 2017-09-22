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

export const saveArticleRequest = (article) => ({
  type: types.SAVE_ARTICLE_REQUEST,
  article
})

export const saveArticleSuccess = (article) => ({
  type: types.SAVE_ARTICLE_SUCCESS,
  article
})

export const saveArticleFailure = () => ({
  type: types.SAVE_ARTICLE_FAILURE
})

// asyn add article
export const saveArticle = article => dispatch => {
  dispatch(saveArticleRequest(article))
  console.log('dispatch save', article)
  return blog.saveArticle(
    article,
    () => dispatch(saveArticleSuccess(article)),
    () => dispatch(saveArticleFailure()))
}

/*
export const deleteArticle = (id) => ({
  type: types.DELETE_ARTICLE,
  id
})

export const editArticle = (id, article) => ({
  type: types.EDIT_ARTICLE,
  id,
  article
})*/

export const search = keywords => ({
  type: types.SEARCH,
  keywords
})

// return true if and only if content contains all keywords
const match = (content, keywords) => {
  const lowerCaseContent = content.toLowerCase();
  return keywords.every(keyword => lowerCaseContent.includes(keyword.toLowerCase()))
}

export const filterArticles = (articles, keywords) => {
  return articles.filter(article => 
    match(article.title, keywords) ||
    match(article.content, keywords) ||
    match(article.author, keywords)
  )
}
