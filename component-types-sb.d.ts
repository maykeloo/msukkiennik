import {StoryblokStory} from 'storyblok-generate-ts'

export interface ButtonStoryblok {
  button?: any;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (ButtonStoryblok | FeatureStoryblok | GridStoryblok | PageStoryblok | TeaserStoryblok)[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (ButtonStoryblok | FeatureStoryblok | GridStoryblok | PageStoryblok | TeaserStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
