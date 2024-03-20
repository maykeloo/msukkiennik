import { storyblokEditable } from '@storyblok/react/rsc';
import { FeatureStoryblok } from '@/component-types-sb';

export const Feature = ({ blok }: { blok: FeatureStoryblok }) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);
