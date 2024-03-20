import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import { GridStoryblok } from '@/component-types-sb';

export const Grid = ({ blok }: { blok: GridStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
