import axios from "axios";
import {IPhoto} from "../../models/IPhoto";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(

    'users/fetchAll',
    async(_, thunkAPI) => {

        try{

            let response = await axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=50');
            return response.data
        }catch (e : any) {

            return thunkAPI.rejectWithValue(e.message)
        }

    }
)