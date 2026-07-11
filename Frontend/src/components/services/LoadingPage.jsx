import React, { useEffect, useState, useMemo } from "react";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start;
    const duration = 3000;

    const animate = (time) => {
      if (!start) start = time;

      const elapsed = time - start;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(value));

      if (value < 100) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const circleStyle = useMemo(
    () => ({
      background: `conic-gradient(
        #2563eb ${progress * 3.6}deg,
        #dbeafe ${progress * 3.6}deg
      )`,
    }),
    [progress]
  );

  return (
    <main
      className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        bg-linear-to-br
        from-blue-50
        via-white
        to-indigo-100
        px-4
      "
    >
      <section
        className="
          w-full
          max-w-lg
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* Progress Circle */}
        <div
          className="
            relative
            w-[35vw]
            h-[35vw]
            max-w-44
            max-h-44
            min-w-28
            min-h-28
            rounded-full
            flex
            items-center
            justify-center
            transition-all
          "
          style={circleStyle}
        >

          <div
            className="
              absolute
              inset-[8%]
              bg-white
              rounded-full
              flex
              flex-col
              items-center
              justify-center
              shadow-inner
            "
          >
            <span
              className="
                text-[clamp(1.8rem,5vw,2.5rem)]
                font-bold
                text-blue-600
              "
            >
              {progress}%
            </span>

            <span
              className="
                text-xs
                sm:text-sm
                text-gray-500
              "
            >
              Loading
            </span>
          </div>

        </div>


        {/* Heading */}
        <h1
          className="
            mt-8
            text-[clamp(1.2rem,4vw,1.9rem)]
            font-bold
            text-gray-800
            leading-tight
          "
        >
          Welcome to CodeNonstop Learning Platform
        </h1>


        {/* Description */}
        <p
          className="
            mt-3
            text-[clamp(.85rem,3vw,1rem)]
            text-gray-500
            max-w-md
            px-2
          "
        >
          Setting up courses, lessons and personalized learning experience
        </p>


        {/* Loading dots */}
        <div className="flex gap-2 mt-7">

          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="
                w-3
                h-3
                bg-blue-600
                rounded-full
                animate-bounce
              "
              style={{
                animationDelay: `${dot * 200}ms`,
              }}
            />
          ))}

        </div>

      </section>
    </main>
  );
};

export default LoadingPage;