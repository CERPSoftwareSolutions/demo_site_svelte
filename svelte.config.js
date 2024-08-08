import { sveltekit } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-static';

export default {
  kit: sveltekit({
    adapter: adapter({
      // Output directory for production builds
      output: 'build',
    }),
  }),
};