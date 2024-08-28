import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import ContributionGraph from "./components/pages/GithubCalendarComponent";
import HeroSvg from "./assets/icons/HeroSvg";
import { BiSolidDownload } from "react-icons/bi";
import Link from "next/link";

export default async function Home() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <Slide>
                <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {data.shortBio}
                </p>
              </Slide>
              <Slide delay={0.1}>
                <Social type="social" />
              </Slide>
              <Slide delay={0.1}>
                  <Link
                    href="./parth-marfatia-resume.pdf"
                    download
                    className="flex gap-2 px-3 w-fit items-center justify-center text-center hover:underline text-primary-color dark:bg-primary-bg bg-zinc-100 border border-transparent border-primary-color font-incognito font-semibold rounded-md py-3 text-lg"
                  >
                    <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                      Download Résumé 
                  </Link>
              </Slide>
      
            </div>
          ))}
        <Slide delay={0.14} className="h-96 w-full">
          <HeroSvg />
        </Slide>
      </section>
      <ContributionGraph />
      <Job />
    </main>
  );
}
