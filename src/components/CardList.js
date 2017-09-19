import React from 'react'
import MessageCard from './MessageCard'

const LoadingCard = <MessageCard loading/>

const CardList = (props) => {
  // empty articles means browers is still fetching data
  // so we display a loading card instead
  if (props.isFetching) {
    return LoadingCard
  }
  let data = props.data || {}
  const cards = data.map(msg => {
    const cardsWithSpace = <div key={msg.key}>
    <MessageCard
      id={msg.key}
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