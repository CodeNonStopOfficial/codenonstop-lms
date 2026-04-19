import React from 'react'
import WhatYouWillLearn from './WhatYouWillLearn'

const learningsData = [
  "Build full-stack web applications",
  "Master React and modern JavaScript",
  "Understand backend with Node.js",
  "Work with MongoDB database",
  "Deploy real-world projects",
  "Learn API integration",
];

const CourseDetailsHero = () => {
  return (
      <div className="flex-1">
          <div className="border">
            <div className="px-1">
              <WhatYouWillLearn learnings={learningsData} />
            </div>
          </div>
          <div className="border rounded px-2 py-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Descriptions
            </h1>
            <p className="text-gray-600 mb-4">
              Next.js is one of the most powerful React frameworks available and
              with the release of Next.js 16, it just got even better. New
              features like Cache Components make apps faster and more efficient
              than ever. In this video, we’ll take a complete deep dive into
              Next.js, and you’ll learn everything from A to Z. We’ll build a
              full production-ready application from scratch while exploring
              routing, server components, authentication, data fetching, Lorem
            </p>
          </div>
        </div>
  )
}

export default CourseDetailsHero
