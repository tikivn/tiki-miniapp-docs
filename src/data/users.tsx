/* eslint-disable global-require */

import { sortBy } from "@site/src/utils/jsUtils";
const Users = require("./showcase");

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "favorite"
  | "opensource"
  | "game"
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
    label: "Open Source",
    description: "Các ứng dụng/trò chơi được công khai mã nguồn.",
    color: "#39ca30",
  },

  app: {
    label: "App",
    description: "Các ứng dụng trên Tini.",
    color: "#dfd545",
  },

  game: {
    label: "Game",
    description: "Các trò chơi phát triển trên Tini.",
    color: "#4329A3",
  },

  component: {
    label: "Component",
    description:
      "Các component hoặc ví dụ mẫu của Tini App giúp bạn xây dựng ứng dụng của mình dễ dàng hơn.",
    color: "#a44fb7",
  },

  lib: {
    label: "Library",
    description: "Các thư viện hỗ trợ trong quá trình phát triển Tini App.",
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
