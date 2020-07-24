const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

export function ValidateUserName(value) {
   if (value === '' || undefined) {
      return {
         errorMessage: '*Required'
      }
   } else if (emailRegex) {
      return {
         errorMessage: ''
      }
   } else {
      return {
         errorMessage: 'Invalid email'
      }
   }
}

export function ValidatePassword(value) {
   if (value === '' || undefined) {
      return {
         errorMessage: '*Required'
      }
   } else if (passw) {
      return {
         errorMessage: ''
      }
   } else {
      return {
         errorMessage: 'Invalid password'
      }
   }
}

export function ValidateConfirmPassword(password, confirmPassword) {
   if (confirmPassword === '') {
      return {
         errorMessage: '*Required'
      }
   } else if (password === '') {
      return {
         errorMessage: 'please enter password'
      }
   } else if (confirmPassword !== password) {
      return {
         errorMessage: "password didn't match"
      }
   }
   return {
      errorMessage: ''
   }
}
