import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const InfoCard = ({ className }: { className?: string }) => {
  return (
    <div>
      <section id="count" className=" relative ">
        <div
          className={cn(`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`)}
        >
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display md:text-3xl text-xl tracking-tight text-primary sm:text-4xl">
              SUCCESSFULLY COMPLETED 7000+ Events
            </h2>
            <p className="mt-4 md:text-lg text-sm tracking-tight text-slate-700">
              Milestone Unlocked: 7000+ Events, Countless Smiles, and Endless
              Memories
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white md:p-5 p-1 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-primary">
                        <CountUp enableScrollSpy={true} end={7000} /> +
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 text-2xl">
                        CLIENT
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white md:p-5 p-1 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-primary">
                        <CountUp enableScrollSpy={true} end={1000} /> +
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 text-2xl">
                        COMPLETED EVENT
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white md:p-5 p-1 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-primary">
                        <CountUp enableScrollSpy={true} end={97} /> %
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 text-2xl">
                        SUCCESS RATE
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InfoCard;
