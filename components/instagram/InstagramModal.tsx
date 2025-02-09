'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { type InstagramPost } from '@/types/instagram'

interface InstagramModalProps {
  post: InstagramPost
  onClose: () => void
}

export default function InstagramModal({ post, onClose }: InstagramModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-lg max-w-4xl w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[--gold] rounded-full flex items-center justify-center text-white">
                  B
                </div>
                <div>
                  <div className="font-semibold">Bery Real Estate</div>
                  <div className="text-sm text-gray-600">{post.location}</div>
                </div>
              </div>
              <button onClick={onClose} className="text-2xl">✕</button>
            </div>

            <p className="text-gray-600 mb-6">{post.caption}</p>

            <div className="flex items-center gap-6 text-gray-600">
              <button className="flex items-center gap-2 hover:text-[--gold]">
                <span>♥</span>
                {post.likes}
              </button>
              <button className="flex items-center gap-2 hover:text-[--gold]">
                <span>💬</span>
                {post.comments}
              </button>
              <button className="flex items-center gap-2 hover:text-[--gold]">
                <span>↗</span>
                Share
              </button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="text-sm text-gray-600">
                Posted on {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 