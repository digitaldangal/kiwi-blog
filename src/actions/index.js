import * as types from '../constants/actionTypes'
import blog from '../api/blog'

export const requestArticles = () => ({
  type: types.REQUEST_ARTICLES
})

export const receiveArticles = json => ({
  type: types.RECEIVE_ARTICLES,
  articles: json.data.children.map(child => child.data)
})

// asyn fetch articles from sever
export const fetchArticles = dispatch => {
  dispatch(requestArticles())
  return blog.getArticles((json) => dispatch(receiveArticles(json)))
}

export const addArticleRequest = (article) => ({
  type: types.ADD_ARTICLE_REQUEST,
  article
})

export const addArticleSuccess = () => ({
  type: types.ADD_ARTICLE_SUCCESS
})

export const addArticleFailure = () => ({
  type: types.ADD_ARTICLE_FAILURE
})

// asyn add article
export const addArticle = article => dispatch => {
  dispatch(addArticleRequest(article))
  return blog.addArticle(
    article,
    () => dispatch(addArticleSuccess()),
    () => dispatch(addArticleFailure()))
}

export const deleteArticle = (id) => ({
  type: types.DELETE_ARTICLE,
  id
})

export const editArticle = (id, article) => ({
  type: types.EDIT_ARTICLE,
  id,
  article
})