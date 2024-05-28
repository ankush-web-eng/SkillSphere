import { Button } from "../ui/button";

export default function Bottom() {
    return (
        <div className="w-full py-6">
            <div className="bg-gray-700 flex-col py-4 px-4 flex items-center justify-center">
                <h1 className="text-white text-3xl pt-6">
                    Contact Us
                </h1>
                <p className="py-2">
                    {" "}
                    a aawefwaeuygewf yuhwae wfhae8yhwe8y wae8yf hgwyaefg yawef yawe ywe
                    wef7 wyehgf ywe 8yweht tr hr dr{" "}
                </p>
                <div className="py-4"></div>
                <Button variant={'default'} className="bg-white hover:text-gray-500 text-black rounded-full px-6 py-1">GET IN TOUCH</Button>
                <div className="py-6"></div>
            </div>
        </div>
    )
}