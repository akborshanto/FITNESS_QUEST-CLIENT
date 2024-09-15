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
import useRole from '../../hook/useRole'
import ReviewCard from './Reviews/ReviewCard'

const Home = () => {
  const [role]= useRole()
  //consolelog(role)
  return (
    <div  className=' overflow-hidden'>


{/* SLIDER SECTION */}
<Banner></Banner>
{/* FEATURE SECTION */}
<Feture></Feture>
{    /* ABOUT SECTION */}
<FetureClass></FetureClass>
<About></About>
{/* FEATURE CLAASSS */}

{/* TESTIMONAL */}
<ReviewCard></ReviewCard>
{/* FORUMS COUMUNTIRY */}
{/* <ForumPost></ForumPost> */}
<ComunitySection></ComunitySection>
{/* NEWSLETTER */}

{/* Team Section */}
<TeamSection></TeamSection>
<NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
