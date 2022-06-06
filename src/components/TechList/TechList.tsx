import { Box, CircularProgress } from "@mui/material"
import { TechItem } from "./TechItem/TechItem"
import { techListStyles } from "./TechList.styles"
import { Tech } from "./TechList.types"

export const TechList = () => {

  const techs: Tech[] = [
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Leopard_2_A5_der_Bundeswehr.jpg",
      type: "Tank",
      name: "BP-21",
      description: "lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet"
    },
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Merkava-Mk4m-transparent.png/1200px-Merkava-Mk4m-transparent.png",
      type: "Tank",
      name: "BP-21",
      description: "lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet"
    },
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Merkava-Mk4m-transparent.png/1200px-Merkava-Mk4m-transparent.png",
      type: "Tank",
      name: "BP-21",
      description: "lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet"
    },
    {
      photo: "https://ru-wotp.wgcdn.co/static/5.102.2_9e8c88/wotp_static/img/core/frontend/scss/common/components/widgets/carousel/img/tankopedia.jpg",
      type: "Tank",
      name: "BP-21",
      description: "lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet"
    },
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Merkava-Mk4m-transparent.png/1200px-Merkava-Mk4m-transparent.png",
      type: "Tank",
      name: "BP-21",
      description: "lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet"
    },
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Merkava-Mk4m-transparent.png/1200px-Merkava-Mk4m-transparent.png",
      type: "Tank",
      name: "BP-21",
      description: "lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet lorem ipsum dolor sit omet"
    },
  ]

  return (
    <>
      <Box sx={techListStyles.root}>
        {techs.map((item, i) => {
          return <TechItem photo={item.photo} type={item.type} name={item.name} description={item.description} key={i}/>
        })}
      </Box>
      <CircularProgress sx={techListStyles.progress}/>
    </>
  )
}
