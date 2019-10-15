import React from "react"

const Image = props => (

<a href={props.data.image.url}>
  <figure>
    <img src={props.data.image.url} alt={props.data.image.alt} />
    <figcaption>{props.data.title.text}</figcaption>
  </figure>
</a>

)

export default Image
