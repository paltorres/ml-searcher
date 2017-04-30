const config = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 3000,
  title: 'Buscador de productos!'
};

config['hostname'] = `${config.host}:${config.port}`;

export default config;
