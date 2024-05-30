import { z } from "zod"
 
export const AuthCredentialValidator = z.object({
  username: z.string().min(2).max(50),
})

export type TAuthCredentialValidator = z.infer< typeof AuthCredentialValidator >