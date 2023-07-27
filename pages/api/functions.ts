export const prev = (container: any): void => {
    const sliderPrev = container?.current?.closest('.slider-card-list')?.querySelector('.slick-prev') as HTMLElement | null;
    if (sliderPrev) sliderPrev.click();
};
  
export const next = (container: any): void => {
    const sliderNext = container?.current?.closest('.slider-card-list')?.querySelector('.slick-next') as HTMLElement | null;
    if (sliderNext) sliderNext.click();
};