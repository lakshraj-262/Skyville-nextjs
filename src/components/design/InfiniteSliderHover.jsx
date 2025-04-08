import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
function InfiniteSliderHover({reverse, images}) {


  return (
    <InfiniteSlider  gap={24} reverse={reverse} className="p-5">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className="aspect-square rounded-xl "
          width={400}
          height={400}
        />
      ))}
    </InfiniteSlider>
  );
}

export default InfiniteSliderHover;