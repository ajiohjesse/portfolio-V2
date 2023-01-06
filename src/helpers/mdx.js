import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'
import remarkCapitalize from 'remark-capitalize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import codeTitles from 'rehype-code-titles'
import tableOfContent from 'rehype-toc'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, '/src/data', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, '/src/data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, '/src/data', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false,
      remarkPlugins: [remarkCapitalize],
      rehypePlugins: [
        codeTitles,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
          },
        ],
        [
          tableOfContent,
          {
            headings: ['h2', 'h3'],
            position: 'afterbegin',
          },
        ],
        mdxPrism,
      ],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, '/src/data', type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, '/src/data', type, postSlug),
      'utf8',
    )

    const { data, content } = matter(source)

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
      .sort((a, b) => {
        //sort posts by date with current post first

        const date1 = new Date(a.date).getTime()
        const date2 = new Date(b.date).getTime()

        if (date1 > date2) {
          return -1
        } else if (date1 === date2) {
          // return titles in alphabetical order if date is same

          return a.title.localeCompare(b.title, 'en')
        } else {
          return 1
        }
      })
      .filter((post) => {
        //filter out posts that are unpublished

        return post.metadata.isPublished
      })
  }, [])
}
