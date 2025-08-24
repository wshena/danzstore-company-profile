import Button from "@/components/buttons/Button";
import DigitalServiceCard from "@/components/cards/DigitalServiceCard";
import PackageCard from "@/components/cards/PackageCard";
import TeamCard from "@/components/cards/TeamCard";
import ContentContainer from "@/components/container/ContentContainer";
import { DIGITAL_SERVICES, FEATURES, OUR_SERVICES, PACKAGE, TEAMS } from "@/const";
import { BookMarkIcon, CheckIcon, ComputerIcon, FeatherIcon, InstagramIcon, MegaPhoneIcon, PhoneIcon, SearchIcon, WhatsappIcon } from "@/icons";
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
              <p className="text-sm lg:text-md xl:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsa iure sint dolorum cum omnis.</p>
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

      {/* package */}
      <section id="about-us" className="relative overflow-hidden py-10 md:py-15 lg:py-25 transition-all duration-300 ease-in-out">
        {/* background color */}
        <div className="absolute inset-0 bg-[url(/image/bg-jasa-web-sby.png)] bg-cover opacity-30 z-0 h-[50%]"/>

        <ContentContainer>
          <div className="relative flex items-center flex-col gap-10">
            {/* heading */}
            <div className="text-center -space-y-1 mb-10">
              <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">paket jasa pembuatan <span className="text-purple-500">website</span></h1>
              <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Pesan sekarang paket website yang Anda inginkan dan dapatkan promonya</p>
            </div>

            {/* packages */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex items-center lg:gap-3 xl:gap-10 md:justify-between">
              {[...Array(4)].map((_, idx:number) => (
                <PackageCard item={PACKAGE} key={idx} />
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>
      
      {/* chat link */}
      <section id="chat-link" className="py-10 md:py-15">
        <ContentContainer>
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-0 md:items-center md:justify-between p-6 rounded-xl bg-white shadow-md">
            {/* typewriting */}
            <div className="flex items-center gap-5">
              <WhatsappIcon size={70} className="text-black" />
              <div className="-space-y-1">
                <h1 className="capitalize text-semibold text-[1rem] md:text-[1.7rem]">konsultasi gratis</h1>
                <span className="text-sm md:text-[1rem] text-gray-600">Grow Your Businnes with Our Service, Danzstore</span>
              </div>
            </div>

            {/* button start chat now */}
            <div className="hidden p-2 bg-gray-100 rounded-full w-full xl:w-[40%] md:flex items-center justify-between gap-5 xl:gap-0">
              <span className="md:ml-10 lg:ml-0 xl:ml-10 text-sm md:text-md xl:text-lg text-gray-500 capitalize">chat / call marketing</span>
              <Link href={'#'} className="transition-all duration-300 ease-in-out hover:scale-105">
                <div className="py-4 px-7 font-semibold text-white bg-blue-400 capitalize rounded-[50px]">
                  <span className="text-sm md:text-md">start chat</span>
                </div>
              </Link>
            </div>
            <Link href={'#'} className="md:hidden transition-all duration-300 ease-in-out hover:scale-105">
              <div className="py-4 px-7 font-semibold text-white bg-blue-400 capitalize rounded-[50px] text-center">
                <span className="text-sm md:text-md">start chat</span>
              </div>
            </Link>
          </div>
        </ContentContainer>
      </section>

      {/* our teamm */}
      <section id="chat-link" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex flex-col items-center gap-10">
            {/* heading */}
            <div className="text-center space-y-1">
              <span className="text-sm md:text-md text-gray-500 uppercase">our team</span>
              <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">tim profesional</h1>
            </div>

            {/* teams */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:flex items-center lg:justify-between gap-10 lg:gap-3 2xl:gap-10">
              {TEAMS.map((item:teamCardProps) => (
                <TeamCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* feature section */}
      <section id="feature" className="relative overflow-hidden py-10 md:py-15 lg:py-25">
        {/* background color */}
        <div className="absolute inset-0 bg-[url(/image/bg-jasa-web-sby.png)] bg-cover opacity-30 z-0 transform lg:translate-y-50 xl:translate-y-60"/>

        <ContentContainer>
          <div className="relative flex flex-col items-start gap-10">
            {/* typewriting and image */}
            <div className="flex flex-col gap-10 md:flex-row md:gap-0 items-center justify-between">
              {/* typewriting */}
              <div className="w-full md:w-[50%] space-y-6">
                <h1 className="capitalize text-[2rem] xl:text-[3rem] text-gray-700 font-semibold">
                  fitur yang akan didapat tiap paket <span className="text-purple-500">website</span>
                </h1>
                <p className="text-sm lg:text-md xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error doloribus officia nam sapiente nostrum ratione veniam architecto illum, consequatur voluptatum alias. In mollitia maiores aspernatur exercitationem itaque eum possimus!</p>
                <Button className="bg-purple-400 shadow-md cursor-pointer hover:scale-105 text-sm font-semibold text-white">
                  <span>start chat</span>
                </Button>
              </div>

              {/* image */}
              <div className="w-full h-[300px] md:w-[400px] md:h-[400px] lg:h-[500px] xl:w-[600px] xl:h-[700px]">
                <Image src={'/image/mobile-jasa-website-surabaya-rev.png'} alt="jasa-website-surabay-rev.png" width={500} height={500} className="w-full h-full" />
              </div>
            </div>

            {/* feature */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((item:any) => (
                <div key={item.id} className="p-5 rounded-lg flex flex-col gap-2 items-center text-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-white shadow-md">
                  <WhatsappIcon size={50} className="text-black" />
                  <h3 className="text-lg capitalize text-black">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* server hosting terbaik */}
      <section id="server-hosting-terbaik" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex flex-col gap-10 md:flex-row md:gap-0 items-center justify-between">
            {/* image */}
            <div className="w-full h-[300px] md:w-[400px] md:h-[400px] lg:h-[500px] xl:w-[600px] xl:h-[700px]">
              <Image src={'/image/mobile-jasa-website-surabaya-rev.png'} alt="jasa-website-surabay-rev.png" width={500} height={500} className="w-full h-full" />
            </div>

            {/* typewriting */}
            <div className="w-full md:w-[50%] space-y-6">
              <h1 className="capitalize text-gray-700 text-[2rem] xl:text-[3rem] font-semibold">Server hosting terbaik dengan load tercepat</h1>
              <p className="text-sm lg:text-md xl:text-lg">Dukungan teknis yang terampil, infrastruktur yang kuat, dan pemantauan proaktif PT ASA INOVASI SOFTWARE akan memastikan bahwa website Anda tetap online tanpa gangguan.</p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gray-600">
                    <CheckIcon size={10} className="text-white" />
                  </div>
                  <span className="text-md lg:text-lg text-gray-600 font-semibold capitalize">Website terlindungi teknologi enkripsi terbaru</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gray-600">
                    <CheckIcon size={10} className="text-white" />
                  </div>
                  <span className="text-md lg:text-lg text-gray-600 font-semibold capitalize">Jaminan kelancaran website setiap waktu</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gray-600">
                    <CheckIcon size={10} className="text-white" />
                  </div>
                  <span className="text-md lg:text-lg text-gray-600 font-semibold capitalize">Jaminan Uptime Hingga 99.9%</span>
                </li>
              </ul>
              <Button className="bg-purple-400 shadow-md cursor-pointer hover:scale-105 text-sm font-semibold text-white">
                <span>chat marketing</span>
              </Button>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section id="digital-service" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex flex-col items-start gap-8">
            {/* heading */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-content">
              <h1 className="capitalize text-gray-700 text-[2rem] xl:text-[3rem] font-semibold">Layanan Terbaik <span className="text-purple-500">digital</span> Marketing</h1>
              <p className="text-sm lg:text-md xl:text-lg md:w-[50%]">Jasa Website Surabaya juga menyediakan berbagai solusi untuk meningkatkan kesadaran merek (brand awareness) dan interaksi pelanggan (customer engagement).</p>
            </div>

            {/* digital service */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:flex items-start xl:justify-between gap-7">
              {DIGITAL_SERVICES.map((item:any, idx:number) => {
                const icon = [
                  <div className="p-3 rounded-md bg-orange-100">
                    <SearchIcon size={25} className="text-orange-400" />
                  </div>,
                  <div className="p-3 rounded-md bg-cyan-100">
                    <MegaPhoneIcon size={25} className="text-cyan-400" />
                  </div>,
                  <div className="p-3 rounded-md bg-red-100">
                    <InstagramIcon size={25} className="text-red-400" />
                  </div>,
                  <div className="p-3 rounded-md bg-green-100">
                    <BookMarkIcon size={25} className="text-green-400" />
                  </div>,
                ]
                return (
                  <DigitalServiceCard
                    key={item.id}
                    item={item} 
                    icon={icon[idx]} 
                  />
                )
              })}
            </div>
          </div>
        </ContentContainer>
      </section>

      <section id="portofolio" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex items-center flex-col gap-10">
            {/* heading */}
            <div className="space-y-1 text-center">
              <span className="text-sm md:text-md text-gray-500 uppercase">portofolio</span>
              <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">karya website dari Danzstore</h1>
            </div>

            {/* projects */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 lg:flex lg:items-center lg:justify-between">
              {[...Array(4)].map((_, idx:number) => (
                <div key={idx} className="lg:w-[200px] xl:w-[300px] h-[400px] bg-gray-200"></div>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}