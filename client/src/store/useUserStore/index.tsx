import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { checkAuth, signIn, signUp } from 'api/user';
import { ISignInRequest, ISignUpRequest, IUser } from 'api/user/interfaces';

interface IUserStoreState {
    user: IUser | null;
    isLoading: boolean;
    error: any;
}

interface IUserStoreActions {
    signIn: (data: ISignInRequest) => Promise<IUser | null>;
    signUp: (data: ISignUpRequest) => Promise<IUser | null>;
    signOut: () => void;
    checkAuth: () => Promise<IUser | null>;
    reset: () => void;
    resetError: () => void;
}

type IUserStore = IUserStoreState & IUserStoreActions;

const initialState: IUserStoreState = {
    user: null,
    isLoading: false,
    error: null,
};

const useUserStore = create<IUserStore>()(devtools(set => ({
    ...initialState,
    signIn: async (data: ISignInRequest) => {
        set(state => ({
            ...state,
            isLoading: true,
            error: null
        }));

        try {
            const { user, accessToken } = await signIn(data);

            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
            }

            set(state => ({
                ...state,
                user,
                isLoading: false,
                error: null
            }));

            return user;
        }
        catch (error: any) {
            set(state => ({
                ...state,
                user: null,
                isLoading: false,
                error: error.response?.data || 'Unknown error',
            }));

            return null;
        }
    },
    signUp: async (data: ISignUpRequest) => {
        set(state => ({
            ...state,
            isLoading: true,
            error: null
        }));

        try {
            const { user, accessToken } = await signUp(data);

            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
            }

            set(state => ({
                ...state,
                user,
                isLoading: false,
                error: null
            }));

            return user;
        }
        catch (error: any) {
            set(state => ({
                ...state,
                user: null,
                isLoading: false,
                error: error.response?.data || 'Unknown error',
            }));

            return null;
        }
    },
    signOut: () => {
        localStorage.removeItem('accessToken');

        set(state => ({
            ...state,
            user: null,
            isLoading: false,
            error: null
        }));
    },
    checkAuth: async () => {
        set(state => ({
            ...state,
            isLoading: true,
            error: null
        }));

        try {
            const { user } = await checkAuth();

            set(state => ({
                ...state,
                user,
                isLoading: false,
                error: null
            }));

            return user;
        }
        catch (error: any) {       
            set(state => ({
                ...state,
                user: null,
                isLoading: false,
                error: error.response?.data || 'Unknown error',
            }));

            return null;
        }
    },
    reset: () => {
        set(() => ({ ...initialState }));
    },
    resetError: () => {
        set((state) => ({ ...state, error: initialState.error }));  
    },
})));

export default useUserStore;
