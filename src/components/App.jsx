import { useState } from "react";
import React from 'react'
import Modal from './Modal/Modal'
import Header from './Header/Header'
import FormLogin from "./FormLogin/FormLogin";
import Search from "./Search/Search";
import { Route, Routes } from 'react-router-dom'
import { useEffect } from "react";


export const App = () => {
  // const result = useState();
  // console.log(`result: `, result[1]);
  // const [name, age] = ['alex', 30];
  // console.log(name, age);
  // const [value, func] = useState;

  const [isShowModal, setIsShowModal] = useState(false);
  // console.log(isShowModal);

  const [searchText, setSearchText] = useState('');
  // console.log(searchText);

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
    </div>
  )
}

