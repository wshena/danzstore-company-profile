import Button from "@/components/buttons/Button";
import ContentContainer from "@/components/container/ContentContainer";
import { OUR_SERVICES } from "@/const";
import { ComputerIcon, FeatherIcon, InstagramIcon, MegaPhoneIcon, PhoneIcon, SearchIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Service = ({item, icon, color}:{item:linkProps, icon:React.ReactNode, color:string}) => {
  return (
    <Link href={item.link} className="group">
      <div className="flex flex-col items-center text-center gap-5">
        <div className={`group-hover:scale-105 p-5 md:p-8 lg:p-10 rounded-xl transition-all duration-300 ease-in-out ${color}`}>{icon}</div>
        <span className="group-hover:scale-105 transition-all duration-300 ease-in-out text-sm md:text-md lg:text-xl capitalize">{item.label}</span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <main className="">
      {/* landing section */}
      <section id='landing' className="relative overflow-hidden pt-20 md:pt-25">
        {/* background color */}
        <div className="absolute inset-0 bg-[url(/image/bg-jasa-web-sby.png)] bg-cover opacity-30 z-0 transform -skew-y-5 -translate-y-1/8"/>

        <ContentContainer>
          <div className="relative py-10 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-6">
            {/* typowriting */}
            <div className="w-full md:w-[50%] space-y-6">
              <h1 className="capitalize text-[2rem] lg:text-[3rem] font-semibold text-gray-700">
                jasa pembuatan <span className="text-purple-500">website</span> terbaik di surabaya
              </h1>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsa iure sint dolorum cum omnis.</p>
              <div className="flex items-center gap-2">
                <Link href={'#'}>
                  <Button className="bg-purple-400 shadow-md cursor-pointer hover:scale-105 text-sm font-semibold text-white">
                    <span>promo website</span>
                  </Button>
                </Link>
                <Link href={'#'}>
                  <Button className="bg-gray-100 cursor-pointer hover:bg-purple-400 text-sm font-semibold text-purple-600 group">
                    <span className="group-hover:text-white">more about us</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* image */}
            <div className="w-full h-[300px] md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[488px]">
              <Image src={'/image/jasa-website-surabay-rev.png'} alt="jasa-website-surabay-rev.png" width={500} height={500} className="w-full h-full" />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* our service */}
      <section id="our-services" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex flex-col gap-10 items-center">
            {/* heading */}
            <div className="text-center">
              <span className="uppercase mb-10 text-sm md:text-md text-gray-500 font-semibold">our service</span>
              <div className="mt-5 -space-y-1">
                <h1 className="capitalize text-[1rem] md:text-[2rem] font-semibold text-gray-700">
                  <span className="text-purple-500">website</span> profesional dan <span className="text-purple-500">SEO</span> bergaransi
                </h1>
                <h1 className="capitalize text-[1rem] md:text-[2rem] font-semibold text-gray-700">solusi digital terbaik untuk bisnis</h1>
              </div>
            </div>

            {/* services */}
            <div className="w-full xl:w-[90%] 2xl:w-[80%] grid grid-cols-2 gap-5 md:gap-0 md:flex md:items-center md:justify-between">
              {OUR_SERVICES.map((item:linkProps, idx:number) => {
                const IconAndColor = [
                  {
                    icon: <ComputerIcon size={30} className="text-black" />,
                    color: 'bg-red-100'
                  },
                  {
                    icon: <SearchIcon size={30} className="text-black" />,
                    color: 'bg-blue-100'
                  },
                  {
                    icon: <MegaPhoneIcon size={30} className="text-black" />,
                    color: 'bg-purple-100'
                  },
                  {
                    icon: <FeatherIcon size={30} className="text-black" />,
                    color: 'bg-red-100'
                  }
                ]
                return (
                  <Service item={item} key={item.id} icon={IconAndColor[idx].icon} color={IconAndColor[idx].color} />
                )
              })}
            </div>
          </div>
        </ContentContainer>
      </section>
      
      {/* abous us */}
      <section id="about-us" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center md:justify-between">
            {/* image */}
            <div className="relative w-full md:w-[45%] h-[300px] md:h-[400px] xl:h-[550px]">
              {/* decoration */}
              <div className="absolute top-0 left-0">
                <Image src={'/image/doodle1.svg'} width={100} height={100} alt="doodle-1" className="" />
              </div>

              <Image src={'/image/profil-jasa-website-surabaya-.webp'} width={300} height={300} alt="profil-jasa-website-surabaya-.webp" className="w-full h-full" />
            </div>

            {/* typewriter */}
            <div className="w-full md:w-[50%] space-y-6">
              <div className="space-y-1">
                <span className="text-sm md:text-md text-gray-500 uppercase">tentang kami</span>
                <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">jasa pembuatan <span className="text-purple-500">website</span> terbaik no.1 surabaya</h1>
              </div>
              <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum atque quasi porro aperiam. Alias quas dolores saepe quod, illo cupiditate cumque ipsum, vitae vero dicta a accusantium, perferendis aliquam illum.</p>
              <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non, voluptates natus nihil, ducimus minima omnis culpa dolor similique dignissimos quam doloribus sequi exercitationem labore?</p>
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}