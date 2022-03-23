function Image(props) {

  const style = {
    width: props.width,
    height: props.height,
  }
  return <img style={style} src={props.url}/>
}

export default Image;