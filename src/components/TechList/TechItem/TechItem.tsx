import { Box, Button, Typography } from "@mui/material"
import { FC } from "react"
import { Tech } from "../TechList.types"
import { techItemStyles } from "./TechItem.styles"

export const TechItem: FC<Tech> = ({
  description,
  name,
  photo,
  type
}) => {
  return (
    <Box sx={techItemStyles.root}>
      <Box 
        sx={techItemStyles.img}
        component={"img"}
        alt={`${name}-image`}
        src={photo}
      />
      <Box
        sx={techItemStyles.container}
      >
        <Typography>
          <b>Name:</b> {name}
        </Typography>
        <Typography>
        <b>Type:</b> {type}
        </Typography>
        <Typography>
        <b>Description:</b> {description}
        </Typography>
        <Button variant={"contained"}>
          View more
        </Button>
      </Box>
    </Box>
  )
}
