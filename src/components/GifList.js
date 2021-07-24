import React from 'react'

class GifList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div>
      {this.props.gifs.map((gif) => (
        <img key={gif.url} src={gif.url} alt="gif" />
      ))}
    </div>
  );
  }
}


export default GifList
