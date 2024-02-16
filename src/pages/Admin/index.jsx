import React from 'react'
import { Wrapper } from './style'
import AdminNavbar from '../../components/AdminComponents/AdminNavbar/index'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/AdminComponents/Sidebar'

const AdminView = () => {
  return (
    <Wrapper>
      <AdminNavbar/>
      <div className="FlexBoxAdmin">
				<Sidebar/>
				<Outlet />
			</div>
    </Wrapper>
  )
}

export default AdminView