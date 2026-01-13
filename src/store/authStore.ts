import { create } from "zustand";
import { login } from "../services/api/authServices";

type SignInPayload = { userName: string; passWord: string; rememberId: boolean; }

type AuthState = {
    accessToken: string | null;
    signIn: (payload: SignInPayload) => Promise<void>;
    signOut: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,

    signIn: async ({ userName, passWord, rememberId }) => {
        const { accessToken } = await login({ userName, passWord });
        set({ accessToken });

        if (rememberId) localStorage.setItem('saveUserName', userName);
        else localStorage.removeItem('saveUserName');
    },
    signOut: () => {
        set({ accessToken: null });
    },
}));