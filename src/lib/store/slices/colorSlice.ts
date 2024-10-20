import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface StudentState {
	fullName: string;
	year: number;
	semester: number;
	averageMark: number;
	subjectsUpdatedAt: Date;
}
const initialState: StudentState = {
	fullName: '',
	year: 0,
	semester: 0,
	averageMark: 0,
	subjectsUpdatedAt: new Date(2000, 0, 1)
};

export const studentSlice = createSlice({
	name: 'colorScheme',
	initialState,
	reducers: {
		setStudent: (state, action: PayloadAction<StudentState>) => {
			console.log(action.payload);
		}
	}
});

export const { setStudent } = studentSlice.actions;
export default studentSlice.reducer;
