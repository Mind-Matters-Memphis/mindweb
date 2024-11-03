export const Forensic = () => {
  return (
    <div className="bg-dust text-midnight text-xl">
      <div className="bg-sage">
        <div className="headline-top bg-inlet h-fit">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-accessdisplay font-bold text-dust text-center pt-12 pb-24">
            Forensic Evaluations
          </h1>
        </div>
        <div className="headline-bottom bg-midnight p-4">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-accessdisplay font-bold text-sand text-center pt-16 pb-8">
            Objective, Independent Neuropsychological Evaluations
          </h1>
          <div className="grid justify-items-center">
            <div className="text-sand p-4 pb-12 max-w-[624px]">
              <h3 className="font-bold text-2xl pb-2">Offering:</h3>
              <ul className="list-disc grid gap-4">
                <li>
                  <p>
                    <a
                      href="#medical-evals"
                      aria-label="Jump to Independent Medical Evaluation section"
                      className="underline"
                    >
                      Independent Medical Evaluations
                    </a>
                    {` (IME), including for workers’ compensation, disability, and
                  personal injury cases.`}
                  </p>
                  <ul className="list-[circle] pl-8 sm:pl-16">
                    <li>Neuropsychological IMEs</li>
                    <li>Psychological-only IMEs</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <a
                      href="#testamentary-evals"
                      aria-label="Jump to Testamentary Evaluation section"
                      className="underline"
                    >
                      Testamentary Evaluations
                    </a>
                    , i.e. to determine whether a person has the cognitive
                    capacity to put together (or make changes to) their will.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid justify-center bg-dust">
          <div className="bg-dust p-8 grid lg:grid-cols-3 lg:grid-rows-2 max-w-[1000px] gap-8 lg:gap-16 lg:py-16">
            <div id="medical-evals" className="lg:col-span-2">
              <div className="forensic-parallelogram-wrap max-w-[600px]">
                <div className="forensic-parallelogram bg-sage flex justify-center items-center w-[100%]">
                  <div className="drop-shadow-lg h-inherit w-[80%]">
                    <h2 className="forensic-parallelogram-lite bg-dust text-midnight font-accessdisplay flex justify-center items-center px-16 text-2xl sm:text-5xl">
                      <span className="text-center">
                        Independent Medical Evaluations
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="max-w-[600px] grid gap-4 pt-8 lg:pt-12">
                <p>
                  <span className="font-bold">
                    Neuropsychological Independent Medical Evaluations
                  </span>{" "}
                  (IMEs) provide an objective assessment of an individual’s
                  cognitive abilities after an injury or event, and determine
                  whether there is emotional or cognitive impact that can be
                  tied back to the event.
                </p>
                <p>
                  Forensic IMEs include a review of the individual’s medical
                  history, tests and assessments to evaluate cognitive and
                  behavioral function, and a written report to answer a specific
                  question posed by the case manager. The results of this IME
                  can be used to inform treatment decisions, determine
                  eligibility for disability benefits, or provide guidance for
                  legal proceedings.
                </p>
                <p className="italic">
                  Dr. Gould has experience as a plaintiff's and defense expert
                  witness. Forensic IMEs from Mind Matters Memphis have a rate
                  of $350/hour, and typically require 10-15 hours at a minimum.
                </p>
              </div>
            </div>
            <div className="forensic-chevron rotate-180 hidden bg-sage h-56 lg:block lg:row-start-1 lg:col-start-3 self-center justify-self-center"></div>
            <div
              id="testamentary-evals"
              className="lg:col-start-2 lg:col-span-2 lg:justify-self-start"
            >
              <div className="forensic-parallelogram-wrap max-w-[600px]">
                <div className="forensic-parallelogram bg-inlet flex justify-center items-center w-[100%]">
                  <div className="drop-shadow-lg h-inherit w-[80%]">
                    <h2 className="forensic-parallelogram-lite bg-dust text-midnight font-accessdisplay flex justify-center items-center px-16 text-2xl sm:text-5xl">
                      <span className="text-center">
                        Testamentary Evaluations
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="max-w-[600px] grid gap-4 pt-8 lg:pt-12">
                <p>
                  <span className="font-bold">Testamentary Evaluations</span>{" "}
                  are for individuals, families, and financial planners seeking
                  to protect their wealth. These cognitive evaluations establish
                  whether an individual is of sound mind and has the cognitive
                  capacity to make these important decisions. As such, they can
                  help safeguard against risky decisions or support the
                  soundness of an individual’s decisions, whatever the case may
                  be.
                </p>
                <p>
                  If your client or loved one’s cognition is changing, it may be
                  time to have an independent cognitive evaluation.
                </p>
                <p>
                  For an initial consultation regarding your case, please
                  contact{" "}
                  <a
                    href="tel:+19017767500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    901-776-7500
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@mindmattersmemphis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    info@mindmattersmemphis.com
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="forensic-chevron hidden bg-inlet h-56 lg:block lg:row-start-2 lg:col-start-1 self-center justify-self-center"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
