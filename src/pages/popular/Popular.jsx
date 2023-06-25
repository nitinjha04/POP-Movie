import React, { useState } from 'react'

import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../components/switchTabs/SwitchTabs'

import useFetch from '../../hooks/useFetch'
import Carousel from '../../components/carousel/Carousel'

const Popular = () => {

    const [endpoint, setEndpoint] = useState("movie")

    const {data, loading} = useFetch(`/${endpoint}/popular`)

    const onTabChange = (tab)=>{
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Popular Now</span>
        <SwitchTabs data= {["Movies" , "TV Shows"]} onTabChange= {onTabChange}></SwitchTabs>
      </ContentWrapper>
      <Carousel data= {data?.results} loading= {loading} endpoint={endpoint}></Carousel>
    </div>
  )
}

export default Popular
