/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Express {
  export interface Request {
    user: {
      _id: string
      name: string
      email: string
      isAdmin: boolean
      token: string
    }
  }
}
