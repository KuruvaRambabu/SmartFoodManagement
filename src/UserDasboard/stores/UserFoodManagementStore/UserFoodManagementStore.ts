import { observable } from 'mobx'

class UserFoodManagementStore {
   @observable selectedPage!: string
   constructor() {}
}

export default UserFoodManagementStore
