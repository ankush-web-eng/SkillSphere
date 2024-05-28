import { useState } from "react"
import { Button } from "../ui/button"

export default function Hero(){

    const [email,setEmail] = useState("")

    return (
        <div className="flex flex-col md:flex-row py-10 md:w-screen max-md:space-y-6 max-md:px-4" id="hero">
            <div className="flex flex-col md:py-28 md:px-12 md:w-1/2 max-md:space-y-6">
                <h1 className="text-5xl max-md:text-3xl">
                    DISCOVER THE EXCEPTIONAL SERVICES AT SKILL SPHERE 
                </h1>
                <p className="text-gray-500 md:py-20">
                    At Skill Sphere, we offer a comprehensive range of services to meet all your digital needs.
                    From Web Development to graphic design, we have got you covered.
                </p>
                <form className="flex md:space-x-6 space-x-2 items-center max-md:max-w-screen">
                    <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="rounded-sm py-2 md:px-4 px-1 text-black border-2 border-slate-600 "
                    name="email"
                    id="email" />
                    <Button className="py-5" type="submit" size={'lg'} variant={'default'}>Explore</Button>
                </form>
            </div>
            <div className="md:w-1/2 w-full md:h-auto h-80 flex justify-center">
                <div className="px-3 bg-slate-500 w-5/6 h-full"></div>
            </div>
        </div>
    )
}