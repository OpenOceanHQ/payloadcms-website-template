/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    pages: Page;
    media: Media;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title?: string | null;
  layout?:
    | (HomeBlock | QuoteBlock | HeroWithBackgroundBlock | HeroWithSplitContentAndImageBlock)[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HomeBlock".
 */
export interface HomeBlock {
  displayText?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'home-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock".
 */
export interface QuoteBlock {
  quoteHeader: string;
  quoteText?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'quote-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroWithBackgroundBlock".
 */
export interface HeroWithBackgroundBlock {
  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
  alignment?: ('left' | 'right' | 'center') | null;
  heroContent?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  backgroundType?: ('backgroundImage' | 'backgroundColor') | null;
  backgroundImage?: string | Media | null;
  backgroundColor?: string | null;
  textColor: string;
  heroContent_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero-with-background-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  caption_html?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroWithSplitContentAndImageBlock".
 */
export interface HeroWithSplitContentAndImageBlock {
  alignment?: ('leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop') | null;
  heroContent: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  showImage?: boolean | null;
  image?: string | Media | null;
  heroContent_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero-with-split-content-and-image-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
