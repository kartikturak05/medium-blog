import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <>
        <div>
            <Appbar onAvatarClick={()=> { }}></Appbar>
            <div className="flex justify-center pt-8">
                <div className="max-w-screen-lg w-full">
                    <input onChange={async (e) => {
                         setTitle(e.target.value)
                    }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title "></input>
                    <div>
                        <form>
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 mt-4 ">
                                <div className="px-4 py-2 bg-white rounded-t-lg ">
            
                                    <textarea onChange={async(e)=>{
                                         setContent(e.target.value)
                                    }} id="comment" rows={6} className="w-full px-0 text-sm text-gray-900 bg-white outline-none" placeholder="Write a content...." required ></textarea>
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 border-t ">
                                    <button onClick={async () => {
                                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                            title,
                                            content
                                        },{
                                           headers:{
                                                Authorization: localStorage.getItem("token")
                                           } 
                                        });
                                        navigate(`/blog/${response.data.id}`)
                                        }} type="button" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                                        Publish Post
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}
