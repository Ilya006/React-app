import { z } from 'zod';
import { 
  albumsPageParamsSchema, 
  postsPageParamsSchema,
  usersPageParamsSchema 
} from './react-router.contracts';

export type postsPageParams = z.infer<typeof postsPageParamsSchema>
export type albumsPageParams = z.infer<typeof albumsPageParamsSchema>
export type usersPageParams = z.infer<typeof usersPageParamsSchema>



