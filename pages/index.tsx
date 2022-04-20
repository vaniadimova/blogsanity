import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: Post[];
}


const Home = ({ posts } : Props) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>TechBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header />
{/** Banner**/}
<div className="flex items-center justify-between py-10 bg-yellow-400 border-black border-y lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4  z-10 drop-shadow-[_0_5px_3px_rgba(0,0,0,0.4)]">
              Medium
            </span>{' '}
            is a place to write, read, and connect
          </h1>
          <h2 className='font-bold '>
            Free to post your blogs on any topic and connect
            with the rest of the world.
          </h2>
        </div>
        <img
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
          className="hidden h-32 md:inline-flex lg:h-full"
        />
      </div>
      
      {/** Posts **/}
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
           <Link key={post._id} href={`/post/${post.slug.current}`}>
           <div className="overflow-hidden border rounded-lg cursor-pointer group">
           <img
                className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs underline">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt=""
                />
          </div>
            </div>
          </Link>
        ))}
          </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    author -> {
    name,
    image
  }, 
    description,
    mainImage,
    slug
}`;
const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
export default Home
