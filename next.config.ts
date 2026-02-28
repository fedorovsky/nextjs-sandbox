// next.config.ts
import withLinaria, { LinariaConfig } from 'next-with-linaria';

const config: LinariaConfig = {
  output: 'standalone',
  linaria: {
    // Linaria options
  },
};

export default withLinaria(config);
