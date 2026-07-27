function formatDate(input) {
  const d = new Date(input);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

module.exports = { formatDate };
