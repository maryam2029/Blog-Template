import React from 'react'
import Image from 'next/image'
function Article() {
  return (
    <div>
          <div className="mx-auto w-screen max-w-7xl px-2 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Exploring New Articles
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
Ideas,trends,and inspiration for a brighter future
      </p>
    </div>
  </div>
{/* </section> */}
{/* ---------- Blog Cards-------------- */}
<div className="flex flex-wrap justify-evenly gap-4 p-4 bg-white">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs  w-64 text-sm">
  <img alt="" src="/image-1.png" className="h-45 w-full object-cover"/>

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        Digital Declutter :
Cutting the Noise in a Hyperconnected World
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     In today’s hyperconnected world, the lines between work, leisure, and rest have blurred significantly. 
     Notifications, endless streams of content, and the need to always stay connected often create 
     a digital noise that impacts mental well-being, focus, and productivity. This is where the concept of
      digital declutter comes into play.
    </p>

    <a href="/digital-culture" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </a>
  </div>
</article>

{/* ---------------2--------------------- */}
<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs  w-64 text-sm">
  <img alt="" src="/image-2.png" className="h-45 w-full object-cover"/>

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
Eco-Friendly Homes:
The Future of Real Estate
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
The real estate industry is undergoing a significant transformation 
as eco-friendly homes gain popularity among buyers and developers alike.
 With increasing awareness of climate change and the need for sustainable 
 living, eco-friendly homes represent not only a lifestyle choice 
but also a critical step toward reducing environmental impact.
    </p>

    <a href="/eco-friendly" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </a>
  </div>
</article>
{/* ----------------3-------------------- */}
<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs w-64 text-sm ">
  <img alt="" src="/image-3.png" className="h-45 w-full object-cover"/>

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
A Foodie’s Guide to Europe:
Best Culinary Experiences by Country
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
Europe is a treasure trove of culinary delights, offering a diverse array 
of flavors, techniques, and traditions. For food enthusiasts, the continent
 provides endless opportunities to
 indulge in authentic dishes and unforgettable dining experiences.
    </p>

    <a href="/foodie-guide" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </a>
  </div>
</article>
</div>
{/* ---------- Blog Cards-------------- */}

<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  {/* -------------------------4------------------------------ */}
  <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs w-64 text-sm">
  <img alt="" src="/image-4.png" className="h-45 w-full object-cover"/>

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
     The Art of Black-and-White Photography
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Black-and-white photography is a timeless art form that transcends
       trends and technology. By stripping away color, this medium
        emphasizes composition, texture, and emotion,
       creating images that are both powerful and evocative.
    </p>

    <a href="/art-black" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </a>
  </div>
</article>
{/* ----------5----------------- */}
<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs w-64 text-sm">
  <img alt="" src="/image-5.png" className="h-45 w-full object-cover"/>

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        Sustainable Travel Tips: Reducing Your Carbon Footprint
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Practical advice for eco-conscious travelers to explore the world
       responsibly
       and sustainably.
    </p>

    <a href="/sustainable-travel" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </a>
  </div>
</article>
{/* ------------6-------------------- */}
<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs w-64 text-sm">
  <img alt="" src="/image-6.png" className="h-45 w-full object-cover"/>

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        The Rise of Minimalist Interior Design
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Learn how to create serene and functional spaces
      with the principles of minimalist interior design.
    </p>

    <a href="/rise-minimalist" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </a>
  </div>
</article>
</div>
</div>
</div>
  )
}

export default Article
