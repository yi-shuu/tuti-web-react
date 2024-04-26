import React, { } from "react";
import {
    useDisclosure,
    Box,
    Modal as ChakraModal,
    ModalOverlay as ChakraModalOverlay,
    ModalContent as ChakraModalContent,
    ModalCloseButton as ChakraModalCloseButton,
    ModalFooter as ChakraModalFooter,
    ModalHeader as ChakraModalHeader,
} from '@chakra-ui/react';
import { IconButton } from "./IconButton";

export function Modal({
    header,
    triggerButtonOpenIcon,
    triggerButtonCloseIcon,
    triggerButtonText,
    onAccept,
    acceptIcon,
    acceptText,
    closeIcon,
    closeText,
    isLoading,
    children,
    ...rest
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const handleAccept = () => {
        onAccept()
        onClose()
    }
    return (
        <>
            <IconButton
                size={'md'}
                onClick={isOpen ? onClose : onOpen}
                icon={isOpen ? triggerButtonCloseIcon : triggerButtonOpenIcon}
            >
                {triggerButtonText}
            </IconButton>
            <ChakraModal
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <ChakraModalOverlay />
                <ChakraModalContent>
                    <Box p={3}>
                        <ChakraModalCloseButton />
                    </Box>
                    {
                        header ?
                            <ChakraModalHeader>{header}</ChakraModalHeader> :
                            <></>
                    }
                    {children}
                    <ChakraModalFooter>
                        {closeText || closeIcon ?
                            <IconButton
                                icon={closeIcon ? closeIcon : null}
                                colorScheme='blue'
                                mr={3}
                                onClick={onClose}
                            >
                                {closeText ? closeText : null}
                            </IconButton>
                            :
                            <></>
                        }
                        {acceptText || acceptIcon ?
                            <IconButton
                                isLoading={isLoading}
                                icon={acceptIcon ? acceptIcon : null}
                                variant='ghost'
                                onClick={handleAccept}
                            >
                                {acceptText ? acceptText : null}
                            </IconButton> :
                            <></>
                        }
                    </ChakraModalFooter>
                </ChakraModalContent>
            </ChakraModal>

        </>
    )
}
