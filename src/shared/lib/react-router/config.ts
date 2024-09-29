import { 
  albumsPageParams, 
  catalogPageParams,
  moviePageParams,
  postsPageParams,
  usersPageParams
} from './react-router.types'

export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root
  },
  movie: {
    root() {
      return pathKeys.root.concat('movie/')
    },
    byId({ movieId }: moviePageParams) {
      return pathKeys.movie.root().concat(String(movieId), '/')
    }
  },
  catalog: {
    root() {
      return pathKeys.root.concat('catalog/')
    },
    byCategory({ genre }: catalogPageParams) {
      return pathKeys.catalog.root().concat(genre, '/')
    },
  },
  posts: {
    root() {
      return pathKeys.root.concat('posts/')
    },
    byId({ postId }: postsPageParams) {
      return pathKeys.posts.root().concat(postId, '/')
    }
  },
  albums: {
    root() {
      return pathKeys.root.concat('albums', '/')
    },
    byId({ albumId }: albumsPageParams) {
      return pathKeys.albums.root().concat(albumId,  '/')
    }
  },
  users: {
    root() {
      return pathKeys.root.concat('users', '/')
    },
    byId({ userId }: usersPageParams) {
      return pathKeys.users.root().concat(userId, '/')
    }
  },
  page404() {
    return pathKeys.root.concat('404/')
  }
}