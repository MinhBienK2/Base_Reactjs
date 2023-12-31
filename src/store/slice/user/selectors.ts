import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../types';
import { initialState } from './index';

const selectDomain = (state: RootState) => state.user || initialState;
export const selectUser = createSelector([selectDomain], user => user);

// profile
export const selectIsLogin = createSelector([selectDomain], user => user.isLogin);
export const selectToken = createSelector([selectDomain], user => user.token);
export const selectId = createSelector([selectDomain], user => user.id);
export const selectRole = createSelector([selectDomain], user => user.role);

export const selectLanguage = createSelector([selectDomain], user => user.language);
// response
export const selectLoading = createSelector([selectDomain], user => user.response.loading);
export const selectErrorUser = createSelector([selectDomain], user => user.response.error);
export const SelectMessage = createSelector([selectDomain], user => user.response.message);
