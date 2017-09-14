import React from 'react'
import MessageCard from './MessageCard'

const CardList = (props) => {
  const cards = props.data.map(msg => {
    const cardsWithSpace = <div key={msg.id}>
    <MessageCard
      id={msg.id}
      title={msg.title}
      tags={msg.tags}
      content={msg.content}
      rate={msg.rate}
    />
    <br/>
    </div>
    return cardsWithSpace })
  return (<div>{cards}</div>)
}
export default CardList