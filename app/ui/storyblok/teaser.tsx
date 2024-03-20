import { storyblokEditable } from '@storyblok/react/rsc';
import { TeaserStoryblok } from '@/component-types-sb';

export const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

