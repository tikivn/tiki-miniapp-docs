/* eslint-disable global-require */

import { sortBy } from "@site/src/utils/jsUtils";
const Users = require('./showcase');

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "favorite"
  | "opensource"
  | "app"
  | "component"
  | "lib";

export type User = {
  title: string;
  description: string;
  preview: any;
  app: string;
  source: string | null;
  npm?: string;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  // favorite: {
  //   label: "Favorite",
  //   description:
  //     "Our favorite TiniApps that you must absolutely check-out!",
  //   color: "#e9669e",
  // },

  // For open-source sites, a link to the source code is required
  opensource: {
    label: "Open-Source",
    description: "Open-Source Docusaurus sites can be useful for inspiration!",
    color: "#39ca30",
  },

  app: {
    label: "App",
    description: "Tiniapp associated to a commercial app!",
    color: "#dfd545",
  },

  component: {
    label: "Component",
    description: "TiniApp components / examples which help you can build better tiniapp",
    color: "#a44fb7",
  },

  lib: {
    label: "Library",
    description: "TiniApp library which help you can build better tiniapp",
    color: "#a44fb7",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
