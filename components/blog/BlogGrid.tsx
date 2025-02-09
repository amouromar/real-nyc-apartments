'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlogCard from './BlogCard'
import { type BlogPost } from '@/types/blog'

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts

  return (
    <div className="space-y-8">
      {/* Category filters */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === null
              ? 'bg-[--gold] text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {Array.from(new Set(posts.map(post => post.category))).map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-[--gold] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog posts grid */}
      <div className="grid gap-8">
        <AnimatePresence>
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BlogCard
                post={post}
                isExpanded={expandedPost === post.id}
                onToggle={() => setExpandedPost(
                  expandedPost === post.id ? null : post.id
                )}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 