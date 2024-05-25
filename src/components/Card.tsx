import myImage from "../../public/ketan-profile-photo.jpg"

export function Card() {
  return (
    <main className="flex items-center justify-center bg-gray-200">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={myImage}
              alt="An image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
              Ketan Shukla
            </div>
            <p className="mt-2 text-gray-500 text-center">
              Next.Js and React Developer
            </p>
            <p className="mt-2 text-gray-500 text-center">
                I am a full stack developer with a focus on front end development. I have experience with React, Next.js, and Tailwind CSS. I am also familiar with Node.js, Express, and MongoDB. I am passionate about creating beautiful and functional web applications.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
