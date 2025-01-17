import { create } from 'zustand';
import { IProductItem } from 'components/shared/ProductItem/interfaces';

interface ITopProductsStoreState {
    data: IProductItem[];
    isLoading: boolean;
    error: any; 
}

interface ITopProductsStoreActions {
    setProducts: (products: IProductItem[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: any) => void;
    update: (id: number, product: Partial<IProductItem>) => void;
    reset: () => void;
}

type ITopProductsStore = ITopProductsStoreState & ITopProductsStoreActions;

const initialState: ITopProductsStoreState = {
    data: [],
    isLoading: false,
    error: null,
};

const useTopProductsStore = create<ITopProductsStore>()(set => ({
    ...initialState,
    setProducts: (data: IProductItem[]) => {
        set(state => ({ ...state, data }));
    },
    setIsLoading: (isLoading: boolean) => {
        set(state => ({ ...state, isLoading }));
    },
    setError: (error: any) => {
        set(state => ({ ...state, error }));
    },
    update: (id: number, data: Partial<IProductItem>) => {
        set(state => {
            const productIndex = state.data.findIndex(item => item.id === id);

            if (productIndex >= 0) {
                return {
                    ...state,
                    data:  [
                        ...state.data.slice(0, productIndex),
                        {
                            ...state.data[productIndex],
                            ...data,
                        },
                        ...state.data.slice(productIndex + 1),
                    ],
                };
            }
            return state;
        });
    },
    reset: () => {
        set(() => ({ ...initialState }));
    },
}));

export default useTopProductsStore;
