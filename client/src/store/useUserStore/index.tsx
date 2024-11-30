import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IUser } from 'api/auth/interfaces';

interface IUserStoreState {
    user: IUser | null;
}

interface IUserStoreActions {
    setUser: (user: IUser) => void;
    reset: () => void;
}

type IUserStore = IUserStoreState & IUserStoreActions;

const initialState: IUserStoreState = {
    user: null,
};

const useUserStore = create<IUserStore>()(devtools(set => ({
    ...initialState,
    setUser: (user: IUser) => {
        set(state => ({ ...state, user }));
    },
    reset: () => {
        set(() => ({ ...initialState }));
    },
})));

export default useUserStore;
