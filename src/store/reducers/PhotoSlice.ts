import {IPhoto} from "../../models/IPhoto";
import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {fetchPhotos} from "./ActionCreators";


interface UserState {
    photos : IPhoto[];
    isLoading : boolean;
    error : SerializedError | null;
    count : number;
}
const initialState : UserState = {
    photos : [],
    isLoading : false,
    error : null,
    count : 0
}

export const photoSlice = createSlice( {
    name: 'photoReducer',
    initialState,
    reducers : {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<IPhoto[]>) => {
                state.isLoading = false;
                state.error = null;
                state.photos = action.payload;
            })

            .addCase(fetchPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }

})

export default photoSlice.reducer;