import { ButtonStoryblok } from '@/component-types-sb';
import { Button } from '@/components/ui/button';

export function ButtonBase({ blok }: { blok: ButtonStoryblok }) {
  return (
    <Button className='element-background-black' variant={blok.variant}>
      {blok.text}
    </Button>
  );
}
