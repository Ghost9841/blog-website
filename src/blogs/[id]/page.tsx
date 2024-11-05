
interface BlogsPageProps {
  params: {
    id: number;
  };
}

const BlogsPage: React.FC<BlogsPageProps> = ({params}) => {
  return (
    <div>
      {params.id}
    </div>
  )
}

export default BlogsPage;
