"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [namingStyle, setNamingStyle] = useState("modern"); // Default naming style
  const { push } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Use the industryType as a parameter in the URL
    push(
      `/generate/${industryType}?keyword=${keyword}&namingStyle=${namingStyle}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="text-center m-10 w-full h-20">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-blue-600">
            Craft Your Unique Identity
          </h1>
          <p className="mt-4 text-gray-600 max-w-screen-md mx-auto">
            Choosing the right identity is pivotal. Let us guide you through the
            process of crafting a name that aligns perfectly with your brand
            ethos. Your input matters, and we're here to make it count.
          </p>
        </div>
      </header>
      <main className="mt-8 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-md flex flex-wrap justify-center"
        >
          <div className="flex flex-col items-stretch mb-4 mx-2">
            <label className="mb-2 text-blue-600 font-semibold">Keyword</label>
            <input
              type="text"
              placeholder="Keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col items-stretch mb-4 mx-2">
            <label className="mb-2 text-blue-600 font-semibold">
              Industry Type
            </label>
            <input
              type="text"
              placeholder="Industry type..."
              value={industryType}
              onChange={(e) => setIndustryType(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col items-stretch mb-4 mx-2">
            <label className="mb-2 text-blue-600 font-semibold">
              Naming Style
            </label>
            <select
              value={namingStyle}
              onChange={(e) => setNamingStyle(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="modern">Modern</option>
              <option value="traditional">Traditional</option>
              <option value="innovative">Innovative</option>
              <option value="minimalistic">Minimalistic</option>
              <option value="playful">Playful</option>
              <option value="professional">Professional</option>
              <option value="luxury">Luxury</option>
              <option value="global">Global</option>
            </select>
          </div>
          <button
            type="submit"
            aria-label="Generate names"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mx-2"
          >
            Generate names
          </button>
        </form>
        <section className="w-full p-20 mt-8 bg-blue-600 flex justify-center">
          {/* Card 1 */}
          <div className="max-w-xs mx-2 bg-white p-2 rounded-md shadow-md">
            <h2 className="text-base font-semibold text-blue-600 mb-2">
              Step 1: Enter Criteria
            </h2>
            <p className="text-sm text-gray-600">
              Start by providing us with some key information. Enter the
              industry type your business belongs to and your preferred naming
              style. The more specific you are, the more tailored our
              suggestions will be.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-xs mx-2 bg-white p-2 rounded-md shadow-md">
            <h2 className="text-base font-semibold text-blue-600 mb-2">
              Step 2: Name Generation
            </h2>
            <p className="text-sm text-gray-600">
              Once you've entered your criteria, our advanced OpenAI model gets
              to work. It processes your inputs to generate a diverse set of
              potential names that align with your industry and naming style
              preferences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs mx-2 bg-white p-2 rounded-md shadow-md">
            <h2 className="text-base font-semibold text-blue-600 mb-2">
              Step 3: Check Trademark
            </h2>
            <p className="text-sm text-gray-600">
              We take care of legal considerations. We check the generated names
              against trademark databases to ensure they are not already
              trademarked. This step is crucial to help you avoid any legal
              complications down the road.
            </p>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs mx-2 bg-white p-2 rounded-md shadow-md">
            <h2 className="text-base font-semibold text-blue-600 mb-2">
              Step 4: Check Domain Availability
            </h2>
            <p className="text-sm text-gray-600">
              We check the availability of domain names corresponding to the
              selected names. A strong online presence is essential, and we want
              to make sure your chosen names come with available domains.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
