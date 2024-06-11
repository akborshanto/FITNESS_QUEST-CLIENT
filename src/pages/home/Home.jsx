import React from 'react'
import UseButton from '../../component/button/Button'

import Banner from './banner/Banner'
import Feture from './feature/Feture'
import About from './about/About'
import FetureClass from './fetureClass/FetureClass'
import Reviews from './Reviews/Reviews';
//import ForumPost from './forumPost/ForumPost'
import NewsLetter from './newsLetter/NewsLetter'
import TeamSection from './teamSection/TeamSection';
import ComunitySection from './ComuntiySection/ComunitySection'
import Card from '../../component/cardHome/Card'

const Home = () => {
  return (
    <div  className='   ml-3 mr-3'>


{/* SLIDER SECTION */}
<Banner></Banner>
{/* FEATURE SECTION */}
<Feture></Feture>
{    /* ABOUT SECTION */}
<About></About>
{/* FEATURE CLAASSS */}
<FetureClass></FetureClass>
{/* TESTIMONAL */}
{<Reviews></Reviews>}
{/* FORUMS COUMUNTIRY */}
{/* <ForumPost></ForumPost> */}
<ComunitySection></ComunitySection>
{/* NEWSLETTER */}
<NewsLetter></NewsLetter>
{/* Team Section */}
<TeamSection></TeamSection>
    </div>
  )
}

export default Home
