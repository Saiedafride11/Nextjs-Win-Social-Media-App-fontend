
import Auth from "@/app/components/firebase/firebase.init";
import { ToastError, ToastSuccess } from "@/app/components/utils/toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";


const initialState = {
  isLoading: false,
  email: "",
  displayName: "",
  isSuccess: false,
  isError: false,
  errorMassage: "",
}

// user signUp part
export const signUpUser = createAsyncThunk(
  "Auth/signUpUser",
  async ({ email, password }) => {
    const result = await createUserWithEmailAndPassword(Auth, email, password);
    return result.user.email;
  }
);

// user signIn part
export const signInUser = createAsyncThunk(
  "Auth/signInUser",
  async ({ email, password }) => {
    const result = await signInWithEmailAndPassword(Auth, email, password);
    return result.user.email;
  }
);

// user google signIn part
const googleProvider = new GoogleAuthProvider();
export const googleSignInUser = createAsyncThunk(
  "Auth/signInUser",
  async () => {
    const result = await signInWithPopup(Auth, googleProvider);
    localStorage.setItem("email", JSON.stringify(result.user.email));
    return result.user.email;
  }
);

export const currentUserProvider = () => {
  const unsubscribed = onAuthStateChanged(Auth, (user) => {
        if (user) {
          // console.log("User is unsubscribed-", user?.displayName);
          localStorage.setItem("email", JSON.stringify(user.email));
        } 
    });
    return () => unsubscribed;
}


const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", JSON.stringify(action.payload));
      state.isLoading = false;
    },
    logOutUser: (state) => {
      state.email = "";
    },
    toggleState: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // signUp part ----------->
      .addCase(signUpUser.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.email = action.payload;
        localStorage.setItem("email", JSON.stringify(action.payload));
        ToastSuccess("Register Successful!");
        state.isError = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.email = "";
        state.isError = true;
        state.errorMassage = action.error.message;
        ToastError(action.error.message);
      })
      // signIn part ----------------->
      .addCase(signInUser.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.email = action.payload;
        localStorage.setItem("email", JSON.stringify(action.payload));
        ToastSuccess("Login Successful!");
        state.isError = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.email = "";
        state.isError = true;
        state.errorMassage = action.error.message;
        ToastError(action.error.message);
      });
  },
});

export const { saveUser, logOutUser, toggleState } = authSlice.actions;
export default authSlice.reducer;
