class BannerDataModel {
   announcement: string
   bannerImageUrl: string
   occasion: string
   constructor(bannerData) {
      this.announcement = bannerData.announcement
      this.bannerImageUrl = bannerData.banner_image_url
      this.occasion = bannerData.occasion
   }
}
export default BannerDataModel
