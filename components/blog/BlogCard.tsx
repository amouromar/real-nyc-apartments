'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { type BlogPost } from '@/types/blog'
import BlogComments from './BlogComments'

interface BlogCardProps {
  post: BlogPost
  isExpanded: boolean
  onToggle: () => void
}

export default function BlogCard({ post, isExpanded, onToggle }: BlogCardProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1)
      setLiked(true)
    } else {
      setLikes(prev => prev - 1)
      setLiked(false)
    }
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm overflow-hidden"
      layout
    >
      <div className="grid grid-cols-[300px,1fr] gap-6">
        <div className="relative h-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-[--charcoal]">
                {post.author.name}
              </div>
              <div className="text-sm text-gray-600">
                {post.author.role}
              </div>
            </div>
          </div>

          <h2 className="text-2xl text-[--charcoal] font-semibold mb-2">
            {post.title}
          </h2>

          <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-sm rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.div
            className="text-gray-600"
            layout
          >
            {isExpanded ? post.content : post.excerpt}
          </motion.div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-6">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 transition-colors ${
                  liked ? 'text-[--gold]' : 'text-gray-600'
                }`}
              >
                <span>{liked ? '♥' : '♡'}</span>
                <span>{likes}</span>
              </button>
              <button
                onClick={onToggle}
                className="text-[--gold]"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-[--gold]">
                Share
              </button>
              <button className="text-gray-600 hover:text-[--gold]">
                {post.comments.length} Comments
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t"
              >
                <BlogComments comments={post.comments} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
} 