'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type BlogComment } from '@/types/blog'

interface BlogCommentsProps {
  comments: BlogComment[]
  postId: number
}

export default function BlogComments({ comments: initialComments, postId }: BlogCommentsProps) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: BlogComment = {
      id: Date.now(),
      author: 'Current User', // In real app, get from auth
      content: newComment,
      date: new Date().toISOString(),
      likes: 0
    }

    setComments(prev => [comment, ...prev])
    setNewComment('')
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <textarea
          placeholder="Add a comment..."
          className="search-input w-full"
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="primary-button">
          Post Comment
        </button>
      </form>

      <AnimatePresence>
        {comments.map(comment => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 bg-gray-50 rounded"
          >
            <div className="flex justify-between mb-2">
              <div className="font-semibold text-[--charcoal]">
                {comment.author}
              </div>
              <div className="text-sm text-gray-600">
                {new Date(comment.date).toLocaleDateString()}
              </div>
            </div>
            <p className="text-gray-600">{comment.content}</p>
            <div className="flex gap-4 mt-2">
              <button className="text-sm text-gray-600 hover:text-[--gold]">
                Reply
              </button>
              <button className="text-sm text-gray-600 hover:text-[--gold]">
                Like ({comment.likes})
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 