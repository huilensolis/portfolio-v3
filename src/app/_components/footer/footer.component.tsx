import { Flower, Leaf, MoveRight, Snowflake, Sun } from "lucide-react";
import { Suspense } from "react";
import { GmailBtn } from "./gmail-btn.component";
import Link from "next/link";

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/huilensolis/",
  twitter: "https://www.x.com/solishuilen",
  gmail: "huilendev@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01dfd70e2536e235ea",
  github: "https://www.github.com/https://github.com/huilensolis",
};

export function Footer() {
  return (
    <>
      <footer
        className="w-full py-10 pt-16 dark:border-neutral-800 border-gray-300/20"
        id="contact"
      >
        <h1 className="text-[12rem] font-semibold dark:text-neutral-200">
          Contact
        </h1>
        <section>
          <ul className="grid grid-cols-3 gap-y-5 w-full dark:text-neutral-200 font-medium">
            <li className="flex items-center gap-1">
              Argentina <MoveRight className="w-4 h-4" />{" "}
              {new Date().toLocaleString("en-US", {
                timeZone: "America/Buenos_Aires",
                hour: "2-digit",
                hour12: false,
                hourCycle: "h24",
                minute: "2-digit",
              })}{" "}
              hs
            </li>
            <li className="flex gap-1 items-center">
              <Season />
              <Suspense fallback={"loading temperature..."}>
                <Temperature />
              </Suspense>
            </li>
            <li>
              <GmailBtn gmail={socialMediaLinks.gmail} />
            </li>
            <li>
              <Link href={socialMediaLinks.upwork} target="_blank">
                UpWork
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.twitter} target="_blank">
                Twitter
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.linkedin} target="_blank">
                Linkedin
              </Link>
            </li>
            <li>
              <Link href={socialMediaLinks.github} target="_blank">
                Github
              </Link>
            </li>
          </ul>
        </section>
      </footer>
      <div
        aria-hidden
        className="w-full h-96 pointer-events-none absolute bottom-0 left-0 mx-auto bg-[linear-gradient(to_top,_rgb(29_23_56/0.12)_0%,_transparent_100%)] dark:bg-[linear-gradient(to_top,_rgb(229_229_229_/0.10)_0%,_transparent_100%)]"
      ></div>
    </>
  );
}

function Season() {
  const month = new Date().getMonth();

  if (month > 11 || month < 2)
    return (
      <span className="flex gap-1 items-center">
        <Sun className="h-4 w-4 text-orange-400" /> Summer
      </span>
    );

  if (month > 2 && month < 6)
    return (
      <span className="flex gap-1 items-center">
        <Leaf className="h-4 w-4 text-amber-600" /> Autumn
      </span>
    );

  if (month > 5 && month < 9)
    return (
      <span className="flex items-center">
        <Snowflake className="h-4 w-4 text-sky-200" />
        Winter
      </span>
    );

  return (
    <span className="flex gap-1 items-center">
      <Flower className="h-4 w-4 text-lime-400" /> Spring
    </span>
  );
}

async function Temperature() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m&timezone=America%2FSao_Paulo&forecast_days=1",
    );

    const body: { current: { temperature_2m: number } } = await res.json();

    const temperature = body.current.temperature_2m;

    if (!temperature || isNaN(temperature)) return null;

    return <span>{Math.round(temperature)} °C</span>;
  } catch (error) {
    return null;
  }
}
