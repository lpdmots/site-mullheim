type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

export interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    mainVideo: VideoBlog;
    slug: Slug;
    title: string;
    description: string;
    level: "a1" | "a2" | "b1" | "b2";
    translation: boolean;
    publishedAt: string;
}

export interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

export interface Image {
    _type: "image";
    asset: Reference;
}

export interface Reference {
    _ref: string;
    _type: "reference" | string;
}

export interface Slug {
    _type: "slug";
    current: string;
}

export interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

export interface Category extends Base {
    description: string;
    title: string;
    slug: Slug;
}

export interface MainImage {
    _type: "image";
    asset: Reference;
}

export interface Title {
    _type: "string";
    current: string;
}

export interface VideoBlog {
    _type: "videoBlog";
    title: string;
    url: string;
}

export interface Vocabulary extends Base {
    theme: string;
    lines: Line[];
}

export interface Line {
    french: string;
    english: string;
    sound: string;
    note: string;
}
