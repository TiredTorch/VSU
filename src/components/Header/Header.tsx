import { AppBar, Icon } from "@mui/material"
import { headerStyles } from "./Header.styles"
import { HeaderSlider } from "./HeaderSlider/HeaderSlider"

export const Header = () => {
  return (
    <AppBar sx={headerStyles.root}>
      <Icon/>
      <HeaderSlider />
    </AppBar>
  )
}
