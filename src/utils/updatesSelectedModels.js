export const updateSelectedModels = (selectedKnifesIndxs, balisongs) => {
  return selectedKnifesIndxs.flatMap((item) => balisongs.filter((el) => item === el.id))
} 