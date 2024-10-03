import ReactLoading from 'react-loading';
 
const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
    <ReactLoading type={"spin"} color={"#007BFF"} height={100} width={100} />
  </div>
  )
}

export default Loading
