import { useEffect } from "react";
import { Circle, HandHeart } from "lucide-react";
// could use Brain icon instead of HandHeart

export const Aging = () => {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1,
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-dust text-midnight text-xl">
      <div className="bg-sage">
        <div className="headline-top bg-inlet h-fit">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-accessdisplay font-bold text-dust text-center pt-12 pb-24">
            Healthy Cognitive Aging and Evaluations
          </h1>
        </div>
        <div className="headline-bottom bg-dust p-4">
          <div className="p-3 pt-16 grid gap-4 justify-center">
            <div className="grid sm:grid-cols-4 lg:grid-cols-5 items-center max-w-[1100px]">
              <div className="hidden cognitive-chevron sm:block h-36 bg-sage justify-self-center">
                <span className="visually-hidden">
                  Curved chevron (arrow), sage color, serving as a decorative
                  element, pointing at the cognitive aging evaluations
                  paragraph.
                </span>
              </div>
              <p className="sm:col-start-2 sm:col-span-3">
                <span className="font-bold">Cognitive Aging Evaluations</span>{" "}
                at Mind Matters Memphis are for individuals who wish to
                establish a cognitive baseline, maintain their long-term brain
                health, and encourage healthy cognitive aging.{" "}
                <span className="italic">
                  We aim to catch cognitive concerns early.
                </span>
              </p>
            </div>
            <div className="grid sm:grid-cols-4 lg:grid-cols-5 items-center max-w-[1100px]">
              <p className="sm:col-start-1 sm:col-span-3 lg:col-start-2">
                Increased risk factors for cognitive decline can include: family
                history of memory concerns, an immediate family member who was
                diagnosed with dementia, personal history of moderate or severe
                traumatic brain injury (TBI), or repeated concussions.
              </p>
              <div className="hidden cognitive-chevron sm:block bg-coral h-36 rotate-180 sm:col-start-4 lg:col-start-5 justify-self-center">
                <span className="visually-hidden">
                  Curved chevron (arrow), coral color, serving as a decorative
                  element, pointing at the increased risk factors paragraph.
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-4 lg:grid-cols-5 items-center max-w-[1100px] pt-4">
              <p className="sm:col-start-2 sm:col-span-3 lg:col-start-2 italic">
                <span className="font-bold">Bring someone along!</span> Patients
                undergoing a cognitive evaluation should bring someone to any
                and all appointments who can provide perspective on their
                cognition and daily functioning.
              </p>
              <HandHeart className="hidden sm:block text-inlet h-16 w-16 sm:col-start-1 lg:col-start-1 row-start-1 self-center justify-self-center" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative mt-24">
        <div className="absolute bottom-0 left-0 border-b-[96px] border-sage border-t-0 border-l-100w border-l-dust z-10"></div>
      </div>
      <div className="relative">
        <div className="absolute bg-sage w-0 h-0 top-0 left-0 z-0 border-l-[50dvw] border-dust border-r-[50cqw] border-t-[8rem] sm:border-t-[10rem] xl:border-t-25 border-t-sage">
          <span className="visually-hidden">
            A decorative triangle element, sage green color, pointing downward
            at the services section.
          </span>
        </div>
      </div>
      <div>
        <div className="pb-12 sm:pb-16 xl:pb-20">
          <h2 className="underline text-4xl sm:text-5xl xl:text-7xl font-accessdisplay font-bold text-midnight text-center xl:pt-12 pb-4 p-2 sm:pt-4 z-20 relative">
            What to Expect
          </h2>
        </div>
        <div className="p-4 sm:px-8 md:px-12 lg:px-16 grid justify-items-center gap-8">
          <p className="p-4 max-w-[600px] z-20">
            A Cognitive Aging Evaluation at Mind Matters Memphis will be more
            comprehensive than a traditional dementia evaluation. The evaluation
            involves a three stage process: an initial interview, a
            comprehensive cognitive assessment, and a feedback session.
          </p>
          <div className="grid justify-center">
            <ul className="grid gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-12 max-w-[1000px]">
              <li className="border-4 border-inlet p-4 rounded-md grid gap-4 md:rounded-none md:border-8 md:col-span-2 quote-frame-inlet">
                <h3 className="bg-inlet/55 text-midnight p-4 text-center rounded-sm font-bold h-fit text-2xl sm:mx-12">
                  Initial Interview
                </h3>
                <p>
                  This hour-long interview will take the patient’s history,
                  discuss initial concerns, and establish goals.
                </p>
                <p>
                  At the end of the session, we will schedule the cognitive
                  assessment.
                </p>
              </li>
              <li className="border-4 border-sage p-4 rounded-md grid gap-4 md:rounded-none md:border-8 md:row-start-2 md:col-start-2 md:col-span-2 quote-frame-sage">
                <h3 className="bg-sage/75 text-midnight p-4 text-center rounded-sm font-bold h-fit text-2xl sm:mx-12">
                  Assessment
                </h3>
                <p>
                  The assessment evaluates multiple cognitive domains, including
                  memory, attention, language, and executive functioning.
                </p>
                <p>
                  The duration of the session varies, depending on the patient's
                  goals and concerns.
                </p>
                <p>
                  At the conclusion of the assessment, we will schedule the
                  feedback session.
                </p>
              </li>
              <li className="border-4 border-coral p-4 rounded-md grid gap-4 md:rounded-none md:border-8 md:row-start-3 md:col-span-2 quote-frame-coral">
                <h3 className="bg-coral/55 text-midnight p-4 text-center rounded-sm font-bold h-fit text-2xl sm:mx-12">
                  Feedback Session
                </h3>
                <p>
                  Dr. Gould will share results and recommendations. This
                  appointment will focus on ways to promote healthy aging. Dr.
                  Gould will provide self-oriented action steps to implement in
                  the individual’s daily life, tailored to their specific needs
                  and lifestyle.
                </p>
                <p>
                  Depending on the results, a follow-up plan can include repeat
                  testing at 1, 2, or 5-year intervals.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dust grid md:grid-cols-4 2xl:grid-cols-6 pt-8 lg:pt-16">
        <div className="grid justify-center md:col-start-1 md:col-span-3 2xl:col-start-2">
          <div className="text-midnight bg-dust grid gap-4 justify-center relative text-xl py-8 sm:p-8 md:gap-8 md:max-w-[768px] md:py-16">
            <div className="px-8 sm:px-0 text-3xl sm:text-4xl md:text-5xl text-center font-accessdisplay font-bold uppercase">
              <h2 className="">Benefits of a Cognitive Aging Evaluation</h2>
            </div>
            <div>
              <ul className="pl-4 pr-8 grid gap-4">
                <li className="flex gap-4 ">
                  <span className="h-5 w-5 rounded-full bg-sage content-[''] shrink-0 mt-1 md:hidden"></span>
                  <Circle className="hidden md:block text-sage h-6 w-6 shrink-0 mt-1" />
                  <p>
                    Provide answers to cognitive aging questions, or reassurance
                    that a person is cognitively aging normally
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="h-5 w-5 rounded-full bg-sage content-[''] shrink-0 mt-1 md:hidden"></span>
                  <Circle className="hidden md:block text-sage h-6 w-6 flex-shrink-0 mt-1" />
                  <p>
                    Inform a lifestyle, family, health, and/or medical plan to
                    promote healthy cognitive aging and maximize existing
                    function
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="h-5 w-5 rounded-full bg-sage content-[''] shrink-0 mt-1 md:hidden"></span>
                  <Circle className="hidden md:block text-sage h-6 w-6 flex-shrink-0 mt-1" />
                  <p>Establish a cognitive baseline for any future concern</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-chevron rotate-180 bg-sage h-1/2 lg:h-2/3 hidden md:block self-center justify-self-start 2xl:justify-self-center">
          <span className="visually-hidden">
            Chevron arrow art, sage color, serving as a decorative element on
            larger screens.
          </span>
        </div>
      </div>
      <div>
        <div className="relative min-h-[288px] xl:min-h-[480px] bg-dust flex justify-center items-center">
          <span className="visually-hidden">
            A decorative parallelogram element, sky blue color, that runs the
            width of the page and serves as the backdrop for the section title.
          </span>
          <div className="absolute top-0 right-0 border-t-[96px] xl:border-t-[192px] border-t-dust border-b-0 border-r-100w border-r-inlet"></div>
          <div className="absolute h-24 w-full bg-inlet"></div>
          <div className="absolute bottom-0 left-0 border-b-[96px] xl:border-b-[192px] border-dust border-t-0 border-l-100w border-l-inlet"></div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-accessdisplay font-bold uppercase text-dust relative z-50">
            Details and Fees:
          </h2>
        </div>
        <div className="sm:w-3/4 md:w-1/2 xl:w-2/5 sm:mx-auto p-4 md:pt-8 md:pb-16">
          <div className="grid gap-4 p-4 justify-items-center">
            <div className="grid gap-4">
              <h3 className="font-bold">Cognitive Aging Evaluations</h3>
              <p>
                These are appropriate for individuals 70 or older with signs of
                memory loss. The evaluation includes a review of relevant
                records and an interview, 1.5 to 2 hours of testing, and one
                feedback session to go over results and recommendations.
              </p>
              <div className="text-midnight/65 justify-self-end pr-8">
                Cost:{" "}
                <span className="text-midnight font-semibold">$1,000</span>
              </div>
            </div>
            <div className="cognitive-parallelogram-mini bg-inlet w-40 m-4">
              <span className="visually-hidden">
                Small blue parallelogram, serving to delineate items.
              </span>
            </div>
            <div className="grid gap-4">
              <h3 className="font-bold">Education Sessions</h3>
              <p>
                Sessions with caregivers (i.e., family members or paid
                caregivers) to discuss disease characteristics, care planning,
                and help families understand where to go from here.
              </p>
              <div className="text-midnight/65 justify-self-end pr-8">
                Rate:{" "}
                <span className="text-midnight font-semibold">$250/hour</span>
              </div>
            </div>
            <div className="cognitive-parallelogram-mini bg-inlet w-40 m-4">
              <span className="visually-hidden">
                Small blue parallelogram, serving to delineate items.
              </span>
            </div>
            <div className="grid gap-4">
              <h3 className="font-bold">Additional Services</h3>
              <p>
                Additional results and recommendations appointments,
                consultation with other providers or family members, etc. Rate
                is prorated.
              </p>
              <div className="text-midnight/65 justify-self-end pr-8">
                Rate:{" "}
                <span className="text-midnight font-semibold">$250/hour</span>
              </div>
            </div>
            <div className="cognitive-parallelogram-mini bg-inlet w-40 m-4">
              <span className="visually-hidden">
                Small blue parallelogram, serving to delineate items.
              </span>
            </div>
            <div className="grid gap-4 pb-8">
              <p>
                While not a Medicare provider, Mind Matters Memphis guarantees
                Cognitive Evaluation Feedback within 10 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
