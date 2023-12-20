const MissingShoes = () => {
  return (
    <div>
      <main className="grid place-items-center min-h-[1300px] md:min-h-screen bg-gray-50 dark:bg-[#121212]">
        <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015]  rounded-xl shadow-xl hover:shadow-2xl text-red-500 text-4xl">
          Error: Snickers not found. An unexpected issue has occurred !
        </section>
      </main>
    </div>
  );
};

export default MissingShoes;
