import React from 'react'
import Sidebar from '@/components/Sidebar'
import AdminAppBar from '@/components/Admin/AppBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			{/*App Bar*/}
			<AdminAppBar />

			<div className="flex">
				{/*Sidebar*/}
				<Sidebar />

				{/*Main Content*/}
				<div className="flex-1 p-4">{children}</div>
			</div>
		</div>
	)
}

export default Layout
