import { Box,Flex,Container } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPosts/FeedPosts"
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"

const HomePage = () => {
  return (
    <Container maxW={"Container.lg"}>
      <Flex gap={20} pl={78}>
        <Box flex={3} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20} display={{base:"none",lg:"block"}} maxW={"300px"} >
          <SuggestedUsers />
        </Box>

      </Flex>

    </Container>
  )
}

export default HomePage
