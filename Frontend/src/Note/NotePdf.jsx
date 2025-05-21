import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/Style.css"
const NotePdf = () => {
    const { subj } = useParams()

    const [CourseData, setCourseData] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await axios.post("https://notesflix-s5ki.vercel.app/course", `${subj}`, {
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                })
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        sendData()
    }, [subj])

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get(`https://notesflix-s5ki.vercel.app/Notepdf`)
                setCourseData(response.data)
                console.log(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getdata()
    }, [subj])

    
    if (loading) {
        return (
            <div className=" md:my-0 my-20 h-[50vh] md:h-full  flex items-center justify-between  ">
                <img src="/Loading.png" className='rounded-md mx-auto' alt="No Data found" />
            </div>
        );
    }

    return (
        <>
            {
                CourseData ?
                    <div className="h-full min-h-[100vh]  w-[90vw] md:w-[80vw] mx-auto bg-primary my-8 flex flex-col items-center ">
                        <h1 className="text-4xl my-8 font-semibold mx-14 text-center">Note of {CourseData.title} </h1>
                        <p className="mt-8 text-center mb-16 text-2xl"> {CourseData.description} </p>
                        {CourseData.data.map((e) => {
                            return <div key={e.page} className=" w-full flex justify-center">
                                <div>
                                    <p className=" text-center mx-10 my-10 text-xl font-semibold"> {e.page} </p>
                                    <div className="w-[60vw] mx-auto flex justify-center">
                                        <iframe className="my-4 iframe-container"
                                            src={`https://drive.google.com/file/d/${e.content}/preview`} ></iframe>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    :
                    <div className=" md:my-0 my-20 h-[50vh] md:h-full  flex items-center justify-between  ">
                        <img src="/maintain.jpg" className='rounded-md mx-auto' alt="No Data found" />
                    </div>
            }
        </>
    )
}

export default NotePdf 