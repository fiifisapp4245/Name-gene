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
    push(`/generate/${industryType}?keyword=${keyword}&namingStyle=${namingStyle}`);
};

  return (
    <div>
      <header>
        <h1 className="text-5xl font-bold mt-2">
          Craft Your Unique Identity
        </h1>
        <p className="">
          Choosing the right identity is pivotal. Let us guide you through the
          process of crafting a name that aligns perfectly with your brand
          ethos. Your input matters, and we're here to make it count.
        </p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            keyword
            <input
              type="text"
              placeholder="keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </label>
          <label>
            Industry Type
            <input
              type="text"
              placeholder="Industry type ..."
              value={industryType}
              onChange={(e) => setIndustryType(e.target.value)}
            />
          </label>
          <label>
            Naming Style
            <select
              value={namingStyle}
              onChange={(e) => setNamingStyle(e.target.value)}
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
          </label>
          <button type="submit" aria-label="Generate names">
            Generate names
          </button>
        </form>
      </main>
    </div>
  );
}

export default HomePage;