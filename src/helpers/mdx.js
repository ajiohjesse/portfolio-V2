import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import remarkCapitalize from "remark-capitalize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import codeTitles from "rehype-code-titles";
import tableOfContent from "rehype-toc";
import { s } from "hastscript";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "/src/data", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "/src/data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "/src/data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
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
            behavior: "append",
            properties: {
              class: "autolink-header",
              ariaHidden: true,
              tabIndex: -1,
            },
            content: [
              s(
                "svg.autolink-svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                },
                s("path", {
                  d: "M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z",
                })
              ),
            ],
          },
        ],
        [
          tableOfContent,
          {
            headings: ["h2", "h3"],
            position: "afterbegin",
          },
        ],
        mdxPrism,
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "/src/data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "/src/data", type, postSlug),
      "utf8"
    );

    const { data, content } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ]
      .sort((a, b) => {
        //sort posts by date with current post first

        const date1 = new Date(a.date).getTime();
        const date2 = new Date(b.date).getTime();

        if (date1 > date2) {
          return -1;
        } else if (date1 === date2) {
          // return titles in alphabetical order if date is same

          return a.title.localeCompare(b.title, "en");
        } else {
          return 1;
        }
      })
      .filter(post => {
        //filter out posts that are unpublished

        return post.metadata.isPublished;
      });
  }, []);
}
