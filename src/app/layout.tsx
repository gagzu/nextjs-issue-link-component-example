import localFont from 'next/font/local';
import type { Metadata, Viewport } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { theme } from 'src/theme';
import { SITE_DESCRIPTION, SITE_TITEL, THEME_COLOR } from 'src/constans';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: SITE_TITEL,
	description: SITE_DESCRIPTION,
};

export const viewport: Viewport = {
	themeColor: THEME_COLOR,
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
	console.log('sin javascript?');
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider>
					<CssBaseline />
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
