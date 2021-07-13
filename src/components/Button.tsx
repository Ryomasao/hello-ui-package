type Props = {
  color:string
}

const Button = (props:Props) => {
  return (
    <button style={{ color:props.color }}>from pure-react-package</button>
  )
}

export default Button