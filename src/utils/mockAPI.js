const createSeededRandomGenerator = seed => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAvailableTimeSlots = date => {
  const result = [];
  const randomGenerator = createSeededRandomGenerator(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (randomGenerator() < 0.5) result.push(`${i}:00`);
    if (randomGenerator() < 0.5) result.push(`${i}:30`);
  }

  return result;
};

const submitFormData = formData => true;

export {
  fetchAvailableTimeSlots,
  submitFormData
};
