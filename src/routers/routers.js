import React from 'react';

const router = [
	{
		path: '/dashboard',
		component: React.lazy(() => import('../layouts/Admin')),
		exact: true
	},
	{
		path: '/',
		component: React.lazy(() => import('../layouts/Game')),
		exact: true
	}
]

export default router;