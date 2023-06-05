import { useCustomContext } from '../Context/Context'

const Alert = () => {
    const result = useCustomContext()
    console.log(result)
    return (result.toggleValue &&
        (<div className="alert alert-danger">Messaaaaaaaaaaaaaaaage</div>)) 

}
export default Alert