'use client';
import type { FC } from 'react';
import { Box, Button } from '@mui/material';
import { NextLinkComposed } from './Link';

export const ButtonExample: FC = () => {
	return (
		<Box
			sx={{
				width: '100vw',
				display: 'flex',
				height: '100vh',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
			}}
		>
			<Button
				component={NextLinkComposed}
				fullWidth
				sx={{ maxWidth: '50%' }}
				size="large"
				variant="contained"
				to={{
					pathname: '/',
				}}
			>
				Button Example
			</Button>
		</Box>
	);
};
