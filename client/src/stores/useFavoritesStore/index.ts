import { create } from 'zustand';
import { IProduct } from 'api/products/interfaces';

interface IFavoritesStoreState {
    products: IProduct[];
}

interface IFavoritesStoreActions {
    reset: () => void;
}

type IFavoritesStore = IFavoritesStoreState & IFavoritesStoreActions;

const initialState: IFavoritesStoreState = {
    products: [],
};

const useFavoritesStore = create<IFavoritesStore>()(set => ({
    ...initialState,
    reset: () => {
        set(() => ({ ...initialState }));
    },
}));

export default useFavoritesStore;
