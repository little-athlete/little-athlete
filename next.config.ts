import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'drive.google.com',
			},
		],
	},
	serverExternalPackages: ['firebase-admin'],
}

export default nextConfig
