export default function getPostSections(post) {
  if (!post?.content) return [];
  return post.content
    .filter((block) => block.type === 'heading')
    .map((block) => block.text);
}
