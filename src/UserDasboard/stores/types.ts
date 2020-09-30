export interface BannerDataObject {
   banner_image_url: string
   occasion: string
   announcement: string
}

export interface BannerDataResponseObject {
   banner_data: Array<BannerDataObject>
}
export interface MealCardDataObject {
   meal_id: number
   meal_type: string
   meal_starttime: string
   meal_endtime: string
   item_names: Array<string>
   preference_status: string
   meal_status: string
   dead_line: string
}

export interface MealCardDataResponseObject {
   meal_info: Array<MealCardDataObject>
}

export interface FoodItemsData {
   item_id: number
   name: string
   category: string
   serving_size: string
   quantity: number
}

export interface selectedMealInformationData {
   status: string
   items: Array<FoodItemsData>
}
export interface userSelectedMealPreferenceResponseObject {
   meal_id: number
   meal_type: string
   selected_status: string
   selected_meal_information: Array<selectedMealInformationData>
}

export interface reviewForSelectedFoodItemsObject {
   meal_id: number
   items: Array<foodItems>
}

export interface foodItems {
   item_name: string
   item_id: number
   quantity: number
   taste: number
}
