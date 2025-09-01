import React from "react"
import Container from "../ui/container"
import BlogsCategory from "./BlogsCategory"
import WhiteLayout from "../layout/WhiteLayout"

const BlogsHeroSection = () => {
  return (
    <WhiteLayout
      title="Blogs & Resources"
      align="center"
      description="The latest news, announcements, lessons and learnings"
    >
      <Container>
        {/* filter */}

        <BlogsCategory />
      </Container>
    </WhiteLayout>
  )
}

export default BlogsHeroSection
