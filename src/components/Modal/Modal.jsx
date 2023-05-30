import { useEffect } from "react";
import { Component } from "react";

const Modal = ({ children, close }) => {


    //componentDidMount + componentWillUnmount маємо передавати обов'язково
    // return + callback функцію
    useEffect(() => {
        const handlePressESC = (e) => {
        console.log('press')
        if (e.code === 'Escape') close()
    }
        document.addEventListener('keydown', handlePressESC);

        return () => {
            console.log("Unmount");
            document.removeEventListener('keydown', handlePressESC);
        }
    }, [close])

    //componentWillUnmount
    // useEffect()

//     componentDidMount() {
//         document.addEventListener('keydown', this.handlePressESC);
// } 

//     componentWillUnmount() {
//         document.removeEventListener('keydown', this.handlePressESC);
//     }


    

    return (
         <div
                    className="modal fade show"
                    style={{display:'block', backdropFilter:'blur(5px)'}}
                >
                    <div
                        className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modle-title">Modal</h5>
                                <button
                                    onClick={close}
                                    type="button"
                                    className="btn-close"
                                    aria-label="close"
                                >
                                </button>
                            </div>
                            <div className='modal-body'>{children}</div>
                        </div>
                    </div>
                </div>
    )
}

// class Modal extends Component {
//     componentDidMount() {
//         document.addEventListener('keydown', this.handlePressESC);
// } 

//     componentWillUnmount() {
//         document.removeEventListener('keydown', this.handlePressESC);
//     }

//     handlePressESC = (e) => {
//         console.log('press')
//         if (e.code === 'Escape') this.props.close()
//     }
    

//         render() {
//             const { children, close } = this.props;
//             return (
//                 <div
//                     className="modal fade show"
//                     style={{display:'block', backdropFilter:'blur(5px)'}}
//                 >
//                     <div
//                         className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modle-title">Modal</h5>
//                                 <button
//                                     onClick={close}
//                                     type="button"
//                                     className="btn-close"
//                                     aria-label="close"
//                                 >
//                                 </button>
//                             </div>
//                             <div className='modal-body'>{children}</div>
//                         </div>
//                     </div>
//                 </div>)
//         }
// }


    
    
export default Modal;
