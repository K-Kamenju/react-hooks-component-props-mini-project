import React from 'react'

function Article({title, date = "January 1, 1970", preview, minutes}) {

  const countEmojis = (minutes) => {
    const emojis = []

    if (minutes < 30) {
      const coffeecups = Math.ceil(minutes/5)
      for (let i = 0; i <coffeecups; i++){
        emojis.push('☕️')
      }
    } else {
      const bentoBoxes = Math.ceil(minutes/5)
      for(let i =0; i < bentoBoxes; i++) {
        emojis.push('🍱')
      }
    }
  }


  return (
    <article>
        <h3>{title}</h3>
        <div id='small'>
            <small>{date}</small>
            <small>
              {
                countEmojis(minutes).map((emoji, index) => {
                  return <span key={index}>{emoji}</span>
                })
              }
            </small>
        </div>
        <p>{preview}</p>
    </article>
  )
}

export default Article