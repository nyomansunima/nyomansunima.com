import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { blogService } from '~/services/blog-service'
import { BlogPostItemCard } from '../blog/blog-post-item'

export default async function HomeLearnSection() {
  const posts = await blogService.getInitialBlogPost()

  return (
    <section className="flex flex-col container mx-auto px-5 laptop:px-20 blog">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-word-slide-up"
      >
        Learn about design, coding, & crafting apps tips.
      </h2>

      <div className="flex mt-16 actions gap-6" data-animation="slide-up">
        <Button asChild>
          <Link href={'/blog'}>
            Learn from blog <i className="fi fi-rr-arrow-right"></i>
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={'https://instagram.com/nyomansunima'} target="_blank">
            <i className="fi fi-brands-instagram" />
            Instagram
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={'https://twitter.com/nyomamsunima'} target="_blank">
            <i className="fi fi-brands-twitter" />
            Twitter
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={'https://youtube.com/nyomamsunima'} target="_blank">
            <i className="fi fi-brands-youtube" />
            Youtube
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={'https://dribbble.com/nyomamsunima'} target="_blank">
            <i className="fi fi-brands-dribbble" />
            Dribbble
          </Link>
        </Button>
      </div>

      <div data-animation="slide-up">
        <div
          className="grid grid-cols-1 laptop:grid-cols-3 gap-6 mt-20 list laptop:mt-36"
          data-animation-target
        >
          {posts.map((post, i) => (
            <BlogPostItemCard post={post} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
