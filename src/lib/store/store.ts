import { configureStore } from '@reduxjs/toolkit';

import { api, baseApi } from '@/lib/services/api';

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[api.reducerPath]: api.reducer
	},

	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([baseApi.middleware, api.middleware]);
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
