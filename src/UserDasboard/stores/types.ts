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
