const Training = () => {
  return (
    <>
      <div className="mt-8 pb-4">
        <div className="m-4 p-4 inline font-bold text-white text-3xl h-12 w-12 bg-emerald-800 mt-2">
          Hello
        </div>
        <div className="m-4 p-4 inline font-bold text-white text-3xl h-12 w-12 bg-red-800">
          My
        </div>
        <div className="m-4 p-4 inline font-bold text-black text-3xl h-12 w-12 bg-yellow-200">
          Friend
        </div>
      </div>
      <div className="mt-8 border-4 border-black p-4 flex justify-evenly flex-col">
        <div className="border-4 border-black p-2 bg-amber-200">
          <div className="font-bold text-white text-3xl p-4 bg-emerald-800">
            Hello
          </div>
        </div>
        <div className="font-bold border-4 border-black text-white text-3xl p-4 bg-red-800">
          My
        </div>
        <div className="font-bold border-4 border-black text-black text-3xl p-4 bg-yellow-200">
          Friend
        </div>
        <div className="mt-4 bg-blue-600 text-white font-bold text-4xl">Deployed this on the first-branch!</div>
      </div>
    </>
  );
};
export default Training;
