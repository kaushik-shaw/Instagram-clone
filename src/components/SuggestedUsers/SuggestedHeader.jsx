import { Avatar, Flex, Button, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/AuthStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const {handleLogout,isLoggingOut} = useLogout()
  const authUser  = useAuthStore((state) => state.user )

  if(!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={50}>
        <Link to={`${authUser.username}`}>
        <Avatar size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
        <Text fontSize={13} fontWeight={"bold"}>
          {authUser.username}
        </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        bg={"transparent"}
        _hover={{background:"transparent"}}
        fontSize={14}
        color={"blue.400"}
        fontWeight={"medium"}
        cursor={"pointer"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
