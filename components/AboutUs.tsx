
export default function AboutUsCards() {
    const info = [
        {
            photo: "./vatsal.jpg",
            name: "Vatsal Bateriwala",
            email: "vatsalbateriwala562005@gmail.com",
            call: "8401062005",
            link1: "https://www.linkedin.com/in/vatsal-bateriwala-378b89276/",
            link2: "https://github.com/Vatsal565",
            link3: "https://www.instagram.com/_vatsal__05/"
        },
        {
            photo: "./priya.jpg",
            name: "Priya Bhanderi",
            email: "priyabhanderi2@gmail.com",
            call: "9328805046",
            link1: "https://www.linkedin.com/in/priya-bhanderi-7b0b1227a/",
            link2: "https://github.com/Priya584",
            link3: "https://www.instagram.com/_bhanderi_892/"
        },
        {
            photo: "./diya.jpg",
            name: "Diya Pansheriya",
            email: "pansheriyadiya@gmail.com",
            call: "9408532497",
            link1: "https://www.linkedin.com/in/diya-pansheriya-02aa462a9/",
            link2: "https://github.com/Diya5772",
            link3: "https://www.instagram.com/_diya_pa27/"
        },
        {
            photo: "./miten.jpg",
            name: "Miten Gandhi",
            email: "mjgandhi2305@gmail.com",
            call: "8799377093",
            link1: "https://www.linkedin.com/in/miten-j-gandhi-0917471a9/",
            link2: "https://github.com/mjgandhi2305",
            link3: "https://www.instagram.com/miten_2305/"
        }
    ]


    return <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {
            info.map(item =><div className="relative w-[340px] h-[370px] my-16" key={item.name}>
                <div className="absolute w-[100%] h-[100%] transition duration-500 card shadow2">
                    <div className="thefront absolute w-[100%] h-[100%]">
                        <div className="shadow2">
                            <img src={item.photo} alt="photo1" className="object-cover object-center w-[340px] h-[370px]" />
                        </div>
                    </div>
                    <div className="theback absolute w-[100%] h-[100%] bg-gradient-to-t from-slate-500 to-slate-50 px-6 py-11">
                        <div className="mb-4">
                            <div className="text-3xl font-bold">
                                {item.name}
                            </div>
                            <div className="text-md text-gray-700">B.Tech in Artificial Intelligence</div>
                        </div>
    
                        <div className="text-md flex gap-2 items-start mb-2">
                            <img src="/college.svg" alt="college" />
                            <p>Sardar Vallabhbhai National Institute of Technology - Surat , Gujarat</p>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/mail.svg" alt="mail" />
                            <p>{item.email}</p>
                        </div>
                        <div className="flex gap-2 items-center mb-5">
                            <img src="/call.svg" alt="call" />
                            <p>{item.call}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href={item.link1}> <img src="./linkedin.svg" alt="linkedin" className="w-10 h-10 cursor-pointer" /></a>
                            <a href={item.link2}> <img src="./github.svg" alt="github" className="w-10 h-10 cursor-pointer" /></a>
                            <a href={item.link3}> <img src="./instagram.svg" alt="instagram" className="w-10 h-10 cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
            </div>)
        }

        
    </div>
}