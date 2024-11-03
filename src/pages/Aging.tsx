import { Circle } from "lucide-react";

export const Aging = () => {
  return (
    <div className="bg-dust text-midnight text-xl">
      <div className="bg-sage">
        <div className="headline-top bg-inlet h-fit">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-accessdisplay font-bold text-dust text-center pt-12 pb-24">
            Healthy Cognitive Aging and Evaluations
          </h1>
        </div>
        <div className="headline-bottom bg-sand p-4">
          <div className="p-3 pt-16 grid gap-4 justify-center">
            <div className="grid sm:grid-cols-4 lg:grid-cols-5 items-center max-w-[1100px]">
              <div className="hidden cognitive-chevron sm:block h-36 bg-sage justify-self-center"></div>
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
              <div className="hidden cognitive-chevron sm:block bg-coral h-36 rotate-180 sm:col-start-4 lg:col-start-5 justify-self-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 w-full bg-sage"></div>
      <div>
        <div>
          <h2 className="text-4xl sm:text-6xl xl:text-7xl font-accessdisplay font-bold text-inlet text-center pt-12 pb-4">
            What to Expect
          </h2>
        </div>
        <div className="p-4 grid justify-items-center gap-8">
          <p className="p-4 max-w-[600px]">
            A cognitive evaluation at Mind Matters Memphis will be more
            comprehensive than a traditional dementia evaluation. The evaluation
            involves a three stage process: an initial interview, a
            comprehensive cognitive assessment, and a feedback session.
          </p>
          <div className="grid justify-center">
            <ul className="grid gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-12 max-w-[1000px]">
              <li className="border-4 border-coral p-4 rounded-md grid gap-4 md:rounded-none md:border-8 md:col-span-2 quote-frame-coral">
                <h3 className="bg-coral/55 text-midnight p-4 text-center rounded-sm font-bold h-fit text-2xl sm:mx-12">
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
              <li className="border-4 border-inlet p-4 rounded-md grid gap-4 md:rounded-none md:border-8 md:row-start-3 md:col-span-2 quote-frame-inlet">
                <h3 className="bg-inlet/55 text-midnight p-4 text-center rounded-sm font-bold h-fit text-2xl sm:mx-12">
                  Feedback Session
                </h3>
                <p>
                  Dr. Gould will share results and recommendations. This
                  appointment will focus on steps to promote healthy aging, with
                  self-oriented action steps to implement in the individual’s
                  daily life, tailored to their specific needs and lifestyle.
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
      <div className="bg-dust grid md:grid-cols-4 xl:grid-cols-5 py-8 lg:py-16">
        <div className="contact-curved-top bg-sage h-[10dvh] w-full md:hidden"></div>
        <div className="hidden xl:block xl:col-start-1 contact-curved-left bg-sage w-[15dvw] h-full justify-self-end"></div>
        <div className="grid justify-center md:col-start-1 md:col-span-3 xl:col-start-2">
          <div className="text-midnight bg-dust grid gap-4 justify-center relative text-xl py-8 sm:p-8 md:gap-8 md:max-w-[700px] md:py-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-accessdisplay font-bold uppercase">
              Evaluation Benefits
            </h2>
            <div>
              <ul className="px-4 grid gap-4">
                <li className="flex gap-4 ">
                  <Circle className="text-sage h-6 w-6 flex-shrink-0 mt-1" />
                  <p>
                    Provide answers to cognitive aging questions, or reassurance
                    that a person is cognitively aging normally
                  </p>
                </li>
                <li className="flex gap-4">
                  <Circle className="text-sage h-6 w-6 flex-shrink-0 mt-1" />
                  <p>
                    Inform a lifestyle, family, health, and/or medical plan to
                    promote healthy cognitive aging and maximize existing
                    function
                  </p>
                </li>
                <li className="flex gap-4">
                  <Circle className="text-sage h-6 w-6 flex-shrink-0 mt-1" />
                  <p>Establish a cognitive baseline for any future concern</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-curved-right bg-sage w-[22dvw] h-full hidden md:block justify-self-start xl:w-[15dvw]"></div>
        <div className="contact-curved-bottom bg-sage h-[10dvh] w-full md:hidden"></div>
      </div>
      <div>
        <div className="cognitive-curved-edge bg-inlet flex justify-center items-center sm:w-4/5 md:w-3/5 sm:mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-accessdisplay font-bold uppercase text-dust pt-24 pb-8">
            Details and Fees:
          </h2>
        </div>
        <div className="sm:w-3/4 md:w-1/2 xl:w-2/5 sm:mx-auto p-4 md:pt-8 md:pb-16">
          <div className="grid gap-4 p-4 justify-items-center">
            <div className="grid gap-4">
              <h4 className="font-bold">Cognitive Aging Evaluations</h4>
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
            <div className="cognitive-sparkle bg-inlet h-24 w-16"></div>
            <div className="grid gap-4">
              <h4 className="font-bold">Education Sessions</h4>
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
            <div className="cognitive-sparkle bg-inlet h-24 w-16"></div>
            <div className="grid gap-4">
              <h4 className="font-bold">Additional Services</h4>
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
            <div className="cognitive-sparkle bg-inlet h-24 w-16"></div>
            <div className="grid gap-4">
              <h4 className="font-bold">Bring Someone Along!</h4>
              <p>
                Patients undergoing a cognitive evaluation should bring someone
                to any and all appointments who can provide perspective on their
                cognition and daily functioning.
              </p>
            </div>
            <div className="cognitive-sparkle bg-inlet h-24 w-16"></div>
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
