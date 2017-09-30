import React from 'react'
import MessageCard from './MessageCard'

const LoadingCard = <MessageCard loading/>

const CardList = (props) => {
  // display a loading card if browser is still fetching data
  if (props.isFetching) {
    return LoadingCard
  }
  let data = props.data || {}
  const cards = data.map(msg => <MessageCard key={msg.key}
    id={msg.key}
    title={msg.title}
    tags={msg.tags}
    content={msg.content}
    rate={msg.rate}
    loading={props.loading}
    searchTag={props.searchTag}/>)
  return <div>{cards}</div>
}

export default CardList