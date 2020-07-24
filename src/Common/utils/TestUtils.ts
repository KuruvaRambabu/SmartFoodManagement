export function resolveWithTimeout<T>(response: T): Promise<T> {
   const timeOut = process.env.IS_JEST ? 0 : 500
   return new Promise(resolve => {
      setTimeout(() => resolve(response), timeOut)
   })
}
