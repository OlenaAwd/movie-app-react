// фильтрация и перерендер стр епо выбранным категориям
const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((acc, currentVal) => acc + "," + currentVal);
};

export default useGenres;
