import { Menu, Button, Portal } from "@chakra-ui/react";

const DropDown = ({ value, onChange, authors }) => {
  const options = ["All", ...authors];
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {value}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {options.map((author) => (
              <Menu.Item
                key={author}
                value={author}
                onSelect={() => {
                  onChange?.(author);
                }}
              >
                {author}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default DropDown;
