'use client'

import { motion } from 'framer-motion'

export default function InstagramStats() {
  const stats = {
    followers: 12500,
    following: 850,
    posts: 324
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-[--gold] rounded-full flex items-center justify-center text-white text-3xl">
          B
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[--charcoal]">
            Bery Real Estate
          </h2>
          <p className="text-gray-600">
            Official Instagram Account
          </p>
        </div>
        <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto primary-button"
        >
          Follow on Instagram
        </a>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl font-semibold text-[--charcoal]">
            {stats.followers.toLocaleString()}
          </div>
          <div className="text-gray-600">Followers</div>
        </motion.div>

        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl font-semibold text-[--charcoal]">
            {stats.following.toLocaleString()}
          </div>
          <div className="text-gray-600">Following</div>
        </motion.div>

        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl font-semibold text-[--charcoal]">
            {stats.posts.toLocaleString()}
          </div>
          <div className="text-gray-600">Posts</div>
        </motion.div>
      </div>
    </div>
  )
} 