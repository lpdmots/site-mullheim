import { groq } from "next-sanity";
import React from "react";
import { Post } from "../../types/blog";
import PrimaryPost from "../blog/PrimaryPost";
import SecondaryPost from "../blog/SecondaryPost";
import { client } from "../../../lib/sanity.client";
import Link from "next/link";
import { BiPencil } from "react-icons/bi";

const query = groq`
    *[_type=='post'] {
        ...,
        categories[]->
    } | order(publishedAt desc)[0...3]
`;

export default async function BlogHome() {
    const posts: Post[] = await client.fetch(query);
    return (
        <div className="section pd-top-0 wf-section">
            <div className="container-default w-container">
                <div className="inner-container _600px---tablet center">
                    <div className="inner-container _500px---mbl center">
                        <div className="mg-bottom-56px">
                            <div className="text-center---tablet">
                                <div data-w-id="a1ac5fbd-201a-a9b1-b1a1-3019f18603fe" className="w-layout-grid grid-2-columns title-and-buttons _1-col-tablet">
                                    <h2 className="display-2 mg-bottom-0">
                                        <span className="heading-span-secondary-1">Articles</span> &amp; News
                                    </h2>
                                    <div className="buttons-row center-tablet">
                                        <Link href="/blog" className="btn-secondary w-button">
                                            <span className="flex items-center">
                                                <BiPencil className="mr-2" />
                                                Browse all articles
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2-columns blog-featured-grid">
                            <div className="w-dyn-list">
                                <div role="list" className="height-100 w-dyn-items">
                                    <div role="listitem" className="height-100 w-dyn-item">
                                        {posts.length > 0 && <PrimaryPost post={posts[0]} />}
                                    </div>
                                </div>
                            </div>
                            <div className="collection-list-wrapper w-dyn-list">
                                <div role="list" className="grid-1-column gap-32px w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        {posts.length > 1 && <SecondaryPost post={posts[1]} />}
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        {posts.length > 2 && <SecondaryPost post={posts[2]} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}