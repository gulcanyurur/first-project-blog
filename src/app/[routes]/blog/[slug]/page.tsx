import { notFound } from 'next/navigation';

const fakePosts = [
  { slug: 'ilk-yazi', title: 'İlk Yazı', content: 'Bu benim ilk blog yazım.' },
  { slug: 'ikinci-yazi', title: 'İkinci Yazı', content: 'Bu ikinci yazıdır.' }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = fakePosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); 

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
