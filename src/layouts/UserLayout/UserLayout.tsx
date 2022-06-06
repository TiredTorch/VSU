import { Box } from "@mui/material"
import { FC } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { userLayoutStyles } from "./UserLayout.styles"
import { UserLayoutProps } from "./UserLayout.types"

export const UserLayout: FC<UserLayoutProps> = ({children}) => {
  return (
    <>
      <Header/>
      <Box sx={userLayoutStyles.root}>
        {children}
      </Box>
      <Footer/>
    </>
  )
}
