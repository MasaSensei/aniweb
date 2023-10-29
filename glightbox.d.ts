declare module "glightbox" {
  interface GlightboxOptions {
    selector: string;
    plugins?: string[]; // Define any other options you plan to use
  }

  interface Glightbox {
    open(): void;
  }

  // Modify the function signature to include the options
  const glightbox: (options: GlightboxOptions) => Glightbox;

  export default glightbox;
}
