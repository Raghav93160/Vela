// import AdsBanner from '../../components/AdsBannerSlider/AdsBannerSlider.jsx';
import HomeBanner from '../../components/Banner/HomeBanner.jsx';
import HomeFeature from '../../components/Feature/HomeFeature.jsx';
import CatSlider from '../../components/HomeCatSlider/HomeCatSlider.jsx';
import HomeSlider from '../../components/HomeSlider/HomeSlider.jsx';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CatSlider/>
      {/* <AdsBanner/> */}
      {/* <HomePopularProducts/> */}
      <HomeBanner/>
      <HomeFeature/>

    </div>
  )
}

export default Home