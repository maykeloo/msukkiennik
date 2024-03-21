import { TextWithIconStoryblok } from '@/component-types-sb';
import Image from 'next/image';
import Link from 'next/link';

export function TextWithIcon({ blok }: TextWithIconStoryblok) {
  const Content = () => (
    <div className='flex flex-col items-center gap-2'>
      <Image
        src={blok.image.filename}
        height={50}
        width={50}
        alt={blok.image.alt}
      />
      <p className='font-semibold'>{blok.text}</p>
    </div>
  );

  return (
    <div className='flex flex-col items-center gap-2'>
      {blok.link ? (
        <Link href={blok.link.url} legacyBehavior={true}>
          <a>
            <Content />
          </a>
        </Link>
      ) : (
        <Content />
      )}
    </div>
  );
}
