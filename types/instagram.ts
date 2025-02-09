export interface InstagramPost {
  id: string
  image: string
  caption: string
  likes: number
  comments: number
  date: string
  location?: string
}

export interface InstagramStats {
  followers: number
  following: number
  posts: number
} 