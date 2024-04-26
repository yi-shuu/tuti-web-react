import React, { } from "react";
import {
    useDisclosure,
    Box,
    Drawer as ChakraDrawer,
    DrawerOverlay as ChakraDrawerOverlay,
    DrawerContent as ChakraDrawerContent,
    DrawerCloseButton as ChakraDrawerCloseButton,
    DrawerHeader as ChakraDrawerHeader,
} from '@chakra-ui/react';
import { IconButton } from "./IconButton";
import { FaBars } from 'react-icons/fa';

export function Drawer({
    header,
    triggerButtonOpenIcon,
    triggerButtonCloseIcon,
    triggerButtonText,
    onApply,
    placement = "top",
    children,
    ...rest
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <IconButton
                size={'lg'}
                onClick={isOpen ? onClose : onOpen}
                icon={<FaBars />}
                {...rest}
            >
                {triggerButtonText}
            </IconButton>

            <ChakraDrawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
                onClick={onClose}
            >
                <ChakraDrawerOverlay />
                <ChakraDrawerContent>
                        <ChakraDrawerCloseButton />
                        {
                            header ?
                                <ChakraDrawerHeader>{header}</ChakraDrawerHeader> :
                                <></>
                        }
                    <Box onClick={onClose}>
                        {children}
                    </Box>
                </ChakraDrawerContent>
            </ChakraDrawer>
        </>
    )
}
