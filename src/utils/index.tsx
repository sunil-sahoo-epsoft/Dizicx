export const truncateText = (text: String, maxLength: any) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
