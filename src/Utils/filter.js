export const filter = (datapool, search) => {
  // Takes two parameter
  /**
   * paramter datapool is array of data
   * search is an array of filtering key
   * if search includes more than 50% of content of datapool.techs, it is added to display list
   */

  const removeDuplicates = (arr1, arr2) => {
    return [
      ...new Set(
        arr1.concat(arr2).filter((e) => arr2.includes(e) && arr1.includes(e))
      ),
    ];
  };

  // eslint-disable-next-line array-callback-return
  const filteredData = datapool.filter((item) => {
    if (removeDuplicates(item.techs, search).length > 0 * item.techs.length) {
      return item;
    }
  });

  return filteredData;
};

export const excludeLiked = (dataPool, likeList) => {
  return dataPool.filter((job) => !likeList.includes(job.id));
};
