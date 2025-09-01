import React, { useMemo } from "react"
import Container from "../ui/container"
import BlogsCard, { BlogsCardProps } from "./BlogsCard"

const BLOGS_LIST: BlogsCardProps[] = [
  {
    id: 1,
    isFeatured: true,
    title: "SaaS customer development and no-code prototypes",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    image: "/blog.png",
    category: "Analytics",
    readFrom: "7 min read",
    slug: "saaS-customer-development-and-no-code-prototypes",
  },
  {
    id: 2,
    isFeatured: false,
    title: "SaaS customer development and no-code prototypes",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    image: "/blog.png",
    category: "Analytics",
    readFrom: "7 min read",
    slug: "saaS-customer-development-and-no-code-prototypes",
  },
  {
    id: 3,
    isFeatured: false,
    title: "SaaS customer development and no-code prototypes",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    image: "/blog.png",
    category: "Analytics",
    readFrom: "7 min read",
    slug: "saaS-customer-development-and-no-code-prototypes",
  },
  {
    id: 4,
    isFeatured: false,
    title: "SaaS customer development and no-code prototypes",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    image: "/blog.png",
    category: "Analytics",
    readFrom: "7 min read",
    slug: "saaS-customer-development-and-no-code-prototypes",
  },
]

const BlogsList: React.FC = () => {
  const { featuredBlogs, regularBlogs } = useMemo(() => {
    return {
      featuredBlogs: BLOGS_LIST.filter((blog) => blog.isFeatured),
      regularBlogs: BLOGS_LIST.filter((blog) => !blog.isFeatured),
    }
  }, [])

  return (
    <section>
      <Container>
        <div className="mb-8 grid gap-8">
          {featuredBlogs.map((blog) => (
            <BlogsCard key={blog.id} {...blog} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularBlogs.map((blog) => (
            <BlogsCard key={blog.id} {...blog} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default BlogsList
