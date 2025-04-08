'use client';

import { useRouter } from 'next/navigation';
import { Magnetic } from '../ui/magnetic';

export default function SubmitBtn({ name, url }) {
  const router = useRouter();

  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic intensity={0.2} springOptions={springOptions} actionArea='global' range={150}>
      <button
        onClick={() => router.push(url)}
        type='button'
        className='inline-flex items-center rounded-xl bg-white/10 px-6 lg:px-8 lg:py-4 py-3 body-2 font-medium text-n-1 transition-all duration-200 hover:bg-n-5'
      >
        <Magnetic intensity={0.1} springOptions={springOptions} actionArea='global' range={150}>
          <span className='uppercase text-lg lg:text-xl'>{name}</span>
        </Magnetic>
      </button>
    </Magnetic>
  );
}
