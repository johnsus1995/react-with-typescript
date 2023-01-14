import React from 'react'

type textInputProps = {
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
}

const TextInput = (props:textInputProps) => {

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)
    }

  return (
    <div>
        <input type="text" value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default TextInput