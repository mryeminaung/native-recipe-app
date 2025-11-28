import { create } from "zustand";

type Meal = {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
};

type FavMealProps = {
	favorites: Meal[];
	toggleFav: (meal: Meal) => void;
};

export const useFavStore = create<FavMealProps>((set) => ({
	favorites: [],
	toggleFav: (meal: Meal) =>
		set((state) => {
			const isAlreadyFav = state.favorites.some(
				(fav) => fav.idMeal === meal.idMeal,
			);
			return {
				favorites: isAlreadyFav
					? state.favorites.filter((fav) => fav.idMeal !== meal.idMeal)
					: [...state.favorites, meal],
			};
		}),
}));
