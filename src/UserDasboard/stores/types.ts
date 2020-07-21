export interface BannerDataObject {
   banner_image_url: string
   occasion: string
   announcement: string
}

export interface BannerDataResponseObject {
   banner_data: Array<BannerDataObject>
}
