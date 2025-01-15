import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <>
        <div>
            <div>
                <Appbar></Appbar>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 w-full px-10 pt-200 max-w-screen-xl pt-12">
                    <div className="col-span-8 ">
                        <div className=" col-span-8 text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            {blog.publishedDate}
                        </div>
                        <div className="">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4 b">
                        <div className="text-slate-400 text-lg">
                            Author
                        </div>
                        <div className="flex">
                            <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Author"}></Avatar>
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Author"}
                                </div>
                                <div className="pt-1 text-slate-500">
                                    Information About the user
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}