import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

const Start = ({isOpen}: any) => {
  return (
    <div className='flex'>
      <SideBar isOpen={isOpen}></SideBar>
      <Main></Main>
    </div>
  )
}

export default Start