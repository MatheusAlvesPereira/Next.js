import fs from 'fs';
import Link from 'next/link';

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((file) => file.replace(".md", ""));
  return slugs;
}

export default function Home() {
  const postMetadata = getPostMetadata();
  const postsPreviews = postMetadata.map((slug) => (
    <div className='container mx-auto flex justify-center'>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
    ))

  return (
    <div>{postsPreviews}</div>
  )
}
