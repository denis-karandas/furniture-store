export interface IUseFavoritesResponse {
    onAddFavorite: (product_id: number) => Promise<void>;
    onDeleteFavorite: (product_id: number) => Promise<void>;
}
