import React from 'react'
import MessageCard from './MessageCard'

const LoadingCard = <MessageCard loading/>

const CardList = (props) => {
  const articles = props.articles
  // empty articles means browers is still fetching data
  // so we display a loading card instead
  if (articles.length === 0) {
    return LoadingCard
  }

  const cards = articles.map(msg => {
    const cardsWithSpace = <div key={msg.id}>
    <MessageCard
      id={msg.id}
      title={msg.title}
      tags={msg.tags}
      content={msg.content}
      rate={msg.rate}
      loading={props.loading}
    />
    <br/>
    </div>
    return cardsWithSpace })
  return (<div>{cards}</div>)
}

export default CardList