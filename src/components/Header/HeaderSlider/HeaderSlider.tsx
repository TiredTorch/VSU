import { Box } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { Link } from "react-router-dom"
import { headerSliderStyles } from "./HeaderSlider.styles"

export const HeaderSlider = () => {

  const linkList = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Tech",
      link: "/tech"
    },
    {
      name: "Favorite Tech",
      link: "/personal"
    },
  ]

  return (
    <Box sx={headerSliderStyles.root}>
      {linkList.map((item, i) => <Link to={item.link} key={i} style={headerSliderStyles.link}>{item.name}</Link>)}
    </Box>
  )
}
