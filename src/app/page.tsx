import Button from "@/components/buttons/Button";
import ContentContainer from "@/components/container/ContentContainer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-25 md:pt-30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url(/image/bg-jasa-web-sby.png)] bg-cover opacity-30 z-0 transform -skew-y-5 -translate-y-1/8"/>
      <ContentContainer>
        <section id="landing" className="relative py-10 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-6">
          {/* typowriting */}
          <div className="w-full md:w-[50%] space-y-6">
            <h1 className="capitalize text-[2rem] lg:text-[3rem] font-semibold">
              jasa pembuatan <span className="text-purple-500">website</span> terbaik di surabaya
            </h1>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsa iure sint dolorum cum omnis.</p>
            <div className="flex items-center gap-2">
              <Link href={'#'}>
                <Button className="bg-purple-400 shadow-md cursor-pointer hover:scale-105 text-sm font-semibold">
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
        </section>
      </ContentContainer>
    </main>
  );
}
