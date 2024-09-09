import React from 'react'
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Card = () => {


  const handleSUmb=(e)=>{
    e.preventDefault()
    const option=e.target.colors.value;
    const ak=e.target.ak.value;
   

    //consolelog(res)
  }
  return (
    <div>





<form onSubmit={handleSUmb}>
<input type="text" name='ak' />
<Select
defaultValue={[options[2], options[3]]}
isMulti
name="colors"
options={options}
className="basic-multi-select"
classNamePrefix="select"></Select>

<button type='sumbit'>SUBMI</button>
</form>




<div className="glass-card p-6 max-w-sm mx-auto bg-white/20 rounded-xl shadow-md backdrop-blur-md border border-white/30">
<h2 className="text-2xl font-bold text-black">Glassmosadfasdfsdfrphism Card</h2>
<p className="text-white mt-4">This is a sample card demonstrating the glassmorphism effect.</p>
</div>




    </div>
  )
}

export default Card
