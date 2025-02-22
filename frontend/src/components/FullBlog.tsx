import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <>
        <div>
            <div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 w-full px-10 pt-200 max-w-screen-xl pt-12">
                    <div className="col-span-8 ">
                    <div className="col-span-4 mb-4 border-slate-700 ">
                        
                        <div className="flex">
                            <div className="pr-4 flex flex-row justify-center items-center">
                            <Avatar name={blog.author.name || "Author"}></Avatar>
                            <div>
                                <div className="text-2xl font-bold ml-5 mt-1">
                                    {blog.author.name || "Author"}
                                </div>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                        <div className=" col-span-8 text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2 mb-4">
                            {blog.publishedDate}
                        </div>
                        <div className="h-auto w-full bg-gray-100 rounded-lg flex items-center justify-between">
                            <img src={blog.ThumbnailLink} alt="blog" className="h-full w-full object-contains rounded-lg o" />
                        </div>
                        <div className="mt-10"
                           dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}