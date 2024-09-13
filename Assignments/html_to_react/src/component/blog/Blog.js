import React from 'react'
import Card from '../card/Card'
import { blogcarddata } from '../../constant/Blogdata'
import Topic from '../asidetopic/Topicbtn';
import { serverOutline, accessibilityOutline, rocketOutline } from 'ionicons/icons';
import Contactcards from '../asidetopic/Contactcard';
import Newslettercard from '../asidetopic/Newslettercard';
import Tags from '../asidetopic/Tags';

function Blog() {
    return (
        <div>
            <div className="main">

                <div className="container">


                    {/* - BLOG SECTION */}


                    <div className="blog">

                        <h2 className="h2">Latest Blog Post</h2>

                        <div className="blog-card-group">

                            {blogcarddata?.map((item, index) => {
                                return <Card key={index} data={item} />
                            })}

                        </div>

                        <button className="btn load-more">Load More</button>

                    </div>


                    {/* ASIDE */}

                    <div className="aside">
                        <div className="topics">

                            <h2 className="h2">Topics</h2>

                            <Topic title='Database' icon={serverOutline}/>
                            <Topic title='Accessblity' icon={accessibilityOutline}/>
                            <Topic title='Web Performance' icon={rocketOutline}/>

                        </div>
                            {/* ----------------Tags------------------ */}

                            <Tags/>



                        {/* ----------lets talk card---------- */}

                        <Contactcards />
                        <Newslettercard/>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Blog
