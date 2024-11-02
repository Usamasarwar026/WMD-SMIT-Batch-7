import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../configure/firebase";

export const deletepost = createAsyncThunk(
    "feed/deletepost",
    async (id) => {
        try {
            const docRef = doc(db, "posts", id)
            await deleteDoc(docRef)
            return id
        } catch (error) {
            console.log("error", error)
        }
    }
)


// update post----------------
export const updatepost = createAsyncThunk(
    "feed/updatepost",
    async (post) => {
        try {
            const docRef = doc(db, "posts", post.id)
            await updateDoc(docRef,post)
            return post
        } catch (error) {
            console.log("error", error)
        }
    }
)

export const createpost = createAsyncThunk(
    "feed/createpost",
    async (post) => {
        try {
            const collectionRef = collection(db, "posts");
            const docRef = await addDoc(collectionRef, post);
            console.log("response after firebase store", docRef)
        } catch (error) {
            console.log("error", error)
        }
        // return post;
    }
)

export const getpost = createAsyncThunk(
    "feed/getpost",
    async () => {
        try {
            const collectionRef = collection(db, "posts");
            const docs = await getDocs(collectionRef)
            // let data = docs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            let data = []
            console.log("docs", docs)

            docs.forEach(doc => {
                console.log("document", doc.data())
                console.log("document id", doc.id);
                data.push({
                    id: doc.id, ...doc.data()
                })
            });
            console.log("data", data)
            return data
        } catch (error) {
            console.log("error", error)
        }
    }
)




const feedSlice = createSlice({
    name: "feed",
    initialState: {
        feed: [],
        updatepost: null
    },
    reducer: {
        addfeed: (state, action) => {
            console.log("action in addfeed", action.payload)
        },
        updateDocId: (state,action)=>{
            console.log("action in updateDocId", action.payload);
            let post = state.feed.find((post) => post.id === action.payload)
            state.updatePost = post[0] 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createpost.fulfilled, (state, action) => {
            state.feed = [action.payload, ...state.feed]
        });
        builder.addCase(getpost.fulfilled, (state, action) => {
            state.feed = action.payload
        });
        builder.addCase(deletepost.fulfilled,(state,action)=>{
            state.feed = state.feed.filter(post => post.id !== action.payload)
        });
        builder.addCase(updatepost.fulfilled,(state,action)=>{
            state.feed = state.feed.map((post)=>{
                if(post.id === action.payload.id){
                    return action.payload
                }
                return post;
            })
        })

    }

})

export const { addFeed,updateDocId } = feedSlice.actions;
export default feedSlice.reducer;