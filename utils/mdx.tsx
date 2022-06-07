import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const ROOT = process.cwd()
export const POSTS_PATH = path.join(process.cwd(), 'data/blog')

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8')
}

const getCompiledMDX = async (content: string) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  try {
    return await bundleMDX({
      source: content,
    })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getSinglePost = async (slug: string) => {
  let fileSlug: string = ''
  fs.readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const slugShort = fileName
        .substring(11)
        .replace(/\.mdx?$/, '')
        .toLowerCase()
      if (slugShort === slug) {
        fileSlug = fileName
      }
    })
  const source = getFileContent(fileSlug)
  const { code, frontmatter } = await getCompiledMDX(source)
  const date = new Date(frontmatter.publishedAt)
  frontmatter.publishedAt = `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getDate()},${date.getFullYear()}`
  return {
    frontmatter,
    code,
  }
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName)
      const slug = fileName
        .substring(11)
        .replace(/\.mdx?$/, '')
        .toLowerCase()
      const { data } = matter(source)
      const date = new Date(data.publishedAt)
      data.publishedAt = `${date.toLocaleString('default', {
        month: 'short',
      })} ${date.getDate()},${date.getFullYear()}`
      return {
        frontmatter: data,
        slug: slug,
      }
    })
}
