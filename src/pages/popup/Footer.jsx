import React from 'react'
import { Flex, Link } from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      sx={{
        fontSize: '12px',
        color: 'darkGrey',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex sx={{ justifyContent: 'space-around', width: '100%' }}>
        <Link
          href="https://chromewebstore.google.com/detail/LINKHERE"
          target="_blank"
          variant="footer"
        >
          Rate
        </Link>
        <Link
          href="https://theunblockedhub.com"
          target="_blank"
          variant="footer"
        >
          Website
        </Link>
        <Link
          href="https://github.com/TheUnblockedHubOfficial/TheUnblockedHub"
          target="_blank"
          variant="footer"
        >
          Github
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer