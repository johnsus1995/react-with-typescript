type GeneralProps = {
    children:React.ReactNode
}
const General = (props:GeneralProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default General