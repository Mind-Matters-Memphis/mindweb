import { Title } from "../components/HomeTitle";
import calm from "../assets/imgs/Calm.jpg"
import contemplative from "../assets/imgs/InDeepThought.jpg"
import { ListItem } from "../components/HomeListItem";
export const Home = () => {
      // background image of initial block
      // Mind Matters Memphis title
      // buttons for Learn More and Contact
      // block for Our Mission
      //
      const listItems = [
        {
          title: "Clinical Expertise",
          text: "Dr. Gould has been a neuropsychological clinician for 15 years.",
          url: "/clinical-neuropsychology"
        },
        {
          title: "Forensic Evaluations",
          text: "Specialized forensic evaluations for legal and court-related matters.",
          url: "/forensic-evaluations"
        },
        {
          title: "Cognitive Aging",
          text: "Support and strategies for healthy cognitive aging and memory care.",
          url: "/cognitive-aging"
        }
      ]
  return ( 
    <div>
      <Title />
      <div className="bg-dust lg:grid lg:grid-cols-4">
        <div className="hidden lg:block col-span-2 p-12">
          <img src={calm} alt="Young East Asian Woman in Cozy Work Environment" className="object-cover rounded-xl"/>
        </div>
        <div className="text-2xl p-4 pb-12 flex flex-col justify-center text-center lg:col-span-2 lg:text-4xl lg:text-start">
          <h2 className="text-midnight py-4">Our Mission</h2>
          <p className="text-inlet">Providing comprehensive neuropsychological care to enhance cognitive health and well being.</p>
        </div>
      </div>
      <div className="bg-midnight p-4 lg:grid lg:grid-cols-4">
        <div className="flex flex-col justify-center lg:col-span-2 lg:px-8">
          <h2 className="text-sand py-4 self-center lg:text-4xl">Why Choose Us</h2>
          <ul className="">
            {
              listItems.map((item, index) => <ListItem key={index} title={item.title} text={item.text}/>)
            }
          </ul>
        </div>
        <div className="hidden lg:block col-span-2 p-12">
          <img src={contemplative} alt="Young Black Man in Contemplation" className="object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  );
}