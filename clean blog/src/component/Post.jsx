import React from "react";
import img3 from "../assets/post-bg.jpg";
import img4 from "../assets/post-sample-image.jpg";

function Post() {
  return (
    <>
      <header className="masthead" style={{ backgroundImage: `url(${img3})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>
                  Man must explore, and this is exploration at its greatest
                </h1>
                <h2 className="subheading">
                  Problems look mighty small from 150 miles up
                </h2>
                <span className="meta">
                  Posted by <a href="#!">Start Bootstrap</a> on August 24, 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Never in all their history have men been able truly to conceive
                of the world as one...
              </p>
              <p>
                Science cuts two ways, of course; its products can be used for
                both good and evil...
              </p>
              <p>
                What was most significant about the lunar voyage was not that
                man set foot on the Moon...
              </p>
              <p>
                A Chinese tale tells of some men sent to harm a young girl who,
                upon seeing her beauty...
              </p>
              <p>
                For those who have seen the Earth from space, and for the
                hundreds and perhaps thousands...
              </p>

              <h2 className="section-heading">The Final Frontier</h2>
              <p>
                There can be no thought of finishing for ‘aiming for the
                stars.’...
              </p>
              <p>
                There can be no thought of finishing for ‘aiming for the
                stars.’...
              </p>

              <blockquote className="blockquote">
                The dreams of yesterday are the hopes of today and the reality
                of tomorrow...
              </blockquote>

              <p>
                Spaceflights cannot be stopped. This is not the work of any one
                man...
              </p>

              <h2 className="section-heading">Reaching for the Stars</h2>
              <p>
                As we got further and further away, it [the Earth] diminished in
                size...
              </p>

              <a href="#!">
                <img className="img-fluid" src={img4} alt="..." />
              </a>
              <span className="caption text-muted">
                To go places and do things that have never been done before...
              </span>

              <p>
                Space, the final frontier. These are the voyages of the Starship
                Enterprise...
              </p>
              <p>
                As I stand out here in the wonders of the unknown at Hadley...
              </p>

              <p>
                Placeholder text by
                <a href="http://spaceipsum.com/"> Space Ipsum</a> &middot;
                Images by
                <a href="https://www.flickr.com/photos/nasacommons/">
                  {" "}
                  NASA on The Commons
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Post;
