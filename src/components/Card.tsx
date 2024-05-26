interface CardProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

export default function Card({ image, name, title, description }: CardProps) {
  return (
    <main className="flex items-center justify-center bg-blue-200">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="md:flex">
          <div className="flex items-center justify-center md:flex-shrink-0">
            <img
              className="h-48 w-full md:w-48 ml-4 rounded-full"
              src={image}
              alt="An image"
            />
          </div>
          <div className="p-8 hover:bg-gray-200">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
              {name}
            </div>
            <p className="mt-2 text-gray-500 text-center">
              {title}
            </p>
            <p className="mt-2 text-gray-500 text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}