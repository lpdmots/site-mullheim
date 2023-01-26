"use client";
import Image from "next/image";
import React from "react";
import useSubscribe from "../../hooks/useSubscribe";
import Spinner from "./Spinner";

function NewsletterCard() {
    const { handleChange, handleSubmit, pending, error, success, email } = useSubscribe();

    return (
        <div data-w-id="32f4274f-5340-1bd4-838f-6737839a901b" className="newsletter-card">
            <div className="mg-bottom-24px">
                <Image src="/images/get-in-touch-image-paperfolio-webflow-template.svg" height={92} width={92} loading="eager" alt="get in touch image" />
            </div>
            <div className="text-center mg-bottom-24px">
                <div className="inner-container _400px---tablet center">
                    <div className="inner-container _350px---mbl center">
                        <h2 className="display-4 mg-bottom-8px">Subscribe to our newsletter</h2>
                        <p className="color-neutral-800 mg-bottom-0">... and be sure not to miss new posts.</p>
                    </div>
                </div>
            </div>
            <div className="nesletter-sidebar-form-block w-form">
                {success ? (
                    <div className="success-message w-form-done">
                        <div className="flex-horizontal success-message-vertical">
                            <div className="line-rounded-icon success-message-check"></div>
                            <div>
                                Thanks for joining <span>our newsletter.</span>
                            </div>
                        </div>
                    </div>
                ) : error ? (
                    <div className="error-message w-form-fail">
                        <div>Oops! Something went wrong.</div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label className="field-label-3">Email Address</label>
                        <input type="email" className="input small mg-bottom-16px w-input" value={email} onChange={handleChange} placeholder="Enter email address" id="email" />
                        <button type="submit" className="btn-primary full-width w-button  min-w-[140px]">
                            {pending ? <Spinner radius maxHeight="40px" /> : "Subscribe"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default NewsletterCard;
