import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millifty from 'millify'


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, titles, baths, area, agency, isVerified, externelId}}) => (
    <Link href={`/property/$(externalID)`} passHref>
        {title}
    </Link>
)

export default property