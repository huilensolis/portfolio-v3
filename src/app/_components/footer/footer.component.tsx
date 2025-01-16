import { ArrowUpRight, ArrowUpRightSquare, Flower, Leaf, MoveRight, Snowflake, Sun } from "lucide-react";
import { Suspense } from "react";
import { GmailBtn } from "./gmail-btn.component";
import Link from "next/link";

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/huilensolis/",
  twitter: "https://www.x.com/solishuilen",
  gmail: "huilendev@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01dfd70e2536e235ea",
  github: "https://www.github.com/huilensolis",
};

export function Footer() {
  return (
    <footer className="w-full py-10 pt-16 border-gray-300/20" id="contact">
      <h1 className="text-6xl sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-semibold font-fraunces">Contact</h1>
      <section>
        <ul className="flex flex-col sm:grid grid-cols-3 gap-y-5 w-full font-medium">
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
            <Link href={socialMediaLinks.upwork} target="_blank" className="flex items-center group">
              UpWork <ArrowUpRight className="w-4 h-4 duration-150 transition-all group-hover:scale-125" />
            </Link>
          </li>
          <li>
            <Link href={socialMediaLinks.twitter} target="_blank" className="flex items-center group">
              Twitter
               <ArrowUpRight className="w-4 h-4 duration-150 transition-all group-hover:scale-125" />
            </Link>
          </li>
          <li>
            <Link href={socialMediaLinks.linkedin} target="_blank" className="flex items-center group">
              Linkedin<ArrowUpRight className="w-4 h-4 duration-150 transition-all group-hover:scale-125" />
            </Link>
          </li>
          <li>
            <Link href={socialMediaLinks.github} target="_blank" className="flex items-center group">
              Github<ArrowUpRight className="w-4 h-4 duration-150 transition-all group-hover:scale-125" />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

function Season() {
  const month = new Date().getMonth();

  if (month > 11 || month < 2)
    return (
      <span className="flex gap-1 items-center">
        Summer <Sun className="h-4 w-4 text-orange-400" />
      </span>
    );

  if (month > 2 && month < 6)
    return (
      <span className="flex gap-1 items-center">
        Autumn <Leaf className="h-4 w-4 text-amber-600" />
      </span>
    );

  if (month > 5 && month < 9)
    return (
      <span className="flex items-center">
        Winter
        <Snowflake className="h-4 w-4 text-sky-200" />
      </span>
    );

  return (
    <span className="flex gap-1 items-center">
      Spring <Flower className="h-4 w-4 text-lime-400" />
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
