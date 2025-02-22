import { useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import UserProfileSidebar from "../components/UserProfileSidebar";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  if (loading) {
    return (
      <div>
        <div className="flex justify-center">
          <div>
            {Array.from({ length: 10 }).map((_, index) => (
              <BlogSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-4 grid-rows-1">
        {/* Sidebar */}
        <div>

        </div>
        <UserProfileSidebar isOpen={isSidebarOpen} />

        {/* Blogs */}
        <div className="flex-grow p-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
              ThumbnailLink={blog.ThumbnailLink}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
