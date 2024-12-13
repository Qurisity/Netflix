import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    isSignUp: false,
    isCheckingAuth: true,
    isLogingOut: false,
    signup: async (credentials) => {
        set({isSignUp: true})
        try {
            const response = await axios.post('/api/v1/auth/signup', credentials);
            set({ user: response.data.user, isSignUp: false})
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message || "Sign up failed")
            set({isSignUp: false, user: null})
        }
    },
    login: async ()=>{},
    logout: async () => {
        set({isLogingOut: true})
        try {
            await axios.post("/api/v1/auth/logout");
            set({ user: null, isLogingOut: false });
            toast.success('Logged out successfully');
    } catch (error) {
            set({ isLogingOut: false });
            toast.error(error.response.data.message || "Logg out error")
    }},
    authCheck: async () => {
        set({isCheckingAuth: true })
        try {
            const response = await axios.get('/api/v1/auth/authCheck');
            set({user: response.data.user, isCheckingAuth: false})
    } catch (error) {
            set({ isCheckingAuth: false, user:null})
    }},
}))