export interface BlogAuthor {
  name: string
  image: string
  role: string
}

export interface BlogComment {
  id: number
  author: string
  content: string
  date: string
  likes: number
  replies?: BlogComment[]
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  author: BlogAuthor
  date: string
  category: string
  tags: string[]
  likes: number
  comments: BlogComment[]
} 