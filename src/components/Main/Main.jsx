import { useCustomContext } from '../Context/Context'

const Main = () => {
    const result= useCustomContext()
    return(
        <div>
          <h1>Hello Context</h1>
          <button onClick={result.toggleFn} className="btn btn-success">Open Alert</button>
        </div >
    )
}

export default Main