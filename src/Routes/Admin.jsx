import React, { useEffect, useState } from 'react'
import AdminHome from '../pages/Admin/AdminHome';
import AdminLogin from '../Components/Admin/AdminLogin';
import AddTeacher from '../pages/Admin/AddTeacher';
import TeachersList from '../pages/Admin/TeachersList';
import Upload from '../pages/Admin/Upload';
import Add_subjectPage from '../pages/Admin/Add_subjectPage';
import Transaction_page from '../pages/Admin/Transaction_page';
import ErrorPage from '../Components/Admin/ErrorPage/ErrorPage';
import { Navigate } from 'react-router-dom';

import { Route,Routes} from 'react-router-dom';

function Admin() {

  const[isAuth,setisAuth]=useState("")

  useEffect(()=>{

    const isAuth=localStorage.getItem("admintoken")
    setisAuth(isAuth)
  },[])

  
 
  return (
    <div>
       <Routes>
      <Route  path='/' element={<AdminLogin/>}/>
      <Route path='/home' element={<AdminHome/>}/>
      <Route path='/addTeachers' element={<AddTeacher/>}/>
      <Route path='/teachers' element={<TeachersList/>}/>
      <Route path='/uploadclass' element={<Upload/>}/>
      <Route path='/add_subject' element={<Add_subjectPage/>}/>
      <Route path='/transactions' element={<Transaction_page/>}/>
      <Route path="/*"  element={<ErrorPage link={"/admin/home"} />} />
      </Routes>
    </div>
  )
}

export default Admin
