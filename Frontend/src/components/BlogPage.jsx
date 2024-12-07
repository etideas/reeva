import React, { useState } from "react";

const BlogPage = () => {
  // Sample blog data
  const blogs = [
    {
      title:
        " The Art of Slow Travel: Rediscovering the World One Step at a Time",
      content: `
      In a world that celebrates speed and efficiency, slow travel feels like a quiet rebellion. It invites us to pause, to embrace the journey as much as the destination, and to experience the world in its raw, unfiltered beauty. But what exactly is slow travel, and why does it matter in today’s fast-paced society?

At its core, slow travel is about mindfulness. It’s trading the whirlwind checklist of tourist hotspots for deeper, more meaningful experiences. Instead of a jam-packed itinerary, slow travelers seek immersion—living like locals, savoring authentic cuisine, and taking time to understand the culture, history, and rhythm of a place.

For instance, imagine exploring a quaint European village. Instead of rushing to snap a selfie at the most Instagrammable locations, you spend a morning wandering cobblestone streets, chatting with a baker about her family’s recipes, or simply sitting in a sun-dappled square watching life unfold. It’s in these unhurried moments that you find the soul of a destination.

The benefits of slow travel extend beyond the personal. Environmentally, it’s a more sustainable choice. Taking the train instead of flying, staying in family-run accommodations, and supporting local businesses help reduce your carbon footprint and positively impact local economies.

Psychologically, slow travel can be transformative. It teaches patience, fosters curiosity, and encourages a deeper connection with oneself. In a world dominated by instant gratification, there’s something profoundly rewarding about letting go of the need to be constantly entertained.

So how do you embrace slow travel? Start small. Choose a single destination and spend a week or more truly exploring it. Opt for walking tours, take public transportation, or rent a bike to get around. Seek out local markets, attend community events, and try your hand at local crafts or cooking classes.

As you slow down, you’ll likely notice subtle, magical details you’d otherwise miss: the way the light filters through an ancient forest, the melody of a street musician, or the warmth of a stranger’s smile. These are the moments that linger long after the journey ends.

In the end, slow travel isn’t about moving at a snail’s pace; it’s about moving with intention. It’s a reminder that life is as much about the journey as the destination. So, pack light, breathe deeply, and let the world unfold before you, one step at a time.
For instance, imagine exploring a quaint European village. Instead of rushing to snap a selfie at the most Instagrammable locations, you spend a morning wandering cobblestone streets, chatting with a baker about her family’s recipes, or simply sitting in a sun-dappled square watching life unfold. It’s in these unhurried moments that you find the soul of a destination.

The benefits of slow travel extend beyond the personal. Environmentally, it’s a more sustainable choice. Taking the train instead of flying, staying in family-run accommodations, and supporting local businesses help reduce your carbon footprint and positively impact local economies.

Psychologically, slow travel can be transformative. It teaches patience, fosters curiosity, and encourages a deeper connection with oneself. In a world dominated by instant gratification, there’s something profoundly rewarding about letting go of the need to be constantly entertained.

So how do you embrace slow travel? Start small. Choose a single destination and spend a week or more truly exploring it. Opt for walking tours, take public transportation, or rent a bike to get around. Seek out local markets, attend community events, and try your hand at local crafts or cooking classes.

As you slow down, you’ll likely notice subtle, magical details you’d otherwise miss: the way the light filters through an ancient forest, the melody of a street musician, or the warmth of a stranger’s smile. These are the moments that linger long after the journey ends.

In the end, slow travel isn’t about moving at a snail’s pace; it’s about moving with intention. It’s a reminder that life is as much about the journey as the destination. So, pack light, breathe deeply, and let the world unfold before you, one step at a time.`,
      image: "src/assets/img/img1.jpg",
    },
    {
      title:
        "The Rise of Plant-Based Eating: A Movement Towards Health and Sustainability",
      content: `Once relegated to the realm of niche diets, plant-based eating has gone mainstream. Grocery store shelves are brimming with plant-based milks, meats, and cheeses, while restaurants from fast-food chains to Michelin-starred establishments are crafting menus centered around plants. But why has this dietary trend gained such traction, and what does it mean for the future of food?

At its heart, the plant-based movement is rooted in three key pillars: health, sustainability, and ethics. Let’s explore each of these in depth.

1. Health Benefits

Numerous studies have shown that diets rich in fruits, vegetables, whole grains, nuts, and seeds can significantly improve overall health. They’re linked to lower risks of heart disease, diabetes, and certain cancers. Beyond physical health, many proponents of plant-based diets report increased energy levels, better digestion, and even improved mental clarity.

Unlike restrictive diets that focus on cutting out food groups, plant-based eating emphasizes abundance. It encourages exploring a vibrant palette of flavors and textures, from the earthy richness of roasted root vegetables to the creamy decadence of avocado-based desserts. For many, this shift from deprivation to exploration makes the lifestyle more sustainable in the long run.

2. Sustainability

The environmental impact of traditional livestock farming is staggering. It’s a major contributor to deforestation, water pollution, and greenhouse gas emissions. A report by the United Nations has even suggested that reducing meat consumption is one of the most effective ways individuals can combat climate change.

Plant-based diets, on the other hand, require significantly fewer natural resources. Producing a pound of lentils, for example, uses a fraction of the water and land required to produce a pound of beef. As the global population continues to rise, shifting towards plant-based eating could play a critical role in ensuring food security for future generations.

3. Ethics

For many, adopting a plant-based diet is a deeply moral choice. The industrial meat and dairy industries are often criticized for their treatment of animals, with issues ranging from overcrowded living conditions to inhumane slaughter practices. Choosing plant-based alternatives allows individuals to align their dietary choices with their values, promoting a more compassionate food system.

Of course, transitioning to a plant-based lifestyle comes with challenges. Common concerns include nutritional adequacy (getting enough protein, B12, and omega-3s) and the perceived cost of plant-based foods. However, with proper planning and a growing array of affordable options, these hurdles are becoming easier to overcome.

Ultimately, plant-based eating is more than a diet; it’s a movement. It’s a call to rethink the way we nourish ourselves and our planet. Whether you’re ready to go fully plant-based or simply want to incorporate more plant-forward meals into your routine, every small step makes a difference. So, next time you sit down to eat, consider the power of your plate—it might just be the most impactful choice you make all day.`,
      image: "src/assets/img/img1.jpg",
    },
    {
      title: "C",
      content: "This is the content of Blog C.",
      image: "src/assets/img/img1.jpg",
    },
    {
      title: "D",
      content: "This is the content of Blog D.",
      image: "src/assets/img/img1.jpg",
    },
    { title: "E", content: "This is the content of Blog E." },
    { title: "F", content: "This is the content of Blog F." },
    { title: "G", content: "This is the content of Blog G." },
    { title: "H", content: "This is the content of Blog H." },
    { title: "I", content: "This is the content of Blog I." },
    { title: "J", content: "This is the content of Blog J." },
    { title: "A", content: "This is the content of Blog A." },
    { title: "B", content: "This is the content of Blog B." },
    { title: "C", content: "This is the content of Blog C." },
    { title: "D", content: "This is the content of Blog D." },
    { title: "E", content: "This is the content of Blog E." },
    { title: "F", content: "This is the content of Blog F." },
    { title: "G", content: "This is the content of Blog G." },
    { title: "H", content: "This is the content of Blog H." },
    { title: "I", content: "This is the content of Blog I." },
    { title: "J", content: "This is the content of Blog J." },
  ];

  // State to manage the currently displayed blog
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <div className=" bg-[url('./assets/shell.jpg')]  bg-cover">
      <div className="pt-12 px-10 bg-black bg-opacity-20 text-[#752220] backdrop-blur-[4px] min-h-screen">
        <div className="flex bg-black bg-opacity-[15%] rounded-2xl">
          {/* Index Section */}
          <aside
            className="w-1/4 border-r border-gray-300 p-4 overflow-y-auto"
            style={{
              maxHeight: "80vh",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <h2 className="text-lg font-bold mb-4">Chapter</h2>
            <ul className="space-y-2">
              {blogs.map((blog, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${
                    selectedBlog.title === blog.title
                      ? "bg-[#752220] text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedBlog(blog)}
                >
                  {blog.title}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Section */}
          <main
            className="w-3/4 p-8 pb-10 max-h-[80vh] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
            <p className="text-gray-900 mb-6">{selectedBlog.content}</p>
            {selectedBlog.image && (
              <div className="flex justify-center">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="max-w-full max-h-[500px] rounded"
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
