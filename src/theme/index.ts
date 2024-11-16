'use client';
import { baseThemeOptions } from './baseThemeOptions';
import { darkThemeOptions } from './darkThemeOptions';
import { ThemeConfig } from '../typescript/types/theme';
import { lightThemeOptions } from './lightThemeOptions';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

/* types */
import type { Theme } from '@mui/material';

export const createTheme = (config: ThemeConfig): Theme => {
	let theme = createMuiTheme(
		baseThemeOptions,
		config.mode === 'dark' ? darkThemeOptions : lightThemeOptions,
		{
			cssVariables: true,
			direction: config.direction,
		}
	);

	if (config.responsiveFontSizes) {
		theme = responsiveFontSizes(theme);
	}

	return theme;
};

export const theme = createTheme({
	mode: 'light',
	direction: 'ltr',
	responsiveFontSizes: true,
});
