import React from 'react'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import AdminAppBar from '@/components/Admin/AppBar'
import { validateUser } from '@/utils/authValidation'

const Layout = async ({ children }: { children: React.ReactNode }) => {
	const { isVerifyUser } = await validateUser()
	if (!isVerifyUser) {
		return redirect('/admin/login')
	}

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
