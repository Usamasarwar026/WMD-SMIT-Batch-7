import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: JSON.parse(localStorage.getItem('studentData')) || [],  
    currentStudent: null,  
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push({
                ...action.payload, id: state.students.length + 1
            })
            localStorage.setItem('studentData', JSON.stringify(state.students))
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
            state.students = state.students.map((student, index) => ({
                ...student, id: index + 1
            }));
            localStorage.setItem('studentData', JSON.stringify(state.students))
        },

        updateStudent: (state, action) => {
            state.students = state.students.map(student =>
                student.id === action.payload.id ? { ...action.payload } : student
            )
            localStorage.setItem('studentData', JSON.stringify(state.students))
        },
        setCurrentStudent: (state, action) => {
            state.currentStudent = action.payload;
        },
        clearCurrentStudent: (state) => {
            state.currentStudent = null;
          },
    }
})


export const { addStudent, deleteStudent, updateStudent, setCurrentStudent, clearCurrentStudent } = studentSlice.actions;
export default studentSlice.reducer