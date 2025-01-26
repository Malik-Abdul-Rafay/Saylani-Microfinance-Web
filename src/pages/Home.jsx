import React from "react";
import Card from "../compunent/Card";
import { useNavigate } from "react-router-dom";

function Home() {
    const Navigate = useNavigate()

    const wedding = () => {
        alert("done")
        Navigate("/wedding")
    }
    const construction = () => {
        alert("done")
        Navigate("/construction")
    }
    const BuisnessLoan = () => {
        alert("done")
        Navigate("/businesss")
    }
    const EducationLoan = () => {
        alert("done")
        Navigate("/education")
    }

  return (
    <div className="mt-10">
      <img
        src="https://www.investopedia.com/thmb/X8yWQhI0Vg3OqsANPIIU5zoaslI=/5894x3901/filters:no_upscale():max_bytes(150000):strip_icc()/loan-text-written-on-wooden-block-with-stacked-coins-955530262-08c17c0eb3634e6daf780bdd9ac1d194.jpg"
        className="w-[100%] h-screen"
      />

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Our Services
        </h1>

        {/* Flex container for inline cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Card 1 */}
          <div onClick={wedding} className=" cursor-pointer hover:scale-110">

          <Card
          
            imgSrc="https://www.investopedia.com/thmb/X8yWQhI0Vg3OqsANPIIU5zoaslI=/5894x3901/filters:no_upscale():max_bytes(150000):strip_icc()/loan-text-written-on-wooden-block-with-stacked-coins-955530262-08c17c0eb3634e6daf780bdd9ac1d194.jpg"
            title="Wedding Loan"
            description="This is the description for service one."
          />
          </div>
          <div onClick={construction} className=" cursor-pointer hover:scale-110">


          {/* Card 2 */}
          <Card
            imgSrc="https://www.investopedia.com/thmb/X8yWQhI0Vg3OqsANPIIU5zoaslI=/5894x3901/filters:no_upscale():max_bytes(150000):strip_icc()/loan-text-written-on-wooden-block-with-stacked-coins-955530262-08c17c0eb3634e6daf780bdd9ac1d194.jpg"
            title="Construction Loan"
            description="This is the description for service two."
          />

          </div>
          <div onClick={BuisnessLoan} className=" cursor-pointer hover:scale-110">

          {/* Card 3 */}
          <Card
            imgSrc="https://www.investopedia.com/thmb/X8yWQhI0Vg3OqsANPIIU5zoaslI=/5894x3901/filters:no_upscale():max_bytes(150000):strip_icc()/loan-text-written-on-wooden-block-with-stacked-coins-955530262-08c17c0eb3634e6daf780bdd9ac1d194.jpg"
            title="Business Startup Loan"
            description="This is the description for service three."
          />
          </div>

          {/* Card 4 */}
          <div onClick={EducationLoan} className=" cursor-pointer hover:scale-110">

          <Card
            imgSrc="data:image/jpeg;base64,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"
            title="Education Loan"
            description="This is the description for service four."
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
