"use client"

import { Box, HStack, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { LuTriangleAlert } from "react-icons/lu"

export function MigrationBanner() {
  const { t } = useTranslation()
  return (
    <Box
      w="full"
      bg="status.warning.subtle"
      borderBottom="sm"
      borderColor="status.warning.primary"
      color="status.warning.strong"
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 3 }}>
      <HStack
        gap={3}
        align={{ base: "flex-start", md: "center" }}
        justify="center"
        maxW="breakpoint-xl"
        mx="auto">
        <Box as="span" fontSize="20px" lineHeight="1" flexShrink={0} mt={{ base: "2px", md: 0 }}>
          <LuTriangleAlert />
        </Box>
        <Text textStyle="sm">
          <Box as="span" fontWeight="bold">
            {t("Dashboard alignment in progress.")}
          </Box>{" "}
          {t(
            "We are migrating to add Navigators support, so this dashboard has not been fully aligned yet — some data may not match 100%. The dashboard will be aligned shortly.",
          )}
        </Text>
      </HStack>
    </Box>
  )
}
