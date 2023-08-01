const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [t, q] of items.entries()) {
    if (q === 1) {
      items.set(t, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
