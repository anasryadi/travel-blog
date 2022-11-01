import { createClient } from "next-sanity";
import { config } from "./config";

export const SanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: "skAHjvP5fcbdhF6JlR9GgtEqt3pzTZblef6HX8ZcgtUFXTbMBYG8yAdTzlJFhyXAr1gnzfUmhaeWo7EWqRFdZKVhni0i6jl3sYhmAUHeFnkR2O78n6F9bmb972vsINLpEJfukdciHa2x4yhUk4bEKPZR59TgLKZDt2V2ZdfiuJkegXUDdAHU",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : SanityClient;
