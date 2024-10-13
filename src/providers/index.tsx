"use client"
import React, { ReactNode } from 'react'
import { ThemeProvider } from '../components/theme-provider'

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
			{props.children}
		</ThemeProvider >
	)
}

export default Providers
