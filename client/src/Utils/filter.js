export const filterTalent = async (datapool, search) => {
  // Takes two parameter
  /**
   * paramter datapool is array of data
   * search is an array of filtering key
   * if search includes more than 50% of content of datapool.techs, it is added to display list
   */

  if ((await datapool) && (await search)) {
    const found = [];
    let num = 0;
    datapool.map((item) => {
      const data = item.techs;
      for (let i = 0; i < data.length; i++) {
        if (search.includes(data[i])) {
          num++;
        }
      }
      if (num > search.length * 0.2) {
        num = 0;
        found.push(item);
      }
    });

    return found;
  }
  return null;
};
