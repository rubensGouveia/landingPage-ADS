import { AboutStudio } from "@/components/About";
import { AboutClasses } from "@/components/AboutClasses";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutStudio />
      <AboutClasses />
      {/* <Testimonials /> */}

      <Footer />
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-center p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex ">
    //     <img
    //       src={"/acimadosolado.png"}
    //       alt="Logo do acima do Solado"
    //       className="dark:invert"
    //       width={200}
    //       height={200}
    //     />
    //   </div>
    //   <h1 className="text-4xl dark:text-white my-8">
    //     Landing Page Acima do Solado VIP
    //   </h1>
    //   <a
    //     href="https://www.instagram.com/acimadosolado/"
    //     target="_blank"
    //     className="ml-3 text-gray-400"
    //     aria-label="acessar o instagram da arcof"
    //   >
    //     <svg viewBox="0 0 50 50" width={50}>
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         className="w-5 h-5"
    //         viewBox="0 0 24 24"
    //       >
    //         <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //         <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1-3h.01"></path>
    //       </svg>
    //     </svg>
    //   </a>
    // </main>
  );
}
