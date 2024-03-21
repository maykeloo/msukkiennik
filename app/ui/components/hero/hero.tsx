import { ButtonStoryblok, HeroStoryblok } from '@/component-types-sb';
import { ButtonBase } from '@/app/ui/components/button';
import { useGetNestedComponent } from '@/app/hooks/useGetNestedComponent';
import Markdown from 'react-markdown';
import hero from './hero.module.css';

export function Hero({ blok }: { blok: HeroStoryblok }) {
  const buttonOne = useGetNestedComponent<ButtonStoryblok>(blok.button);
  const buttonTwo = useGetNestedComponent<ButtonStoryblok>(blok.button_2);

  return (
    <>
      <div className=' mt-20 flex max-w-xl flex-col gap-5'>
        <Markdown className={hero.hero_heading}>{blok.markdown}</Markdown>
        <div className='mt-3 flex items-center gap-4'>
          {buttonOne && <ButtonBase blok={buttonOne} />}
          {buttonTwo && <ButtonBase blok={buttonTwo} />}
        </div>
      </div>
    </>
  );
}
