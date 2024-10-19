"use client"
import React, { ReactNode } from 'react'
import { ThemeProvider } from '../components/theme-provider'
import ReactQueryProvider from './react-query';

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
			<ReactQueryProvider>
				{props.children}
			</ReactQueryProvider>
		</ThemeProvider >
	)
}

export default Providers
