import { create } from 'zustand';
import { IUser } from 'api/auth/interfaces';

interface IUserStoreState {
    user: IUser | null;
    isLoading: boolean;
    error: any;
}

interface IUserStoreActions {
    setUser: (user: IUser) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: any) => void;
    reset: () => void;
}

type IUserStore = IUserStoreState & IUserStoreActions;

const initialState: IUserStoreState = {
    user: null,
    isLoading: false,
    error: null,
};

const useUserStore = create<IUserStore>()(set => ({
    ...initialState,
    setUser: (user: IUser) => {
        set(state => ({ ...state, user }));
    },
    setIsLoading: (isLoading: boolean) => {
        set(state => ({ ...state, isLoading }));
    },
    setError: (error: any) => {
        set(state => ({ ...state, error }));
    },
    reset: () => {
        set(() => ({ ...initialState }));
    },
}));

export default useUserStore;
