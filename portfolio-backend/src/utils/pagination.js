const pagination = async (model, page, limit, search, searchField) => {
  const skip = (page - 1) * limit;

  const filter = search
    ? {
        [searchField]: {
          $regex: search,
          $options: "i",
        },
      }
    : {};

  const data = await model
    .find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalRecords = await model.countDocuments(filter);

  return {
    data,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(totalRecords / limit),
      totalRecords,
      limit,
    },
  };
};

module.exports = pagination;