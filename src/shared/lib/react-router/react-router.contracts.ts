import { z } from 'zod';

export const postsPageParamsSchema = z.object({ postId: z.string() })
export const albumsPageParamsSchema = z.object({ albumId: z.string() })
export const usersPageParamsSchema = z.object({ userId: z.string() })