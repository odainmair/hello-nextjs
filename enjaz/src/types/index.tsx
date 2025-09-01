interface TextNode {
  type: "text"
  text: string
}

interface ListItem {
  type: "list-item"
  children: TextNode[]
}

export interface ContentNode {
  type: "paragraph" | "heading" | "list"
  children: TextNode[] | ListItem[]
  level?: number // Optional, used for headings
  format?: "unordered" // Optional, used for lists
}

export interface Image {
  id: number
  documentId: string
  url: string
  alternativeText: string | null
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  pagination: Pagination
}

export interface GentalResponse<T> {
  data: T[]
  meta: Meta
}

export interface IOfferItem {
  id: number
  documentId: string
  title: string
  description: string
  hideOffer: boolean
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  content: any
  image: Image | null
}
