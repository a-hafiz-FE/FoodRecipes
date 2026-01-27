import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  preflight: false, // ✅ disables Chakra global reset
});
