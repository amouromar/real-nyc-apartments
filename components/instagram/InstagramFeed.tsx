'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { type InstagramPost } from '@/types/instagram'
import InstagramModal from './InstagramModal'

interface InstagramFeedProps {
  posts: InstagramPost[]
}

export default function InstagramFeed({ posts }: InstagramFeedProps) {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null)
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <motion.div
            key={post.id}
            className="relative aspect-square cursor-pointer group"
            onHoverStart={() => setHoveredPost(post.id)}
            onHoverEnd={() => setHoveredPost(null)}
            onClick={() => setSelectedPost(post)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover rounded-lg"
            />
            
            <AnimatePresence>
              {hoveredPost === post.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center space-x-6 text-white"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">♥</span>
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">💬</span>
                    {post.comments}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <InstagramModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
} 