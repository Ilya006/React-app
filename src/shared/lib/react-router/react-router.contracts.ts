import { z } from 'zod';

export const moviePageParamsSchema = z.object({ movieId: z.number() })

export const postsPageParamsSchema = z.object({ postId: z.string() })
export const albumsPageParamsSchema = z.object({ albumId: z.string() })
export const usersPageParamsSchema = z.object({ userId: z.string() })
export const catalogPageParamsSchema = z.object({ genre: z.string() })