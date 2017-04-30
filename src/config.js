const config = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 3000,
  hostname: hostName(),
  title: 'Buscador de productos!'
};

export default config;

function hostName() {
  return `${config.host}:${config.port}`;
}
