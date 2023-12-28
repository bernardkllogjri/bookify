import HeaderDesktop from '../(components)/header/HeaderDesktop'
import HeaderMobile from '../(components)/header/HeaderMobile'

const Header = () => {
  return (
    <div className="bg-white fixed left-0 right-0 z-10">
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  )
}

export default Header