import { BlogsHeroSection, BlogsList } from "@/components/BlogsPage"
import { DownloadEnjazApp } from "@/components/HomePage"
import React from "react"

const BlogsPage = () => {
  return (
    <main>
      <BlogsHeroSection />

      <BlogsList />

      <DownloadEnjazApp />
    </main>
  )
}

export default BlogsPage
