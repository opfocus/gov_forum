export type BarItem2 = {
  id: number;
  name: string;
  slug: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type BarItem = {
  id: number;
  name: string;
  slug: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  children: BarItem2[] | null;
};

export type Category = {
  index: number;
  name: string;
  slug: string;
  description: string;
};

export type Tag = {
  index: number;
  name: string;
};

export type OpenEditorContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export type Post = {
  id: number;
  name: string;
  username: string;
  user_id: string;
  avatar_template: string;
  created_at: string;
  cooked: string;
  topic_id: number;
  topic_slug: string;
  post_number: number;
  post_type: number;
  updated_at: string | null;
  reply_count: number;
  reply_to_post_number: number;
  quote_count: number;
  incoming_link_count: number;
  reads: number;
  readers_count: number;
  link_counts: string[];
  deleted_at: string | null;
  user_deleted: boolean;
  edit_reason: string | null;
  likes: string[];
};

export type NewPost = {
  id: number;
  name: string;
  username: string;
  user_id: string;
  avatar_template: string;
  created_at: string;
  cooked: string;
  topic_id: number;
  topic_slug: string;
};

export type Topic = {
  id: number;
  title: string;
  created_at: string;
  stream: number[];
  slug: string;
  image_url: string | null;

  user_id: string;
  username: string;
  avatar_template: string;

  tags: string[];
  tags_descriptions: string | null;
  category_id: number;
  category_name: string;

  views: number;
  reply_count: number;
  last_posted_at: string | null;

  visible: boolean;
  closed: boolean;
  archived: boolean;
  has_summary: boolean;
  archetype: string | null;

  deleted_at: string | null;

  pinned_globally: boolean;
  pinned_at: string | null;
  pinned_until: string | null;

  draft: string | null;
  draft_key: string | null;
  draft_sequence: number | null;
  unpinned: string | null;
  pinned: boolean;

  current_post_number: number;
  highest_post_number: number;
  deleted_by: number | null;
  bookmarks: number[] | null;
  topic_timer: string | null;
  message_bus_last_id: number | null;
  participant_count: number;
  show_read_indicator: boolean;
  thumbnails: string | null;
  summarizable: boolean;
  details: {
    notification_level: number;
    participants: string[];
    links: string[] | null;
  };
};

export type NewTopic = {
  id: number;
  title: string;
  create_at: string;
  stream: number[];
  slug: string;
  user_id: string;
  user_name: string;
  tags: string[];
  category_id: number;
};

export type User = {
  id: string;
  name: string;
  nickname: string;
  picture: string;
  email: string;
};
