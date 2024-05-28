import { useState } from "react"
import { Button } from "../ui/button"

export default function Hero(){

    const [email,setEmail] = useState("")

    return (
        <div className="flex flex-col md:flex-row py-10 md:w-screen" id="hero">
            <div className="flex flex-col md:py-28 md:px-12 md:w-1/2">
                <h1 className="text-5xl">
                    DISCOVER THE EXCEPTIONAL SERVICES AT SKILL SPHERE 
                </h1>
                <p className="text-gray-500 md:py-20">
                    At Skill Sphere, we offer a comprehensive range of services to meet all your digital needs.
                    From Web Development to graphic design, we have got you covered.
                </p>
                <form className="flex space-x-6 items-center">
                    <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="rounded-sm py-2 px-4 text-black border-2 border-slate-600 "
                    name="email"
                    id="email" />
                    <Button type="submit" size={'lg'} variant={'default'}>Explore Services</Button>
                </form>
            </div>
            <div className="w-1/2 h-auto">
                <div className="px-3 bg-slate-500 w-5/6 h-full"></div>
            </div>
        </div>
    )
}