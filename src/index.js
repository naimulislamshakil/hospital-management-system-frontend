import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Suspense
			fallback={
				<HashLoader
					color="#b71c1c"
					style={{ display: 'flex', alignItems: 'center' }}
				/>
			}
		>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Suspense>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
