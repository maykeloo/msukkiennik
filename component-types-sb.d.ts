import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  text?: string;
  variant: "" | "default" | "outline";
  before: "" | "black" | "white";
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
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
  columns?: (
    | ButtonStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | HeroStoryblok
    | PageStoryblok
    | TeaserStoryblok
    | TextWithIconStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  markdown?: string;
  button?: (
    | ButtonStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | HeroStoryblok
    | PageStoryblok
    | TeaserStoryblok
    | TextWithIconStoryblok
  )[];
  button_2?: (
    | ButtonStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | HeroStoryblok
    | PageStoryblok
    | TeaserStoryblok
    | TextWithIconStoryblok
  )[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | ButtonStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | HeroStoryblok
    | PageStoryblok
    | TeaserStoryblok
    | TextWithIconStoryblok
  )[];
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

export interface TextWithIconStoryblok {
  text?: string;
  image: AssetStoryblok;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "text_with_icon";
  [k: string]: any;
}
