import React from 'react'
import {
  Button,
  Dialog,
  Input,
  Portal,
  Stack,
  createOverlay,
  Spinner,
} from "@chakra-ui/react"
import { useState } from "react"
import { flushSync } from 'react-dom';

export const contactDialog = createOverlay((props) => {
  const { title, productData, onUpdate, onOpenChange, ...rest } = props;

  const [name, setName] = useState(productData?.title || "");
  const [desc, setDesc] = useState(productData?.description || "");
  const [isclicked, setClick] = useState(false);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClick(true);

    try {
      if (onUpdate && productData?.id) {
        await Promise.all([
          onUpdate({
            id: productData.id,
            data: {
              title: name,
              description: desc,
            },
          }),
          wait(800), // ✅ delay so spinner is visible
        ]);
      }

      onOpenChange?.({ open: false });
      setName("");
      setDesc("");
    } catch (err) {
      console.log(err);
    } finally {
      setClick(false);
    }
  };


  const handleAbort = () => {
    onOpenChange?.({ open: false });
    setName("");
    setDesc("");
  };

  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}

            <Dialog.Body>
              <form onSubmit={handleSubmit}>
                <Stack gap="4">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Product name"
                  />
                  <Input
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter Product Description"
                  />
                  {isclicked ?
                    <Button>
                      Submiting
                      <Spinner />
                    </Button> :
                    <Button
                      type="submit"
                    >
                      Submit
                    </Button>
                  }
                  <Button onClick={handleAbort} type="button">Cancel</Button>
                </Stack>
              </form>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root >
  );
})

export default contactDialog