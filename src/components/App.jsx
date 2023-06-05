// import { useState } from "react";
import React, { createContext } from 'react'
import Modal from './Modal/Modal'
import Header from './Header/Header'
import FormLogin from "./FormLogin/FormLogin";
import Search from "./Search/Search";
// import { Route, Routes } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { useEffect, forwardRef, useState } from "react";
// import { Player } from "./Player/Player";
// eslint-disable-next-line no-unused-vars
import Counter from './Counter/Counter';
import Main from './Main/Main';
import Alert from './Alert/Alert'
import Context from './Context/Context';



export const App = () => {
  // const result = useState();
  // console.log(`result: `, result[1]);
  // const [name, age] = ['alex', 30];
  // console.log(name, age);
  // const [value, func] = useState;

  const [isShowModal, setIsShowModal] = useState(false);
  // console.log(isShowModal);

  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log('Effect')
  })
  
  useEffect(() => {
    console.log('Effect 2')
  }, [])
    useEffect(() => {
    console.log('Effect 3')
    }, [isShowModal])
  
  useEffect(() => {
    if (isShowModal) console.log('Effect 4')
    // setIsShowModal(true)
    }, [isShowModal])
  

  const openModal = () => setIsShowModal(true);

  const closeModal = () => setIsShowModal(false);

  const createUser = (data) => {
		const newUser = {
			...data,
			id: Date.now(),
			role: 'customer',
		}
		console.log(newUser)
	}

  const handleSearch = (searchText) => {
    // this.setState({searchText})
    setSearchText(searchText);
  }

  // const CustomButton = forwardRef((props, ref) => (
  // <button ref={ref}>{props.children}</button>
  // ));
  // const btnRef = useRef();

  // useEffect(() => btnRef.current.focus(), []);




  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Header open={openModal} />
      <Search handleSearch={handleSearch} />
      {/* <ContentInfo searchText={searchText} /> */}
      {isShowModal && (
        <Modal close={closeModal}>
          <FormLogin
            close={closeModal}
            createUser={createUser}
          />
        </Modal>  
      )}
      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4"></Player>
      <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton> */}
      {/* <Counter></Counter> */}
      <div className='container pt-2'>
        <Context>
          <Alert />
          <Main />
        </Context>
        </div>
    </div>
  )
}

