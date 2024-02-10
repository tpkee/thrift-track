/* eslint-disable import/prefer-default-export */
import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
    // LOGTAIL_SOURCE_TOKEN: z.string().optional(),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    // LOGTAIL_SOURCE_TOKEN: process.env.LOGTAIL_SOURCE_TOKEN,
  },
});
