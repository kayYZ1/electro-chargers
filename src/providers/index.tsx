"use client"
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '../components/theme-provider'
import StoreProvider from './store'

interface Props {
	children: ReactNode;
}

const Providers = (props: Props) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			<StoreProvider>
				<SessionProvider>
					{props.children}
				</SessionProvider>
			</StoreProvider>
		</ThemeProvider>
	)
}

export default Providers
