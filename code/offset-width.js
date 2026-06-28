function getOffsetWidthWithoutTriggeringReflow(element) {
  let width;
  
  const rect = element.getBoundingClientRect();
  width = rect.width;
  
  return width;
}