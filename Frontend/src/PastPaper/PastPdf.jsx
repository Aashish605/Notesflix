import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/Style.css"

const PastPdf = () => {
    const { subj } = useParams()

    const [CourseData, setCourseData] = useState()

    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await axios.post("https://notesflix-s5ki.vercel.app//course", `${subj}`, {
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
                const response = await axios.get(`https://notesflix-s5ki.vercel.app//Pastpdf`)
                setCourseData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getdata()
    }, [])


    return (
        <>
            {
                CourseData ?
                    <div className="h-full w-[90vw] md:w-[80vw] mx-auto bg-primary my-8 flex flex-col items-center ">
                        <h1 className="text-4xl my-8 font-semibold mx-10 text-center">{CourseData.title} </h1>
                        <p className="mt-8 mb-16 text-center text-2xl"> {CourseData.description} </p>
                        {CourseData.data.map((e) => {
                            return <div key={e.page}>
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

export default PastPdf
