const config = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 3000,
  title: 'Buscador de productos!'
};

const hostname = `${config.host}:${config.port}`;
config['hostname'] = hostname;

export default config;
export { hostname };
