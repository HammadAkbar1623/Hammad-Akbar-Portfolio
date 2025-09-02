import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


export const Route = createFileRoute('/blog/')({
  component: BlogPage,
})

interface HashnodePost {
  title: string
  slug: string
  brief: string
  coverImage: string
  dateAdded: string
}

function BlogPage() {
  const [posts, setPosts] = useState<HashnodePost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const particlesCount = 50
  const particles = useMemo(() => {
    return Array.from({ length: particlesCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      offset: Math.random() * 100,
      size: Math.random() * 3,
    }))
  }, [])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Publication {
                publication(host: "hammad-blog.hashnode.dev") {
                  posts(first: 20) {
                    edges {
                      node {
                        title
                        slug
                        brief
                        coverImage {
                          url
                        }
                        publishedAt
                      }
                    }
                  }
                }
              }
            `,
          }),
        })

        const { data } = await response.json()
        const postsData = data?.publication?.posts?.edges?.map((edge: any) => ({
          title: edge.node.title,
          slug: edge.node.slug,
          brief: edge.node.brief,
          coverImage: edge.node.coverImage?.url || '',
          dateAdded: edge.node.publishedAt,
        })) || []

        setPosts(postsData)
      } catch (err) {
        setError('Failed to fetch articles')
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    )
  }

  return (
    <>

    <Navbar/>
      {/* Animated Background */}
      <div className="fixed inset-0 bg-black overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 bg-blue-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100],
              x: [0, particle.offset],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(100,100,255,0.1)_0,_rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Read My Articles</h1>
            <p className="text-xl text-teal-400 font-bold">Latest Technical Writings</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.brief}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.dateAdded).toLocaleDateString()}
                    </time>
                    <a
                      href={`https://hammad-blog.hashnode.dev/${post.slug}`}
                      className="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <FaArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}