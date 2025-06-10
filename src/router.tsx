import { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/home';
import NotFoundPage from '@/pages/not-found';

import Spinner from './components/Spinner';

const router = createBrowserRouter([
    // Main routes
    {
        path: '/',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <Home />
                    </Suspense>
                ),
            },
        ],
    },

    // Error routes
    { path: '/404', Component: NotFoundPage },

    // Fallback 404 route
    { path: '*', Component: NotFoundPage },
]);

export default router;
