import { ButtonStoryblok, HeroStoryblok } from '@/component-types-sb';
import { ButtonBase } from '@/app/ui/components/button';
import Markdown from 'react-markdown';
import hero from './hero.module.css';

export function Hero({ blok }: { blok: HeroStoryblok }) {
  return (
    <>
      <div className=' mt-20 flex max-w-xl flex-col gap-5'>
        <Markdown className={hero.hero_heading}>{blok.markdown}</Markdown>
        <div className='mt-3 flex items-center gap-4'>
          {blok.button?.map((button) => (
            <ButtonBase blok={button as ButtonStoryblok} key={button._uid} />
          ))}
        </div>
      </div>
    </>
  );
}
